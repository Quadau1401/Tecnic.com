import React from 'react';
import { motion } from 'framer-motion';
import { Package, Cpu, FolderKanban, Handshake, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CapabilitiesSectionProps {
  onNavigateToProducts: () => void;
  onNavigateToProjects: () => void;
  onNavigateToReports: () => void;
  onContactClick: () => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({
  onNavigateToProducts,
  onNavigateToProjects,
  onNavigateToReports,
  onContactClick,
}) => {
  const capabilities = [
    {
      title: 'SẢN PHẨM',
      subtitle: 'Danh mục sản phẩm và giải pháp',
      desc: 'Cung cấp thiết bị y tế đạt chuẩn ISO 13485:2016, bột khoáng CaCO₃ siêu mịn và đá tự nhiên gia công cao cấp cho các công trình lớn.',
      icon: Package,
      actionText: 'Xem danh mục sản phẩm',
      onClick: onNavigateToProducts,
      highlights: ['65.000+ thiết bị y tế bàn giao', 'Đá tự nhiên quy cách cao cấp TECMIN', 'Chứng nhận xuất xứ & kiểm chuẩn CO/CQ'],
    },
    {
      title: 'CÔNG NGHỆ',
      subtitle: 'Năng lực công nghệ và chuyên môn',
      desc: 'Làm chủ công nghệ phục hồi chức năng Robot NeuroRehab, IoT kết nối dữ liệu sức khỏe tại nhà và công nghệ nghiền mịn khoáng sản châu Âu.',
      icon: Cpu,
      actionText: 'Xem báo cáo kỹ thuật & ISO',
      onClick: onNavigateToReports,
      highlights: ['Chuẩn an toàn điện y tế IEC 60601', 'Hệ thống quản lý chất lượng ISO 13485', 'Nghiên cứu lâm sàng phục hồi sau đột quỵ'],
    },
    {
      title: 'DỰ ÁN',
      subtitle: 'Các dự án đã triển khai',
      desc: 'Thực tế triển khai tại các đại dự án Vinhomes Royal Island Vũ Yên, Vinhomes Ocean Park 3 và các bệnh viện đa khoa tuyến trung ương.',
      icon: FolderKanban,
      actionText: 'Khám phá dự án thực tế',
      onClick: onNavigateToProjects,
      highlights: ['Vinhomes Royal Island – Vũ Yên', 'The Crown – Vinhomes Ocean Park 3', 'Hơn 180 bệnh viện đối tác toàn quốc'],
    },
    {
      title: 'ĐỐI TÁC',
      subtitle: 'Mạng lưới khách hàng và đối tác',
      desc: 'Hợp tác bền chặt cùng các tập đoàn bất động sản, hệ thống y tế công lập - tư nhân, viện nghiên cứu và hội bảo trợ người khuyết tật.',
      icon: Handshake,
      actionText: 'Liên hệ hợp tác',
      onClick: onContactClick,
      highlights: ['MOU bảo trợ người khuyết tật', 'Đối tác chuyển giao công nghệ Nhật Bản', 'Đại diện phân phối Bonbone chính ngạch'],
    },
  ];

  return (
    <section id="capabilities" className="py-24 bg-white border-b border-slate-200 font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#00b4d8] block mb-2">
            NĂNG LỰC THỰC TẾ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Chứng Minh Bằng Kết Quả Thực Tiễn
          </h2>
          <p className="mt-3 text-base text-slate-600 font-medium">
            Định vị &ldquo;Kiến tạo giá trị bằng công nghệ&rdquo; được khẳng định qua sản phẩm cụ thể, năng lực công nghệ, dự án bàn giao và mạng lưới đối tác tin cậy.
          </p>
        </motion.div>

        {/* 4 Capabilities Cards with Staggered Scroll Fade-in */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-slate-50 p-6 rounded-3xl border border-slate-200 hover:border-blue-400 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-100/80 text-blue-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-black text-slate-900 tracking-tight mb-0.5">
                    {c.title}
                  </h3>
                  <span className="text-xs font-bold text-[#00b4d8] block mb-3">
                    {c.subtitle}
                  </span>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">
                    {c.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-200/80">
                    {c.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4">
                  <button
                    onClick={c.onClick}
                    className="w-full py-2.5 px-3 rounded-xl bg-white group-hover:bg-blue-700 text-slate-800 group-hover:text-white border border-slate-200 group-hover:border-blue-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                  >
                    <span>{c.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
