import React from 'react';
import { motion } from 'framer-motion';
import { CompanyInfo } from '../../types';
import { ArrowRight, Layers, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  companyInfo: CompanyInfo;
  onExploreAbout: () => void;
  onExploreEcosystem: () => void;
  onScrollDown: () => void;
  onSelectSector?: (sectorId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  companyInfo,
  onExploreAbout,
  onExploreEcosystem,
  onScrollDown,
  onSelectSector,
}) => {
  const quickSectors = [
    { id: 'y-te', label: 'Y tế' },
    { id: 'nang-luong', label: 'Năng lượng' },
    { id: 'vat-lieu', label: 'Vật liệu' },
    { id: 'khoang-san', label: 'Khoáng sản' },
    { id: 'logistics', label: 'Logistics' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex flex-col justify-between overflow-hidden bg-[#001738] text-white pt-16 pb-12 font-sans"
    >
      {/* Background Architectural Glass Facade with Deep Blue Gradient */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85")',
        }}
      ></div>

      {/* Deep Blue Overlay Gradient */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#001f4d]/95 via-[#002766]/90 to-[#001433]/85 pointer-events-none"></div>
      <div className="absolute inset-0 z-1 bg-radial from-transparent via-[#001738]/50 to-[#000f26] pointer-events-none"></div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-6 sm:space-y-8"
        >
          {/* Brand identifier */}
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/60 text-cyan-300 border border-blue-400/30 text-xs sm:text-sm font-bold tracking-widest uppercase backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00b4d8] animate-pulse"></span>
              TECNIC GROUP
            </span>
          </div>

          {/* Headline: Kiến tạo giá trị bằng công nghệ */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] drop-shadow-sm">
              Kiến tạo giá trị
              <span className="block font-black text-white mt-1">bằng công nghệ</span>
            </h1>
          </div>

          {/* Subtitle mentioning all 5 core sectors */}
          <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl">
            TECNIC phát triển hệ sinh thái doanh nghiệp trong các lĩnh vực y tế, năng lượng, vật liệu, khoáng sản và logistics, kết nối công nghệ, chuyên môn và nguồn lực để tạo ra những sản phẩm, dịch vụ và giải pháp có giá trị thực tiễn.
          </p>

          {/* Quick jump to 5 sectors like Long Châu / modern medical portal */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs text-slate-400 font-medium mr-1">Lĩnh vực:</span>
            {quickSectors.map((qs) => (
              <button
                key={qs.id}
                onClick={() => onSelectSector && onSelectSector(qs.id)}
                className="px-3 py-1 rounded-full bg-white/10 hover:bg-sky-500/30 text-slate-200 hover:text-white border border-white/15 hover:border-sky-400 text-xs font-semibold backdrop-blur-sm transition-all duration-200 flex items-center gap-1 cursor-pointer"
              >
                <span>{qs.label}</span>
                <ArrowUpRight className="w-3 h-3 text-sky-300" />
              </button>
            ))}
          </div>

          {/* 2 CTAs: KHÁM PHÁ TECNIC & HỆ SINH THÁI TECNIC */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreAbout}
              className="px-7 py-3.5 rounded-full bg-[#00c853] hover:bg-[#00b34a] active:bg-[#009e40] text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>KHÁM PHÁ TECNIC</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreEcosystem}
              className="px-7 py-3.5 rounded-full bg-blue-950/50 hover:bg-blue-900/60 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-blue-400/40 backdrop-blur-md flex items-center gap-2 transition-all cursor-pointer"
            >
              <Layers className="w-4 h-4 text-cyan-300" />
              <span>HỆ SINH THÁI TECNIC</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Animated Mouse Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8 pb-2">
        <button
          onClick={onScrollDown}
          className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer group"
          title="Cuộn xuống khám phá"
        >
          <div className="w-6 h-10 rounded-full border-2 border-slate-400/80 group-hover:border-[#00b4d8] flex items-start justify-center p-1.5 transition-colors">
            <span className="w-1.5 h-2.5 bg-white group-hover:bg-[#00b4d8] rounded-full animate-bounce"></span>
          </div>
        </button>
      </div>
    </section>
  );
};
