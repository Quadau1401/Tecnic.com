import React from 'react';
import { TecnicLogo } from './TecnicLogo';
import { Shield, ArrowUp, Phone, Mail, MapPin, Globe } from 'lucide-react';
import { CompanyInfo } from '../../types';

interface FooterProps {
  companyInfo: CompanyInfo;
  onNavigate: (sectionId: string) => void;
  onAdminClick: () => void;
  onSelectSector?: (sectorId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ companyInfo, onNavigate, onAdminClick, onSelectSector }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectorClick = (sectorId: string) => {
    if (onSelectSector) {
      onSelectSector(sectorId);
    } else {
      onNavigate('sectors');
    }
  };

  return (
    <footer className="bg-[#001738] text-slate-300 pt-16 pb-12 border-t border-blue-900/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Columns matching Screenshot 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blue-900/50">
          {/* Column 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate('hero')}
              className="text-left focus:outline-none cursor-pointer"
            >
              <TecnicLogo size="md" />
            </button>

            <p className="text-sm text-slate-300 leading-relaxed font-normal max-w-sm">
              Tập đoàn công nghệ đa ngành, kiến tạo giá trị bền vững bằng công nghệ tiên tiến.
            </p>

            <div className="pt-2 text-xs text-cyan-300/80 font-mono">
              MST Tập đoàn: {companyInfo.taxIdGroup}
            </div>
          </div>

          {/* Column 2: LĨNH VỰC (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              LĨNH VỰC
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => handleSectorClick('y-te')}
                  className="hover:text-[#00b4d8] transition-colors cursor-pointer text-left"
                >
                  Y tế (TECNIC MEDICAL)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectorClick('nang-luong')}
                  className="hover:text-[#00b4d8] transition-colors cursor-pointer text-left"
                >
                  Năng lượng (TECNIC ELECTRIC)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectorClick('khoang-san')}
                  className="hover:text-[#00b4d8] transition-colors cursor-pointer text-left"
                >
                  Khoáng sản (TECMIN)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectorClick('vat-lieu')}
                  className="hover:text-[#00b4d8] transition-colors cursor-pointer text-left"
                >
                  Vật liệu (TECNIC MAT)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectorClick('logistics')}
                  className="hover:text-[#00b4d8] transition-colors cursor-pointer text-left"
                >
                  Logistics (TECNIC LOGISTICS)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: LIÊN KẾT (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              LIÊN KẾT
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#00b4d8] transition-colors cursor-pointer uppercase"
                >
                  GIỚI THIỆU
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('community')}
                  className="hover:text-[#00b4d8] transition-colors cursor-pointer uppercase"
                >
                  SỨC KHỎE CỘNG ĐỒNG
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('news-careers')}
                  className="hover:text-[#00b4d8] transition-colors cursor-pointer uppercase"
                >
                  TIN TỨC & TUYỂN DỤNG
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('culture')}
                  className="hover:text-[#00b4d8] transition-colors cursor-pointer uppercase"
                >
                  VĂN HÓA DOANH NGHIỆP
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#00b4d8] transition-colors cursor-pointer uppercase"
                >
                  LIÊN HỆ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reports')}
                  className="hover:text-[#00b4d8] transition-colors cursor-pointer text-cyan-300 font-semibold"
                >
                  BÁO CÁO Y TẾ & TÀI LIỆU
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: LIÊN HỆ matching Screenshot 5 (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              LIÊN HỆ
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-1.5">
                <span className="text-slate-400">Website:</span>
                <span className="text-white font-semibold">tecnic.com.vn</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-slate-400">Email:</span>
                <a
                  href="mailto:tecnic.vn.group@gmail.com"
                  className="text-white hover:text-cyan-300 transition-colors break-all"
                >
                  tecnic.vn.group@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-slate-400">Hotline:</span>
                <a href="tel:0348402466" className="text-cyan-300 font-bold hover:underline">
                  034 84 02466
                </a>
              </li>
              <li className="pt-1 text-slate-400 leading-relaxed text-[11px]">
                {companyInfo.headquarters}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar matching Screenshot 5 */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Bản quyền thuộc <strong className="text-white">Tập đoàn TECNIC</strong>.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 italic">Kiến tạo để phụng sự</span>

            <button
              onClick={onAdminClick}
              className="p-1.5 rounded-lg bg-blue-950 hover:bg-blue-900 text-amber-400 hover:text-amber-300 border border-blue-900 transition-colors flex items-center gap-1 font-semibold text-[11px]"
              title="Quản trị CMS"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Admin</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-blue-950 hover:bg-blue-900 text-slate-400 hover:text-white transition-colors"
              title="Lên đầu trang"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
