import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { initialCompanyInfo } from '../../data/initialData';

interface MemberCompaniesSectionProps {
  onSelectCompany: (companyName: string) => void;
  onRequestQuote: (subject: string) => void;
  onSelectSector?: (sectorId: string) => void;
}

export const MemberCompaniesSection: React.FC<MemberCompaniesSectionProps> = ({
  onSelectSector,
}) => {
  // 5 verified member companies matching the exact screenshot & group portfolio
  const companies = initialCompanyInfo.memberCompanies;

  const handleCardClick = (sectorId?: string) => {
    if (sectorId && onSelectSector) {
      onSelectSector(sectorId);
    }
  };

  return (
    <section id="members" className="py-24 bg-white border-b border-slate-100 font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-500 block mb-2">
            CÔNG TY THÀNH VIÊN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Các đơn vị thành viên TECNIC
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            Mạng lưới công ty thành viên chuyên môn hóa trong từng lĩnh vực, cùng tạo nên sức mạnh tổng hợp của tập đoàn.
          </p>
        </motion.div>

        {/* 5 Member Company Cards Layout: 3 Top, 2 Bottom - matching user screenshot */}
        <div className="space-y-6">
          {/* Top row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companies.slice(0, 3).map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onClick={() => handleCardClick(company.sectorId)}
                className={`bg-white rounded-2xl border p-7 transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  index === 0
                    ? 'border-sky-300 shadow-sm hover:border-sky-500 hover:shadow-xl'
                    : 'border-slate-200 hover:border-sky-300 hover:shadow-xl'
                }`}
              >
                <div>
                  {/* Top row: Badge tag & Arrow icon */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="px-3.5 py-1 rounded-full text-xs font-semibold text-sky-600 bg-sky-50 border border-sky-100">
                      {company.role}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-sky-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>

                  {/* Company Name */}
                  <h3 className="text-2xl font-bold text-sky-700 sm:text-slate-900 group-hover:text-sky-600 transition-colors mb-3">
                    {company.name}
                  </h3>

                  {/* Legal Name */}
                  <p className="text-sm text-slate-500 font-normal leading-relaxed">
                    {company.legalName}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom row: 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {companies.slice(3, 5).map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: 0.25 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onClick={() => handleCardClick(company.sectorId)}
                className="bg-white rounded-2xl border border-slate-200 p-7 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Top row: Badge tag & Arrow icon */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="px-3.5 py-1 rounded-full text-xs font-semibold text-sky-600 bg-sky-50 border border-sky-100">
                      {company.role}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-sky-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>

                  {/* Company Name */}
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-3">
                    {company.name}
                  </h3>

                  {/* Legal Name */}
                  <p className="text-sm text-slate-500 font-normal leading-relaxed">
                    {company.legalName}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
