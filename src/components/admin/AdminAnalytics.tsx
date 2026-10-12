import React from 'react';
import { Report, Product, Inquiry, CompanyInfo } from '../../types';
import { BarChart3, FileText, Package, PhoneCall, Eye, Download, Users, TrendingUp, CheckCircle, ShieldCheck } from 'lucide-react';

interface AdminAnalyticsProps {
  reports: Report[];
  products: Product[];
  inquiries: Inquiry[];
  companyInfo: CompanyInfo;
  onNavigateTab: (tab: 'reports' | 'products' | 'inquiries') => void;
}

export const AdminAnalytics: React.FC<AdminAnalyticsProps> = ({
  reports,
  products,
  inquiries,
  companyInfo,
  onNavigateTab,
}) => {
  const totalViews = reports.reduce((acc, r) => acc + (r.views || 0), 0);
  const totalDownloads = reports.reduce((acc, r) => acc + (r.downloads || 0), 0);
  const newInquiries = inquiries.filter((i) => i.status === 'new').length;

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-[#002266] text-white p-6 rounded-2xl shadow-md border border-blue-900">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-blue-300 font-bold block mb-1">
              BẢNG ĐIỀU KHIỂN QUẢN TRỊ TRUNG TÂM
            </span>
            <h2 className="text-2xl font-black text-white">
              Hệ Thống Dữ Liệu & Báo Cáo Y Tế TECNIC
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Giám sát tình hình truy cập báo cáo, danh mục thiết bị và tương tác của bệnh viện đối tác.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15 text-xs text-right">
            <span className="text-slate-300 block">Tiêu chuẩn vận hành:</span>
            <strong className="text-emerald-400 font-bold">{companyInfo.stats.isoStandards}</strong>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Báo cáo */}
        <div
          onClick={() => onNavigateTab('reports')}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Báo Cáo Đã Đăng
            </span>
            <div className="p-2 rounded-lg bg-blue-50 text-blue-700 group-hover:scale-110 transition-transform">
              <FileText className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900">{reports.length}</div>
          <div className="text-xs text-blue-700 font-semibold mt-1 flex items-center gap-1">
            <span>{totalViews.toLocaleString('vi-VN')} lượt đọc trực tuyến</span>
          </div>
        </div>

        {/* Card 2: Lượt tải tài liệu */}
        <div
          onClick={() => onNavigateTab('reports')}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Tải Tài Liệu Kỹ Thuật
            </span>
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 group-hover:scale-110 transition-transform">
              <Download className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900">
            {totalDownloads.toLocaleString('vi-VN')}
          </div>
          <div className="text-xs text-emerald-700 font-semibold mt-1">
            Hồ sơ kiểm định & tiêu chuẩn ISO
          </div>
        </div>

        {/* Card 3: Thiết bị trong kho */}
        <div
          onClick={() => onNavigateTab('products')}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Thiết Bị Y Tế
            </span>
            <div className="p-2 rounded-lg bg-amber-50 text-amber-700 group-hover:scale-110 transition-transform">
              <Package className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900">{products.length}</div>
          <div className="text-xs text-slate-500 font-semibold mt-1">
            3 Trụ cột: Dự phòng, Phục hồi, Bệnh viện
          </div>
        </div>

        {/* Card 4: Yêu cầu tư vấn mới */}
        <div
          onClick={() => onNavigateTab('inquiries')}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Yêu Cầu Báo Giá
            </span>
            <div className="p-2 rounded-lg bg-red-50 text-red-700 group-hover:scale-110 transition-transform">
              <PhoneCall className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900">{inquiries.length}</div>
          <div className="text-xs text-red-600 font-bold mt-1">
            {newInquiries} yêu cầu mới cần phản hồi
          </div>
        </div>
      </div>

      {/* Two-Column Analytics Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Reports by Views */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-700" />
              Báo Cáo Được Quan Tâm Nhiều Nhất
            </h3>
            <button
              onClick={() => onNavigateTab('reports')}
              className="text-xs font-bold text-blue-700 hover:underline"
            >
              Xem tất cả
            </button>
          </div>

          <div className="space-y-3">
            {[...reports]
              .sort((a, b) => (b.views || 0) - (a.views || 0))
              .slice(0, 4)
              .map((rep, idx) => (
                <div key={rep.id} className="p-3 bg-slate-50 rounded-xl flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <div className="font-bold text-xs text-slate-800 line-clamp-1">{rep.title}</div>
                      <div className="text-[11px] text-slate-400">{rep.categoryName}</div>
                    </div>
                  </div>

                  <div className="text-right shrink-0 text-xs">
                    <strong className="text-blue-900 font-bold">{rep.views}</strong>{' '}
                    <span className="text-slate-400 text-[10px]">xem</span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Recent Inquiries List */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              Yêu Cầu Báo Giá Gần Đây
            </h3>
            <button
              onClick={() => onNavigateTab('inquiries')}
              className="text-xs font-bold text-blue-700 hover:underline"
            >
              Xem tất cả
            </button>
          </div>

          <div className="space-y-3">
            {inquiries.slice(0, 4).map((inq) => (
              <div key={inq.id} className="p-3 bg-slate-50 rounded-xl flex items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-xs text-slate-900">{inq.fullName}</div>
                  <div className="text-[11px] text-blue-900 font-medium truncate max-w-xs">
                    {inq.serviceInterest}
                  </div>
                  <div className="text-[10px] text-slate-400">{inq.createdAt}</div>
                </div>

                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase shrink-0 ${
                    inq.status === 'new'
                      ? 'bg-red-100 text-red-800'
                      : inq.status === 'contacted'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  {inq.status === 'new' ? 'Mới' : inq.status === 'contacted' ? 'Đang gọi' : 'Xong'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
