import React, { useState, useEffect } from 'react';
import { CompanyInfo, Report, Product, NewsArticle, Inquiry } from './types';
import { initialCompanyInfo, initialReports, initialProducts, initialNews, initialInquiries } from './data/initialData';
import { api } from './services/api';

import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { HeroSection } from './components/frontend/HeroSection';
import { AboutSection } from './components/frontend/AboutSection';
import { EcosystemSection } from './components/frontend/EcosystemSection';
import { MemberCompaniesSection } from './components/frontend/MemberCompaniesSection';
import { CapabilitiesSection } from './components/frontend/CapabilitiesSection';
import { ProjectsSection } from './components/frontend/ProjectsSection';
import { ProductsSection } from './components/frontend/ProductsSection';
import { ReportsSection } from './components/frontend/ReportsSection';
import { CommunityHealthSection } from './components/frontend/CommunityHealthSection';
import { CultureSection } from './components/frontend/CultureSection';
import { NewsCareersSection } from './components/frontend/NewsCareersSection';
import { ContactSection } from './components/frontend/ContactSection';
import { SectorDetailPage } from './components/frontend/SectorDetailPage';
import { AdminLayout } from './components/admin/AdminLayout';

import { X, Send, CheckCircle2, PhoneCall } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'frontend' | 'admin'>('frontend');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedSectorId, setSelectedSectorId] = useState<string | null>(null);
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(initialCompanyInfo);
  const [reports, setReports] = useState<Report[]>(initialReports);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [news, setNews] = useState<NewsArticle[]>(initialNews);
  const [inquiries, setInquiries] = useState<Inquiry[]>(initialInquiries);
  const [loading, setLoading] = useState(true);

  // Selected category in Products section
  const [selectedProductCategory, setSelectedProductCategory] = useState<string>('all');
  const [prefilledProductQuote, setPrefilledProductQuote] = useState<string>('');

  // Consultation Modal State
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [consultName, setConsultName] = useState('');
  const [consultPhone, setConsultPhone] = useState('');
  const [consultService, setConsultService] = useState('Y tế & Thiết bị phục hồi chức năng Medtech');
  const [consultMessage, setConsultMessage] = useState('');
  const [consultSuccess, setConsultSuccess] = useState(false);

  // Initial load from backend / fallback
  useEffect(() => {
    async function loadData() {
      try {
        const [compRes, repRes, prodRes, newsRes, inqRes] = await Promise.all([
          api.getCompanyInfo(),
          api.getReports(),
          api.getProducts(),
          api.getNews(),
          api.getInquiries(),
        ]);
        if (compRes) setCompanyInfo(compRes);
        if (repRes) setReports(repRes);
        if (prodRes) setProducts(prodRes);
        if (newsRes) setNews(newsRes);
        if (inqRes) setInquiries(inqRes);
      } catch (err) {
        console.error('Failed to load initial data:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();

    // Check hash for #admin or #sector/*
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#admin') {
        setCurrentView('admin');
        setSelectedSectorId(null);
      } else if (hash.startsWith('#sector/')) {
        const sId = hash.replace('#sector/', '');
        setSelectedSectorId(sId);
        setCurrentView('frontend');
      } else {
        setCurrentView('frontend');
        if (!hash.startsWith('#sector')) {
          setSelectedSectorId(null);
        }
      }
    };
    handleHash();

    const handleHashChange = () => {
      handleHash();
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleViewChange = (view: 'frontend' | 'admin') => {
    setCurrentView(view);
    setSelectedSectorId(null);
    window.location.hash = view === 'admin' ? '#admin' : '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSector = (sectorId: string) => {
    setSelectedSectorId(sectorId);
    if (currentView !== 'frontend') {
      setCurrentView('frontend');
    }
    window.location.hash = `#sector/${sectorId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedSectorId(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (selectedSectorId) {
      setSelectedSectorId(null);
      window.location.hash = '';
    }
    if (currentView !== 'frontend') {
      setCurrentView('frontend');
      window.location.hash = '';
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestQuote = (subject: string) => {
    setPrefilledProductQuote(subject);
    if (selectedSectorId) {
      setSelectedSectorId(null);
      window.location.hash = '';
    }
    scrollToSection('contact');
  };

  const handleConsultSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultName || !consultPhone) {
      alert('Vui lòng điền họ tên và số điện thoại.');
      return;
    }

    await api.submitInquiry({
      fullName: consultName,
      phone: consultPhone,
      email: '',
      organization: 'Liên hệ tư vấn trực tuyến',
      serviceInterest: consultService,
      message: consultMessage,
    });

    setConsultSuccess(true);
    setTimeout(() => {
      setConsultSuccess(false);
      setConsultModalOpen(false);
      setConsultName('');
      setConsultPhone('');
      setConsultMessage('');
    }, 2500);
  };

  // CRUD Handlers for Reports
  const handleCreateReport = async (data: Partial<Report>): Promise<Report> => {
    const created = await api.createReport(data);
    setReports((prev) => [created, ...prev]);
    return created;
  };

  const handleUpdateReport = async (id: string, updates: Partial<Report>): Promise<Report | null> => {
    const updated = await api.updateReport(id, updates);
    if (updated) {
      setReports((prev) => prev.map((r) => (r.id === id ? updated : r)));
    }
    return updated;
  };

  const handleDeleteReport = async (id: string): Promise<boolean> => {
    const ok = await api.deleteReport(id);
    if (ok) {
      setReports((prev) => prev.filter((r) => r.id !== id));
    }
    return ok;
  };

  const handleRecordDownload = async (id: string): Promise<number> => {
    const count = await api.recordDownload(id);
    setReports((prev) =>
      prev.map((r) => (r.id === id ? { ...r, downloads: count } : r))
    );
    return count;
  };

  // CRUD Handlers for Products
  const handleCreateProduct = async (data: Partial<Product>): Promise<Product> => {
    const created = await api.createProduct(data);
    setProducts((prev) => [created, ...prev]);
    return created;
  };

  const handleUpdateProduct = async (id: string, updates: Partial<Product>): Promise<Product | null> => {
    const updated = await api.updateProduct(id, updates);
    if (updated) {
      setProducts((prev) => prev.map((p) => (p.id === id ? updated : p)));
    }
    return updated;
  };

  const handleDeleteProduct = async (id: string): Promise<boolean> => {
    const ok = await api.deleteProduct(id);
    if (ok) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
    return ok;
  };

  // Inquiry Handlers
  const handleSubmitInquiry = async (
    data: Omit<Inquiry, 'id' | 'createdAt' | 'status'>
  ): Promise<Inquiry> => {
    const created = await api.submitInquiry(data);
    setInquiries((prev) => [created, ...prev]);
    return created;
  };

  const handleUpdateInquiryStatus = async (
    id: string,
    status: Inquiry['status'],
    notes?: string
  ): Promise<Inquiry | null> => {
    const updated = await api.updateInquiryStatus(id, status, notes);
    if (updated) {
      setInquiries((prev) => prev.map((i) => (i.id === id ? updated : i)));
    }
    return updated;
  };

  // Company Info Update
  const handleUpdateCompanyInfo = async (updates: Partial<CompanyInfo>): Promise<CompanyInfo> => {
    const updated = await api.updateCompanyInfo(updates);
    setCompanyInfo(updated);
    return updated;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#00b4d8] selection:text-white">
      {currentView === 'admin' ? (
        /* Dedicated Admin Portal (CMS) */
        <AdminLayout
          companyInfo={companyInfo}
          reports={reports}
          products={products}
          inquiries={inquiries}
          onBackToFrontend={() => handleViewChange('frontend')}
          onCreateReport={handleCreateReport}
          onUpdateReport={handleUpdateReport}
          onDeleteReport={handleDeleteReport}
          onRecordDownload={handleRecordDownload}
          onCreateProduct={handleCreateProduct}
          onUpdateProduct={handleUpdateProduct}
          onDeleteProduct={handleDeleteProduct}
          onUpdateInquiryStatus={handleUpdateInquiryStatus}
          onUpdateCompanyInfo={handleUpdateCompanyInfo}
        />
      ) : (
        /* Public Corporate Frontend Portal */
        <div className="flex-1 flex flex-col">
          {/* Header with 6 main categories matching tecnic.com.vn */}
          <Header
            companyInfo={companyInfo}
            currentView={currentView}
            onViewChange={handleViewChange}
            activeSection={activeSection}
            onNavigate={scrollToSection}
            onOpenConsultation={() => setConsultModalOpen(true)}
            currentSectorId={selectedSectorId}
            onSelectSector={handleSelectSector}
          />

          {selectedSectorId ? (
            /* Dedicated In-Depth Sector Page */
            <SectorDetailPage
              sectorId={selectedSectorId}
              onSelectSector={handleSelectSector}
              onBackToHome={handleBackToHome}
              onRequestQuote={handleRequestQuote}
            />
          ) : (
            /* Standard Homepage with All 12 Group Sections */
            <>
              {/* 1. Hero Section: TECNIC GROUP · Kiến tạo giá trị bằng công nghệ */}
              <HeroSection
                companyInfo={companyInfo}
                onExploreAbout={() => scrollToSection('about')}
                onExploreEcosystem={() => scrollToSection('ecosystem')}
                onScrollDown={() => scrollToSection('about')}
                onSelectSector={handleSelectSector}
              />

              {/* 2. Câu chuyện thương hiệu: Từ công nghệ đến giá trị thực & Sứ mệnh "Kiến tạo để phụng sự" */}
              <AboutSection
                companyInfo={companyInfo}
                onExploreProjects={() => scrollToSection('projects')}
              />

              {/* 3. Hệ sinh thái: Y TẾ · NĂNG LƯỢNG · KHOÁNG SẢN · VẬT LIỆU */}
              <EcosystemSection
                onSelectSector={handleSelectSector}
                onRequestQuote={handleRequestQuote}
              />

              {/* 4. Đơn vị thành viên: TECNIC MEDICAL, TECMIN, TECNIC ELECTRIC, TECNIC MAT */}
              <MemberCompaniesSection
                onSelectCompany={(name) => handleRequestQuote(`Tìm hiểu về ${name}`)}
                onRequestQuote={handleRequestQuote}
                onSelectSector={handleSelectSector}
              />

              {/* 5. Năng lực thực tế: SẢN PHẨM · CÔNG NGHỆ · DỰ ÁN · ĐỐI TÁC */}
              <CapabilitiesSection
                onNavigateToProducts={() => scrollToSection('products')}
                onNavigateToProjects={() => scrollToSection('projects')}
                onNavigateToReports={() => scrollToSection('reports')}
                onContactClick={() => scrollToSection('contact')}
              />

              {/* 6. Dự án tiêu biểu: Vinhomes Royal Island, The Crown Ocean Park 3, Bệnh viện TW, MOU CSR */}
              <ProjectsSection
                onRequestQuote={handleRequestQuote}
              />

              {/* 7. Danh mục Thiết bị y tế & Sản phẩm (tecnic.vn & ytetecnic.vn) */}
              <ProductsSection
                products={products}
                selectedCategory={selectedProductCategory}
                onCategoryChange={(cat) => setSelectedProductCategory(cat)}
                onRequestQuote={handleRequestQuote}
              />

              {/* 8. Báo cáo & Tài liệu kỹ thuật chuyên môn */}
              <ReportsSection
                reports={reports.filter((r) => r.status === 'published')}
                onOpenReportWriter={() => handleViewChange('admin')}
                onRecordDownload={handleRecordDownload}
              />

              {/* 9. Sức khỏe cộng đồng & Trách nhiệm xã hội (MOU bảo trợ người khuyết tật) */}
              <CommunityHealthSection
                onExploreReports={() => scrollToSection('reports')}
                onRequestAssistance={() => handleRequestQuote('Đề xuất chương trình hỗ trợ người khuyết tật')}
              />

              {/* 10. Văn hóa doanh nghiệp: Quản trị bằng văn hóa */}
              <CultureSection />

              {/* 11. Tin tức & Cơ hội nghề nghiệp */}
              <NewsCareersSection news={news} />

              {/* 12. Liên hệ & Báo giá dự án */}
              <ContactSection
                companyInfo={companyInfo}
                prefilledProduct={prefilledProductQuote}
                onSubmitInquiry={handleSubmitInquiry}
              />
            </>
          )}

          {/* 13. Chân trang Footer (Screenshot 5) */}
          <Footer
            companyInfo={companyInfo}
            onNavigate={scrollToSection}
            onAdminClick={() => handleViewChange('admin')}
            onSelectSector={handleSelectSector}
          />

          {/* Quick Consultation Modal */}
          {consultModalOpen && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 border border-slate-200 my-8">
                <div className="bg-[#001f4d] text-white p-6 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#00b4d8] text-white flex items-center justify-center font-bold">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Liên Hệ Tư Vấn Trực Tuyến</h3>
                      <p className="text-xs text-cyan-300">TECNIC GROUP • Kiến tạo giá trị bằng công nghệ</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setConsultModalOpen(false)}
                    className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {consultSuccess ? (
                  <div className="p-8 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-slate-900 text-base">Gửi yêu cầu tư vấn thành công!</h4>
                    <p className="text-xs text-slate-600">
                      Chuyên viên của chúng tôi sẽ liên hệ lại với bạn qua số điện thoại sớm nhất.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleConsultSubmit} className="p-6 space-y-4 text-xs sm:text-sm">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Họ và Tên <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Họ và tên của bạn"
                        value={consultName}
                        onChange={(e) => setConsultName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Số Điện Thoại <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="034 84 02466"
                        value={consultPhone}
                        onChange={(e) => setConsultPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Lĩnh vực cần tư vấn</label>
                      <select
                        value={consultService}
                        onChange={(e) => setConsultService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
                      >
                        <option value="Y tế & Thiết bị phục hồi chức năng Medtech">
                          Y tế & Thiết bị phục hồi chức năng Medtech (tecnic.vn - ytetecnic.vn)
                        </option>
                        <option value="Khoáng sản & Đá tự nhiên dự án (TECMIN)">
                          Khoáng sản CaCO₃ & Đá tự nhiên dự án (TECMIN)
                        </option>
                        <option value="Hệ thống điện & Năng lượng tái tạo (TECNIC ELECTRIC)">
                          Hệ thống điện & Năng lượng tái tạo (TECNIC ELECTRIC)
                        </option>
                        <option value="Sản phẩm & Giải pháp vật liệu (TECNIC MAT)">
                          Sản phẩm & Giải pháp vật liệu (TECNIC MAT)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Nội dung yêu cầu</label>
                      <textarea
                        rows={3}
                        placeholder="Mô tả cụ thể nhu cầu..."
                        value={consultMessage}
                        onChange={(e) => setConsultMessage(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00b4d8]"
                      />
                    </div>

                    <div className="pt-2 flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setConsultModalOpen(false)}
                        className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 font-semibold"
                      >
                        Đóng
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-[#00b4d8] hover:bg-[#0096c7] text-white font-bold flex items-center gap-1.5 shadow"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Gửi Yêu Cầu</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
