import React from 'react';
import { motion } from 'framer-motion';
import { initialEcosystemSectors } from '../../data/initialData';
import { EcosystemSectorItem } from '../../types';
import { ArrowUpRight } from 'lucide-react';

interface EcosystemSectionProps {
  onSelectSector: (sectorId: string) => void;
  onRequestQuote: (subject: string) => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({
  onSelectSector,
}) => {
  const handleActionClick = (sector: EcosystemSectorItem) => {
    onSelectSector(sector.id);
  };

  return (
    <section id="ecosystem" className="py-24 bg-slate-50 border-b border-slate-200/80 font-sans scroll-mt-20 relative">
      <div id="sectors" className="absolute -top-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-500 block mb-2">
            LĨNH VỰC HOẠT ĐỘNG
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            HỆ SINH THÁI TECNIC
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            Tập trung xây dựng năng lực chuyên sâu trong từng lĩnh vực, kết nối công nghệ và nhu cầu thực tiễn của thị trường.
          </p>
        </motion.div>

        {/* 5 Clean Sector Cards with smooth hover and direct navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {initialEcosystemSectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-sky-400 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => handleActionClick(sector)}
            >
              <div>
                {/* Photo Header with Arrow */}
                <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>

                  {/* Top-Right Arrow Badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-slate-700 flex items-center justify-center shadow group-hover:bg-sky-500 group-hover:text-white transition-colors duration-200">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </div>

                  {/* Bottom Unit & Title */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wider block">
                      {sector.unit}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {sector.title}
                    </h3>
                  </div>
                </div>

                {/* Content details */}
                <div className="p-5 space-y-3">
                  <p className="text-xs font-semibold text-sky-700 bg-sky-50 rounded-lg p-2 leading-relaxed">
                    {sector.keywords}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {sector.description}
                  </p>
                </div>
              </div>

              {/* Quiet Footer kicker (no redundant "xem trang chuyên sâu" button) */}
              <div className="px-5 pb-4 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-sky-600 transition-colors">
                  <span>Khám phá danh mục</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
