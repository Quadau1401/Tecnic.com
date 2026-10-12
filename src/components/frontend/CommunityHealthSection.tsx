import React from 'react';
import { HeartHandshake, CheckCircle2, FileText, ArrowRight, ShieldCheck, Award } from 'lucide-react';

interface CommunityHealthSectionProps {
  onExploreReports: () => void;
  onRequestAssistance: () => void;
}

export const CommunityHealthSection: React.FC<CommunityHealthSectionProps> = ({
  onExploreReports,
  onRequestAssistance,
}) => {
  return (
    <section id="community" className="py-20 bg-slate-50 border-b border-slate-200 font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#00b4d8] block mb-2">
            SỨC KHỎE CỘNG ĐỒNG & TRÁCH NHIỆM XÃ HỘI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Chương Trình &ldquo;Tái Sinh Cuộc Sống&rdquo;
          </h2>
          <p className="mt-3 text-base text-slate-600 font-medium">
            Hiện thực hóa Biên bản ghi nhớ hợp tác (MOU) hỗ trợ người khuyết tật, bệnh nhân sau tai biến và các chương trình y tế thiện nguyện trên toàn quốc.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>Biên Bản Ghi Nhớ Hợp Tác (MOU) Đã Ký Kết</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Đồng hành cùng bệnh nhân khó khăn & người khuyết tật Việt Nam
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              TECNIC MEDTECH cam kết dành ngân sách thường niên từ quỹ phúc lợi xã hội để trao tặng thiết bị trợ giúp di chuyển, đào tạo kỹ thuật chống loét tì đè và đồng hành cùng các y bác sĩ phục hồi chức năng tuyến cơ sở.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-800 pt-2">
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>500 xe lăn trợ lực cao cấp trao tặng</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>1.200 bộ khung tập đi có phanh an toàn</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>36 buổi tập huấn chuyên sâu phòng loét</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bảo trì và cung cấp linh kiện miễn phí 3 năm</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExploreReports}
                className="px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Đọc Báo Cáo CSR & MOU Chi Tiết</span>
              </button>

              <button
                onClick={onRequestAssistance}
                className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm cursor-pointer"
              >
                Đăng ký đề xuất hỗ trợ
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-4/3 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                alt="Hoạt động y tế sức khỏe cộng đồng TECNIC"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
