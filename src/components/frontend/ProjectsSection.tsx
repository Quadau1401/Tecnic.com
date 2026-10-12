import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { initialProjects } from '../../data/initialData';
import { ProjectItem } from '../../types';
import { MapPin, ArrowUpRight, CheckCircle2, X, PhoneCall } from 'lucide-react';

interface ProjectsSectionProps {
  onRequestQuote: (subject: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onRequestQuote }) => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'Tất Cả Dự Án' },
    { id: 'khoang-san', label: 'Khoáng Sản & Đá (TECMIN)' },
    { id: 'y-te', label: 'Y Tế & ICU (TECNIC MEDICAL)' },
    { id: 'nang-luong', label: 'Năng Lượng (TECNIC ELECTRIC)' },
    { id: 'logistics', label: 'Logistics (TECIN LOGISTICS)' },
    { id: 'csr', label: 'Cộng Đồng (CSR)' },
  ];

  const filteredProjects = initialProjects.filter((p) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'khoang-san') return p.unit === 'TECMIN';
    if (selectedFilter === 'y-te') return p.unit === 'TECNIC MEDICAL' && p.sector !== 'Sức Khỏe Cộng Đồng';
    if (selectedFilter === 'nang-luong') return p.unit === 'TECNIC ELECTRIC';
    if (selectedFilter === 'logistics') return p.unit === 'TECIN LOGISTICS';
    if (selectedFilter === 'csr') return p.sector === 'Sức Khỏe Cộng Đồng';
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-slate-50 border-b border-slate-200 font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-500 block mb-2">
            BẰNG CHỨNG GIÁ TRỊ THỰC TIỄN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dự Án Tiêu Biểu Đã Triển Khai
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Chứng minh cho định vị &ldquo;Kiến tạo giá trị bằng công nghệ&rdquo; qua các đại dự án hạ tầng đô thị, hệ thống giải pháp y tế, điện mặt trời và chuỗi logistics của tập đoàn.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveProject(project)}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:border-sky-400 hover:-translate-y-1"
            >
              <div>
                {/* Photo & Tag */}
                <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                  <span className="absolute top-3 left-3 bg-blue-900/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md">
                    {project.sector}
                  </span>

                  <span className="absolute bottom-3 left-3 text-xs text-white/90 font-medium flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-sky-300" />
                    {project.location}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <span className="text-xs font-bold text-sky-600 block mb-1">
                      {project.subtitle}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-sky-600 transition-colors tracking-tight leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-2 text-xs font-bold text-sky-700">
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  {project.status}
                </span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Xem hồ sơ dự án</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal with AnimatePresence */}
      <AnimatePresence>
        {activeProject && (
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
              <div className="relative aspect-video bg-slate-900">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-900/80 text-white hover:bg-slate-900 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs font-bold text-sky-300 uppercase tracking-widest block mb-1">
                    {activeProject.subtitle}
                  </span>
                  <h3 className="text-2xl font-black text-white">{activeProject.title}</h3>
                  <p className="text-xs text-slate-300 mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-sky-300" />
                    {activeProject.location} • Đơn vị thực hiện: {activeProject.unit}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5 max-h-[60vh] overflow-y-auto text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-2 border-l-2 border-sky-600 pl-2.5">
                    Mô Tả & Đóng Góp Dự Án
                  </h4>
                  <p>{activeProject.description}</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-3 border-l-2 border-emerald-600 pl-2.5">
                    Phạm Vi Cung Ứng & Triển Khai
                  </h4>
                  <div className="space-y-2">
                    {activeProject.scope.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-sky-50/70 rounded-2xl border border-sky-100 flex items-center justify-between text-xs">
                  <span>Trạng thái dự án:</span>
                  <span className="font-bold text-emerald-700">{activeProject.status}</span>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center gap-3">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-lg cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  onClick={() => {
                    const pTitle = activeProject.title;
                    setActiveProject(null);
                    onRequestQuote(`Tư vấn giải pháp tương tự dự án: ${pTitle}`);
                  }}
                  className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Liên Hệ Hợp Tác Dự Án</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
