import React, { useState } from 'react';
import { Inquiry } from '../../types';
import { PhoneCall, CheckCircle2, Clock, Check, MessageSquare, Search, Filter, ShieldCheck, Mail, Building } from 'lucide-react';

interface AdminInquiriesProps {
  inquiries: Inquiry[];
  onUpdateStatus: (id: string, status: Inquiry['status'], notes?: string) => Promise<Inquiry | null>;
}

export const AdminInquiries: React.FC<AdminInquiriesProps> = ({ inquiries, onUpdateStatus }) => {
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [activeInquiry, setActiveInquiry] = useState<Inquiry | null>(null);
  const [notesInput, setNotesInput] = useState('');

  const statusConfig = {
    new: { label: 'Mới Tiếp Nhận', color: 'bg-red-100 text-red-800 border-red-200' },
    contacted: { label: 'Đang Tư Vấn', color: 'bg-amber-100 text-amber-800 border-amber-200' },
    resolved: { label: 'Đã Báo Giá / Hoàn Tất', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  };

  const handleSelect = (inq: Inquiry) => {
    setActiveInquiry(inq);
    setNotesInput(inq.notes || '');
  };

  const handleSaveNotes = async () => {
    if (!activeInquiry) return;
    await onUpdateStatus(activeInquiry.id, activeInquiry.status, notesInput);
    setActiveInquiry({ ...activeInquiry, notes: notesInput });
    alert('Đã cập nhật ghi chú tư vấn thành công.');
  };

  const handleChangeStatus = async (status: Inquiry['status']) => {
    if (!activeInquiry) return;
    await onUpdateStatus(activeInquiry.id, status, notesInput);
    setActiveInquiry({ ...activeInquiry, status });
  };

  const filtered = inquiries.filter((i) => {
    const matchStatus = filterStatus === 'all' || i.status === filterStatus;
    const matchSearch =
      search === '' ||
      i.fullName.toLowerCase().includes(search.toLowerCase()) ||
      i.phone.toLowerCase().includes(search.toLowerCase()) ||
      i.organization.toLowerCase().includes(search.toLowerCase()) ||
      i.serviceInterest.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <PhoneCall className="w-5 h-5 text-blue-700" />
            Quản Lý Yêu Cầu Tư Vấn & Báo Giá Thiết Bị
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Tiếp nhận và theo dõi phản hồi của chuyên viên y tế đến bệnh viện, phòng khám và gia đình bệnh nhân.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-lg bg-red-50 text-red-700 font-bold border border-red-200">
            {inquiries.filter((i) => i.status === 'new').length} yêu cầu mới
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-bold">
            Tổng: {inquiries.length} yêu cầu
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left List */}
        <div className="lg:col-span-7 space-y-4">
          {/* Filter and Search */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 w-full sm:w-auto">
              {(['all', 'new', 'contacted', 'resolved'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setFilterStatus(s)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    filterStatus === s
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {s === 'all' ? 'Tất Cả' : statusConfig[s].label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-56">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm tên, số ĐT..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-slate-50 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* List items */}
          <div className="space-y-3">
            {filtered.map((inq) => (
              <div
                key={inq.id}
                onClick={() => handleSelect(inq)}
                className={`bg-white p-4 rounded-xl border transition-all cursor-pointer ${
                  activeInquiry?.id === inq.id
                    ? 'border-blue-600 shadow-md ring-1 ring-blue-600'
                    : 'border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{inq.fullName}</h4>
                    <span className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <Building className="w-3 h-3" />
                      {inq.organization}
                    </span>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider ${
                      statusConfig[inq.status].color
                    }`}
                  >
                    {statusConfig[inq.status].label}
                  </span>
                </div>

                <div className="text-xs font-semibold text-blue-900 mb-1.5">
                  {inq.serviceInterest}
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {inq.message}
                </p>

                <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 text-[11px] text-slate-400">
                  <span>SĐT: <strong className="text-slate-800">{inq.phone}</strong></span>
                  <span>{inq.createdAt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Detail Pane */}
        <div className="lg:col-span-5">
          {activeInquiry ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5 sticky top-24">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-bold text-slate-900 text-base">Chi Tiết Phiếu Tư Vấn</h3>
                <span className="font-mono text-xs text-slate-400">{activeInquiry.id}</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block text-xs">Người gửi:</span>
                  <strong className="text-slate-900 text-base">{activeInquiry.fullName}</strong>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-slate-400 block text-xs">Điện thoại:</span>
                    <a href={`tel:${activeInquiry.phone}`} className="font-bold text-blue-700 hover:underline">
                      {activeInquiry.phone}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">Email:</span>
                    <span className="font-medium text-slate-800">{activeInquiry.email || 'Không có'}</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block text-xs">Cơ quan / Bệnh viện:</span>
                  <span className="font-semibold text-slate-800">{activeInquiry.organization}</span>
                </div>

                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <span className="text-xs font-bold text-blue-900 block mb-1">Thiết bị quan tâm:</span>
                  <span className="text-xs text-blue-800 font-semibold">{activeInquiry.serviceInterest}</span>
                </div>

                <div>
                  <span className="text-slate-400 block text-xs mb-1">Nội dung yêu cầu chi tiết:</span>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-800 leading-relaxed">
                    {activeInquiry.message}
                  </div>
                </div>
              </div>

              {/* Status Update Actions */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <span className="block text-xs font-bold text-slate-700">Cập nhật trạng thái xử lý:</span>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    onClick={() => handleChangeStatus('new')}
                    className={`py-2 px-1 rounded-lg font-bold border transition-colors ${
                      activeInquiry.status === 'new'
                        ? 'bg-red-600 text-white border-red-700'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Mới
                  </button>
                  <button
                    onClick={() => handleChangeStatus('contacted')}
                    className={`py-2 px-1 rounded-lg font-bold border transition-colors ${
                      activeInquiry.status === 'contacted'
                        ? 'bg-amber-500 text-white border-amber-600'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Đang Tư Vấn
                  </button>
                  <button
                    onClick={() => handleChangeStatus('resolved')}
                    className={`py-2 px-1 rounded-lg font-bold border transition-colors ${
                      activeInquiry.status === 'resolved'
                        ? 'bg-emerald-600 text-white border-emerald-700'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Hoàn Tất
                  </button>
                </div>
              </div>

              {/* Internal Notes */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700">
                  Ghi chú nội bộ chuyên viên (Lịch hẹn, báo giá, địa chỉ giao...)
                </label>
                <textarea
                  rows={3}
                  value={notesInput}
                  onChange={(e) => setNotesInput(e.target.value)}
                  placeholder="Nhập ghi chú xử lý..."
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSaveNotes}
                  className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Lưu Ghi Chú Nội Bộ
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 rounded-2xl border border-dashed border-slate-300 p-8 text-center text-slate-500 text-xs">
              Chọn một yêu cầu tư vấn bên trái để xem chi tiết và phản hồi khách hàng.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
