export type ReportCategory = 'annual' | 'technical' | 'clinical' | 'csr' | 'market';

export interface ReportMetric {
  label: string;
  value: string;
  note?: string;
}

export interface Report {
  id: string;
  title: string;
  category: ReportCategory;
  categoryName: string;
  author: string;
  publishDate: string;
  summary: string;
  content: string;
  metrics: ReportMetric[];
  downloadUrl?: string;
  readTime: string;
  views: number;
  downloads: number;
  status: 'published' | 'draft';
  featured: boolean;
  tags: string[];
}

export type ProductCategory = 'preventive' | 'rehab' | 'hospital';

export interface ProductSpec {
  key: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  model: string;
  category: ProductCategory;
  categoryName: string;
  manufacturer: string;
  origin: string;
  image: string;
  description: string;
  features: string[];
  specs: ProductSpec[];
  certifications: string[];
  targetAudience: string;
  isFeatured: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  unit: string;
  sector: string;
  location: string;
  image: string;
  description: string;
  scope: string[];
  status: string;
}

export interface EcosystemSectorItem {
  id: string;
  title: string;
  keywords: string;
  description: string;
  image: string;
  unit: string;
  actionText: string;
  details: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  publishDate: string;
  author: string;
  image: string;
  summary: string;
  content: string;
  source: string;
}

export interface Inquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  serviceInterest: string;
  message: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'resolved';
  notes?: string;
}

export interface CoreValue {
  title: string;
  desc: string;
  iconName: string;
}

export interface MemberCompany {
  name: string;
  englishTitle?: string;
  role: string;
  desc?: string;
  legalName?: string;
  sectorId?: string;
  image?: string;
  website?: string;
}

export interface CompanyInfo {
  name: string;
  brandName: string;
  groupName: string;
  slogan: string;
  mission: string;
  subSlogan: string;
  taxIdGroup: string;
  taxIdMedical: string;
  headquarters: string;
  branchHcm: string;
  hotline: string;
  email: string;
  website: string;
  domains: string[];
  workingHours: string;
  establishedYear: string;
  aboutSummary: string;
  vision: string;
  coreValues: CoreValue[];
  memberCompanies: MemberCompany[];
  stats: {
    experienceYears: number;
    healthcareProjects: number;
    devicesDeployed: number;
    isoStandards: string;
    partnerHospitals: number;
  };
}
