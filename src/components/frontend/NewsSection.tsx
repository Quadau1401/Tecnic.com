import React, { useState } from 'react';
import { NewsArticle } from '../../types';
import { initialCareers, CareerOpportunity } from '../../data/initialData';
import { Calendar, Newspaper, ArrowRight, X, Briefcase, MapPin, DollarSign, CheckCircle2, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NewsSectionProps {
  news: NewsArticle[];
  onRequestQuote?: (subject: string) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ news, onRequestQuote }) => {
  const [activeTab, setActiveTab] = useState<'news' | 'careers'>('news');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);
  const [activeCareer, setActiveCareer] = useState<CareerOpportunity | null>(null);

  const handleApply = (careerTitle: string) => {
    setActiveCareer(null);
    if (onRequestQuote) {
      onRequestQuote(`Ứng tuyển vị trí: ${careerTitle}`);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="news" className="py-20 bg-white border-b border-slate-200 scroll-mt-20 relative">
      <div id="news-careers" className="absolute -top-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Newspaper className="w-3.5 h-3.5 text-sky-600" />
            Tin Tức & Tuyển Dụng
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hoạt Động Doanh Nghiệp & Cơ Hội Nghề Nghiệp
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Cập nhật những bước tiến mới trong hợp tác đa ngành, ký kết đối tác và gia nhập đội ngũ chuyên gia của TECNIC Group.
          </p>

          {/* Sub Tab Switcher */}
          <div className="inline-flex p-1 bg-slate-100 rounded-2xl mt-8 border border-slate-200">
            <button
              onClick={() => setActiveTab('news')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'news'
                  ? 'bg-white text-sky-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tin Tức & Hoạt Động ({news.length})
            </button>
            <button
              onClick={() => setActiveTab('careers')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'careers'
                  ? 'bg-white text-sky-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tuyển Dụng & Việc Làm ({initialCareers.length})
            </button>
          </div>
        </div>

        {/* Tab 1: News Articles */}
        {activeTab === 'news' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-sky-400"
              >
                <div>
                  <div className="aspect-16/9 bg-slate-100 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <span className="absolute top-3 left-3 bg-blue-900/90 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.publishDate}
                      </span>
                      <span>•</span>
                      <span className="truncate">{item.author}</span>
                    </div>

                    <h3
                      onClick={() => setActiveArticle(item)}
                      className="font-bold text-slate-900 text-base group-hover:text-sky-600 transition-colors line-clamp-2 cursor-pointer leading-snug"
                    >
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setActiveArticle(item)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-sky-600 text-slate-700 group-hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Đọc Chi Tiết</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Careers & Job Openings */}
        {activeTab === 'careers' && (
          <div className="space-y-4 max-w-4xl mx-auto">
            {initialCareers.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-sky-400 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-700 text-xs font-bold border border-sky-100">
                      {car.department}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {car.location}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {car.salary}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {car.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2">
                    {car.description}
                  </p>
                </div>

                <div className="flex sm:flex-col gap-2 shrink-0">
                  <button
                    onClick={() => setActiveCareer(car)}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Yêu Cầu Tuyển Dụng
                  </button>
                  <button
                    onClick={() => handleApply(car.title)}
                    className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-colors shadow-sm flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Ứng Tuyển</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 my-8"
            >
              <div className="relative aspect-video bg-slate-100">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-900/80 text-white hover:bg-slate-900 rounded-full cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="font-bold text-sky-600">{activeArticle.category}</span>
                  <span>•</span>
                  <span>{activeArticle.publishDate}</span>
                  <span>•</span>
                  <span>{activeArticle.author}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{activeArticle.title}</h3>

                <div className="text-sm text-slate-700 leading-relaxed space-y-3 whitespace-pre-line">
                  {activeArticle.content}
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Career Detail Modal */}
      <AnimatePresence>
        {activeCareer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 my-8 p-6 sm:p-8 space-y-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wide">
                    {activeCareer.department}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">{activeCareer.title}</h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-slate-600">
                    <span>{activeCareer.location}</span>
                    <span>•</span>
                    <span className="font-bold text-emerald-700">{activeCareer.salary}</span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveCareer(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-4">
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Mô tả công việc:</h4>
                  <p>{activeCareer.description}</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Yêu cầu ứng viên:</h4>
                  <div className="space-y-1.5">
                    {activeCareer.requirements.map((req, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveCareer(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  onClick={() => handleApply(activeCareer.title)}
                  className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Nộp Hồ Sơ / Liên Hệ Ứng Tuyển</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
