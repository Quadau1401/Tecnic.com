import React, { useState, useEffect } from 'react';
import { CompanyInfo, Inquiry } from '../../types';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Building2,
  ExternalLink,
  ShieldCheck,
  FileText,
  AlertCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactSectionProps {
  companyInfo: CompanyInfo;
  prefilledProduct?: string;
  onSubmitInquiry: (data: Omit<Inquiry, 'id' | 'createdAt' | 'status'>) => Promise<Inquiry>;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  companyInfo,
  prefilledProduct,
  onSubmitInquiry,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    serviceInterest: 'Y tế & Medtech (TECNIC MEDICAL)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<Inquiry | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({
        ...prev,
        serviceInterest: `Yêu cầu báo giá: ${prefilledProduct}`,
        message: `Tôi quan tâm đến: ${prefilledProduct}. Vui lòng gửi hồ sơ năng lực, catalog kỹ thuật và chính sách hợp tác chi tiết.`,
      }));
    }
  }, [prefilledProduct]);

  const serviceOptions = [
    'Y tế & Medtech (TECNIC MEDICAL)',
    'Năng lượng & Điện mặt trời C&I (TECNIC ELECTRIC)',
    'Khoáng sản CaCO₃ & Đá tự nhiên (TECMIN)',
    'Công nghệ Vật liệu (TECNIC MAT)',
    'Logistics chuỗi lạnh & Vận tải hàng rời (TECIN LOGISTICS)',
    'Chương trình CSR & Sức khỏe cộng đồng',
    'Ứng tuyển nhân sự & Việc làm',
    'Hợp tác đầu tư & Phát triển dự án',
    'Khác',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.fullName.trim()) {
      setErrorMessage('Vui lòng nhập họ và tên của bạn.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Vui lòng nhập số điện thoại để chúng tôi liên hệ.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await onSubmitInquiry(formData);
      setSubmittedInquiry(res);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        organization: '',
        serviceInterest: 'Y tế & Medtech (TECNIC MEDICAL)',
        message: '',
      });
    } catch (err) {
      console.error('Lỗi gửi biểu mẫu liên hệ:', err);
      setErrorMessage('Có lỗi phát sinh khi gửi yêu cầu. Vui lòng gọi trực tiếp hotline 034 84 02466 - 0988.386.996.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 font-sans scroll-mt-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5 text-sky-700" />
            KẾT NỐI & HỢP TÁC DOANH NGHIỆP
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Liên Hệ Tập Đoàn TECNIC
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Sẵn sàng kết nối, tư vấn giải pháp và hợp tác phát triển trong 5 lĩnh vực hệ sinh thái. Phản hồi yêu cầu trong vòng 15 phút.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 pb-4 border-b border-slate-100 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-sky-600" />
                Thông Tin Tập Đoàn TECNIC
              </h3>

              <div className="space-y-5 text-xs sm:text-sm text-slate-700">
                {/* Headquarters */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Trụ sở điều hành Hà Nội:</strong>
                    <span className="leading-relaxed">{companyInfo.headquarters}</span>
                  </div>
                </div>

                {/* Branch HCM */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Văn phòng đại diện TP.HCM:</strong>
                    <span className="leading-relaxed">{companyInfo.branchHcm}</span>
                  </div>
                </div>

                {/* Hotline */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Hotline hỗ trợ 24/7:</strong>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <a
                        href="tel:0348402466"
                        className="font-bold text-sky-600 hover:text-sky-800 text-sm hover:underline"
                      >
                        034 84 02466
                      </a>
                      <span className="text-slate-400">/</span>
                      <a
                        href="tel:0988386996"
                        className="font-bold text-sky-600 hover:text-sky-800 text-sm hover:underline"
                      >
                        0988.386.996
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Hòm thư điện tử:</strong>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-sky-600 hover:underline font-medium"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Thời gian làm việc:</strong>
                    <span>{companyInfo.workingHours}</span>
                  </div>
                </div>

                {/* Legal Tax ID */}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-1 text-xs text-slate-500">
                  <div className="flex justify-between">
                    <span>Mã số thuế Tập đoàn:</span>
                    <span className="font-mono font-bold text-slate-800">{companyInfo.taxIdGroup}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mã số thuế Y tế (Tecnic Med):</span>
                    <span className="font-mono font-bold text-slate-800">{companyInfo.taxIdMedical}</span>
                  </div>
                </div>
              </div>

              {/* Direct Quick Action Buttons */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                <a
                  href="tel:0348402466"
                  className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Gọi Hotline</span>
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Gửi Email</span>
                </a>
              </div>
            </div>

            {/* Quality Commitment Card */}
            <div className="bg-gradient-to-br from-[#001738] to-[#002f6c] p-6 rounded-3xl text-white shadow-lg space-y-3">
              <div className="flex items-center gap-2 text-sky-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>CAM KẾT DỊCH VỤ & BẢO HÀNH</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-normal">
                100% trang thiết bị có đầy đủ hồ sơ kiểm chuẩn kỹ thuật, bảo hành chính hãng từ 12 - 36 tháng, hỗ trợ kỹ thuật tận nơi 24/7 trên toàn bộ 63 tỉnh thành.
              </p>
            </div>
          </div>

          {/* Right Column: Contact / Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            {submittedInquiry ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Gửi Yêu Cầu Thành Công!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Cảm ơn quý đối tác <strong className="text-slate-900">{submittedInquiry.fullName}</strong>. Chuyên viên phụ trách của TECNIC sẽ trực tiếp liên hệ lại qua số điện thoại <strong className="text-slate-900">{submittedInquiry.phone}</strong> trong vòng 15 phút.
                </p>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-600">
                  <div><strong>Nội dung:</strong> {submittedInquiry.serviceInterest}</div>
                  {submittedInquiry.organization && <div><strong>Đơn vị:</strong> {submittedInquiry.organization}</div>}
                  <div><strong>Thời gian gửi:</strong> {submittedInquiry.createdAt}</div>
                </div>

                <button
                  onClick={() => setSubmittedInquiry(null)}
                  className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  Gửi thêm yêu cầu khác
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Gửi Thông Tin Hợp Tác & Tư Vấn
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Điền biểu mẫu dưới đây hoặc gọi hotline trực tiếp để nhận báo giá và catalogue nhanh nhất.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Họ và Tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Số Điện Thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0988 123 456"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Địa Chỉ Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@gmail.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Tên Đơn Vị / Tổ Chức / Doanh Nghiệp
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Bệnh viện / Công ty / BQL dự án"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Lĩnh Vực / Nội Dung Quan Tâm <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                  >
                    {serviceOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Nội Dung Chi Tiết / Yêu Cầu Kỹ Thuật
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mô tả số lượng cần báo giá, tiến độ triển khai hoặc các yêu cầu kỹ thuật chi tiết..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-2xl bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-sky-500/25 transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Đang gửi thông tin...' : 'GỬI YÊU CẦU LIÊN HỆ'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
