import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { initialCompanyInfo, initialReports, initialProducts, initialNews, initialInquiries } from './src/data/initialData.ts';
import { CompanyInfo, Report, Product, NewsArticle, Inquiry } from './src/types/index.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// In-memory data store with fallback persistence
let companyInfo: CompanyInfo = { ...initialCompanyInfo };
let reports: Report[] = [...initialReports];
let products: Product[] = [...initialProducts];
let news: NewsArticle[] = [...initialNews];
let inquiries: Inquiry[] = [...initialInquiries];

// Optional disk persistence
const DATA_FILE = path.join(__dirname, 'data_store.json');
function loadPersistedData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      const data = JSON.parse(raw);
      if (data.companyInfo) companyInfo = data.companyInfo;
      if (data.reports) reports = data.reports;
      if (data.products) products = data.products;
      if (data.news) news = data.news;
      if (data.inquiries) inquiries = data.inquiries;
    }
  } catch (err) {
    console.error('Error loading persisted data, using defaults:', err);
  }
}

function persistData() {
  try {
    fs.writeFileSync(
      DATA_FILE,
      JSON.stringify({ companyInfo, reports, products, news, inquiries }, null, 2),
      'utf-8'
    );
  } catch (err) {
    console.error('Error persisting data:', err);
  }
}

loadPersistedData();

// ======================== API ROUTES ========================

// 1. Health check
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    brand: 'TECNIC MEDTECH',
    version: '2.0.0',
    timestamp: new Date().toISOString(),
  });
});

// 2. Company Info
app.get('/api/company-info', (_req: Request, res: Response) => {
  res.json(companyInfo);
});

app.put('/api/company-info', (req: Request, res: Response) => {
  companyInfo = { ...companyInfo, ...req.body };
  persistData();
  res.json({ success: true, data: companyInfo });
});

// 3. Reports
app.get('/api/reports', (req: Request, res: Response) => {
  const { category, search, status } = req.query;
  let result = [...reports];

  if (category && category !== 'all') {
    result = result.filter((r) => r.category === category);
  }
  if (status) {
    result = result.filter((r) => r.status === status);
  }
  if (search && typeof search === 'string') {
    const q = search.toLowerCase();
    result = result.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q) ||
        r.author.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q))
    );
  }
  res.json(result);
});

app.get('/api/reports/:id', (req: Request, res: Response) => {
  const item = reports.find((r) => r.id === req.params.id);
  if (!item) {
    return res.status(404).json({ error: 'Report not found' });
  }
  item.views += 1;
  persistData();
  res.json(item);
});

app.post('/api/reports/:id/download', (req: Request, res: Response) => {
  const item = reports.find((r) => r.id === req.params.id);
  if (item) {
    item.downloads += 1;
    persistData();
  }
  res.json({ success: true, downloads: item ? item.downloads : 0 });
});

app.post('/api/reports', (req: Request, res: Response) => {
  const newReport: Report = {
    id: `rep-${Date.now()}`,
    title: req.body.title || 'Báo cáo mới',
    category: req.body.category || 'technical',
    categoryName: req.body.categoryName || 'Báo Cáo Kỹ Thuật',
    author: req.body.author || 'TECNIC Medtech',
    publishDate: req.body.publishDate || new Date().toLocaleDateString('vi-VN'),
    summary: req.body.summary || '',
    content: req.body.content || '',
    metrics: req.body.metrics || [],
    readTime: req.body.readTime || '5 phút đọc',
    views: 0,
    downloads: 0,
    status: req.body.status || 'published',
    featured: Boolean(req.body.featured),
    tags: req.body.tags || ['Y tế', 'Báo cáo'],
  };
  reports.unshift(newReport);
  persistData();
  res.status(201).json({ success: true, data: newReport });
});

app.put('/api/reports/:id', (req: Request, res: Response) => {
  const index = reports.findIndex((r) => r.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Report not found' });
  }
  reports[index] = { ...reports[index], ...req.body };
  persistData();
  res.json({ success: true, data: reports[index] });
});

app.delete('/api/reports/:id', (req: Request, res: Response) => {
  const index = reports.findIndex((r) => r.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Report not found' });
  }
  const removed = reports.splice(index, 1);
  persistData();
  res.json({ success: true, data: removed[0] });
});

// 4. Products
app.get('/api/products', (req: Request, res: Response) => {
  const { category, search, featured } = req.query;
  let result = [...products];

  if (category && category !== 'all') {
    result = result.filter((p) => p.category === category);
  }
  if (featured === 'true') {
    result = result.filter((p) => p.isFeatured);
  }
  if (search && typeof search === 'string') {
    const q = search.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.model.toLowerCase().includes(q) ||
        p.manufacturer.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }
  res.json(result);
});

app.get('/api/products/:id', (req: Request, res: Response) => {
  const item = products.find((p) => p.id === req.params.id);
  if (!item) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(item);
});

app.post('/api/products', (req: Request, res: Response) => {
  const newProduct: Product = {
    id: `prod-${Date.now()}`,
    name: req.body.name,
    model: req.body.model,
    category: req.body.category || 'rehab',
    categoryName: req.body.categoryName || 'Thiết Bị Phục Hồi Chức Năng',
    manufacturer: req.body.manufacturer || 'TECNIC Medtech',
    origin: req.body.origin || 'Việt Nam',
    image: req.body.image || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    description: req.body.description || '',
    features: req.body.features || [],
    specs: req.body.specs || [],
    certifications: req.body.certifications || ['ISO 13485:2016'],
    targetAudience: req.body.targetAudience || 'Bệnh nhân và bệnh viện',
    isFeatured: Boolean(req.body.isFeatured),
  };
  products.unshift(newProduct);
  persistData();
  res.status(201).json({ success: true, data: newProduct });
});

app.put('/api/products/:id', (req: Request, res: Response) => {
  const index = products.findIndex((p) => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }
  products[index] = { ...products[index], ...req.body };
  persistData();
  res.json({ success: true, data: products[index] });
});

app.delete('/api/products/:id', (req: Request, res: Response) => {
  const index = products.findIndex((p) => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }
  const removed = products.splice(index, 1);
  persistData();
  res.json({ success: true, data: removed[0] });
});

// 5. News
app.get('/api/news', (_req: Request, res: Response) => {
  res.json(news);
});

app.post('/api/news', (req: Request, res: Response) => {
  const item: NewsArticle = {
    id: `news-${Date.now()}`,
    title: req.body.title,
    category: req.body.category || 'Tin Tức Doanh Nghiệp',
    publishDate: req.body.publishDate || new Date().toLocaleDateString('vi-VN'),
    author: req.body.author || 'Ban Truyền Thông TECNIC',
    image: req.body.image || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    summary: req.body.summary || '',
    content: req.body.content || '',
    source: req.body.source || 'TECNIC Medtech',
  };
  news.unshift(item);
  persistData();
  res.status(201).json({ success: true, data: item });
});

app.delete('/api/news/:id', (req: Request, res: Response) => {
  const index = news.findIndex((n) => n.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'News not found' });
  }
  const removed = news.splice(index, 1);
  persistData();
  res.json({ success: true, data: removed[0] });
});

// 6. Inquiries
app.get('/api/inquiries', (_req: Request, res: Response) => {
  res.json(inquiries);
});

app.post('/api/inquiries', (req: Request, res: Response) => {
  const now = new Date();
  const dateStr = `${now.toLocaleDateString('vi-VN')} ${now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}`;
  const item: Inquiry = {
    id: `inq-${Date.now()}`,
    fullName: req.body.fullName || 'Khách hàng',
    email: req.body.email || '',
    phone: req.body.phone || '',
    organization: req.body.organization || 'Cá nhân',
    serviceInterest: req.body.serviceInterest || 'Tư vấn chung',
    message: req.body.message || '',
    createdAt: dateStr,
    status: 'new',
  };
  inquiries.unshift(item);
  persistData();
  res.status(201).json({ success: true, data: item });
});

app.patch('/api/inquiries/:id', (req: Request, res: Response) => {
  const item = inquiries.find((i) => i.id === req.params.id);
  if (!item) {
    return res.status(404).json({ error: 'Inquiry not found' });
  }
  if (req.body.status) item.status = req.body.status;
  if (req.body.notes !== undefined) item.notes = req.body.notes;
  persistData();
  res.json({ success: true, data: item });
});

// 7. General Stats
app.get('/api/stats', (_req: Request, res: Response) => {
  const totalViews = reports.reduce((acc, r) => acc + (r.views || 0), 0);
  const totalDownloads = reports.reduce((acc, r) => acc + (r.downloads || 0), 0);
  res.json({
    reportsCount: reports.length,
    productsCount: products.length,
    newsCount: news.length,
    inquiriesCount: inquiries.length,
    newInquiriesCount: inquiries.filter((i) => i.status === 'new').length,
    totalReportViews: totalViews,
    totalReportDownloads: totalDownloads,
    partnerHospitals: companyInfo.stats.partnerHospitals,
    devicesDeployed: companyInfo.stats.devicesDeployed,
  });
});

// ======================== SERVER / VITE MOUNT ========================

async function startServer() {
  if (!isProduction) {
    // Development mode: attach Vite middleware
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production mode: serve built assets from dist
    const distPath = path.join(__dirname, 'dist');

    // Serve logo-tecnic.jpg with no-cache headers matching tecnic.com.vn
    app.get(['/logo-tecnic.jpg', '/public/logo-tecnic.jpg'], (_req: Request, res: Response) => {
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      const candidates = [
        path.join(distPath, 'logo-tecnic.jpg'),
        path.join(__dirname, 'public', 'logo-tecnic.jpg'),
      ];
      for (const p of candidates) {
        if (fs.existsSync(p)) return res.sendFile(p);
      }
      res.status(404).end();
    });

    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`[TECNIC MEDTECH] Server listening on port ${PORT}`);
    console.log(`[TECNIC MEDTECH] Mode: ${isProduction ? 'Production' : 'Development'}`);
  });
}

startServer();
