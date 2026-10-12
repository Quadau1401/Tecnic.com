import React from 'react';
import { Report } from '../../types';
import { X, Calendar, User, Eye, Download, Printer, Tag, CheckCircle2, Share2, BookOpen } from 'lucide-react';
import { TecnicLogo } from '../common/TecnicLogo';

interface ReportModalProps {
  report: Report | null;
  onClose: () => void;
  onDownload: (id: string) => void;
}

export const ReportModal: React.FC<ReportModalProps> = ({ report, onClose, onDownload }) => {
  if (!report) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadReport = () => {
    onDownload(report.id);
    // Create a downloadable formatted text/html file
    const blobContent = `
========================================================================
TECNIC GROUP & TECNIC MEDTECH - BÁO CÁO Y TẾ CHÍNH THỨC
${report.title}
Chuyên mục: ${report.categoryName}
Ngày công bố: ${report.publishDate} | Tác giả: ${report.author}
Bản quyền: Tập đoàn TECNIC (tecnic.vn - ytetecnic.vn)
========================================================================

TÓM TẮT ĐIỀU HÀNH:
${report.summary}

CÁC CHỈ SỐ THEN CHỐT:
${report.metrics.map((m) => `- ${m.label}: ${m.value} (${m.note || ''})`).join('\n')}

NỘI DUNG CHI TIẾT:
${report.content}

------------------------------------------------------------------------
CÔNG TY CP CÔNG NGHỆ VÀ DỊCH VỤ Y TẾ TECNIC
Địa chỉ: Tầng 2, Tòa nhà New Skyline, KĐT Văn Quán - Yên Phúc, Hà Đông, Hà Nội
Hotline: 0988.386.996 | Website: https://tecnic.vn
    `;

    const blob = new Blob([blobContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${report.id}-${report.title.slice(0, 30)}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 border border-slate-200 my-6">
        {/* Header - Print Friendly */}
        <div className="bg-slate-900 text-white p-6 relative">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-blue-600/80 text-white text-xs font-bold uppercase tracking-wider">
                {report.categoryName}
              </span>
              <span className="text-xs text-slate-400 font-medium">Mã báo cáo: {report.id}</span>
            </div>

            <div className="flex items-center gap-2 no-print">
              <button
                onClick={handlePrint}
                className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-xs flex items-center gap-1.5"
                title="In báo cáo"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">In Báo Cáo</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
            {report.title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-4 pt-3 border-t border-slate-800">
            <span className="flex items-center gap-1.5 text-slate-300">
              <User className="w-3.5 h-3.5 text-blue-400" />
              {report.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {report.publishDate}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-slate-400" />
              {report.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-slate-400" />
              {report.views} lượt xem
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Download className="w-3.5 h-3.5" />
              {report.downloads} lượt tải
            </span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[72vh] overflow-y-auto">
          {/* Executive Summary */}
          <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-4 h-4 text-blue-700" />
              Tóm Tắt Điều Hành (Executive Summary)
            </div>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
              {report.summary}
            </p>
          </div>

          {/* Key Metrics Highlight Grid */}
          {report.metrics.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Chỉ Số Định Lượng Then Chốt
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {report.metrics.map((m, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                    <div className="text-xl sm:text-2xl font-black text-blue-900">{m.value}</div>
                    <div className="text-xs font-bold text-slate-700 mt-1">{m.label}</div>
                    {m.note && <div className="text-[10px] text-slate-400 mt-0.5">{m.note}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Structured Content with formatting */}
          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-6">
            {report.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h3
                    key={index}
                    className="text-lg font-bold text-slate-900 mt-6 mb-2 border-l-4 border-blue-700 pl-3"
                  >
                    {paragraph.replace('## ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={index} className="space-y-1.5 my-3 pl-4 list-disc text-slate-700">
                    {items.map((it, i) => (
                      <li key={i} className="text-sm">
                        {it.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Report Tags */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500 flex items-center gap-1 font-semibold">
              <Tag className="w-3.5 h-3.5" /> Từ khóa:
            </span>
            {report.tags.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 no-print">
          <div className="text-xs text-slate-500">
            Nguồn báo cáo chính thức: <strong className="text-blue-900">TECNIC Medtech Research Hub</strong>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Đóng
            </button>
            <button
              onClick={handleDownloadReport}
              className="px-5 py-2 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Tải Tài Liệu & Báo Cáo Kỹ Thuật</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
