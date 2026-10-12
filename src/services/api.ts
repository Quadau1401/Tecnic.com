import { CompanyInfo, Report, Product, NewsArticle, Inquiry } from '../types';
import { initialCompanyInfo, initialReports, initialProducts, initialNews, initialInquiries } from '../data/initialData';

const STORAGE_KEYS = {
  COMPANY: 'tecnic_company_info',
  REPORTS: 'tecnic_reports',
  PRODUCTS: 'tecnic_products',
  NEWS: 'tecnic_news',
  INQUIRIES: 'tecnic_inquiries',
};

// Local storage helpers
function getLocal<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function setLocal<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error('Failed to set local storage:', err);
  }
}

export const api = {
  // Company Info
  async getCompanyInfo(): Promise<CompanyInfo> {
    try {
      const res = await fetch('/api/company-info');
      if (res.ok) {
        const data = await res.json();
        setLocal(STORAGE_KEYS.COMPANY, data);
        return data;
      }
    } catch {
      // Fallback
    }
    return getLocal(STORAGE_KEYS.COMPANY, initialCompanyInfo);
  },

  async updateCompanyInfo(updates: Partial<CompanyInfo>): Promise<CompanyInfo> {
    try {
      const res = await fetch('/api/company-info', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
      if (res.ok) {
        const resData = await res.json();
        setLocal(STORAGE_KEYS.COMPANY, resData.data);
        return resData.data;
      }
    } catch {
      // Fallback
    }
    const current = getLocal(STORAGE_KEYS.COMPANY, initialCompanyInfo);
    const updated = { ...current, ...updates };
    setLocal(STORAGE_KEYS.COMPANY, updated);
    return updated;
  },

  // Reports
  async getReports(params?: { category?: string; search?: string; status?: string }): Promise<Report[]> {
    try {
      const searchParams = new URLSearchParams();
      if (params?.category) searchParams.set('category', params.category);
      if (params?.search) searchParams.set('search', params.search);
      if (params?.status) searchParams.set('status', params.status);

      const url = `/api/reports?${searchParams.toString()}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        return data;
      }
    } catch {
      // Fallback
    }

    let list = getLocal<Report[]>(STORAGE_KEYS.REPORTS, initialReports);
    if (params?.category && params.category !== 'all') {
      list = list.filter((r) => r.category === params.category);
    }
    if (params?.status) {
      list = list.filter((r) => r.status === params.status);
    }
    if (params?.search) {
      const q = params.search.toLowerCase();
      list = list.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.summary.toLowerCase().includes(q) ||
          r.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  },

  async getReportById(id: string): Promise<Report | null> {
    try {
      const res = await fetch(`/api/reports/${id}`);
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // Fallback
    }
    const list = getLocal<Report[]>(STORAGE_KEYS.REPORTS, initialReports);
    const item = list.find((r) => r.id === id);
    if (item) {
      item.views = (item.views || 0) + 1;
      setLocal(STORAGE_KEYS.REPORTS, list);
      return item;
    }
    return null;
  },

  async recordDownload(id: string): Promise<number> {
    try {
      const res = await fetch(`/api/reports/${id}/download`, { method: 'POST' });
      if (res.ok) {
        const data = await res.json();
        return data.downloads;
      }
    } catch {
      // Fallback
    }
    const list = getLocal<Report[]>(STORAGE_KEYS.REPORTS, initialReports);
    const item = list.find((r) => r.id === id);
    if (item) {
      item.downloads = (item.downloads || 0) + 1;
      setLocal(STORAGE_KEYS.REPORTS, list);
      return item.downloads;
    }
    return 1;
  },

  async createReport(reportData: Partial<Report>): Promise<Report> {
    try {
      const res = await fetch('/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reportData),
      });
      if (res.ok) {
        const json = await res.json();
        return json.data;
      }
    } catch {
      // Fallback
    }

    const list = getLocal<Report[]>(STORAGE_KEYS.REPORTS, initialReports);
    const newReport: Report = {
      id: `rep-${Date.now()}`,
      title: reportData.title || 'Báo cáo mới',
      category: reportData.category || 'technical',
      categoryName: reportData.categoryName || 'Báo Cáo Kỹ Thuật',
      author: reportData.author || 'TECNIC Medtech',
      publishDate: reportData.publishDate || new Date().toLocaleDateString('vi-VN'),
      summary: reportData.summary || '',
      content: reportData.content || '',
      metrics: reportData.metrics || [],
      readTime: reportData.readTime || '6 phút đọc',
      views: 0,
      downloads: 0,
      status: reportData.status || 'published',
      featured: Boolean(reportData.featured),
      tags: reportData.tags || ['Y tế', 'MedTech'],
    };
    list.unshift(newReport);
    setLocal(STORAGE_KEYS.REPORTS, list);
    return newReport;
  },

  async updateReport(id: string, updates: Partial<Report>): Promise<Report | null> {
    try {
      const res = await fetch(`/api/reports/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
      if (res.ok) {
        const json = await res.json();
        return json.data;
      }
    } catch {
      // Fallback
    }

    const list = getLocal<Report[]>(STORAGE_KEYS.REPORTS, initialReports);
    const idx = list.findIndex((r) => r.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updates };
      setLocal(STORAGE_KEYS.REPORTS, list);
      return list[idx];
    }
    return null;
  },

  async deleteReport(id: string): Promise<boolean> {
    try {
      const res = await fetch(`/api/reports/${id}`, { method: 'DELETE' });
      if (res.ok) return true;
    } catch {
      // Fallback
    }

    const list = getLocal<Report[]>(STORAGE_KEYS.REPORTS, initialReports);
    const filtered = list.filter((r) => r.id !== id);
    setLocal(STORAGE_KEYS.REPORTS, filtered);
    return true;
  },

  // Products
  async getProducts(params?: { category?: string; search?: string; featured?: boolean }): Promise<Product[]> {
    try {
      const searchParams = new URLSearchParams();
      if (params?.category) searchParams.set('category', params.category);
      if (params?.search) searchParams.set('search', params.search);
      if (params?.featured) searchParams.set('featured', 'true');

      const res = await fetch(`/api/products?${searchParams.toString()}`);
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // Fallback
    }

    let list = getLocal<Product[]>(STORAGE_KEYS.PRODUCTS, initialProducts);
    if (params?.category && params.category !== 'all') {
      list = list.filter((p) => p.category === params.category);
    }
    if (params?.featured) {
      list = list.filter((p) => p.isFeatured);
    }
    if (params?.search) {
      const q = params.search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.model.toLowerCase().includes(q) ||
          p.manufacturer.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    return list;
  },

  async getProductById(id: string): Promise<Product | null> {
    try {
      const res = await fetch(`/api/products/${id}`);
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // Fallback
    }
    const list = getLocal<Product[]>(STORAGE_KEYS.PRODUCTS, initialProducts);
    return list.find((p) => p.id === id) || null;
  },

  async createProduct(data: Partial<Product>): Promise<Product> {
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const json = await res.json();
        return json.data;
      }
    } catch {
      // Fallback
    }

    const list = getLocal<Product[]>(STORAGE_KEYS.PRODUCTS, initialProducts);
    const newProduct: Product = {
      id: `prod-${Date.now()}`,
      name: data.name || 'Thiết bị y tế mới',
      model: data.model || 'TM-MODEL',
      category: data.category || 'rehab',
      categoryName: data.categoryName || 'Thiết Bị Phục Hồi Chức Năng',
      manufacturer: data.manufacturer || 'TECNIC Medtech',
      origin: data.origin || 'Việt Nam',
      image: data.image || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      description: data.description || '',
      features: data.features || [],
      specs: data.specs || [],
      certifications: data.certifications || ['ISO 13485:2016'],
      targetAudience: data.targetAudience || 'Bệnh nhân và cơ sở y tế',
      isFeatured: Boolean(data.isFeatured),
    };
    list.unshift(newProduct);
    setLocal(STORAGE_KEYS.PRODUCTS, list);
    return newProduct;
  },

  async updateProduct(id: string, updates: Partial<Product>): Promise<Product | null> {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
      if (res.ok) {
        const json = await res.json();
        return json.data;
      }
    } catch {
      // Fallback
    }

    const list = getLocal<Product[]>(STORAGE_KEYS.PRODUCTS, initialProducts);
    const idx = list.findIndex((p) => p.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updates };
      setLocal(STORAGE_KEYS.PRODUCTS, list);
      return list[idx];
    }
    return null;
  },

  async deleteProduct(id: string): Promise<boolean> {
    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      if (res.ok) return true;
    } catch {
      // Fallback
    }

    const list = getLocal<Product[]>(STORAGE_KEYS.PRODUCTS, initialProducts);
    const filtered = list.filter((p) => p.id !== id);
    setLocal(STORAGE_KEYS.PRODUCTS, filtered);
    return true;
  },

  // News
  async getNews(): Promise<NewsArticle[]> {
    try {
      const res = await fetch('/api/news');
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // Fallback
    }
    return getLocal<NewsArticle[]>(STORAGE_KEYS.NEWS, initialNews);
  },

  // Inquiries
  async getInquiries(): Promise<Inquiry[]> {
    try {
      const res = await fetch('/api/inquiries');
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // Fallback
    }
    return getLocal<Inquiry[]>(STORAGE_KEYS.INQUIRIES, initialInquiries);
  },

  async submitInquiry(data: Omit<Inquiry, 'id' | 'createdAt' | 'status'>): Promise<Inquiry> {
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const json = await res.json();
        return json.data;
      }
    } catch {
      // Fallback
    }

    const now = new Date();
    const dateStr = `${now.toLocaleDateString('vi-VN')} ${now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}`;
    const newInquiry: Inquiry = {
      id: `inq-${Date.now()}`,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      organization: data.organization,
      serviceInterest: data.serviceInterest,
      message: data.message,
      createdAt: dateStr,
      status: 'new',
    };
    const list = getLocal<Inquiry[]>(STORAGE_KEYS.INQUIRIES, initialInquiries);
    list.unshift(newInquiry);
    setLocal(STORAGE_KEYS.INQUIRIES, list);
    return newInquiry;
  },

  async updateInquiryStatus(id: string, status: Inquiry['status'], notes?: string): Promise<Inquiry | null> {
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, notes }),
      });
      if (res.ok) {
        const json = await res.json();
        return json.data;
      }
    } catch {
      // Fallback
    }

    const list = getLocal<Inquiry[]>(STORAGE_KEYS.INQUIRIES, initialInquiries);
    const item = list.find((i) => i.id === id);
    if (item) {
      item.status = status;
      if (notes !== undefined) item.notes = notes;
      setLocal(STORAGE_KEYS.INQUIRIES, list);
      return item;
    }
    return null;
  },

  // Stats
  async getStats() {
    try {
      const res = await fetch('/api/stats');
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // Fallback
    }
    const reports = getLocal<Report[]>(STORAGE_KEYS.REPORTS, initialReports);
    const products = getLocal<Product[]>(STORAGE_KEYS.PRODUCTS, initialProducts);
    const news = getLocal<NewsArticle[]>(STORAGE_KEYS.NEWS, initialNews);
    const inquiries = getLocal<Inquiry[]>(STORAGE_KEYS.INQUIRIES, initialInquiries);

    return {
      reportsCount: reports.length,
      productsCount: products.length,
      newsCount: news.length,
      inquiriesCount: inquiries.length,
      newInquiriesCount: inquiries.filter((i) => i.status === 'new').length,
      totalReportViews: reports.reduce((acc, r) => acc + (r.views || 0), 0),
      totalReportDownloads: reports.reduce((acc, r) => acc + (r.downloads || 0), 0),
      partnerHospitals: 180,
      devicesDeployed: 65000,
    };
  },
};
