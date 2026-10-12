import React, { useState } from 'react';
import { Product, ProductCategory } from '../../types';
import { Package, Plus, Edit2, Trash2, Eye, Check, X, Search, ShieldCheck } from 'lucide-react';
import { ProductModal } from '../frontend/ProductModal';

interface AdminProductsProps {
  products: Product[];
  onCreateProduct: (data: Partial<Product>) => Promise<Product>;
  onUpdateProduct: (id: string, updates: Partial<Product>) => Promise<Product | null>;
  onDeleteProduct: (id: string) => Promise<boolean>;
}

export const AdminProducts: React.FC<AdminProductsProps> = ({
  products,
  onCreateProduct,
  onUpdateProduct,
  onDeleteProduct,
}) => {
  const [isCreating, setIsCreating] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null);
  const [search, setSearch] = useState('');

  const [formData, setFormData] = useState<{
    name: string;
    model: string;
    category: ProductCategory;
    categoryName: string;
    manufacturer: string;
    origin: string;
    image: string;
    description: string;
    targetAudience: string;
    isFeatured: boolean;
    featuresText: string;
    specsText: string;
  }>({
    name: '',
    model: '',
    category: 'rehab',
    categoryName: 'Thiết Bị Phục Hồi Chức Năng',
    manufacturer: 'TECNIC Medtech',
    origin: 'Việt Nam',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    description: '',
    targetAudience: 'Người sau tai biến và bệnh viện',
    isFeatured: false,
    featuresText: 'Khung nhôm siêu nhẹ chịu tải 150kg\nHệ thống phanh an toàn hai cấp\nGập gọn tiện lợi mang theo',
    specsText: 'Chất liệu: Hợp kim nhôm\nTải trọng: 150 kg\nBảo hành: 24 tháng',
  });

  const categoryMap: Record<ProductCategory, string> = {
    rehab: 'Thiết Bị Phục Hồi Chức Năng',
    preventive: 'Y Tế Dự Phòng & Gia Đình',
    hospital: 'Thiết Bị Bệnh Viện & ICU',
  };

  const handleOpenCreate = () => {
    setEditingProduct(null);
    setFormData({
      name: '',
      model: '',
      category: 'rehab',
      categoryName: 'Thiết Bị Phục Hồi Chức Năng',
      manufacturer: 'TECNIC Medtech',
      origin: 'Việt Nam (Chuẩn ISO 13485)',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      description: '',
      targetAudience: 'Người bệnh cần phục hồi chức năng vận động',
      isFeatured: false,
      featuresText: 'Khung hợp kim nhôm định hình cao cấp\nKhóa hãm an toàn tuyệt đối khi đứng yên\nĐệm ngồi êm ái thoáng khí',
      specsText: 'Chất liệu khung: Hợp kim nhôm Aluminum 6061\nTải trọng tối đa: 150 kg\nTrọng lượng máy: 7.5 kg\nBảo hành: 24 tháng đổi mới',
    });
    setIsCreating(true);
  };

  const handleOpenEdit = (p: Product) => {
    setEditingProduct(p);
    setFormData({
      name: p.name,
      model: p.model,
      category: p.category,
      categoryName: p.categoryName,
      manufacturer: p.manufacturer,
      origin: p.origin,
      image: p.image,
      description: p.description,
      targetAudience: p.targetAudience,
      isFeatured: p.isFeatured,
      featuresText: p.features.join('\n'),
      specsText: p.specs.map((s) => `${s.key}: ${s.value}`).join('\n'),
    });
    setIsCreating(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.model) {
      alert('Vui lòng điền tên thiết bị và mã model.');
      return;
    }

    const features = formData.featuresText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    const specs = formData.specsText
      .split('\n')
      .map((line) => {
        const parts = line.split(':');
        if (parts.length >= 2) {
          return { key: parts[0].trim(), value: parts.slice(1).join(':').trim() };
        }
        return { key: 'Đặc tính', value: line.trim() };
      })
      .filter((s) => s.key && s.value);

    const payload: Partial<Product> = {
      name: formData.name,
      model: formData.model,
      category: formData.category,
      categoryName: categoryMap[formData.category],
      manufacturer: formData.manufacturer,
      origin: formData.origin,
      image: formData.image,
      description: formData.description,
      targetAudience: formData.targetAudience,
      isFeatured: formData.isFeatured,
      features,
      specs,
      certifications: ['ISO 13485:2016', 'CE Medical', 'Bộ Y Tế cấp phép'],
    };

    if (editingProduct) {
      await onUpdateProduct(editingProduct.id, payload);
    } else {
      await onCreateProduct(payload);
    }

    setIsCreating(false);
    setEditingProduct(null);
  };

  const handleDelete = async (id: string, name: string) => {
    if (window.confirm(`Bạn có chắc muốn xóa thiết bị: "${name}"?`)) {
      await onDeleteProduct(id);
    }
  };

  const filtered = products.filter(
    (p) =>
      search === '' ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.model.toLowerCase().includes(search.toLowerCase()) ||
      p.manufacturer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Package className="w-5 h-5 text-emerald-600" />
            Quản Lý Danh Mục Thiết Bị & Sản Phẩm Y Tế
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Cập nhật thông số kỹ thuật, hình ảnh, nguồn gốc xuất xứ và chứng chỉ kiểm định ISO 13485 cho thiết bị.
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm shrink-0 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Thêm Thiết Bị Mới</span>
        </button>
      </div>

      {/* Product Form */}
      {isCreating && (
        <div className="bg-white rounded-2xl border-2 border-emerald-600 p-6 shadow-xl animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
            <h3 className="text-lg font-bold text-emerald-950">
              {editingProduct ? 'Chỉnh Sửa Thiết Bị Y Tế' : 'Thêm Thiết Bị Y Tế Mới'}
            </h3>
            <button
              onClick={() => setIsCreating(false)}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-4 text-xs sm:text-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">
                  Tên Sản Phẩm / Thiết Bị <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="VD: Khung Tập Đi 4 Bánh Phanh An Toàn Tecnic Walker Pro"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Mã Model <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="VD: TW-400PRO"
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Phân Nhóm Thiết Bị</label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      category: e.target.value as ProductCategory,
                      categoryName: categoryMap[e.target.value as ProductCategory],
                    })
                  }
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="rehab">Phục Hồi Chức Năng (ytetecnic.vn)</option>
                  <option value="preventive">Y Tế Dự Phòng Gia Đình (tecnic.vn)</option>
                  <option value="hospital">Công Nghệ & Thiết Bị Bệnh Viện</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Hãng Sản Xuất</label>
                <input
                  type="text"
                  value={formData.manufacturer}
                  onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Xuất Xứ</label>
                <input
                  type="text"
                  value={formData.origin}
                  onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Đường Dẫn Hình Ảnh</label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Đối Tượng Chỉ Định</label>
                <input
                  type="text"
                  value={formData.targetAudience}
                  onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Mô Tả Tổng Quan</label>
              <textarea
                rows={2}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Tính Năng Nổi Bật (Mỗi dòng một tính năng)
                </label>
                <textarea
                  rows={4}
                  value={formData.featuresText}
                  onChange={(e) => setFormData({ ...formData, featuresText: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 font-mono text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Thông Số Kỹ Thuật (Định dạng: Tên: Giá trị)
                </label>
                <textarea
                  rows={4}
                  value={formData.specsText}
                  onChange={(e) => setFormData({ ...formData, specsText: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 font-mono text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="isFeatured"
                checked={formData.isFeatured}
                onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
              />
              <label htmlFor="isFeatured" className="font-semibold text-slate-800 cursor-pointer">
                Đánh dấu là Sản phẩm nổi bật (Featured)
              </label>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsCreating(false)}
                className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold transition-all shadow"
              >
                {editingProduct ? 'Cập Nhật Thiết Bị' : 'Lưu Thiết Bị'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Filter and Search */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between gap-4">
        <div className="text-xs font-semibold text-slate-600">
          Tổng cộng: <strong className="text-slate-900">{products.length}</strong> thiết bị y tế trong hệ thống
        </div>
        <div className="relative w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm theo tên, model..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 bg-slate-50 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-700 uppercase font-bold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Thiết Bị</th>
                <th className="py-3 px-4">Model</th>
                <th className="py-3 px-4">Phân Loại</th>
                <th className="py-3 px-4">Hãng & Xuất Xứ</th>
                <th className="py-3 px-4 text-right">Thao Tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-12 h-12 rounded-lg object-cover bg-slate-100 shrink-0"
                      />
                      <div>
                        <div
                          onClick={() => setPreviewProduct(p)}
                          className="font-bold text-slate-900 hover:text-emerald-700 cursor-pointer line-clamp-1"
                        >
                          {p.name}
                        </div>
                        <div className="text-[11px] text-slate-400 line-clamp-1">{p.targetAudience}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-mono font-semibold text-slate-700">{p.model}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                      {p.categoryName}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-600">
                    <div>{p.manufacturer}</div>
                    <div className="text-[10px] text-slate-400">{p.origin}</div>
                  </td>
                  <td className="py-3 px-4 text-right space-x-1 whitespace-nowrap">
                    <button
                      onClick={() => setPreviewProduct(p)}
                      className="p-1.5 text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 rounded"
                      title="Xem chi tiết"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleOpenEdit(p)}
                      className="p-1.5 text-slate-500 hover:text-amber-700 hover:bg-amber-50 rounded"
                      title="Sửa"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(p.id, p.name)}
                      className="p-1.5 text-slate-500 hover:text-red-700 hover:bg-red-50 rounded"
                      title="Xóa"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ProductModal
        product={previewProduct}
        onClose={() => setPreviewProduct(null)}
        onRequestQuote={() => {}}
      />
    </div>
  );
};
