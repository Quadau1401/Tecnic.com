import React from 'react';
import { Heart, Sparkles, Target, Users2, Award, CheckCircle2 } from 'lucide-react';

export const CultureSection: React.FC = () => {
  const pillars = [
    {
      title: 'Quản Trị Bằng Văn Hóa',
      desc: 'Lấy văn hóa doanh nghiệp làm kim chỉ nam điều hành, đề cao sự tự giác, trách nhiệm cá nhân và sự phối hợp nhịp nhàng giữa 5 công ty thành viên.',
      icon: Target,
    },
    {
      title: 'Đổi Mới & Sáng Tạo Không Ngừng',
      desc: 'Khuyến khích mọi sáng kiến kỹ thuật, cải tiến quy trình và ứng dụng công nghệ số vào quản trị và sản xuất thiết bị y tế.',
      icon: Sparkles,
    },
    {
      title: 'Y Đức & Tinh Thần Phụng Sự',
      desc: 'Đặt sức khỏe, sự an toàn và phục hồi của người bệnh lên hàng đầu; kinh doanh gắn liền với trách nhiệm phụng sự xã hội.',
      icon: Heart,
    },
    {
      title: 'Môi Trường Bình Đẳng & Phát Triển',
      desc: 'Đầu tư mạnh mẽ cho đào tạo nội bộ, lộ trình thăng tiến minh bạch và chế độ đãi ngộ cạnh tranh cho nhân sự.',
      icon: Users2,
    },
  ];

  return (
    <section id="culture" className="py-20 bg-white border-b border-slate-200 font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#00b4d8] block mb-2">
            VĂN HÓA DOANH NGHIỆP
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nền Tảng Tinh Thần Tạo Dựng Sức Mạnh TECNIC
          </h2>
          <p className="mt-3 text-base text-slate-600 font-medium">
            Mô hình quản trị bằng văn hóa doanh nghiệp gắn kết hơn 500 cán bộ nhân viên, kỹ sư và chuyên gia trên toàn quốc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-3xl border border-slate-200 hover:border-blue-400 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-100/80 text-blue-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Corporate Quote Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#001738] to-[#002f6c] p-8 rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs text-cyan-300 font-bold uppercase tracking-wider">
              THÔNG ĐIỆP CHỦ TỊCH HỘI ĐỒNG QUẢN TRỊ
            </span>
            <blockquote className="text-lg sm:text-xl font-bold italic text-slate-100">
              &ldquo;Công nghệ là công cụ, con người là linh hồn, và văn hóa là sức mạnh trường tồn của TECNIC.&rdquo;
            </blockquote>
          </div>
          <div className="shrink-0 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs text-center font-bold">
            Kiến tạo để phụng sự
          </div>
        </div>
      </div>
    </section>
  );
};
