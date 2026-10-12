import { CompanyInfo, Report, Product, NewsArticle, Inquiry, ProjectItem, EcosystemSectorItem } from '../types';

export const initialCompanyInfo: CompanyInfo = {
  name: 'CÔNG TY CỔ PHẦN CÔNG NGHỆ VÀ DỊCH VỤ Y TẾ TECNIC',
  brandName: 'TECNIC GROUP',
  groupName: 'CÔNG TY CỔ PHẦN TẬP ĐOÀN TECNIC',
  slogan: 'Kiến tạo giá trị bằng công nghệ',
  mission: 'Kiến tạo để phụng sự.',
  subSlogan: 'Phát triển hệ sinh thái doanh nghiệp dựa trên công nghệ, chuyên môn và nguồn lực.',
  taxIdGroup: '0108469044',
  taxIdMedical: '0110912898',
  headquarters: 'Tầng 2, Tòa nhà New Skyline, KĐT mới Văn Quán - Yên Phúc, Phường Hà Đông, Thành phố Hà Nội, Việt Nam',
  branchHcm: 'Số 45/18 Đường D5, Phường 25, Quận Bình Thạnh, TP. Hồ Chí Minh',
  hotline: '034 84 02466 - 0988.386.996',
  email: 'tecnic.vn.group@gmail.com',
  website: 'https://tecnic.com.vn',
  domains: ['tecnic.com.vn', 'tecnic.vn', 'ytetecnic.vn'],
  workingHours: 'Thứ 2 - Thứ 7: 08:00 - 17:30 (Trực hotline 24/7)',
  establishedYear: '2018',
  aboutSummary:
    'TECNIC phát triển hệ sinh thái doanh nghiệp trong các lĩnh vực y tế, năng lượng, vật liệu và khoáng sản, kết nối công nghệ, chuyên môn và nguồn lực để tạo ra những sản phẩm, dịch vụ và giải pháp có giá trị thực tiễn.',
  vision:
    'Từ công nghệ đến giá trị thực: TECNIC phát triển các doanh nghiệp chuyên môn trong từng lĩnh vực, tập trung xây dựng năng lực về sản phẩm, giải pháp và dịch vụ phù hợp với nhu cầu thực tế của thị trường. Thông qua việc kết nối các nguồn lực, đội ngũ chuyên môn và mạng lưới đối tác, TECNIC hướng tới xây dựng một hệ sinh thái có khả năng phát triển bền vững và tạo ra giá trị lâu dài.',
  coreValues: [
    {
      title: 'Chuyên Môn',
      desc: 'Nắm vững kiến thức khoa học, làm chủ công nghệ lõi và giải pháp kỹ thuật chuyên sâu trong từng ngành nghề.',
      iconName: 'Award',
    },
    {
      title: 'Trách Nhiệm',
      desc: 'Cam kết chất lượng chuẩn mực, uy tín với đối tác và tinh thần phụng sự vì sức khỏe và sự phát triển của cộng đồng.',
      iconName: 'ShieldCheck',
    },
    {
      title: 'Hợp Tác',
      desc: 'Gắn kết bền chặt nguồn lực đa ngành, liên kết cùng các tập đoàn hàng đầu và hệ thống bệnh viện trên toàn quốc.',
      iconName: 'Users',
    },
    {
      title: 'Đổi Mới',
      desc: 'Không ngừng nghiên cứu sáng tạo, cải tiến sản phẩm và giải pháp để thích ứng nhanh với nhu cầu thực tiễn.',
      iconName: 'Sparkles',
    },
  ],
  memberCompanies: [
    {
      name: 'Tecnic Medical',
      legalName: 'Công Ty CP Công Nghệ Và Dịch Vụ Y Tế Tecnic',
      role: 'Y tế',
      sectorId: 'y-te',
      englishTitle: 'Healthcare Technology & Solutions',
      desc: 'Phát triển công nghệ y tế, thiết bị chăm sóc sức khỏe gia đình (tecnic.vn) và giải pháp phục hồi chức năng y khoa chuyên sâu (ytetecnic.vn).',
      website: 'https://tecnic.vn',
    },
    {
      name: 'Tecnic Electric',
      legalName: 'Công Ty CP Năng Lượng Và Hệ Thống Điện Tecnic',
      role: 'Năng lượng',
      sectorId: 'nang-luong',
      englishTitle: 'Energy & Electrical Systems',
      desc: 'Tổng thầu EPC điện mặt trời áp mái công nghiệp (C&I Solar), hệ thống lưu trữ pin BESS Lithium và trạm biến áp.',
      website: 'https://tecnic.com.vn',
    },
    {
      name: 'Tecnic Mat',
      legalName: 'Công Ty CP Công Nghệ Vật Liệu Tecnic',
      role: 'Vật liệu',
      sectorId: 'vat-lieu',
      englishTitle: 'Advanced Materials & Solutions',
      desc: 'Nghiên cứu, phát triển vật liệu composite y sinh và đá thạch anh nhân tạo kháng khuẩn MediQuartz-90.',
      website: 'https://tecnic.com.vn',
    },
    {
      name: 'Tecmin',
      legalName: 'Công Ty CP Khoáng Sản Tecmin',
      role: 'Khoáng sản',
      sectorId: 'khoang-san',
      englishTitle: 'Minerals & Natural Stone',
      desc: 'Khai thác, chế biến bột khoáng CaCO₃ siêu mịn và cung ứng đá tự nhiên cho các đại dự án hạ tầng quốc gia như Vinhomes Royal Island.',
      website: 'https://tecnic.com.vn',
    },
    {
      name: 'Tecin Logistics',
      legalName: 'Công Ty CP Đầu Tư Hạ Tầng Logistics Và Vận Tải Tecin',
      role: 'Logistics',
      sectorId: 'logistics',
      englishTitle: 'Supply Chain & Heavy Logistics',
      desc: 'Vận tải chuyên dụng đa phương thức, chuỗi cung ứng lạnh y tế chuẩn GDP và giải pháp logistics xuất nhập khẩu khoáng sản quốc tế.',
      website: 'https://tecnic.com.vn',
    },
  ],
  stats: {
    experienceYears: 15,
    healthcareProjects: 520,
    devicesDeployed: 65000,
    isoStandards: 'ISO 13485:2016 & ISO 9001',
    partnerHospitals: 180,
  },
};

// 4 Core Ecosystem Sectors requested: Y TẾ, NĂNG LƯỢNG, KHOÁNG SẢN, VẬT LIỆU
export const initialEcosystemSectors: EcosystemSectorItem[] = [
  {
    id: 'y-te',
    title: 'Y TẾ',
    keywords: 'Công nghệ y tế · Thiết bị y tế · Chăm sóc sức khỏe · Phục hồi chức năng',
    description:
      'Kết nối công nghệ chẩn đoán, thiết bị phục hồi chức năng và hệ thống y tế chuyên sâu đồng hành cùng bệnh nhân và các cơ sở y tế trên toàn quốc.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    unit: 'TECNIC MEDICAL',
    actionText: 'KHÁM PHÁ →',
    details: [
      'Y tế dự phòng & Chăm sóc gia đình (tecnic.vn): Cân 18 chỉ số mỡ nội tạng, máy đo huyết áp thông minh, máy siêu âm cá nhân',
      'Phục hồi chức năng vận động (ytetecnic.vn): Khung tập đi phanh an toàn, xe lăn điện đa năng, đệm khí chống loét, đai nẹp Bonbone Nhật Bản',
      'Công nghệ bệnh viện: Hệ thống Robot NeuroRehab phục hồi thần kinh, thiết bị phòng mổ và giường điện ICU',
    ],
  },
  {
    id: 'nang-luong',
    title: 'NĂNG LƯỢNG',
    keywords: 'Giải pháp năng lượng · Hệ thống điện',
    description:
      'Phát triển các giải pháp điện mặt trời áp mái công nghiệp, trạm biến áp, lưu trữ năng lượng BESS và nguồn điện ổn định phục vụ sản xuất.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    unit: 'TECNIC ELECTRIC',
    actionText: 'KHÁM PHÁ →',
    details: [
      'Tổng thầu EPC điện mặt trời áp mái nhà máy và khu công nghiệp',
      'Thiết kế, xây lắp đường dây truyền tải và trạm biến áp đến 110kV',
      'Hệ thống lưu trữ điện năng pin Lithium công suất lớn và UPS y tế',
    ],
  },
  {
    id: 'khoang-san',
    title: 'KHOÁNG SẢN',
    keywords: 'CaCO₃ · Đá tự nhiên · Khoáng sản',
    description:
      'Khai thác và chế biến sâu khoáng sản CaCO₃ siêu mịn, cung ứng đá tự nhiên cao cấp phục vụ các đại dự án hạ tầng và bất động sản hàng đầu.',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
    unit: 'TECMIN',
    actionText: 'KHÁM PHÁ →',
    details: [
      'Sản xuất bột đá trắng CaCO₃ siêu mịn tráng phủ axit béo cho ngành nhựa, sơn, giấy',
      'Gia công đá tự nhiên quy cách cao cấp cho các công trình cảnh quan và kiến trúc',
      'Quy trình khai mỏ tuần hoàn, thân thiện với môi trường sinh thái',
    ],
  },
  {
    id: 'vat-lieu',
    title: 'VẬT LIỆU',
    keywords: 'Sản phẩm và giải pháp vật liệu',
    description:
      'Nghiên cứu, phát triển và chế tạo các giải pháp vật liệu polymer kỹ thuật cao, composite y sinh và vật liệu hoàn thiện công nghệ cao.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    unit: 'TECNIC MAT',
    actionText: 'KHÁM PHÁ →',
    details: [
      'Vật liệu composite siêu bền nhẹ ứng dụng trong thiết bị phục hồi chức năng',
      'Polymer nano kháng khuẩn đáp ứng tiêu chuẩn phòng thí nghiệm và y tế',
      'Vật liệu cách nhiệt, chống ăn mòn cho các công trình công nghiệp nặng',
    ],
  },
  {
    id: 'logistics',
    title: 'LOGISTICS',
    keywords: 'Vận tải chuyên dụng · Chuỗi cung ứng lạnh y tế · Vận chuyển xuất nhập khẩu',
    description:
      'Hệ thống logistics vận chuyển thiết bị y tế, chuỗi cung ứng lạnh bảo quản dược phẩm đạt chuẩn GDP và mạng lưới vận tải khoáng sản liên tỉnh - quốc tế.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    unit: 'TECNIC LOGISTICS',
    actionText: 'KHÁM PHÁ →',
    details: [
      'Vận chuyển & lắp đặt thiết bị y tế tận nơi 63 tỉnh thành với quy trình chằng buộc chống sốc chuyên dụng',
      'Hệ thống kho bảo quản y tế & chuỗi cung ứng lạnh Cold-Chain đạt chuẩn GDP & ISO 9001:2015',
      'Logistics đa phương thức phục vụ xuất khẩu bột khoáng CaCO₃ và đá tự nhiên TECMIN đi quốc tế',
    ],
  },
];

// Featured Projects: Concrete proof of "Kiến tạo giá trị bằng công nghệ"
export const initialProjects: ProjectItem[] = [
  {
    id: 'proj-01',
    title: 'Vinhomes Royal Island – Vũ Yên',
    subtitle: 'TECMIN · Vật liệu / Đá tự nhiên',
    unit: 'TECMIN',
    sector: 'Khoáng Sản / Vật Liệu',
    location: 'Hải Phòng',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    description:
      'TECMIN cung ứng đá tự nhiên quy cách cao cấp cho hệ thống cảnh quan, lối đi dạo ven sông và các hạng mục biệt thự đảo thượng lưu tại đại dự án Vinhomes Royal Island Vũ Yên.',
    scope: [
      'Cung cấp hơn 45.000 m² đá tự nhiên lát cảnh quan chịu lực',
      'Đá ốp trang trí kiến trúc độ đồng màu và bền thời tiết cao',
      'Đáp ứng tiến độ thi công khắt khe của chủ đầu tư Vingroup',
    ],
    status: 'Đã hoàn thành bàn giao',
  },
  {
    id: 'proj-02',
    title: 'The Crown – Vinhomes Ocean Park 3',
    subtitle: 'TECMIN · Vật liệu',
    unit: 'TECMIN',
    sector: 'Vật Liệu / Khoáng Sản',
    location: 'Hưng Yên - Hà Nội',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description:
      'Giải pháp vật liệu đá tự nhiên và cốt liệu chất lượng cao từ TECMIN phục vụ hạ tầng phân khu The Crown - Vinhomes Ocean Park 3, đảm bảo thẩm mỹ sang trọng và tuổi thọ bền vững.',
    scope: [
      'Gia công cắt phay đá tự nhiên theo thiết kế cảnh quan đặc thù',
      'Cung ứng bột khoáng và cốt liệu đá kỹ thuật cao',
      'Bảo hành chất lượng bề mặt vật liệu 10 năm',
    ],
    status: 'Đã hoàn thành bàn giao',
  },
  {
    id: 'proj-03',
    title: 'Hệ Thống Phục Hồi Chức Năng NeuroRehab & ICU Bệnh Viện Tuyến Trung Ương',
    subtitle: 'TECNIC MEDICAL · Y tế / Bệnh viện',
    unit: 'TECNIC MEDICAL',
    sector: 'Y Tế Chuyên Sâu',
    location: 'Hà Nội & TP. Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    description:
      'Chuyển giao và lắp đặt hệ thống Robot NeuroRehab hỗ trợ tập vận động cho bệnh nhân sau đột quỵ cùng hệ thống giường bệnh nhân điện tử đa chức năng và khí y tế trung tâm.',
    scope: [
      'Lắp đặt hoàn thiện hệ thống Robot NeuroRehab tương tác thực tế ảo',
      'Cung cấp 120 giường bệnh nhân điện tử đa chức năng CareBed 5M',
      'Đào tạo chuyển giao công nghệ cho đội ngũ y bác sĩ phục hồi chức năng',
    ],
    status: 'Đang vận hành hiệu quả',
  },
  {
    id: 'proj-04',
    title: 'Chương Trình Hợp Tác MOU Trao Tặng 1.700 Phương Tiện Phục Hồi Chức Năng',
    subtitle: 'TECNIC MEDICAL · Y tế cộng đồng',
    unit: 'TECNIC MEDICAL',
    sector: 'Sức Khỏe Cộng Đồng',
    location: '63 Tỉnh Thành',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    description:
      'Chương trình hiện thực hóa sứ mệnh "Kiến tạo để phụng sự": Trao tặng 500 xe lăn trợ lực và 1.200 khung tập đi có phanh an toàn cho người khuyết tật nghèo và bệnh nhân sau tai biến.',
    scope: [
      'Trao tặng 500 xe lăn và 1.200 khung tập đi chuẩn y khoa',
      '36 buổi tập huấn chống loét tì đè và hướng dẫn tập phục hồi',
      'Tài trợ 100% phụ tùng thay thế và bảo trì thiết bị trong 3 năm',
    ],
    status: 'Đang triển khai thường niên',
  },
  {
    id: 'proj-05',
    title: 'Hệ Thống Điện Mặt Trời Áp Mái & Trạm Biến Áp Công Nghiệp',
    subtitle: 'TECNIC ELECTRIC · Năng lượng',
    unit: 'TECNIC ELECTRIC',
    sector: 'Năng Lượng',
    location: 'Bắc Ninh & Bình Dương',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    description:
      'Tổng thầu EPC hệ thống điện mặt trời áp mái 4.8 MWp kết hợp trạm biến áp và hệ thống giám sát SCADA, giúp doanh nghiệp tiết kiệm 28% chi phí năng lượng và đạt chứng chỉ xanh.',
    scope: [
      'Thiết kế và lắp đặt 10.500 tấm pin năng lượng mặt trời hiệu suất cao',
      'Xây dựng trạm biến áp nâng áp đấu nối lưới điện an toàn',
      'Tích hợp hệ thống giám sát điện toán đám mây 24/7',
    ],
    status: 'Đã đóng điện thành công',
  },
  {
    id: 'proj-06',
    title: 'Chuỗi Logistics Vận Tải Lạnh GDP Thiết Bị Y Tế & Xuất Khẩu Khoáng Sản',
    subtitle: 'TECIN LOGISTICS · Logistics & Vận tải',
    unit: 'TECIN LOGISTICS',
    sector: 'Logistics',
    location: 'Hải Phòng - Hà Nội - Quốc tế',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    description:
      'Thiết lập chuỗi cung ứng lạnh đạt chuẩn GDP phục vụ vận chuyển an toàn hơn 450 giường điện và thiết bị ICU tới 63 tỉnh thành, đồng thời vận hành đội xe đầu kéo chở bao Jumbo bột đá CaCO₃ xuất khẩu quốc tế.',
    scope: [
      'Đội xe tải trang bị đệm khí bóng hơi giảm xóc và bửng nâng thủy lực chuyên dụng',
      'Kiểm soát nhiệt độ thùng xe và độ ẩm thời gian thực bằng cảm biến IoT GPS 24/7',
      'Vận tải đường bộ và đường biển kết hợp xuất khẩu sang các thị trường Đông Nam Á',
    ],
    status: 'Đang vận hành toàn diện',
  },
];

// Reports System (Maintained for reports reading & writing)
export const initialReports: Report[] = [
  {
    id: 'rep-01',
    title: 'Báo Cáo Thường Niên 2025 - 2026: Đột Phá Chuyển Đổi Số & Hệ Sinh Thái MedTech Toàn Diện',
    category: 'annual',
    categoryName: 'Báo Cáo Thường Niên',
    author: 'Ban Chiến Lược Tập Đoàn TECNIC',
    publishDate: '15/01/2026',
    summary:
      'Tổng kết thành tựu triển khai thiết bị y tế trên toàn quốc, chỉ số tăng trưởng 42% trong mảng phục hồi chức năng gia đình và kế hoạch thương mại hóa các dòng Robot tập vận động thế hệ mới.',
    content: `## 1. TỔNG QUAN CHIẾN LƯỢC NĂM 2025-2026
Năm 2025 ghi nhận bước chuyển mình mạnh mẽ của Tập đoàn TECNIC trong việc hoàn thiện chuỗi giá trị đa ngành: Y tế - Năng lượng - Vật liệu - Khoáng sản. Với định vị "Kiến tạo giá trị bằng công nghệ" và sứ mệnh "Kiến tạo để phụng sự", TECNIC đã mở rộng mạng lưới đối tác đến 63 tỉnh thành.

## 2. KẾT QUẢ KINH DOANH VÀ TRIỂN KHAI THỰC TẾ
- **Doanh thu mảng MedTech**: Đạt tốc độ tăng trưởng 42.8% so với cùng kỳ năm trước.
- **Dự án thiết bị bệnh viện**: Bàn giao thành công 52 hệ thống khí y tế trung tâm và hồi sức cấp cứu ICU.
- **Sản phẩm phục hồi chức năng**: Hơn 25.000 bệnh nhân sau tai biến và chấn thương đã phục hồi khả năng đi lại nhờ khung tập đi Tecnic Walker và nẹp khớp Bonbone.

## 3. ĐỊNH HƯỚNG NĂM 2026
Tập trung đầu tư R&D vào hệ thống cảm biến thông minh tích hợp trên thiết bị y tế gia đình, phát triển ứng dụng di động kết nối bác sĩ từ xa để theo dõi dữ liệu sức khỏe bệnh nhân liên tục 24/7.`,
    metrics: [
      { label: 'Tăng trưởng MedTech', value: '+42.8%', note: 'So với năm 2024' },
      { label: 'Bệnh viện đối tác', value: '180+', note: 'Toàn quốc' },
      { label: 'Bệnh nhân phục hồi', value: '25.000+', note: 'Cải thiện vận động' },
      { label: 'Đạt chuẩn kiểm định', value: '100%', note: 'Bộ Y Tế & ISO 13485' },
    ],
    readTime: '8 phút đọc',
    views: 3420,
    downloads: 875,
    status: 'published',
    featured: true,
    tags: ['Chiến lược', 'Báo cáo thường niên', 'Tăng trưởng', 'MedTech 2026'],
  },
  {
    id: 'rep-02',
    title: 'Báo Cáo Đánh Giá Lâm Sàng: Hiệu Quả Cải Thiện Vận Động Khung Tập Đi & Nẹp Bonbone Cho Người Sau Đột Quỵ',
    category: 'clinical',
    categoryName: 'Nghiên Cứu Lâm Sàng',
    author: 'Hội đồng Khoa học TECNIC Medtech & Bác sĩ Phục Hồi Chức Năng',
    publishDate: '08/12/2025',
    summary:
      'Đánh giá trên 350 bệnh nhân đột quỵ giai đoạn bán cấp: 88.6% lấy lại khả năng tự thăng bằng sau 6 tuần luyện tập kết hợp khung tập đi phanh an toàn Tecnic và đai trợ lực Bonbone Nhật Bản.',
    content: `## 1. MỤC TIÊU VÀ ĐỐI TƯỢNG NGHIÊN CỨU
Khảo sát hiệu quả can thiệp sớm trên 350 bệnh nhân (độ tuổi 48 - 72) liệt nửa người sau tai biến mạch máu não giai đoạn từ tuần thứ 3 đến tháng thứ 6.

## 2. PHƯƠNG PHÁP TRIỂN KHAI
- Nhóm can thiệp sử dụng Khung tập đi 4 bánh có hệ thống khóa hãm đa điểm Tecnic Walker Pro kết hợp Đai nẹp đầu gối & thắt lưng Bonbone.
- Nhóm đối chứng tập luyện theo phương pháp vật lý trị liệu cổ điển không có khung hỗ trợ lực phản hồi.

## 3. KẾT QUẢ THEO THANG ĐIỂM BERG BALANCE SCALE (BBS)
- Tỷ lệ bệnh nhân tự đứng vững không cần người nâng đỡ đạt 88.6% ở nhóm can thiệp (so với 54.2% ở nhóm đối chứng).
- Tốc độ sải chân trung bình tăng 1.8 lần. Giảm thiểu 96% nguy cơ té ngã và chấn thương thứ phát trong quá trình tập tại nhà.`,
    metrics: [
      { label: 'Cỡ mẫu nghiên cứu', value: '350 BN', note: 'Đột quỵ bán cấp' },
      { label: 'Tỷ lệ tự đứng vững', value: '88.6%', note: 'Sau 6 tuần can thiệp' },
      { label: 'Giảm nguy cơ té ngã', value: '96.2%', note: 'Độ an toàn cao' },
      { label: 'Mức độ hài lòng', value: '94.5%', note: 'Đánh giá từ người nhà' },
    ],
    readTime: '12 phút đọc',
    views: 4890,
    downloads: 1420,
    status: 'published',
    featured: true,
    tags: ['Lâm sàng', 'Phục hồi chức năng', 'Đột quỵ', 'Khung tập đi', 'Bonbone'],
  },
  {
    id: 'rep-03',
    title: 'Báo Cáo Kỹ Thuật: Tiêu Chuẩn An Toàn & Quy Trình Kiểm Định Thiết Bị Y Tế Phòng Mổ Theo ISO 13485',
    category: 'technical',
    categoryName: 'Báo Cáo Kỹ Thuật',
    author: 'Phòng Quản Lý Chất Lượng & Dịch Vụ Kỹ Thuật TECNIC',
    publishDate: '20/11/2025',
    summary:
      'Quy chuẩn kỹ thuật quốc tế về rò điện, tương thích điện từ EMC và độ bền mỏi cơ học của hệ thống giường bệnh nhân điện tử đa năng và máy thở hồi sức cấp cứu do TECNIC phân phối.',
    content: `## 1. CĂN CỨ PHÁP LÝ VÀ TIÊU CHUẨN
Báo cáo xây dựng dựa trên Nghị định 98/2021/NĐ-CP và hệ thống tiêu chuẩn quốc tế ISO 13485:2016, IEC 60601-1 về an toàn thiết bị điện y tế.

## 2. CÁC HẠNG MỤC KIỂM THỬ ĐẶC BIỆT
- **Dòng rò tiếp đất (Earth Leakage Current)**: Dưới 0.1 mA ở điều kiện hoạt động bình thường, đảm bảo an toàn tuyệt đối cho bệnh nhân mang máy tạo nhịp.
- **Độ bền chu kỳ của Giường điện Tecnic CareBed 5M**: Trải qua 100.000 chu kỳ nâng hạ tải trọng 250kg liên tục mà không có biến dạng cơ học.
- **Hệ thống cảnh báo an toàn**: Tự động khóa phanh khẩn cấp và chuyển đổi sang pin dự phòng trong 0.05 giây khi mất điện lưới.`,
    metrics: [
      { label: 'Dòng rò tiếp đất', value: '< 0.1 mA', note: 'Chuẩn y tế loại B/BF' },
      { label: 'Tải trọng kiểm định', value: '250 kg', note: 'Hệ số an toàn 2.5x' },
      { label: 'Thời gian chuyển mạch', value: '0.05 s', note: 'Không gián đoạn' },
      { label: 'Tuổi thọ khung', value: '> 15 năm', note: 'Thép phủ nano kháng khuẩn' },
    ],
    readTime: '10 phút đọc',
    views: 2150,
    downloads: 630,
    status: 'published',
    featured: false,
    tags: ['Kỹ thuật', 'ISO 13485', 'Kiểm định', 'An toàn điện', 'Phòng mổ'],
  },
  {
    id: 'rep-04',
    title: 'Báo Cáo Trách Nhiệm Xã Hội (CSR): Tổng Kết Chương Trình Hợp Tác MOU Hỗ Trợ Người Khuyết Tật',
    category: 'csr',
    categoryName: 'Báo Cáo CSR & MOU',
    author: 'Ban Quan Hệ Cộng Đồng TECNIC & Quỹ Vì Cuộc Sống Mới',
    publishDate: '18/02/2026',
    summary:
      'Hiện thực hóa biên bản ghi nhớ hợp tác (MOU) hỗ trợ người khuyết tật: Trao tặng 500 xe lăn, 1.200 khung tập đi và tài trợ 100% kinh phí tập phục hồi chức năng cho người có hoàn cảnh khó khăn.',
    content: `## 1. Ý NGHĨA CHƯƠNG TRÌNH "KIẾN TẠO ĐỂ PHỤNG SỰ"
Thấm nhuần triết lý phát triển bền vững và sứ mệnh "Kiến tạo để phụng sự", TECNIC MEDTECH đã chủ động ký kết Biên bản ghi nhớ hợp tác (MOU) với các tổ chức bảo trợ người khuyết tật trên cả nước.

## 2. KẾT QUẢ ĐẠT ĐƯỢC
- **Trao tặng thiết bị**: 500 chiếc xe lăn trợ lực cao cấp và 1.200 khung tập đi đa năng có ghế nghỉ.
- **Tập huấn chuyên môn**: Tổ chức 36 buổi hướng dẫn kỹ thuật chống loét tì đè và phương pháp tập vận động an toàn.
- **Hỗ trợ phục hồi**: Hơn 420 người khuyết tật đã cải thiện rõ rệt khả năng tự phục vụ sinh hoạt cá nhân.`,
    metrics: [
      { label: 'Xe lăn trao tặng', value: '500 chiếc', note: 'Chất lượng cao' },
      { label: 'Khung tập đi', value: '1.200 bộ', note: 'Kèm phanh an toàn' },
      { label: 'Buổi tập huấn kỹ thuật', value: '36 buổi', note: 'Chuyên gia y tế trực tiếp' },
      { label: 'Ngân sách tài trợ CSR', value: '4.8 Tỷ VNĐ', note: '100% từ quỹ TECNIC' },
    ],
    readTime: '6 phút đọc',
    views: 5210,
    downloads: 1890,
    status: 'published',
    featured: true,
    tags: ['CSR', 'MOU', 'Người khuyết tật', 'Kiến tạo để phụng sự', 'Cộng đồng'],
  },
];

export const initialProducts: Product[] = [
  {
    id: 'prod-01',
    name: 'Khung Tập Đi 4 Bánh Có Phanh An Toàn & Ghế Ngồi Tecnic Walker Pro',
    model: 'TW-400PRO',
    category: 'rehab',
    categoryName: 'Thiết Bị Phục Hồi Chức Năng',
    manufacturer: 'TECNIC Medtech',
    origin: 'Việt Nam (Công nghệ chuyển giao Đức)',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    description:
      'Dòng khung tập đi y tế cao cấp nhất hiện nay dành cho người bệnh sau tai biến, phẫu thuật xương khớp và người cao tuổi. Trang bị hệ thống phanh tay đa cấp chống trượt ngã, đệm ngồi êm ái kèm giỏ đựng đồ cá nhân tiện lợi.',
    features: [
      'Khung hợp kim nhôm siêu nhẹ máy bay, chịu tải trọng lên tới 150 kg',
      'Hệ thống phanh đôi: Bóp nhẹ để giảm tốc, gạt xuống để khóa bánh đứng yên tuyệt đối',
      'Có tựa lưng bọc đệm êm ái và ghế ngồi nghỉ ngơi khi đi bộ mệt',
      'Bánh xe lớn 8 inch cao su đặc chống đinh, xoay 360 độ linh hoạt trên mọi địa hình',
    ],
    specs: [
      { key: 'Chất liệu khung', value: 'Hợp kim nhôm Aluminum 6061 sơn tĩnh điện chống xước' },
      { key: 'Tải trọng tối đa', value: '150 kg' },
      { key: 'Trọng lượng sản phẩm', value: '7.8 kg' },
      { key: 'Bảo hành chính hãng', value: '24 tháng đổi mới khung' },
    ],
    certifications: ['ISO 13485:2016', 'CE Mark 0197', 'Bộ Y Tế cấp phép lưu hành'],
    targetAudience: 'Người sau đột quỵ tập đi, bệnh nhân sau phẫu thuật thay khớp háng/gối, người già yếu chân',
    isFeatured: true,
  },
  {
    id: 'prod-02',
    name: 'Xe Lăn Điện Thông Minh Đa Năng Gập Gọn Tecnic Glide Ultra',
    model: 'TG-ULTRA9',
    category: 'rehab',
    categoryName: 'Thiết Bị Phục Hồi Chức Năng',
    manufacturer: 'TECNIC Medtech',
    origin: 'Hợp tác công nghệ Nhật Bản',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    description:
      'Xe lăn điện cao cấp thế hệ mới điều khiển bằng cần gạt 360 độ cực nhạy hoặc remote từ xa. Động cơ kép không chổi than tiết kiệm năng lượng, pin Lithium tháo rời được mang lên máy bay.',
    features: [
      'Điều khiển Joystick 360 độ siêu nhạy, tự động dừng ngay khi thả tay (Phanh điện từ EABS)',
      'Tích hợp điều khiển từ xa không dây cho người thân hoặc hỗ trợ từ xa',
      'Động cơ kép không chổi than 500W leo dốc khỏe 15 độ không giật cục',
      'Pin Lithium bền bỉ di chuyển tới 25km cho một lần sạc đầy',
    ],
    specs: [
      { key: 'Động cơ', value: 'Động cơ kép không chổi than 2x250W' },
      { key: 'Pin', value: 'Lithium 24V 12Ah' },
      { key: 'Tốc độ tối đa', value: '6 km/h' },
      { key: 'Bảo hành', value: '18 tháng' },
    ],
    certifications: ['ISO 13485:2016', 'CE Medical', 'FDA Listed'],
    targetAudience: 'Người khuyết tật vận động, người già khó di chuyển',
    isFeatured: true,
  },
  {
    id: 'prod-03',
    name: 'Đai Hỗ Trợ Cột Sống Thắt Lưng Cao Cấp Bonbone Pro (Nhật Bản)',
    model: 'BONBONE-PRO-JAPAN',
    category: 'rehab',
    categoryName: 'Thiết Bị Phục Hồi Chức Năng',
    manufacturer: 'Bonbone (Daiya Industry - Nhật Bản)',
    origin: 'Nhật Bản (Phân phối chính ngạch bởi Tecnic)',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    description:
      'Dòng đai nẹp cột sống thắt lưng số 1 tại các bệnh viện Nhật Bản. Thiết kế cơ chế ròng rọc kép độc quyền trợ lực gấp 4 lần chỉ với một lực kéo nhẹ, ôm sát nâng đỡ đường cong sinh lý cột sống thắt lưng.',
    features: [
      'Cơ chế ròng rọc trợ lực độc quyền của hãng Daiya Industry - Nhật Bản',
      'Chất liệu vải lưới dệt 3D siêu nhẹ và thoáng khí',
      '4 thanh nẹp hợp kim nhớ hình uốn theo đường cong tự nhiên đốt sống',
    ],
    specs: [
      { key: 'Xuất xứ', value: '100% Made in Japan' },
      { key: 'Cỡ size', value: 'S, M, L, XL, XXL' },
      { key: 'Bảo hành', value: '12 tháng' },
    ],
    certifications: ['Japan Medical Device License', 'ISO 13485'],
    targetAudience: 'Người bị thoái hóa cột sống, thoát vị đĩa đệm, đau lưng cơ năng',
    isFeatured: true,
  },
  {
    id: 'prod-04',
    name: 'Máy Đo Huyết Áp Bắp Tay Điện Tử Kết Nối Không Dây Tecnic SmartCare',
    model: 'TM-BP880',
    category: 'preventive',
    categoryName: 'Y Tế Dự Phòng & Gia Đình',
    manufacturer: 'TECNIC Medical',
    origin: 'Công nghệ cảm biến Nhật Bản',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    description:
      'Máy đo huyết áp thông minh sử dụng thuật toán Fuzzy Logic tiên tiến tự động bơm xả áp lực tối ưu cho từng kích cỡ bắp tay. Cảnh báo rối loạn nhịp tim sớm và đồng bộ dữ liệu vào điện thoại gia đình.',
    features: [
      'Màn hình LCD đèn nền lớn 5.5 inch',
      'Phát âm thanh tiếng Việt hướng dẫn đo và đọc kết quả',
      'Phát hiện và cảnh báo sớm nhịp tim bất thường',
    ],
    specs: [
      { key: 'Phương pháp đo', value: 'Dao động kế' },
      { key: 'Dải đo huyết áp', value: '0 - 299 mmHg' },
      { key: 'Bảo hành', value: '5 năm 1 đổi 1' },
    ],
    certifications: ['ISO 13485:2016', 'ESH Châu Âu'],
    targetAudience: 'Mọi gia đình cần theo dõi huyết áp hàng ngày',
    isFeatured: false,
  },
];

export const initialNews: NewsArticle[] = [
  {
    id: 'news-01',
    title: 'TECNIC Ký Kết Biên Bản Ghi Nhớ Hợp Tác (MOU) Hỗ Trợ Người Khuyết Tật Việt Nam',
    category: 'Hợp Tác Chiến Lược',
    publishDate: '24/02/2026',
    author: 'Ban Truyền Thông Tập Đoàn',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    summary:
      'Lễ ký kết MOU đánh dấu cam kết đồng hành lâu dài giữa TECNIC và các hội bảo trợ xã hội trong việc trao tặng thiết bị y tế và hỗ trợ kỹ thuật phục hồi chức năng vận động.',
    content:
      'Tại hội nghị, đại diện Ban lãnh đạo Tập đoàn TECNIC nhấn mạnh sứ mệnh "Kiến tạo để phụng sự". TECNIC không chỉ cung cấp những giải pháp công nghệ tiên tiến nhất mà còn gánh vác trách nhiệm đưa công nghệ phục vụ những mảnh đời cần được trợ giúp nhất. Chương trình cam kết tài trợ 500 xe lăn, 1.200 khung tập đi và duy trì hỗ trợ phụ tùng sửa chữa miễn phí trong 3 năm liên tục.',
    source: 'Báo Nhân Dân & Ban Truyền Thông TECNIC',
  },
  {
    id: 'news-02',
    title: 'Hội Thảo Quốc Tế: Ứng Dụng MedTech & Trí Tuệ Nhân Tạo Trong Chuyển Đổi Số Bệnh Viện 2026',
    category: 'Sự Kiện & Hội Thảo',
    publishDate: '10/02/2026',
    author: 'Phòng Khoa Học Công Nghệ TECNIC',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80',
    summary:
      'Hơn 200 chuyên gia đầu ngành y tế và giám đốc bệnh viện đã thảo luận về mô hình bệnh viện thông minh, giải pháp quản lý thiết bị y tế tập trung do TECNIC triển khai.',
    content:
      'Hội thảo đã trình bày các case study thực tế về việc giảm 35% thời gian chờ đợi của bệnh nhân và nâng cao độ chính xác kiểm chuẩn thiết bị phòng mổ. TECNIC tự hào giới thiệu giải pháp liên thông dữ liệu từ máy đo sinh hiệu tại nhà đến bệnh án điện tử EMR của bệnh viện.',
    source: 'Tạp Chí Y Dược Học & TECNIC Medical',
  },
];

export const initialInquiries: Inquiry[] = [
  {
    id: 'inq-01',
    fullName: 'TS. Bác sĩ Trần Hoàng Minh',
    email: 'minh.tran@bachmai.vn',
    phone: '0912.456.789',
    organization: 'Khoa Phục hồi chức năng - Bệnh viện Đa Khoa',
    serviceInterest: 'Khung tập đi trợ lực & Hệ thống Robot phục hồi chức năng',
    message: 'Tôi muốn yêu cầu bảng báo giá dự toán và hồ sơ chứng chỉ kỹ thuật ISO 13485 cho 20 bộ khung tập đi phanh an toàn và 1 máy NeuroRehab.',
    createdAt: '26/02/2026 09:30',
    status: 'contacted',
    notes: 'Đã gửi catalog chi tiết và xếp lịch hẹn demo trực tiếp vào sáng thứ Năm.',
  },
  {
    id: 'inq-02',
    fullName: 'Đại diện BQL Dự Án Vinhomes',
    email: 'project.vinhomes@partner.vn',
    phone: '0983.112.233',
    organization: 'Ban Quản Lý Vật Liệu & Cảnh Quan Dự Án',
    serviceInterest: 'Đá tự nhiên & Vật liệu cảnh quan TECMIN',
    message: 'Yêu cầu bảng thông số cơ lý tính, mẫu đá và đơn giá cung ứng đá lát quy cách cho phân khu mới.',
    createdAt: '27/02/2026 14:15',
    status: 'new',
  },
];

export interface CareerOpportunity {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
}

export const initialCareers: CareerOpportunity[] = [
  {
    id: 'car-01',
    title: 'Kỹ Sư Thiết Bị Y Tế & Chuyển Giao Công Nghệ',
    department: 'Khối Kỹ Thuật - TECNIC Medical',
    location: 'Hà Nội & TP. Hồ Chí Minh',
    type: 'Toàn thời gian',
    salary: '18 - 30 Triệu VNĐ',
    description: 'Chịu trách nhiệm lắp đặt, bàn giao, hướng dẫn vận hành và hiệu chuẩn các dòng thiết bị phục hồi chức năng Robot NeuroRehab, giường điện y tế và thiết bị phòng mổ tại các bệnh viện.',
    requirements: [
      'Tốt nghiệp Đại học chuyên ngành Kỹ thuật Y sinh, Điện tử Y tế hoặc Cơ điện tử',
      'Có ít nhất 1-2 năm kinh nghiệm bảo trì thiết bị y tế bệnh viện',
      'Nhiệt tình, có trách nhiệm cao và sẵn sàng đi công tác dự án',
    ],
  },
  {
    id: 'car-02',
    title: 'Chuyên Viên Kinh Doanh Dự Án Thiết Bị Bệnh Viện',
    department: 'Khối Kinh Doanh Dự Án',
    location: 'Hà Nội (Trụ sở chính)',
    type: 'Toàn thời gian',
    salary: '20 - 40 Triệu VNĐ + Thưởng dự án',
    description: 'Phát triển khách hàng là các bệnh viện công lập, bệnh viện tư nhân và trung tâm phục hồi chức năng; lập hồ sơ thầu và đàm phán hợp đồng cung cấp thiết bị.',
    requirements: [
      'Tốt nghiệp Đại học Y, Dược hoặc Quản trị Kinh doanh',
      'Có quan hệ tốt với hệ sinh thái cơ sở y tế tại miền Bắc/miền Trung',
      'Kỹ năng thuyết trình và đàm phán thương mại xuất sắc',
    ],
  },
  {
    id: 'car-03',
    title: 'Kỹ Sư Năng Lượng Tái Tạo & Lưới Điện',
    department: 'Khối Năng Lượng - Tecnic Electric',
    location: 'Hà Nội',
    type: 'Toàn thời gian',
    salary: '18 - 28 Triệu VNĐ',
    description: 'Tham gia thiết kế, giám sát thi công các dự án năng lượng mặt trời công nghiệp, trạm biến áp và hệ thống điện thông minh SCADA.',
    requirements: [
      'Tốt nghiệp Đại học Bách Khoa, Điện Lực chuyên ngành Hệ thống Điện',
      'Thành thạo phần mềm thiết kế AutoCAD, ETAP, PVSyst',
    ],
  },
];
