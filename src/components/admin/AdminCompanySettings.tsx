import React, { useState } from 'react';
import { CompanyInfo } from '../../types';
import { Settings, Save, Check, Building2, Phone, Mail, MapPin, Globe, Sparkles } from 'lucide-react';
import { TecnicLogo } from '../common/TecnicLogo';

interface AdminCompanySettingsProps {
  companyInfo: CompanyInfo;
  onUpdateCompanyInfo: (updates: Partial<CompanyInfo>) => Promise<CompanyInfo>;
}

export const AdminCompanySettings: React.FC<AdminCompanySettingsProps> = ({
  companyInfo,
  onUpdateCompanyInfo,
}) => {
  const [formData, setFormData] = useState<CompanyInfo>({ ...companyInfo });
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onUpdateCompanyInfo(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Settings className="w-5 h-5 text-blue-700" />
            Cấu Hình Thông Tin Doanh Nghiệp TECNIC
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Điều chỉnh tên pháp nhân, slogan, mã số thuế, hotline và văn phòng điều hành hiển thị trên toàn hệ thống.
          </p>
        </div>

        {isSaved && (
          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-xs font-bold flex items-center gap-1.5 animate-in fade-in">
            <Check className="w-4 h-4" /> Đã lưu thành công!
          </span>
        )}
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 text-xs sm:text-sm">
        {/* Logo Preview & Path */}
        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center gap-6">
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm shrink-0">
            <TecnicLogo size="md" showSlogan={false} />
          </div>
          <div className="space-y-1 text-xs">
            <strong className="text-slate-900 font-bold block">Tệp Logo Hiển Thị Toàn Web:</strong>
            <code className="px-2 py-0.5 bg-slate-200 text-slate-800 rounded font-mono text-[11px] inline-block">
              public/logo-tecnic.jpg
            </code>
            <p className="text-slate-500 text-[11px] leading-relaxed">
              Hệ thống đọc trực tiếp từ tệp <strong className="text-slate-700">public/logo-tecnic.jpg</strong> trên đĩa để đồng bộ ở Header, Footer và toàn hệ thống.
            </p>
          </div>
        </div>

        {/* Brand & Slogan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Tên Thương Hiệu</label>
            <input
              type="text"
              value={formData.brandName}
              onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Khẩu Hiệu (Slogan Chính Thức)</label>
            <input
              type="text"
              value={formData.slogan}
              onChange={(e) => setFormData({ ...formData, slogan: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold text-blue-900 italic focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Legal Names & Tax Codes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Tên Tập Đoàn Mẹ</label>
            <input
              type="text"
              value={formData.groupName}
              onChange={(e) => setFormData({ ...formData, groupName: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Mã Số Thuế Tập Đoàn (MST)</label>
            <input
              type="text"
              value={formData.taxIdGroup}
              onChange={(e) => setFormData({ ...formData, taxIdGroup: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Tên Công Ty Y Tế (TECNIC Medical)</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Mã Số Thuế Y Tế (MST Medtech)</label>
            <input
              type="text"
              value={formData.taxIdMedical}
              onChange={(e) => setFormData({ ...formData, taxIdMedical: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Address & Hotline */}
        <div className="space-y-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Trụ Sở Chính (Hà Nội)</label>
            <input
              type="text"
              value={formData.headquarters}
              onChange={(e) => setFormData({ ...formData, headquarters: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Văn Phòng Đại Diện (TP. Hồ Chí Minh)</label>
            <input
              type="text"
              value={formData.branchHcm}
              onChange={(e) => setFormData({ ...formData, branchHcm: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Hotline Liên Hệ</label>
              <input
                type="text"
                value={formData.hotline}
                onChange={(e) => setFormData({ ...formData, hotline: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-800 font-bold text-emerald-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Hộp Thư Điện Tử (Email)</label>
              <input
                type="text"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="space-y-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Giới Thiệu Tổng Quan Tập Đoàn</label>
            <textarea
              rows={3}
              value={formData.aboutSummary}
              onChange={(e) => setFormData({ ...formData, aboutSummary: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Tầm Nhìn</label>
              <textarea
                rows={3}
                value={formData.vision}
                onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Sứ Mệnh</label>
              <textarea
                rows={3}
                value={formData.mission}
                onChange={(e) => setFormData({ ...formData, mission: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Lưu Thay Đổi Thông Tin Công Ty</span>
          </button>
        </div>
      </form>
    </div>
  );
};
