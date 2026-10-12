import React from 'react';
import { HeartPulse, Accessibility, Stethoscope, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface PillarsSectionProps {
  onSelectCategory: (category: 'preventive' | 'rehab' | 'hospital') => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="pillars" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HeartPulse className="w-3.5 h-3.5 text-blue-700" />
            3 Trụ Cột Y Tế Cốt Lõi
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Giải Pháp Y Tế Toàn Diện Cho Mọi Nhu Cầu
          </h2>
          <p className="mt-3 text-base text-slate-600 font-medium">
            Tích hợp dữ liệu và năng lực chuyên sâu từ <strong className="text-blue-900">tecnic.vn</strong> và <strong className="text-blue-900">ytetecnic.vn</strong>, phục vụ từ gia đình đến các bệnh viện hàng đầu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pillar 1: Y tế dự phòng */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-blue-400">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HeartPulse className="w-7 h-7" />
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                  tecnic.vn
                </span>
                <span className="text-xs text-slate-400 font-semibold">Trụ cột 01</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                Y Tế Dự Phòng & Chăm Sóc Sức Khỏe Gia Đình
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Chủ động kiểm soát sinh hiệu và tầm soát sớm nguy cơ đột quỵ, tim mạch ngay tại nhà cho mọi thành viên trong gia đình.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-700 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Cân phân tích 18 chỉ số cơ thể & mỡ nội tạng</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Máy đo huyết áp điện tử cảnh báo rối loạn nhịp</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Máy đo đường huyết & sinh hóa cá nhân</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Máy siêu âm Doppler cá nhân / thai nhi tại nhà</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Túi chườm nóng lạnh & thiết bị y tế thể thao</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectCategory('preventive')}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-emerald-600 text-slate-700 group-hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Xem Thiết Bị Dự Phòng Gia Đình</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pillar 2: Phục hồi chức năng */}
          <div className="bg-white rounded-2xl p-8 border-2 border-blue-600 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative">
            {/* Best Seller / Core badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-700 to-red-600 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md tracking-wider">
              Thế Mạnh Cốt Lõi • TECNIC MEDTECH
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Accessibility className="w-7 h-7" />
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  ytetecnic.vn
                </span>
                <span className="text-xs text-slate-400 font-semibold">Trụ cột 02</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                Phục Hồi Chức Năng & Hỗ Trợ Vận Động
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Giải pháp hàng đầu giúp người sau tai biến, phẫu thuật xương khớp và người khuyết tật tái sinh khả năng vận động tự chủ.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-700 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Khung tập đi 4 bánh có phanh an toàn & ghế ngồi</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Xe lăn y tế thông minh, xe lăn điện trợ lực gập gọn</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Đệm khí y tế chống loét đa buồng khí luân phiên</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Đai nẹp khớp & cột sống Bonbone (Nhật Bản)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Robot và dụng cụ tập vật lý trị liệu phục hồi</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectCategory('rehab')}
              className="w-full py-2.5 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow"
            >
              <span>Xem Thiết Bị Phục Hồi Chức Năng</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pillar 3: Công nghệ y tế chuyên sâu cho Bệnh viện */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-blue-400">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Stethoscope className="w-7 h-7" />
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                  tecnic.com.vn
                </span>
                <span className="text-xs text-slate-400 font-semibold">Trụ cột 03</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                Công Nghệ Bệnh Viện & Cơ Sở Y Tế Chuyên Sâu
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Đối tác cung ứng trang thiết bị phòng mổ, khoa hồi sức cấp cứu (ICU) và giải pháp chuyển đổi số y tế cho hơn 180 bệnh viện.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-700 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Giường bệnh nhân điện tử đa chức năng 5 động cơ</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Hệ thống Robot NeuroRehab phục hồi thần kinh</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Hệ thống khí oxy y tế & thiết bị phòng mổ</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Giải pháp chuyển đổi số và quản lý thiết bị y tế</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Dịch vụ hiệu chuẩn & bảo trì chuẩn ISO 13485</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectCategory('hospital')}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-amber-600 text-slate-700 group-hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Xem Thiết Bị Bệnh Viện & Dự Án</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
