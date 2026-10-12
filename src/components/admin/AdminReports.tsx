import React, { useState } from 'react';
import { Report, ReportCategory } from '../../types';
import { FileText, Plus, Edit2, Trash2, Eye, Download, Check, X, Search, Filter, Sparkles, AlertCircle } from 'lucide-react';
import { ReportModal } from '../frontend/ReportModal';

interface AdminReportsProps {
  reports: Report[];
  onCreateReport: (data: Partial<Report>) => Promise<Report>;
  onUpdateReport: (id: string, updates: Partial<Report>) => Promise<Report | null>;
  onDeleteReport: (id: string) => Promise<boolean>;
  onRecordDownload: (id: string) => Promise<number>;
}

export const AdminReports: React.FC<AdminReportsProps> = ({
  reports,
  onCreateReport,
  onUpdateReport,
  onDeleteReport,
  onRecordDownload,
}) => {
  const [isCreating, setIsCreating] = useState(false);
  const [editingReport, setEditingReport] = useState<Report | null>(null);
  const [previewReport, setPreviewReport] = useState<Report | null>(null);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  // Form state
  const [formData, setFormData] = useState<{
    title: string;
    category: ReportCategory;
    categoryName: string;
    author: string;
    publishDate: string;
    summary: string;
    content: string;
    readTime: string;
    status: 'published' | 'draft';
    featured: boolean;
    tags: string;
    metric1Label: string;
    metric1Value: string;
    metric2Label: string;
    metric2Value: string;
    metric3Label: string;
    metric3Value: string;
  }>({
    title: '',
    category: 'clinical',
    categoryName: 'Nghiên Cứu Lâm Sàng',
    author: 'Hội đồng Khoa học TECNIC Medtech',
    publishDate: new Date().toLocaleDateString('vi-VN'),
    summary: '',
    content: '',
    readTime: '6 phút đọc',
    status: 'published',
    featured: false,
    tags: 'Y tế, Phục hồi chức năng, Medtech',
    metric1Label: 'Tỷ lệ phục hồi',
    metric1Value: '85%',
    metric2Label: 'Mẫu nghiên cứu',
    metric2Value: '250 BN',
    metric3Label: 'Độ an toàn',
    metric3Value: '100%',
  });

  const categoryNames: Record<ReportCategory, string> = {
    annual: 'Báo Cáo Thường Niên',
    clinical: 'Nghiên Cứu Lâm Sàng',
    technical: 'Báo Cáo Kỹ Thuật (ISO 13485)',
    market: 'Nghiên Cứu Thị Trường',
    csr: 'Báo Cáo CSR & MOU',
  };

  const handleOpenCreate = () => {
    setEditingReport(null);
    setFormData({
      title: '',
      category: 'clinical',
      categoryName: 'Nghiên Cứu Lâm Sàng',
      author: 'Ban Nghiên Cứu & Phát Triển TECNIC Medtech',
      publishDate: new Date().toLocaleDateString('vi-VN'),
      summary: '',
      content: `## 1. TỔNG QUAN & MỤC TIÊU BÁO CÁO
Mô tả bối cảnh nghiên cứu và nhu cầu thực tiễn trong chăm sóc y tế...

## 2. PHƯƠNG PHÁP TRIỂN KHAI & TIÊU CHUẨN ĐÁNH GIÁ
- Đánh giá theo quy chuẩn thiết bị y tế ISO 13485 và hướng dẫn lâm sàng.
- Thu thập dữ liệu thử nghiệm trên bệnh nhân tình nguyện.

## 3. KẾT QUẢ THỰC TẾ & CHỈ SỐ THEN CHỐT
- Chỉ số an toàn vận động đạt mức cao nhất.
- Bệnh nhân cải thiện rõ rệt khả năng tự phục vụ sinh hoạt.

## 4. KẾT LUẬN & ĐỀ XUẤT ỨNG DỤNG
Khuyến nghị áp dụng rộng rãi tại các khoa phục hồi chức năng và chăm sóc tại nhà.`,
      readTime: '7 phút đọc',
      status: 'published',
      featured: false,
      tags: 'Medtech, Báo cáo y tế, Lâm sàng, TECNIC',
      metric1Label: 'Tỷ lệ cải thiện',
      metric1Value: '90%',
      metric2Label: 'Quy mô khảo sát',
      metric2Value: '300 ca',
      metric3Label: 'Chuẩn ISO',
      metric3Value: '13485:2016',
    });
    setIsCreating(true);
  };

  const handleOpenEdit = (report: Report) => {
    setEditingReport(report);
    setFormData({
      title: report.title,
      category: report.category,
      categoryName: report.categoryName,
      author: report.author,
      publishDate: report.publishDate,
      summary: report.summary,
      content: report.content,
      readTime: report.readTime,
      status: report.status,
      featured: report.featured,
      tags: report.tags.join(', '),
      metric1Label: report.metrics[0]?.label || '',
      metric1Value: report.metrics[0]?.value || '',
      metric2Label: report.metrics[1]?.label || '',
      metric2Value: report.metrics[1]?.value || '',
      metric3Label: report.metrics[2]?.label || '',
      metric3Value: report.metrics[2]?.value || '',
    });
    setIsCreating(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.summary) {
      alert('Vui lòng nhập đầy đủ tiêu đề và tóm tắt điều hành.');
      return;
    }

    const metrics = [];
    if (formData.metric1Label && formData.metric1Value) {
      metrics.push({ label: formData.metric1Label, value: formData.metric1Value });
    }
    if (formData.metric2Label && formData.metric2Value) {
      metrics.push({ label: formData.metric2Label, value: formData.metric2Value });
    }
    if (formData.metric3Label && formData.metric3Value) {
      metrics.push({ label: formData.metric3Label, value: formData.metric3Value });
    }

    const tagsArray = formData.tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const payload: Partial<Report> = {
      title: formData.title,
      category: formData.category,
      categoryName: categoryNames[formData.category],
      author: formData.author,
      publishDate: formData.publishDate,
      summary: formData.summary,
      content: formData.content,
      readTime: formData.readTime,
      status: formData.status,
      featured: formData.featured,
      tags: tagsArray,
      metrics,
    };

    if (editingReport) {
      await onUpdateReport(editingReport.id, payload);
    } else {
      await onCreateReport(payload);
    }

    setIsCreating(false);
    setEditingReport(null);
  };

  const handleDelete = async (id: string, title: string) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa báo cáo: "${title}"?`)) {
      await onDeleteReport(id);
    }
  };

  const filtered = reports.filter((r) => {
    const matchCat = filterCategory === 'all' || r.category === filterCategory;
    const matchSearch =
      search === '' ||
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.author.toLowerCase().includes(search.toLowerCase()) ||
      r.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-6">
      {/* Top Banner & Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-700" />
            Hệ Thống Quản Lý & Viết Báo Cáo Y Tế TECNIC
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Soạn thảo, hiệu chỉnh và xuất bản báo cáo thường niên, kết quả lâm sàng, hồ sơ kỹ thuật ISO 13485 cho hệ thống tecnic.vn & ytetecnic.vn.
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm shrink-0 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Viết Báo Cáo Mới</span>
        </button>
      </div>

      {/* Report Editor Form (When Active) */}
      {isCreating && (
        <div className="bg-white rounded-2xl border-2 border-blue-600 p-6 shadow-xl animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
            <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              {editingReport ? 'Chỉnh Sửa Báo Cáo Y Tế' : 'Soạn Thảo Báo Cáo Y Tế Mới'}
            </h3>
            <button
              onClick={() => setIsCreating(false)}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-5 text-xs sm:text-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">
                  Tiêu Đề Báo Cáo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="VD: Báo Cáo Đánh Giá Lâm Sàng Khung Tập Đi & Nẹp Khớp..."
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Chuyên Mục Báo Cáo</label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      category: e.target.value as ReportCategory,
                      categoryName: categoryNames[e.target.value as ReportCategory],
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium"
                >
                  <option value="annual">Báo Cáo Thường Niên</option>
                  <option value="clinical">Nghiên Cứu Lâm Sàng</option>
                  <option value="technical">Báo Cáo Kỹ Thuật (ISO 13485)</option>
                  <option value="market">Nghiên Cứu Thị Trường</option>
                  <option value="csr">Báo Cáo CSR & MOU</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Tác Giả / Đơn Vị Ban Hành</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Ngày Công Bố</label>
                <input
                  type="text"
                  value={formData.publishDate}
                  onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Thời Gian Đọc Ước Tính</label>
                <input
                  type="text"
                  value={formData.readTime}
                  onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Tóm Tắt Điều Hành (Executive Summary) <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={2}
                required
                placeholder="Tóm tắt ngắn gọn mục tiêu, đối tượng, kết quả đạt được..."
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Key Metrics Inputs */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
              <span className="block font-bold text-slate-800 text-xs uppercase tracking-wider">
                Chỉ Số Định Lượng Then Chốt (Metrics)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                  <input
                    type="text"
                    placeholder="Tên chỉ số 1 (VD: Cải thiện)"
                    value={formData.metric1Label}
                    onChange={(e) => setFormData({ ...formData, metric1Label: e.target.value })}
                    className="w-full mb-1 text-xs font-semibold text-slate-700 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Giá trị (VD: +88.6%)"
                    value={formData.metric1Value}
                    onChange={(e) => setFormData({ ...formData, metric1Value: e.target.value })}
                    className="w-full text-sm font-bold text-blue-800 focus:outline-none"
                  />
                </div>

                <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                  <input
                    type="text"
                    placeholder="Tên chỉ số 2 (VD: Mẫu nghiên cứu)"
                    value={formData.metric2Label}
                    onChange={(e) => setFormData({ ...formData, metric2Label: e.target.value })}
                    className="w-full mb-1 text-xs font-semibold text-slate-700 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Giá trị (VD: 350 BN)"
                    value={formData.metric2Value}
                    onChange={(e) => setFormData({ ...formData, metric2Value: e.target.value })}
                    className="w-full text-sm font-bold text-emerald-700 focus:outline-none"
                  />
                </div>

                <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                  <input
                    type="text"
                    placeholder="Tên chỉ số 3 (VD: Tiêu chuẩn)"
                    value={formData.metric3Label}
                    onChange={(e) => setFormData({ ...formData, metric3Label: e.target.value })}
                    className="w-full mb-1 text-xs font-semibold text-slate-700 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Giá trị (VD: ISO 13485)"
                    value={formData.metric3Value}
                    onChange={(e) => setFormData({ ...formData, metric3Value: e.target.value })}
                    className="w-full text-sm font-bold text-amber-700 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Nội Dung Báo Cáo Đầy Đủ (Hỗ trợ định dạng ## Tiêu đề và - Gạch đầu dòng)
              </label>
              <textarea
                rows={8}
                placeholder="Nhập nội dung báo cáo theo từng phần..."
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-mono text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Từ Khóa (Tags, cách nhau bằng dấu phẩy)</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Trạng Thái Xuất Bản</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as 'published' | 'draft' })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium"
                >
                  <option value="published">Công Khai (Hiển thị ngoài trang chủ)</option>
                  <option value="draft">Bản Nháp (Lưu nội bộ)</option>
                </select>
              </div>

              <div className="pt-5 flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured-checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                />
                <label htmlFor="featured-checkbox" className="font-semibold text-slate-800 cursor-pointer">
                  Đặt làm Báo Cáo Nổi Bật
                </label>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsCreating(false)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Hủy Bỏ
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold transition-all shadow cursor-pointer flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>{editingReport ? 'Cập Nhật Báo Cáo' : 'Lưu & Xuất Bản Báo Cáo'}</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {['all', 'annual', 'clinical', 'technical', 'market', 'csr'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterCategory === cat
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat === 'all' ? 'Tất Cả' : categoryNames[cat as ReportCategory]}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm theo tiêu đề, tác giả..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 bg-slate-50 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-700 uppercase font-bold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Báo Cáo</th>
                <th className="py-3 px-4">Chuyên Mục</th>
                <th className="py-3 px-4">Tác Giả & Ngày</th>
                <th className="py-3 px-4 text-center">Lượt Xem / Tải</th>
                <th className="py-3 px-4 text-center">Trạng Thái</th>
                <th className="py-3 px-4 text-right">Thao Tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((r) => (
                <tr key={r.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4 max-w-xs">
                    <div className="flex items-start gap-2">
                      {r.featured && (
                        <span className="shrink-0 px-1.5 py-0.5 rounded bg-red-100 text-red-700 font-bold text-[10px]">
                          Hot
                        </span>
                      )}
                      <div>
                        <div
                          onClick={() => setPreviewReport(r)}
                          className="font-bold text-slate-900 hover:text-blue-700 cursor-pointer line-clamp-2"
                        >
                          {r.title}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5 truncate max-w-sm">
                          {r.summary}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-800 border border-blue-100">
                      {r.categoryName}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 whitespace-nowrap text-slate-600">
                    <div className="font-semibold text-slate-800">{r.author}</div>
                    <div className="text-slate-400 text-[11px]">{r.publishDate}</div>
                  </td>

                  <td className="py-3.5 px-4 whitespace-nowrap text-center text-slate-600">
                    <div className="font-semibold text-slate-800">{r.views} xem</div>
                    <div className="text-emerald-600 text-[11px] font-medium">{r.downloads} tải</div>
                  </td>

                  <td className="py-3.5 px-4 whitespace-nowrap text-center">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        r.status === 'published'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {r.status === 'published' ? 'Công Khai' : 'Bản Nháp'}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 whitespace-nowrap text-right space-x-1">
                    <button
                      onClick={() => setPreviewReport(r)}
                      className="p-1.5 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded"
                      title="Xem trước"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleOpenEdit(r)}
                      className="p-1.5 text-slate-500 hover:text-amber-700 hover:bg-amber-50 rounded"
                      title="Chỉnh sửa"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(r.id, r.title)}
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

      {/* Preview Modal */}
      <ReportModal
        report={previewReport}
        onClose={() => setPreviewReport(null)}
        onDownload={onRecordDownload}
      />
    </div>
  );
};
