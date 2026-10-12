import React, { useState } from 'react';
import { Report, ReportCategory } from '../../types';
import { FileText, Search, Download, Eye, Calendar, User, ArrowRight, ShieldCheck, PlusCircle, BookOpen, Sparkles } from 'lucide-react';
import { ReportModal } from './ReportModal';

interface ReportsSectionProps {
  reports: Report[];
  onOpenReportWriter: () => void;
  onRecordDownload: (id: string) => Promise<number>;
}

export const ReportsSection: React.FC<ReportsSectionProps> = ({
  reports,
  onOpenReportWriter,
  onRecordDownload,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeReport, setActiveReport] = useState<Report | null>(null);

  const categories = [
    { id: 'all', label: 'Tất Cả Báo Cáo' },
    { id: 'annual', label: 'Báo Cáo Thường Niên' },
    { id: 'clinical', label: 'Nghiên Cứu Lâm Sàng' },
    { id: 'technical', label: 'Báo Cáo Kỹ Thuật (ISO 13485)' },
    { id: 'market', label: 'Nghiên Cứu Thị Trường' },
    { id: 'csr', label: 'Báo Cáo CSR & MOU' },
  ];

  const filteredReports = reports.filter((r) => {
    const matchesCategory = selectedCategory === 'all' || r.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredReport = reports.find((r) => r.featured) || reports[0];

  const handleDownload = async (id: string) => {
    await onRecordDownload(id);
  };

  return (
    <section id="reports" className="py-20 bg-slate-50 border-b border-slate-200 font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Admin Shortcut */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              <FileText className="w-3.5 h-3.5 text-blue-700" />
              Trung Tâm Dữ Liệu & Báo Cáo Y Tế
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Báo Cáo Chuyên Môn & Tài Liệu Kỹ Thuật
            </h2>
            <p className="mt-2 text-base text-slate-600 font-medium max-w-2xl">
              Hệ thống công bố các báo cáo thường niên, kết quả thử nghiệm lâm sàng, quy chuẩn ISO 13485 và hoạt động xã hội hỗ trợ người bệnh.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenReportWriter}
              className="px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer shrink-0"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Viết Báo Cáo Mới (Admin)</span>
            </button>
          </div>
        </div>

        {/* Featured Report Spotlight Card */}
        {featuredReport && (
          <div className="mb-12 bg-gradient-to-br from-slate-900 via-[#0a235c] to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-blue-800/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider">
                    Báo Cáo Nổi Bật
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-blue-900/80 text-blue-200 text-xs font-medium border border-blue-700">
                    {featuredReport.categoryName}
                  </span>
                  <span className="text-xs text-slate-300">Ngày: {featuredReport.publishDate}</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                  {featuredReport.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                  {featuredReport.summary}
                </p>

                {/* Metrics preview */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {featuredReport.metrics.map((m, i) => (
                    <div key={i} className="bg-slate-800/80 border border-slate-700/80 p-3 rounded-xl">
                      <div className="text-lg font-black text-blue-300">{m.value}</div>
                      <div className="text-xs text-slate-300 font-medium">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActiveReport(featuredReport)}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Đọc Báo Cáo Chi Tiết</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <span className="text-xs text-slate-400 flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> {featuredReport.views} xem
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Download className="w-3.5 h-3.5" /> {featuredReport.downloads} tải về
                    </span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 bg-slate-800/60 p-5 rounded-2xl border border-slate-700/80 space-y-3 text-xs">
                <div className="font-bold text-slate-200 uppercase tracking-wider text-[11px] pb-2 border-b border-slate-700 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Hồ Sơ Kỹ Thuật Đính Kèm
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center justify-between">
                    <span>Định dạng:</span>
                    <strong className="text-white font-mono">Báo cáo chuẩn ISO (.PDF / .DOC)</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Thời gian đọc:</span>
                    <strong className="text-white">{featuredReport.readTime}</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Bản quyền dữ liệu:</span>
                    <strong className="text-white">TECNIC Group & Medtech</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Kiểm duyệt chuyên môn:</span>
                    <strong className="text-emerald-400">Hội đồng Y khoa TECNIC</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Filter bar & Search */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
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
              placeholder="Tìm theo tiêu đề, tác giả, từ khóa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Reports Grid */}
        {filteredReports.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReports.map((report) => (
              <div
                key={report.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-6 group"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded font-bold uppercase tracking-wider text-[11px] bg-blue-50 text-blue-700 border border-blue-100">
                      {report.categoryName}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                      <Calendar className="w-3 h-3" />
                      {report.publishDate}
                    </span>
                  </div>

                  <h4
                    onClick={() => setActiveReport(report)}
                    className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 cursor-pointer leading-snug"
                  >
                    {report.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {report.summary}
                  </p>

                  {/* 2 Key Metrics Chips */}
                  {report.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {report.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="bg-slate-50 p-2 rounded-lg border border-slate-100 text-center">
                          <span className="block text-sm font-bold text-blue-900">{m.value}</span>
                          <span className="block text-[10px] text-slate-500 truncate">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {report.tags.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer on Card */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="text-slate-400 flex items-center gap-3 text-[11px]">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" /> {report.views}
                    </span>
                    <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                      <Download className="w-3 h-3" /> {report.downloads}
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveReport(report)}
                    className="inline-flex items-center gap-1 font-bold text-blue-700 hover:text-blue-900 cursor-pointer"
                  >
                    <span>Xem Báo Cáo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300">
            <p className="text-sm font-semibold text-slate-600">Không tìm thấy báo cáo phù hợp.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-blue-700 hover:underline"
            >
              Xem tất cả báo cáo
            </button>
          </div>
        )}

        {/* Modal Reader */}
        <ReportModal
          report={activeReport}
          onClose={() => setActiveReport(null)}
          onDownload={handleDownload}
        />
      </div>
    </section>
  );
};
