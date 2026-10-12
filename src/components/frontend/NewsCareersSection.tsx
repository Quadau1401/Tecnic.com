import React, { useState } from 'react';
import { NewsArticle } from '../../types';
import { initialCareers, CareerOpportunity } from '../../data/initialData';
import { Calendar, User, Newspaper, Briefcase, MapPin, DollarSign, ArrowRight, X, CheckCircle2, Send } from 'lucide-react';

interface NewsCareersSectionProps {
  news: NewsArticle[];
}

export const NewsCareersSection: React.FC<NewsCareersSectionProps> = ({ news }) => {
  const [activeTab, setActiveTab] = useState<'news' | 'careers'>('news');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);
  const [activeJob, setActiveJob] = useState<CareerOpportunity | null>(null);
  const [applySuccess, setApplySuccess] = useState(false);

  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantNote, setApplicantNote] = useState('');

  const [applyError, setApplyError] = useState('');

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantPhone) {
      setApplyError('Vui lòng điền họ tên và số điện thoại.');
      return;
    }
    setApplyError('');
    setApplySuccess(true);
    setTimeout(() => {
      setApplySuccess(false);
      setActiveJob(null);
      setApplicantName('');
      setApplicantPhone('');
      setApplicantEmail('');
      setApplicantNote('');
    }, 2500);
  };

  return (
    <section id="news-careers" className="py-20 bg-slate-50 border-b border-slate-200 font-sans scroll-mt-20 relative">
      <div id="news" className="absolute -top-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#00b4d8] block mb-2">
            THÔNG TIN DOANH NGHIỆP
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tin Tức & Cơ Hội Nghề Nghiệp
          </h2>
          <p className="mt-3 text-base text-slate-600 font-medium">
            Cập nhật những hoạt động chiến lược mới nhất và gia nhập đội ngũ nhân sự tài năng tại TECNIC.
          </p>

          {/* Toggle Tab */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 mt-6 gap-1 shadow-inner">
            <button
              onClick={() => setActiveTab('news')}
              className={`px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'news'
                  ? 'bg-blue-700 text-white shadow'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Tin Tức & Sự Kiện ({news.length})
            </button>
            <button
              onClick={() => setActiveTab('careers')}
              className={`px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'careers'
                  ? 'bg-blue-700 text-white shadow'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Cơ Hội Tuyển Dụng ({initialCareers.length})
            </button>
          </div>
        </div>

        {/* News Tab Content */}
        {activeTab === 'news' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-blue-400"
              >
                <div>
                  <div className="aspect-16/9 bg-slate-100 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-blue-900/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.publishDate}</span>
                    </div>

                    <h3
                      onClick={() => setActiveArticle(item)}
                      className="font-bold text-slate-900 text-base group-hover:text-blue-700 transition-colors line-clamp-2 cursor-pointer leading-snug"
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
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-blue-700 text-slate-700 group-hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Xem bài viết</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Careers Tab Content */}
        {activeTab === 'careers' && (
          <div className="space-y-4 max-w-4xl mx-auto">
            {initialCareers.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-blue-400"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-700">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.department}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-emerald-700">
                      <DollarSign className="w-3.5 h-3.5" /> {job.salary}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600">{job.type}</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveJob(job)}
                  className="px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shrink-0 cursor-pointer shadow transition-all"
                >
                  Ứng Tuyển Ngay
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Article Reader Modal */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 border border-slate-200 my-8">
              <div className="relative aspect-video bg-slate-900">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-900/80 text-white rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto text-xs sm:text-sm text-slate-700">
                <h3 className="text-xl font-bold text-slate-900">{activeArticle.title}</h3>
                <p className="font-semibold text-blue-900 bg-blue-50 p-4 rounded-xl">
                  {activeArticle.summary}
                </p>
                <p className="leading-relaxed">{activeArticle.content}</p>
                <div className="pt-2 text-[11px] text-slate-400">Nguồn: {activeArticle.source}</div>
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2 bg-slate-800 text-white rounded-xl text-xs font-bold"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Job Application Modal */}
        {activeJob && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 border border-slate-200 my-8">
              <div className="bg-[#001f4d] text-white p-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">
                    ỨNG TUYỂN VỊ TRÍ
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">{activeJob.title}</h3>
                </div>
                <button
                  onClick={() => setActiveJob(null)}
                  className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {applySuccess ? (
                <div className="p-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-slate-900 text-base">Nộp hồ sơ ứng tuyển thành công!</h4>
                  <p className="text-xs text-slate-600">
                    Phòng Nhân sự Tập đoàn TECNIC sẽ liên hệ phỏng vấn bạn trong vòng 3 ngày làm việc.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApply} className="p-6 space-y-4 text-xs sm:text-sm">
                  {applyError && (
                    <div className="p-2.5 rounded-lg bg-red-50 text-red-700 text-xs border border-red-200">
                      {applyError}
                    </div>
                  )}
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Họ và Tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Số Điện Thoại <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0988.xxx.xxx"
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Email</label>
                      <input
                        type="email"
                        placeholder="email@domain.com"
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Giới thiệu ngắn về kinh nghiệm / Đường dẫn CV
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tóm tắt số năm kinh nghiệm, kỹ năng chính..."
                      value={applicantNote}
                      onChange={(e) => setApplicantNote(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveJob(null)}
                      className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 font-semibold"
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold flex items-center gap-1.5 shadow"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Gửi Hồ Sơ Ứng Tuyển</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
