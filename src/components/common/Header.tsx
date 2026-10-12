import React, { useState } from 'react';
import { TecnicLogo } from './TecnicLogo';
import { Menu, X, Shield, ArrowRight } from 'lucide-react';
import { CompanyInfo } from '../../types';

interface HeaderProps {
  companyInfo: CompanyInfo;
  currentView: 'frontend' | 'admin';
  onViewChange: (view: 'frontend' | 'admin') => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenConsultation?: () => void;
  currentSectorId?: string | null;
  onSelectSector?: (sectorId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  companyInfo: _companyInfo,
  currentView,
  onViewChange,
  activeSection,
  onNavigate,
  currentSectorId,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Danh mục đề mục chính - tối ưu điều hướng trực tiếp không cần menu con phức tạp
  const navCategories = [
    { id: 'hero', label: 'TRANG CHỦ' },
    { id: 'about', label: 'GIỚI THIỆU' },
    { id: 'ecosystem', label: 'HỆ SINH THÁI' },
    { id: 'projects', label: 'DỰ ÁN TIÊU BIỂU' },
    { id: 'community', label: 'SỨC KHỎE CỘNG ĐỒNG' },
    { id: 'news', label: 'TIN TỨC & TUYỂN DỤNG' },
    { id: 'culture', label: 'VĂN HÓA DOANH NGHIỆP' },
  ];

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#001738]/95 backdrop-blur-md border-b border-blue-900/60 shadow-lg font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with direct path */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center focus:outline-none cursor-pointer group text-left shrink-0 py-1"
            title="Về đầu trang TECNIC GROUP"
          >
            <TecnicLogo size="md" showSlogan={false} />
          </button>

          {/* Desktop Navigation: Tối ưu trực tiếp, gọn gàng và phản hồi nhanh */}
          <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-2 text-[12.5px] 2xl:text-[13px] font-bold tracking-wide">
            {navCategories.map((item) => {
              const isActive =
                activeSection === item.id ||
                (item.id === 'about' && (activeSection === 'members' || activeSection === 'capabilities')) ||
                (item.id === 'ecosystem' && (Boolean(currentSectorId) || activeSection === 'sectors' || activeSection === 'ecosystem')) ||
                (item.id === 'community' && (activeSection === 'reports' || activeSection === 'products'));

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#00b4d8] font-black bg-blue-900/40 shadow-sm'
                      : 'text-slate-100 hover:text-[#00b4d8] hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: DUY NHẤT 1 nút "Liên hệ tư vấn" */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#00b4d8] hover:bg-[#0096c7] active:bg-[#0082aa] text-white font-black text-xs tracking-wider uppercase shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5 cursor-pointer shrink-0"
            >
              Liên hệ tư vấn
            </button>

            {/* Discreet Admin CMS toggle */}
            <button
              onClick={() => onViewChange(currentView === 'frontend' ? 'admin' : 'frontend')}
              className={`p-2 rounded-full transition-all text-xs border cursor-pointer ${
                currentView === 'admin'
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                  : 'bg-blue-950/60 text-slate-400 hover:text-white border-blue-900/60 hover:bg-blue-900/50'
              }`}
              title="Quản trị CMS (Báo cáo, Sản phẩm, Báo giá)"
            >
              <Shield className="w-3.5 h-3.5" />
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-white hover:text-[#00b4d8] focus:outline-none cursor-pointer"
              aria-label="Mở menu điều hướng"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown: Gọn gàng, truy cập thẳng từng mục */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#001738] border-t border-blue-900 px-4 pt-3 pb-6 space-y-1.5 shadow-2xl animate-in slide-in-from-top duration-200">
          {navCategories.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-blue-600/30 text-[#00b4d8] border border-blue-500/40'
                    : 'text-slate-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            );
          })}

          <div className="pt-4 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('contact');
              }}
              className="w-full py-3 bg-[#00b4d8] hover:bg-[#0096c7] text-white font-bold rounded-xl text-center shadow-lg cursor-pointer"
            >
              Liên hệ tư vấn
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onViewChange('admin');
              }}
              className="w-full py-2.5 bg-slate-900 text-amber-400 font-bold rounded-xl text-center flex items-center justify-center gap-2 border border-slate-800 text-xs cursor-pointer"
            >
              <Shield className="w-3.5 h-3.5" />
              Khu Vực Quản Trị (Admin CMS)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
