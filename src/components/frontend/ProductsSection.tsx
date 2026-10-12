import React, { useState } from 'react';
import { Product, ProductCategory } from '../../types';
import { Search, Filter, ShieldCheck, ArrowRight, ExternalLink, Sparkles, Eye, PhoneCall } from 'lucide-react';
import { ProductModal } from './ProductModal';

interface ProductsSectionProps {
  products: Product[];
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  selectedCategory,
  onCategoryChange,
  onRequestQuote,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', label: 'Tất Cả Sản Phẩm' },
    { id: 'rehab', label: 'Phục Hồi Chức Năng (ytetecnic.vn)' },
    { id: 'preventive', label: 'Y Tế Dự Phòng (tecnic.vn)' },
    { id: 'hospital', label: 'Thiết Bị Bệnh Viện & ICU' },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.manufacturer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-white border-b border-slate-200 font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Hệ Thống Thiết Bị & Giải Pháp
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Danh Mục Thiết Bị Y Tế Tiêu Biểu
          </h2>
          <p className="mt-3 text-base text-slate-600 font-medium">
            100% sản phẩm chính ngạch, có đầy đủ hồ sơ kỹ thuật, kiểm chuẩn y khoa và chứng chỉ ISO 13485:2016.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => onCategoryChange(c.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm tên thiết bị, mã model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    {prod.isFeatured && (
                      <span className="absolute top-2.5 left-2.5 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                        Nổi Bật
                      </span>
                    )}
                    <span className="absolute bottom-2.5 right-2.5 bg-slate-900/80 backdrop-blur-sm text-slate-200 text-[10px] font-mono px-2 py-0.5 rounded">
                      {prod.model}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span className="text-blue-700 font-semibold">{prod.manufacturer}</span>
                      <span>{prod.origin}</span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors">
                      {prod.name}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {prod.description}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {prod.certifications.slice(0, 2).map((cert, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium text-[10px] border border-emerald-200"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-4 pt-2 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => setActiveProduct(prod)}
                    className="flex-1 py-2 px-3 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-slate-200 hover:border-blue-300"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Chi Tiết</span>
                  </button>

                  <button
                    onClick={() => onRequestQuote(`${prod.name} (${prod.model})`)}
                    className="py-2 px-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-sm"
                    title="Yêu cầu báo giá"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Báo Giá</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <p className="text-sm font-semibold text-slate-600">Không tìm thấy thiết bị phù hợp với từ khóa.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                onCategoryChange('all');
              }}
              className="mt-3 text-xs font-bold text-blue-700 hover:underline"
            >
              Hiển thị lại tất cả sản phẩm
            </button>
          </div>
        )}

        {/* Modal View */}
        <ProductModal
          product={activeProduct}
          onClose={() => setActiveProduct(null)}
          onRequestQuote={onRequestQuote}
        />
      </div>
    </section>
  );
};
