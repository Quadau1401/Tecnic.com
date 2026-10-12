import React from 'react';
import { Product } from '../../types';
import { X, Check, Award, ShieldCheck, Factory, Globe2, FileText, PhoneCall } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onRequestQuote }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 border border-slate-200 my-8">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-2.5 py-0.5 rounded border border-blue-800">
              {product.categoryName}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1.5 leading-snug">
              {product.name}
            </h3>
            <span className="text-xs text-slate-400 font-mono">Mã Model: {product.model}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Top Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="rounded-xl overflow-hidden bg-slate-100 border border-slate-200 aspect-video md:aspect-square flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            <div className="space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Factory className="w-4 h-4 text-blue-600" />
                  <span>Hãng sản xuất: <strong className="text-slate-900">{product.manufacturer}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Globe2 className="w-4 h-4 text-blue-600" />
                  <span>Xuất xứ: <strong className="text-slate-900">{product.origin}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>Chứng nhận chất lượng: <strong className="text-emerald-700">{product.certifications.join(', ')}</strong></span>
                </div>
              </div>

              <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-100">
                <span className="text-xs font-bold text-blue-900 block mb-1">Đối tượng chỉ định sử dụng:</span>
                <p className="text-xs text-blue-800 leading-relaxed">{product.targetAudience}</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide border-l-2 border-blue-600 pl-2.5">
              Đặc Điểm & Tính Năng Nổi Bật
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide border-l-2 border-emerald-600 pl-2.5">
              Thông Số Kỹ Thuật Chi Tiết
            </h4>
            <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
              <table className="w-full text-left">
                <tbody>
                  {product.specs.map((sp, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50/80' : 'bg-white'}>
                      <td className="py-2.5 px-4 font-semibold text-slate-700 w-1/3 border-b border-slate-100">
                        {sp.key}
                      </td>
                      <td className="py-2.5 px-4 text-slate-900 border-b border-slate-100 font-medium">
                        {sp.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Hỗ trợ tư vấn kỹ thuật & giao hàng toàn quốc: <strong className="text-blue-900">0988.386.996</strong>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Đóng
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(`${product.name} (${product.model})`);
              }}
              className="px-5 py-2 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow transition-colors flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Yêu Cầu Báo Giá Thiết Bị Này</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
