import React, { useState } from 'react';
import { CompanyInfo, Report, Product, Inquiry } from '../../types';
import { TecnicLogo } from '../common/TecnicLogo';
import { AdminAnalytics } from './AdminAnalytics';
import { AdminReports } from './AdminReports';
import { AdminProducts } from './AdminProducts';
import { AdminInquiries } from './AdminInquiries';
import { AdminCompanySettings } from './AdminCompanySettings';
import {
  LayoutDashboard,
  FileText,
  Package,
  PhoneCall,
  Settings,
  ArrowLeft,
  Shield,
  LogOut,
  ExternalLink,
  Bell,
  UserCheck,
} from 'lucide-react';

interface AdminLayoutProps {
  companyInfo: CompanyInfo;
  reports: Report[];
  products: Product[];
  inquiries: Inquiry[];
  onBackToFrontend: () => void;
  onCreateReport: (data: Partial<Report>) => Promise<Report>;
  onUpdateReport: (id: string, updates: Partial<Report>) => Promise<Report | null>;
  onDeleteReport: (id: string) => Promise<boolean>;
  onRecordDownload: (id: string) => Promise<number>;
  onCreateProduct: (data: Partial<Product>) => Promise<Product>;
  onUpdateProduct: (id: string, updates: Partial<Product>) => Promise<Product | null>;
  onDeleteProduct: (id: string) => Promise<boolean>;
  onUpdateInquiryStatus: (id: string, status: Inquiry['status'], notes?: string) => Promise<Inquiry | null>;
  onUpdateCompanyInfo: (updates: Partial<CompanyInfo>) => Promise<CompanyInfo>;
}

type AdminTab = 'analytics' | 'reports' | 'products' | 'inquiries' | 'settings';

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  companyInfo,
  reports,
  products,
  inquiries,
  onBackToFrontend,
  onCreateReport,
  onUpdateReport,
  onDeleteReport,
  onRecordDownload,
  onCreateProduct,
  onUpdateProduct,
  onDeleteProduct,
  onUpdateInquiryStatus,
  onUpdateCompanyInfo,
}) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('reports');

  const navItems = [
    { id: 'analytics', label: 'Tổng Quan & Thống Kê', icon: LayoutDashboard },
    { id: 'reports', label: 'Quản Lý & Viết Báo Cáo', icon: FileText, badge: reports.length },
    { id: 'products', label: 'Quản Lý Thiết Bị Y Tế', icon: Package, badge: products.length },
    {
      id: 'inquiries',
      label: 'Yêu Cầu Báo Giá & Tư Vấn',
      icon: PhoneCall,
      badge: inquiries.filter((i) => i.status === 'new').length || undefined,
      badgeColor: 'bg-red-500 text-white',
    },
    { id: 'settings', label: 'Cấu Hình Doanh Nghiệp', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Top Admin Bar */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white p-1.5 rounded shadow shrink-0">
              <TecnicLogo size="sm" showSlogan={false} />
            </div>
            <div className="hidden sm:block">
              <span className="font-extrabold text-sm tracking-wider text-white">TECNIC ADMIN CMS</span>
              <span className="text-xs text-amber-400 block font-medium">
                Cổng Quản Trị Báo Cáo & Thiết Bị Y Tế
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBackToFrontend}
              className="px-3.5 py-1.5 bg-blue-700 hover:bg-blue-600 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Xem Trang Chủ (Khách Hàng)</span>
            </button>

            <div className="h-6 w-px bg-slate-700 hidden sm:block"></div>

            <div className="hidden md:flex items-center gap-2 text-xs text-slate-300">
              <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-semibold text-white">Ban Quản Trị</span>
                <span className="block text-[11px] text-emerald-400">Đã đăng nhập</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Nav */}
          <aside className="lg:col-span-3 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as AdminTab)}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-blue-700 text-white shadow-sm font-bold'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                      <span>{item.label}</span>
                    </div>

                    {item.badge !== undefined && (
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          item.badgeColor || (isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700')
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Links Card */}
            <div className="bg-slate-900 rounded-2xl p-4 text-white text-xs space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Tài Liệu Hướng Dẫn CMS
              </span>
              <p className="text-slate-300 leading-relaxed text-xs">
                Mọi bài viết báo cáo xuất bản tại đây sẽ hiển thị trực tiếp tại mục &ldquo;Báo Cáo & Tài Liệu&rdquo; ngoài trang chủ.
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-blue-400">
                <span>Hỗ trợ kỹ thuật: 0988.386.996</span>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-9">
            {activeTab === 'analytics' && (
              <AdminAnalytics
                reports={reports}
                products={products}
                inquiries={inquiries}
                companyInfo={companyInfo}
                onNavigateTab={(tab) => setActiveTab(tab)}
              />
            )}

            {activeTab === 'reports' && (
              <AdminReports
                reports={reports}
                onCreateReport={onCreateReport}
                onUpdateReport={onUpdateReport}
                onDeleteReport={onDeleteReport}
                onRecordDownload={onRecordDownload}
              />
            )}

            {activeTab === 'products' && (
              <AdminProducts
                products={products}
                onCreateProduct={onCreateProduct}
                onUpdateProduct={onUpdateProduct}
                onDeleteProduct={onDeleteProduct}
              />
            )}

            {activeTab === 'inquiries' && (
              <AdminInquiries
                inquiries={inquiries}
                onUpdateStatus={onUpdateInquiryStatus}
              />
            )}

            {activeTab === 'settings' && (
              <AdminCompanySettings
                companyInfo={companyInfo}
                onUpdateCompanyInfo={onUpdateCompanyInfo}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
