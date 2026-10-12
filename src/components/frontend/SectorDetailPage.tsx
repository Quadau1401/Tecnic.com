import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sectorDetailedData, SectorDetailedInfo, SectorProductItem } from '../../data/sectorDetailedData';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
  Award,
  Layers,
  Sparkles,
  Factory,
  Stethoscope,
  Zap,
  Truck,
  Building2,
  FileText,
  HelpCircle,
  ChevronRight,
  Send,
  Eye,
  X,
  Share2,
  Check,
} from 'lucide-react';
import { api } from '../../services/api';

interface SectorDetailPageProps {
  sectorId: string;
  onSelectSector: (sectorId: string) => void;
  onBackToHome: () => void;
  onRequestQuote: (subject: string) => void;
}

export const SectorDetailPage: React.FC<SectorDetailPageProps> = ({
  sectorId,
  onSelectSector,
  onBackToHome,
  onRequestQuote,
}) => {
  const sector: SectorDetailedInfo = sectorDetailedData[sectorId] || sectorDetailedData['y-te'];
  const [selectedProduct, setSelectedProduct] = useState<SectorProductItem | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // In-page consultation form state
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formOrg, setFormOrg] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Scroll to top when sector changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSubmitSuccess(false);
  }, [sectorId]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) {
      alert('Vui lòng nhập họ tên và số điện thoại.');
      return;
    }
    setSubmitting(true);
    try {
      await api.submitInquiry({
        fullName: formName,
        phone: formPhone,
        email: formEmail,
        organization: formOrg || `Khách hàng quan tâm ${sector.unit}`,
        serviceInterest: `${sector.title} (${sector.unit})`,
        message: formMessage || `Yêu cầu tư vấn và báo giá chi tiết cho lĩnh vực ${sector.title}`,
      });
      setSubmitSuccess(true);
      setFormName('');
      setFormPhone('');
      setFormEmail('');
      setFormOrg('');
      setFormMessage('');
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Sector list for navigation bar
  const allSectors = [
    { id: 'y-te', title: 'Y TẾ', unit: 'TECNIC MEDICAL', icon: Stethoscope },
    { id: 'nang-luong', title: 'NĂNG LƯỢNG', unit: 'TECNIC ELECTRIC', icon: Zap },
    { id: 'khoang-san', title: 'KHOÁNG SẢN', unit: 'TECMIN', icon: Factory },
    { id: 'vat-lieu', title: 'VẬT LIỆU', unit: 'TECNIC MAT', icon: Layers },
    { id: 'logistics', title: 'LOGISTICS', unit: 'TECNIC LOGISTICS', icon: Truck },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans pb-24">
      {/* 1. TOP STICKY BAR: Breadcrumbs & 4 Sector Tabs */}
      <div className="bg-slate-900 border-b border-slate-800 text-white sticky top-20 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between py-3 gap-3">
            {/* Back button & Breadcrumb */}
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-cyan-300 font-semibold transition-colors cursor-pointer shrink-0"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Về Trang Chủ</span>
              </button>
              <div className="h-4 w-px bg-slate-700 hidden sm:block"></div>
              <div className="flex items-center gap-1.5 text-slate-400 text-xs overflow-hidden text-ellipsis whitespace-nowrap">
                <span>Hệ sinh thái</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                <span className="text-white font-bold">{sector.unit}</span>
              </div>
            </div>

            {/* Quick 4 Sector Switcher Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {allSectors.map((s) => {
                const isActive = s.id === sector.id;
                const IconComponent = s.icon;
                return (
                  <button
                    key={s.id}
                    onClick={() => onSelectSector(s.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-[#00b4d8] text-slate-950 shadow-md shadow-cyan-500/20 font-black'
                        : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{s.title}</span>
                    <span className="hidden xl:inline text-[10px] opacity-75">({s.unit})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 2. HERO HEADER SECTION */}
      <section className="relative bg-[#001738] text-white overflow-hidden py-16 sm:py-24 border-b border-blue-900/60">
        {/* Background Image with Deep Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={sector.bannerImage}
            alt={sector.title}
            className="w-full h-full object-cover object-center opacity-25 scale-105 filter blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00122e] via-[#001738]/90 to-[#001f4d]/85"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            {/* Unit Tag & Domains Badge */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-extrabold tracking-wider uppercase">
                {sector.unit}
              </span>
              <span className="text-xs text-slate-400 font-medium">| Lĩnh vực hoạt động trọng tâm</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              {sector.title}
            </h1>
            <p className="text-sm sm:text-base text-cyan-200/90 font-medium uppercase tracking-wider mb-5">
              {sector.englishTitle}
            </p>

            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal mb-8 max-w-3xl">
              {sector.tagline}
            </p>

            {/* Official Website Links for this sector */}
            {sector.domains && sector.domains.length > 0 && (
              <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-2xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 block mb-2">
                  Cổng Thông Tin & Nền Tảng Trực Tuyến Chính Thức:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {sector.domains.map((dom, i) => (
                    <a
                      key={i}
                      href={dom.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-900/60 hover:bg-blue-800 text-white text-xs font-bold border border-blue-700/60 hover:border-cyan-400 transition-all group"
                      title={dom.note}
                    >
                      <span className="text-cyan-300 font-mono">{dom.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#sector-inquiry"
                className="px-6 py-3 rounded-xl bg-[#00b4d8] hover:bg-[#0096c7] text-slate-950 font-black text-xs sm:text-sm tracking-wide uppercase transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Đăng ký tư vấn & Báo giá</span>
              </a>
              <a
                href="#sector-products"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-all border border-white/20 flex items-center gap-2"
              >
                <span>Xem giải pháp & sản phẩm</span>
                <ArrowRight className="w-4 h-4 text-cyan-300" />
              </a>
              <button
                onClick={handleCopyLink}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                title="Sao chép liên kết trang"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. KEY METRICS STATS BAR */}
      <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {sector.stats.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-md flex flex-col justify-between hover:border-cyan-500 hover:shadow-lg transition-all"
            >
              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#0056b3] tracking-tight block">
                  {st.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 block mt-1">
                  {st.label}
                </span>
              </div>
              {st.note && (
                <span className="text-[11px] text-slate-500 mt-2 block border-t border-slate-100 pt-2 font-medium">
                  {st.note}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. STRATEGIC OVERVIEW & LEADERSHIP POSITIONING */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#00b4d8] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TẦM NHÌN & ĐỊNH VỊ CHIẾN LƯỢC</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              Kiến tạo giá trị thực tiễn trong ngành {sector.title.toLowerCase()}
            </h2>
            <p className="text-base text-slate-800 font-semibold leading-relaxed border-l-4 border-[#00b4d8] pl-4 py-1">
              {sector.overview.lead}
            </p>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-normal">
              {sector.overview.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 to-[#001738] rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-blue-800">
            <h3 className="text-lg font-bold text-cyan-300 uppercase tracking-wider mb-5 flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>Cam Kết Chất Lượng Chuẩn Mực</span>
            </h3>
            <div className="space-y-4">
              {sector.overview.coreValues.map((cv, i) => (
                <div key={i} className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <h4 className="text-sm font-extrabold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                    <span>{cv.title}</span>
                  </h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed font-normal">
                    {cv.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. THREE CORE PILLARS (PHÂN HỆ TRỌNG TÂM) */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-[#00b4d8] block mb-2">
              NĂNG LỰC TOÀN DIỆN
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              3 Trụ Cột Năng Lực Cốt Lõi Của {sector.unit}
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Mỗi phân hệ được phát triển chuyên sâu với quy trình quản lý chất lượng nghiêm ngặt và đội ngũ kỹ thuật giàu kinh nghiệm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sector.pillars.map((pil, idx) => (
              <div
                key={pil.id}
                className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-cyan-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-[11px] font-extrabold tracking-wide uppercase mb-4">
                    {pil.tag}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors leading-snug">
                    {pil.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-700 mt-2 mb-3">
                    {pil.summary}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">
                    {pil.description}
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-4 space-y-2.5">
                  {pil.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Direct category portal link */}
                <div className="mt-5 pt-3 border-t border-slate-200/80">
                  <a
                    href={
                      pil.id === 'medical-preventive'
                        ? 'https://tecnic.vn'
                        : pil.id === 'medical-rehab'
                        ? 'https://ytetecnic.vn'
                        : 'https://tecnic.com.vn'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-xs font-semibold text-sky-600 hover:text-sky-800 transition-colors group/link"
                  >
                    <span>
                      {pil.id === 'medical-preventive'
                        ? 'Truy cập cổng tecnic.vn'
                        : pil.id === 'medical-rehab'
                        ? 'Truy cập cổng ytetecnic.vn'
                        : 'Xem chi tiết giải pháp'}
                    </span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DETAILED PRODUCTS & SOLUTIONS SHOWCASE */}
      <section id="sector-products" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#00b4d8] block mb-2">
              DANH MỤC THIẾT BỊ & GIẢI PHÁP
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Sản Phẩm Tiêu Biểu Trong Lĩnh Vực {sector.title}
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Cung cấp chi tiết thông số kỹ thuật, chứng chỉ an toàn và đối tượng ứng dụng phục vụ nhu cầu khảo sát và lập dự toán.
            </p>
          </div>
          <button
            onClick={() => onRequestQuote(`Yêu cầu danh mục sản phẩm đầy đủ ${sector.unit}`)}
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-[#0056b3] text-white text-xs font-bold transition-colors cursor-pointer shrink-0 inline-flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-cyan-300" />
            <span>Tải Bảng Giá / Hồ Sơ Thầu</span>
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {sector.products.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:border-[#00b4d8]"
            >
              <div>
                {/* Photo with badges */}
                <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {prod.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 text-cyan-300 text-[10px] font-extrabold uppercase tracking-wide backdrop-blur-sm border border-cyan-400/30">
                      {prod.badge}
                    </span>
                  )}
                  {prod.domainSource && (
                    <span className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-md bg-blue-900/90 text-white text-[10px] font-mono font-bold tracking-tight">
                      {prod.domainSource}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1.5 font-medium">
                    <span>{prod.categoryName}</span>
                    {prod.model && <span className="font-mono font-bold text-blue-900">{prod.model}</span>}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors leading-snug mb-2">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {prod.description}
                  </p>

                  {/* Highlight Features */}
                  <div className="space-y-1.5 mb-4">
                    {prod.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specs Table Preview */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-[11px] space-y-1">
                    {prod.specs.slice(0, 3).map((sp, idx) => (
                      <div key={idx} className="flex justify-between gap-2">
                        <span className="text-slate-500 font-medium">{sp.label}:</span>
                        <span className="font-bold text-slate-800 text-right">{sp.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedProduct(prod)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Chi Tiết</span>
                </button>
                {prod.domainSource && (
                  <a
                    href={`https://${prod.domainSource}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold transition-colors flex items-center justify-center gap-1 border border-sky-200"
                    title={`Mở trang ${prod.domainSource}`}
                  >
                    <span>{prod.domainSource}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => onRequestQuote(`Yêu cầu báo giá sản phẩm: ${prod.name} (${prod.model || ''})`)}
                  className="py-2.5 px-4 rounded-xl bg-[#0056b3] hover:bg-[#004494] text-white text-xs font-bold transition-colors cursor-pointer shadow-sm"
                >
                  Báo Giá
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. REAL-WORLD PROJECTS & CASE STUDIES */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-cyan-400 block mb-2">
              THỰC THI THỰC TẾ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Dự Án Điển Hình Của {sector.unit}
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Năng lực triển khai được khẳng định qua các hợp đồng và công trình trọng điểm trên khắp cả nước.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sector.projects.map((pj) => (
              <div
                key={pj.id}
                className="bg-slate-800/80 rounded-3xl border border-slate-700/80 overflow-hidden shadow-xl flex flex-col justify-between group hover:border-cyan-400 transition-all"
              >
                <div>
                  <div className="relative aspect-16/9 overflow-hidden">
                    <img
                      src={pj.image}
                      alt={pj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest block">
                        {pj.location} · {pj.year}
                      </span>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {pj.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-700 pb-2">
                      <span>Chủ đầu tư / Đối tác:</span>
                      <span className="font-bold text-white text-right">{pj.client}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-700 pb-2">
                      <span>Quy mô triển khai:</span>
                      <span className="font-bold text-cyan-300 text-right">{pj.scale}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal pt-1">
                      {pj.description}
                    </p>

                    <div className="pt-2 space-y-1.5">
                      <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider block">
                        Hạng mục bàn giao:
                      </span>
                      {pj.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onRequestQuote(`Tìm hiểu dự án tương tự: ${pj.title}`)}
                    className="w-full py-2.5 px-4 rounded-xl bg-blue-900/60 hover:bg-cyan-500 hover:text-slate-950 text-white text-xs font-bold transition-all text-center cursor-pointer"
                  >
                    Đăng Ký Tư Vấn Dự Án Tương Tự →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TECHNOLOGIES & PRODUCTION CAPABILITY */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#00b4d8] block mb-2">
            CÔNG NGHỆ & THIẾT BỊ SẢN XUẤT
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Nền Tảng Kỹ Thuật Đạt Chuẩn Quốc Tế
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Ứng dụng dây chuyền công nghệ tiên tiến từ Đức, Thụy Sĩ, Nhật Bản và Hoa Kỳ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sector.technologies.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span className="font-bold text-blue-900">{tech.origin}</span>
                <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-extrabold">
                  ĐỘT PHÁ
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                {tech.title}
              </h3>
              <p className="text-xs font-semibold text-[#00b4d8] mb-3">
                {tech.highlight}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CERTIFICATIONS & STANDARDS */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="lg:max-w-md">
              <span className="text-xs font-black uppercase tracking-widest text-[#00b4d8] block mb-1">
                TIÊU CHUẨN & CHỨNG NHẬN
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">
                Cam Kết Quy Chuẩn Khắt Khe
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Toàn bộ quy trình và sản phẩm đều được kiểm định bởi các cơ quan đo lường và tổ chức chứng nhận độc lập.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
              {sector.certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center flex flex-col justify-center items-center"
                >
                  <ShieldCheck className="w-6 h-6 text-emerald-600 mb-2" />
                  <span className="text-xs font-black text-slate-900 block leading-tight">
                    {cert.code}
                  </span>
                  <span className="text-[10px] text-slate-500 block mt-1 line-clamp-1">
                    {cert.org}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-[#00b4d8] block mb-2">
            HỎI ĐÁP CHUYÊN SÂU
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Câu Hỏi Thường Gặp Về Lĩnh Vực {sector.title}
          </h2>
        </div>

        <div className="space-y-4">
          {sector.faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-[#00b4d8] shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h4>
              <p className="text-xs text-slate-600 mt-2.5 pl-6.5 leading-relaxed font-normal">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. IN-PAGE CONSULTATION & LEAD CAPTURE FORM */}
      <section id="sector-inquiry" className="py-16 bg-gradient-to-br from-[#001738] to-[#002855] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/15 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold text-cyan-300 tracking-widest uppercase block mb-1">
                KẾT NỐI VỚI CHUYÊN GIA {sector.unit}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Đăng Ký Tư Vấn & Nhận Báo Giá Chi Tiết
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Đội ngũ kỹ sư và chuyên viên dự án của chúng tôi sẽ phản hồi trong vòng 15 phút làm việc.
              </p>
            </div>

            {submitSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-400 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Gửi Yêu Cầu Thành Công!</h4>
                <p className="text-xs text-emerald-200">
                  Cảm ơn quý khách. Chuyên viên phụ trách lĩnh vực {sector.title} ({sector.unit}) sẽ liên hệ lại qua số điện thoại của quý khách sớm nhất.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Họ và Tên <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Số Điện Thoại <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0988 xxx xxx"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Email Liên Hệ (Tùy chọn)
                    </label>
                    <input
                      type="email"
                      placeholder="email@doanhnghiep.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Đơn Vị / Cơ Quan / Doanh Nghiệp
                    </label>
                    <input
                      type="text"
                      placeholder="Bệnh viện / Công ty / Đại lý"
                      value={formOrg}
                      onChange={(e) => setFormOrg(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Nội Dung Yêu Cầu Chi Tiết
                  </label>
                  <textarea
                    rows={3}
                    placeholder={`Tôi muốn nhận báo giá, catalogue kỹ thuật và chính sách cho lĩnh vực ${sector.title}...`}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
                  ></textarea>
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#00b4d8] hover:bg-[#0096c7] text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2 mx-auto cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Đang gửi thông tin...' : 'Gửi Yêu Cầu Báo Giá Ngay'}</span>
                  </button>
                  <p className="text-[11px] text-slate-400 mt-3">
                    Cam kết bảo mật thông tin khách hàng tuyệt đối theo quy định pháp luật.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 12. CROSS-LINK TO OTHER SECTORS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 mt-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-[#00b4d8] block mb-1">
            HỆ SINH THÁI ĐA NGÀNH
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Khám Phá Các Lĩnh Vực Hoạt Động Khác
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allSectors
            .filter((s) => s.id !== sector.id)
            .map((s) => {
              const otherSector = sectorDetailedData[s.id];
              return (
                <div
                  key={s.id}
                  onClick={() => onSelectSector(s.id)}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-400 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-16/9 rounded-xl overflow-hidden mb-4">
                      <img
                        src={otherSector?.bannerImage}
                        alt={otherSector?.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-950/40"></div>
                      <span className="absolute bottom-2 left-2 text-[10px] font-bold text-cyan-300 uppercase tracking-widest">
                        {otherSector?.unit}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0056b3] transition-colors">
                      {otherSector?.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 mt-1.5 leading-relaxed font-normal">
                      {otherSector?.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-sky-600 transition-colors">
                    <span>Khám phá lĩnh vực</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      {/* PRODUCT DETAIL MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 my-8"
            >
              <div className="relative aspect-video bg-slate-900">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-900/80 text-white hover:bg-slate-900 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest block">
                    {selectedProduct.categoryName}
                  </span>
                  <h3 className="text-xl font-extrabold text-white">{selectedProduct.name}</h3>
                  {selectedProduct.model && (
                    <span className="text-xs text-slate-300 font-mono">Model: {selectedProduct.model}</span>
                  )}
                </div>
              </div>

              <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto text-xs sm:text-sm text-slate-700">
                <p className="text-slate-800 font-medium leading-relaxed">{selectedProduct.description}</p>

                <div>
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2 border-l-2 border-blue-600 pl-2">
                    Tính Năng Nổi Bật
                  </h4>
                  <div className="space-y-1.5">
                    {selectedProduct.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 bg-slate-50 p-2 rounded-xl border border-slate-100 text-xs">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2 border-l-2 border-blue-600 pl-2">
                    Thông Số Kỹ Thuật Chi Tiết
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {selectedProduct.specs.map((sp, idx) => (
                      <div key={idx} className="bg-slate-50 p-2 rounded-lg border border-slate-100 flex justify-between">
                        <span className="text-slate-500">{sp.label}:</span>
                        <span className="font-bold text-slate-900">{sp.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedProduct.targetAudience && (
                  <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 text-xs">
                    <span className="font-bold text-blue-900 block mb-0.5">Đối tượng ứng dụng:</span>
                    <span className="text-slate-700">{selectedProduct.targetAudience}</span>
                  </div>
                )}
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  onClick={() => {
                    const prodName = selectedProduct.name;
                    setSelectedProduct(null);
                    onRequestQuote(`Yêu cầu báo giá sản phẩm: ${prodName}`);
                  }}
                  className="px-5 py-2 rounded-xl bg-[#0056b3] text-white text-xs font-bold hover:bg-[#004494] transition-colors cursor-pointer"
                >
                  Nhận Báo Giá Sản Phẩm Này
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
