import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CompanyInfo } from '../../types';
import { Award, ShieldCheck, Users, Sparkles, ArrowRight, X, Compass, Target, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  companyInfo: CompanyInfo;
  onExploreProjects: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ companyInfo, onExploreProjects }) => {
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  return (
    <section id="about" className="py-24 bg-white border-b border-slate-100 font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Team / Operation Photo with Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
                alt="Đội ngũ TECNIC Group phát triển hệ sinh thái"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-sm bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-100">
                <span className="text-[11px] font-bold text-[#00b4d8] uppercase tracking-wider block mb-1">
                  ĐỊNH VỊ THƯƠNG HIỆU
                </span>
                <h4 className="text-base font-extrabold text-slate-900 tracking-tight">
                  Kiến tạo giá trị bằng công nghệ
                </h4>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  Kết nối công nghệ, chuyên môn và nguồn lực thực tiễn.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Câu chuyện thương hiệu "Từ công nghệ đến giá trị thực" */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#00b4d8] block mb-2">
                CÂU CHUYỆN THƯƠNG HIỆU
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Từ công nghệ đến giá trị thực
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              <p>
                TECNIC phát triển các doanh nghiệp chuyên môn trong từng lĩnh vực, tập trung xây dựng năng lực về sản phẩm, giải pháp và dịch vụ phù hợp với nhu cầu thực tế của thị trường.
              </p>
              <p>
                Thông qua việc kết nối các nguồn lực, đội ngũ chuyên môn và mạng lưới đối tác, TECNIC hướng tới xây dựng một hệ sinh thái có khả năng phát triển bền vững và tạo ra giá trị lâu dài.
              </p>
            </div>

            {/* Mission & Brand Positioning Alignment */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
                <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-blue-700" />
                  ĐỊNH VỊ THƯƠNG HIỆU
                </span>
                <p className="font-extrabold text-slate-900 text-sm">
                  {companyInfo.slogan}
                </p>
                <span className="text-[11px] text-slate-500 mt-1 block">TECNIC làm gì / Định vị như thế nào</span>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                <span className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-emerald-700" />
                  SỨ MỆNH
                </span>
                <p className="font-extrabold text-slate-900 text-sm">
                  {companyInfo.mission}
                </p>
                <span className="text-[11px] text-slate-500 mt-1 block">TECNIC theo đuổi giá trị nào</span>
              </div>
            </div>

            {/* Core Values: Chuyên môn · Trách nhiệm · Hợp tác · Đổi mới */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                GIÁ TRỊ CỐT LÕI
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {companyInfo.coreValues.map((v, i) => (
                  <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                    <span className="block font-bold text-xs text-slate-900">{v.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex items-center gap-4">
              <button
                onClick={() => setDetailModalOpen(true)}
                className="px-6 py-3 rounded-xl bg-[#0056b3] hover:bg-[#004494] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-blue-900/20 hover:shadow-blue-900/40 transition-all cursor-pointer"
              >
                <span>Xem chi tiết hồ sơ</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreProjects}
                className="px-5 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Dự án tiêu biểu &rarr;
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Detail Modal with AnimatePresence */}
      <AnimatePresence>
        {detailModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 my-8"
            >
            <div className="bg-[#001f4d] text-white p-6 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-cyan-300">HỒ SƠ TẬP ĐOÀN TECNIC</span>
                <h3 className="text-xl font-bold text-white mt-1">Từ Công Nghệ Đến Giá Trị Thực</h3>
              </div>
              <button
                onClick={() => setDetailModalOpen(false)}
                className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-5 max-h-[65vh] overflow-y-auto text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">Giới thiệu</h4>
                <p>{companyInfo.aboutSummary}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">Sứ mệnh: {companyInfo.mission}</h4>
                <p>
                  Định vị “Kiến tạo giá trị bằng công nghệ” và sứ mệnh “Kiến tạo để phụng sự” tạo nên định hướng xuyên suốt cho các doanh nghiệp thành viên: TECNIC MEDICAL, TECMIN, TECNIC ELECTRIC và TECNIC MAT.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <span className="font-bold text-slate-900 block">Thông tin pháp nhân</span>
                <div className="flex justify-between border-b border-slate-200 pb-1">
                  <span className="text-slate-500">Mã số thuế Tập đoàn:</span>
                  <span className="font-bold font-mono text-slate-900">{companyInfo.taxIdGroup}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1">
                  <span className="text-slate-500">Mã số thuế Medtech:</span>
                  <span className="font-bold font-mono text-slate-900">{companyInfo.taxIdMedical}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Trụ sở:</span>
                  <span className="font-semibold text-slate-800 text-right max-w-xs">{companyInfo.headquarters}</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">Giá trị cốt lõi:</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {companyInfo.coreValues.map((v, idx) => (
                    <div key={idx} className="p-2.5 bg-blue-50/60 rounded-xl border border-blue-100">
                      <strong className="text-blue-900 block">{v.title}</strong>
                      <span className="text-slate-600 text-[11px] leading-tight">{v.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setDetailModalOpen(false)}
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold"
              >
                Đóng
              </button>
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
