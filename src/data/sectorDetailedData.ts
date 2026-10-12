export interface SectorProductItem {
  id: string;
  name: string;
  model?: string;
  categoryName: string;
  image: string;
  badge?: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  targetAudience?: string;
  origin?: string;
  domainSource?: 'tecnic.vn' | 'ytetecnic.vn' | 'tecnic.com.vn';
}

export interface SectorProjectCase {
  id: string;
  title: string;
  client: string;
  location: string;
  scale: string;
  year: string;
  image: string;
  description: string;
  deliverables: string[];
}

export interface SectorTechnology {
  title: string;
  origin: string;
  highlight: string;
  description: string;
  image?: string;
}

export interface SectorDetailedInfo {
  id: 'y-te' | 'nang-luong' | 'khoang-san' | 'vat-lieu' | 'logistics';
  title: string;
  englishTitle: string;
  unit: string;
  tagline: string;
  bannerImage: string;
  primaryColor: string;
  accentColor: string;
  domains: { name: string; url: string; note: string }[];
  overview: {
    lead: string;
    paragraphs: string[];
    coreValues: { title: string; desc: string }[];
  };
  stats: { value: string; label: string; note?: string }[];
  pillars: {
    id: string;
    title: string;
    summary: string;
    description: string;
    features: string[];
    tag: string;
  }[];
  products: SectorProductItem[];
  technologies: SectorTechnology[];
  projects: SectorProjectCase[];
  certifications: { code: string; title: string; org: string; year: string }[];
  faqs: { question: string; answer: string }[];
}

export const sectorDetailedData: Record<string, SectorDetailedInfo> = {
  'y-te': {
    id: 'y-te',
    title: 'Y TẾ & CÔNG NGHỆ CHĂM SÓC SỨC KHỎE',
    englishTitle: 'Healthcare Technology & Medical Solutions',
    unit: 'TECNIC MEDICAL',
    tagline: 'Kết nối công nghệ chẩn đoán y tế, phục hồi chức năng chuyên sâu và thiết bị theo dõi sức khỏe thông minh gia đình',
    bannerImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80',
    primaryColor: '#0056b3',
    accentColor: '#00b4d8',
    domains: [
      { name: 'tecnic.vn', url: 'https://tecnic.vn', note: 'Thiết bị y tế gia đình & Đo lường sức khỏe thông minh' },
      { name: 'ytetecnic.vn', url: 'https://ytetecnic.vn', note: 'Phục hồi chức năng, Xe lăn điện & Thiết bị y khoa chuyên sâu' },
      { name: 'tecnic.com.vn', url: 'https://tecnic.com.vn', note: 'Cổng thông tin Tập đoàn & Giải pháp y tế doanh nghiệp' },
    ],
    overview: {
      lead: 'TECNIC MEDICAL là trụ cột y tế chiến lược của Tập đoàn TECNIC, hoạt động với tôn chỉ "Kiến tạo để phụng sự" và cam kết mang lại công nghệ y sinh chuẩn xác, dễ tiếp cận cho mọi gia đình và cơ sở y tế Việt Nam.',
      paragraphs: [
        'Chúng tôi đồng bộ hóa hai hệ sinh thái sản phẩm: Nền tảng thiết bị y tế gia đình thông minh kết nối di động (tecnic.vn) và Hệ thống thiết bị phục hồi chức năng vận động y khoa chuyên sâu (ytetecnic.vn). Các dòng sản phẩm được nghiên cứu, phát triển và nhập khẩu chính ngạch đáp ứng các quy chuẩn khắt khe nhất của Bộ Y tế, ISO 13485:2016, CE Mark và FDA.',
        'Hệ sinh thái TECNIC MEDICAL hiện diện tại hơn 180 bệnh viện, viện điều dưỡng, trung tâm lão khoa và phòng khám phục hồi chức năng trên cả nước, đồng thời phục vụ hơn 65.000 bệnh nhân và người cao tuổi thông qua mạng lưới đại lý và chương trình CSR bảo trợ y tế cộng đồng.',
      ],
      coreValues: [
        { title: 'Chuẩn xác & Đáng tin cậy', desc: 'Cảm biến y sinh học độ nhạy cao, thuật toán hiệu chỉnh lâm sàng đã qua kiểm định đối chứng.' },
        { title: 'Tối ưu cho người Việt', desc: 'Giao diện trực quan, hướng dẫn giọng nói tiếng Việt, kích thước công thái học phù hợp thể trạng người Châu Á.' },
        { title: 'Đồng hành dài hạn', desc: 'Bảo hành chính hãng 24-36 tháng, linh kiện thay thế sẵn sàng và đội ngũ kỹ sư hỗ trợ kỹ thuật tận tâm.' },
      ],
    },
    stats: [
      { value: '65.000+', label: 'Thiết bị y tế đang vận hành', note: 'Tại hộ gia đình & cơ sở y tế' },
      { value: '180+', label: 'Bệnh viện & Viện dưỡng lão', note: 'Hợp tác cung cấp trang thiết bị' },
      { value: '100%', label: 'Đạt chuẩn ISO 13485:2016', note: 'Quy trình kiểm soát chất lượng y tế' },
      { value: '1.700+', label: 'Phương tiện hỗ trợ CSR', note: 'Trao tặng người khuyết tật & yếu thế' },
    ],
    pillars: [
      {
        id: 'home-health',
        title: 'Thiết Bị Y Tế Gia Đình & Phòng Ngừa (tecnic.vn)',
        summary: 'Theo dõi chỉ số sinh học chủ động tại nhà, phát hiện sớm nguy cơ tim mạch và chuyển hóa',
        description: 'Tập hợp các thiết bị y tế cá nhân thông minh kết nối Bluetooth và ứng dụng di động: Cân phân tích 18 chỉ số mỡ nội tạng, máy đo huyết áp bắp tay tự động Intellisense, nhiệt kế hồng ngoại đa điểm, máy xông khí dung siêu âm và máy đo SpO2 cầm tay.',
        features: [
          'Đo lường 18 chỉ số thành phần cơ thể: mỡ nội tạng, khối lượng cơ, xương, lượng nước, BMR',
          'Máy đo huyết áp công nghệ cảnh báo sớm rung nhĩ, loạn nhịp tim và hiển thị chuẩn WHO',
          'Đồng bộ hóa dữ liệu theo dõi sức khỏe liên tục trên ứng dụng di động cho cả gia đình',
        ],
        tag: 'tecnic.vn · Thiết bị gia đình',
      },
      {
        id: 'rehab-mobility',
        title: 'Phục Hồi Chức Năng & Hỗ Trợ Vận Động (ytetecnic.vn)',
        summary: 'Giải pháp toàn diện giúp người bệnh sau tai biến, người già và người khuyết tật tái hòa nhập',
        description: 'Hệ thống thiết bị trợ năng tiên tiến: Xe lăn điện điều khiển thông minh joystick 360°, xe lăn leo dốc trợ lực, giường y tế điện đa chức năng CareBed, khung tập đi phanh an toàn, đai nẹp định hình cột sống y khoa Bonbone nhập khẩu Nhật Bản và đệm khí chống loét.',
        features: [
          'Xe lăn điện khung hợp kim nhôm hàng không siêu nhẹ, phanh điện từ tự động an toàn khi dừng dốc',
          'Giường bệnh y tế điện 4-5 động cơ: nâng hạ lưng, nâng chân, nghiêng trái phải, bô vệ sinh tự động',
          'Hệ thống đai nẹp bảo vệ khớp xương Bonbone Nhật Bản và đệm khí chống loét luân phiên 24/7',
        ],
        tag: 'ytetecnic.vn · Phục hồi vận động',
      },
      {
        id: 'hospital-neuro',
        title: 'Giải Pháp Bệnh Viện & Robot Phục Hồi Thần Kinh',
        summary: 'Trang thiết bị chuyên sâu cho khoa hồi sức cấp cứu ICU và trung tâm phục hồi chức năng',
        description: 'Robot hỗ trợ tập đi NeuroRehab Exoskeleton, hệ thống kéo giãn cột sống vi tính, máy tập thụ động CPM, máy tạo oxy y tế công suất cao và hệ thống màn hình monitor theo dõi bệnh nhân đa thông số.',
        features: [
          'Robot NeuroRehab tái tạo chu kỳ bước đi tự nhiên cho bệnh nhân liệt nửa người sau đột quỵ',
          'Máy tạo oxy y tế tinh khiết 93±3% liên tục 24/24 đạt chuẩn sử dụng lâm sàng tại ICU',
          'Hồ sơ kỹ thuật đầy đủ, giấy phép lưu hành Bộ Y tế và tiêu chuẩn CE/FDA cho hồ sơ thầu y tế',
        ],
        tag: 'Bệnh viện & Trung tâm chuyên khoa',
      },
    ],
    products: [
      {
        id: 'prod-yt-01',
        name: 'Xe Lăn Điện Thông Minh TECNIC PowerGlide X9',
        model: 'TECNIC-PGX9',
        categoryName: 'Phục hồi chức năng & Trợ năng',
        image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80',
        badge: 'Bán chạy nhất · Chuẩn ISO',
        description: 'Xe lăn điện cao cấp thế hệ mới trang bị cần điều khiển Joystick 360° siêu nhạy, hệ thống phanh điện từ kép tự động ngắt khi nhả tay và bánh phụ chống lật an toàn trên mọi địa hình dốc.',
        features: [
          'Khung hợp kim nhôm siêu nhẹ 28kg, gấp gọn chỉ trong 3 giây cho vào cốp ô tô',
          'Động cơ kép không chổi than 500W êm ái, pin Lithium 24V-20Ah đi xa đến 25km',
          'Phanh điện từ tự động phanh khi dừng giữa dốc, an toàn tuyệt đối',
          'Đệm ngồi dạng tổ ong thoáng khí kháng khuẩn, dễ dàng tháo rời vệ sinh',
        ],
        specs: [
          { label: 'Tải trọng tối đa', value: '130 kg' },
          { label: 'Tốc độ tối đa', value: '6 km/h (5 mức điều chỉnh)' },
          { label: 'Dung lượng pin', value: 'Lithium 24V / 20Ah' },
          { label: 'Góc leo dốc', value: '≤ 12 độ' },
        ],
        targetAudience: 'Người sau tai biến, người già suy giảm vận động, người khuyết tật',
        origin: 'TECNIC Medical OEM / Công nghệ Đức',
        domainSource: 'ytetecnic.vn',
      },
      {
        id: 'prod-yt-02',
        name: 'Giường Y Tế Điện Đa Chức Năng CareBed Deluxe CB-500',
        model: 'TECNIC-CB500',
        categoryName: 'Thiết bị chăm sóc bệnh nhân',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
        badge: 'Đạt chuẩn ICU & Gia đình',
        description: 'Giường y tế điện tử 5 chức năng vận hành bằng 4 mô tơ điện êm ái: nâng đầu, nâng chân, nghiêng trái phải chống loét tì đè, bô vệ sinh tự động và gạt tay cấp cứu CPR.',
        features: [
          'Điều khiển bằng remote cầm tay tiện lợi cho cả bệnh nhân và người chăm sóc',
          'Tính năng nghiêng trái/phải 0-45° hỗ trợ phòng ngừa viêm phổi ứ đọng và loét da',
          'Tích hợp chậu gội đầu tại giường và bô vệ sinh tự động đóng mở',
          'Lan can hợp kim nhôm nâng hạ an toàn, bánh xe y tế có khóa trung tâm',
        ],
        specs: [
          { label: 'Góc nâng lưng', value: '0 - 85 độ' },
          { label: 'Góc nâng chân', value: '0 - 45 độ' },
          { label: 'Kích thước đệm', value: '2000 x 900 x 80 mm' },
          { label: 'Mô tơ truyền động', value: '4 Motor Jiechang chuẩn y tế' },
        ],
        targetAudience: 'Bệnh nhân sau tai biến, người bệnh nằm liệt giường lâu ngày, cơ sở điều dưỡng',
        origin: 'TECNIC Medical',
        domainSource: 'ytetecnic.vn',
      },
      {
        id: 'prod-yt-03',
        name: 'Cân Điện Tử Thông Minh Phân Tích 18 Chỉ Số Mỡ Nội Tạng',
        model: 'TECNIC-SmartScale 18P',
        categoryName: 'Thiết bị gia đình & Y tế dự phòng',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
        badge: 'Kết nối App TECNIC Care',
        description: 'Cân sức khỏe điện tử thông minh ứng dụng công nghệ phân tích trở kháng điện sinh học (BIA) với 4 điện cực thép không gỉ 304, đo chính xác 18 chỉ số thành phần cơ thể.',
        features: [
          'Phân tích chuyên sâu: mỡ nội tạng, tỷ lệ mỡ dưới da, khối cơ xương, lượng nước cơ thể, protein, BMR',
          'Kết nối Bluetooth tự động đồng bộ hóa đồ thị biểu đồ sức khỏe trên smartphone',
          'Kính cường lực ITO 6mm chịu tải 180kg, màn hình LED ẩn sắc nét',
          'Hỗ trợ lưu hồ sơ sức khỏe cho tối đa 16 thành viên trong gia đình',
        ],
        specs: [
          { label: 'Dải cân', value: '0.2 kg - 180 kg' },
          { label: 'Độ chia', value: '50 gram' },
          { label: 'Kết nối', value: 'Bluetooth 5.0 Low Energy' },
          { label: 'Nguồn điện', value: 'Pin AAA x 3 hoặc sạc Type-C' },
        ],
        targetAudience: 'Mọi gia đình, người theo dõi cân nặng, người tập thể hình, bệnh nhân đái tháo đường',
        origin: 'TECNIC Healthcare',
        domainSource: 'tecnic.vn',
      },
      {
        id: 'prod-yt-04',
        name: 'Máy Đo Huyết Áp Bắp Tay Tự Động CardioCheck B-80',
        model: 'TECNIC-CC80',
        categoryName: 'Thiết bị gia đình & Y tế dự phòng',
        image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=800&q=80',
        badge: 'Cảnh báo rung nhĩ AFib',
        description: 'Máy đo huyết áp bắp tay tự động ứng dụng thuật toán Intellisense kép không gây đau tức tay, tích hợp tính năng cảnh báo loạn nhịp tim và giọng nói đọc kết quả tiếng Việt.',
        features: [
          'Bơm hơi êm ái tự động theo chu kỳ áp lực cá nhân hóa Intellisense',
          'Giọng nói hướng dẫn tư thế đo và đọc to kết quả bằng tiếng Việt chuẩn',
          'Cột phân loại mức độ huyết áp theo tiêu chuẩn Tổ chức Y tế Thế giới (WHO)',
          'Bộ nhớ lưu trữ 2x99 kết quả cho 2 người dùng riêng biệt',
        ],
        specs: [
          { label: 'Dải đo huyết áp', value: '0 - 299 mmHg' },
          { label: 'Dải đo nhịp tim', value: '40 - 199 nhịp/phút' },
          { label: 'Độ chính xác', value: 'Huyết áp ±3 mmHg; Nhịp tim ±5%' },
          { label: 'Vòng bít', value: 'Kích cỡ 22 - 42 cm phù hợp bắp tay lớn' },
        ],
        targetAudience: 'Người cao tuổi, bệnh nhân tăng huyết áp, phụ nữ mang thai',
        origin: 'TECNIC Healthcare',
        domainSource: 'tecnic.vn',
      },
      {
        id: 'prod-yt-05',
        name: 'Robot Tập Đi Phục Hồi Chức Năng NeuroRehab G-100',
        model: 'TECNIC-NRG100',
        categoryName: 'Công nghệ Robot bệnh viện',
        image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80',
        badge: 'Đột phá phục hồi thần kinh',
        description: 'Hệ thống Robot phục hồi chức năng vận động chi dưới hỗ trợ phục hồi cho bệnh nhân sau tai biến mạch máu não, chấn thương tủy sống hoặc phẫu thuật thay khớp háng.',
        features: [
          'Hệ thống treo nâng đỡ trọng lực cơ thể động theo chu kỳ sinh học',
          'Cảm biến phản hồi lực thông minh kích thích tế bào thần kinh vận động',
          'Phần mềm phân tích dáng đi 3D cung cấp báo cáo tiến trình phục hồi chi tiết',
          'Được ứng dụng thành công tại các bệnh viện tuyến đầu phục hồi chức năng',
        ],
        specs: [
          { label: 'Tải trọng treo nâng', value: 'Lên đến 150 kg' },
          { label: 'Tốc độ thảm lăn', value: '0.1 - 3.5 km/h điều chỉnh vi lượng' },
          { label: 'Chuẩn an toàn', value: 'Emergency Stop kép, ISO 13485:2016' },
          { label: 'Màn hình hiển thị', value: 'Cảm ứng y tế 21.5 inch chống chói' },
        ],
        targetAudience: 'Khoa Phục hồi chức năng Bệnh viện Đa khoa, Trung tâm Lão khoa, Viện Điều dưỡng',
        origin: 'Hợp tác Công nghệ Y sinh Đức - TECNIC',
        domainSource: 'ytetecnic.vn',
      },
      {
        id: 'prod-yt-06',
        name: 'Máy Tạo Oxy Y Tế Tinh Khiết OxyPure 5L/10L',
        model: 'TECNIC-OP10',
        categoryName: 'Thiết bị hô hấp y tế',
        image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80',
        badge: 'Oxy tinh khiết 93% ± 3%',
        description: 'Máy tạo oxy y tế gia đình và bệnh viện sử dụng rây phân tử PSA công nghệ Pháp, tạo oxy tinh khiết liên tục 24/7 với tích hợp bình tạo ẩm và cổng xông khí dung.',
        features: [
          'Cung cấp dòng oxy liên tục từ 1 - 10 lít/phút với độ tinh khiết ổn định trên 93%',
          'Cảnh báo áp suất thấp, nồng độ oxy dưới ngưỡng và cảnh báo mất nguồn điện',
          'Độ ồn cực thấp dưới 42dB, thích hợp sử dụng cả ngày đêm trong phòng ngủ',
          'Bốn bánh xe xoay đa hướng giúp di chuyển nhẹ nhàng giữa các phòng bệnh',
        ],
        specs: [
          { label: 'Lưu lượng khí', value: '1 - 10 L/phút' },
          { label: 'Nồng độ oxy', value: '93% ± 3% tại mọi mức lưu lượng' },
          { label: 'Áp suất đầu ra', value: '0.04 - 0.07 MPa' },
          { label: 'Công suất tiêu thụ', value: '450W tiết kiệm điện' },
        ],
        targetAudience: 'Bệnh nhân suy hô hấp mãn tính COPD, hậu COVID, người bệnh tim mạch tại nhà',
        origin: 'TECNIC Healthcare',
        domainSource: 'tecnic.vn',
      },
    ],
    technologies: [
      {
        title: 'Công nghệ Phân tích Sinh học BIA Đa tần',
        origin: 'Thuật toán y tế đối chứng lâm sàng',
        highlight: 'Chính xác 98.7% so với phương pháp quét DEXA chuẩn y khoa',
        description: 'Sử dụng các dòng điện xoay chiều siêu nhỏ tần số cao và thấp để xuyên qua màng tế bào, đo lường chính xác lượng nước nội bào, ngoại bào và lượng mỡ nội tạng nguy hiểm.',
      },
      {
        title: 'Hệ thống Phanh Điện Từ Kép E-Brake',
        origin: 'Đức & Nhật Bản',
        highlight: 'Tự động phanh trong 0.08 giây khi buông tay lái',
        description: 'Cơ chế ngắt cuộn hút điện từ tác động trực tiếp vào trục bánh răng hộp số, giữ chặt xe lăn điện ngay cả trên dốc 12 độ mà không cần tác động cơ học từ người sử dụng.',
      },
      {
        title: 'Hệ thống Quản lý Thiết bị Y tế Số TECNIC Care',
        origin: 'TECNIC Digital Health',
        highlight: 'Kết nối đám mây & Báo cáo dữ liệu cho bác sĩ điều trị',
        description: 'Nền tảng IoT đồng bộ kết quả từ cân điện tử, máy đo huyết áp, SpO2 và đường huyết về một hồ sơ sức khỏe điện tử thống nhất, cảnh báo tức thời chỉ số bất thường.',
      },
    ],
    projects: [
      {
        id: 'pj-yt-1',
        title: 'Trang bị Hệ thống Giường Điện & Phục Hồi Chức Năng Bệnh Viện Đa Khoa',
        client: 'Hệ thống Bệnh viện & Trung tâm Điều dưỡng phía Bắc',
        location: 'Hà Nội, Quảng Ninh, Hải Phòng',
        scale: '450 giường y tế điện & 120 xe lăn trợ lực',
        year: '2023 - 2025',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
        description: 'Cung cấp và lắp đặt đồng bộ hệ thống giường bệnh nhân đa chức năng CareBed cùng các thiết bị hỗ trợ tập đi phục hồi sau tai biến cho các khoa Lão học và Phục hồi chức năng.',
        deliverables: ['Lắp đặt trọn gói 450 giường điện', 'Bàn giao chuyển giao công nghệ cho 60 điều dưỡng', 'Bảo trì định kỳ 3 tháng/lần'],
      },
      {
        id: 'pj-yt-2',
        title: 'Chương Trình CSR Trao Tặng 1.700 Phương Tiện Trợ Năng Cho Người Khuyết Tật',
        client: 'Hội Bảo Trợ Người Khuyết Tật & Trẻ Mồ Côi Việt Nam',
        location: 'Toàn quốc (15 tỉnh thành vùng sâu vùng xa)',
        scale: '1.700 xe lăn, khung tập đi và đai định hình y tế',
        year: '2022 - 2024',
        image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80',
        description: 'Hiện thực hóa cam kết "Kiến tạo để phụng sự", TECNIC Group phối hợp tổ chức các đợt khám sàng lọc và trao tặng xe lăn, thiết bị hỗ trợ di chuyển cho người khuyết tật có hoàn cảnh khó khăn.',
        deliverables: ['1.200 xe lăn tiêu chuẩn & 500 khung tập đi', 'Khám phục hồi chức năng miễn phí cho 2.500 lượt người', 'Bảo hành thay thế phụ tùng trọn đời linh kiện'],
      },
    ],
    certifications: [
      { code: 'ISO 13485:2016', title: 'Hệ thống quản lý chất lượng thiết bị y tế', org: 'TUV Rheinland / DAS', year: '2020 - 2026' },
      { code: 'CE Mark', title: 'Chứng nhận lưu hành thiết bị y tế Châu Âu', org: 'European Conformity Notified Body', year: '2021' },
      { code: 'Bộ Y Tế Việt Nam', title: 'Giấy phép lưu hành trang thiết bị y tế loại A & B', org: 'Vụ Trang thiết bị & Công trình Y tế', year: '2022' },
      { code: 'RoHS 2.0', title: 'Tiêu chuẩn an toàn vật liệu không chứa độc tố', org: 'SGS Global Testing', year: '2023' },
    ],
    faqs: [
      {
        question: 'Xe lăn điện TECNIC có được phép mang lên máy bay khi đi du lịch không?',
        answer: 'Có. Dòng xe lăn điện PowerGlide X9 sử dụng pin Lithium dung lượng tiêu chuẩn được cấp chứng nhận an toàn hàng không UN38.3 và MSDS, cho phép tháo rời pin và ký gửi xe lăn theo quy định hàng không quốc tế.',
      },
      {
        question: 'Chính sách bảo hành và linh kiện thay thế của thiết bị y tế TECNIC như thế nào?',
        answer: 'Tất cả các sản phẩm TECNIC MEDICAL đều được bảo hành chính hãng từ 24 đến 36 tháng đối với khung sườn, động cơ và mạch điều khiển. Trung tâm bảo hành tại Hà Nội và TP.HCM luôn sẵn có linh kiện thay thế chính hãng trọn đời.',
      },
      {
        question: 'Các phòng khám và bệnh viện có thể yêu cầu hồ sơ pháp lý và thầu trang thiết bị không?',
        answer: 'Chúng tôi cung cấp đầy đủ hồ sơ pháp lý: Giấy phép lưu hành của Bộ Y tế, chứng chỉ ISO 13485:2016, CO/CQ, bảng kê khai giá và tài liệu kỹ thuật chuẩn mực phục vụ các gói thầu mua sắm công và bệnh viện tư nhân.',
      },
      {
        question: 'Ứng dụng TECNIC Care theo dõi sức khỏe gia đình có mất phí duy trì không?',
        answer: 'Ứng dụng TECNIC Care hoàn toàn miễn phí cho tất cả khách hàng sử dụng thiết bị cân thông minh, máy đo huyết áp hoặc máy đo SpO2 của TECNIC, hỗ trợ lưu trữ dữ liệu đám mây không giới hạn thời gian.',
      },
    ],
  },

  'khoang-san': {
    id: 'khoang-san',
    title: 'KHOÁNG SẢN & ĐÁ TỰ NHIÊN',
    englishTitle: 'Minerals Processing & Natural Stone',
    unit: 'TECMIN',
    tagline: 'Khai thác, chế biến sâu bột Canxi Cacbonat (CaCO₃) siêu mịn và cung ứng đá tự nhiên cao cấp cho các đại dự án quốc gia',
    bannerImage: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1600&q=80',
    primaryColor: '#1e3a8a',
    accentColor: '#38bdf8',
    domains: [
      { name: 'tecnic.com.vn', url: 'https://tecnic.com.vn', note: 'Cổng thông tin khoáng sản & vật liệu TECMIN' },
    ],
    overview: {
      lead: 'TECMIN là đơn vị thành viên nòng cốt của TECNIC Group, dẫn đầu trong lĩnh vực chế biến khoáng sản Canxi Cacbonat (CaCO₃) độ tinh khiết cao và cung ứng đá tự nhiên quy cách lớn cho các đại dự án kiến trúc cảnh quan hàng đầu Việt Nam.',
      paragraphs: [
        'Sở hữu quyền khai thác các mỏ đá hoa trắng trầm tích chất lượng cao bậc nhất tại Lục Yên (Yên Bái) và Quỳ Hợp (Nghệ An), TECMIN đầu tư hệ thống dây chuyền nghiền phản lực siêu âm Hosokawa Alpine (CHLB Đức) đạt công suất chế biến trên 180.000 tấn/năm. Sản phẩm bột đá CaCO₃ siêu mịn tráng phủ axit stearic đáp ứng tiêu chuẩn khắt khe cho ngành nhựa masterbatch, màng PE thở, sơn cao cấp và cao su kỹ thuật.',
        'Bên cạnh đó, TECMIN là nhà thầu cung cấp đá tự nhiên (Granite, Marble, Bazan băm mặt, Cubic) được tín nhiệm tại các siêu dự án đô thị đẳng cấp như Vinhomes Royal Island (Vũ Yên, Hải Phòng - Đảo Hoàng Gia), The Crown Vinhomes Ocean Park 3, và hệ thống quảng trường đô thị trọng điểm.',
      ],
      coreValues: [
        { title: 'Trữ lượng mỏ dồi dào', desc: 'Sở hữu mỏ đá trắng hoa trữ lượng lớn với giấy phép khai thác dài hạn trên 30 năm.' },
        { title: 'Công nghệ Đức chuẩn mực', desc: 'Dây chuyền phân ly khí động học Alpine đảm bảo dải hạt D50 đồng nhất, không lẫn tạp chất.' },
        { title: 'Khai thác tuần hoàn xanh', desc: 'Tái sử dụng 95% nước tuyển khoáng, giảm thiểu phát thải bụi theo tiêu chuẩn môi trường quốc gia.' },
      ],
    },
    stats: [
      { value: '180.000', label: 'Tấn bột CaCO₃/năm', note: 'Công suất chế biến nhà máy' },
      { value: '98.5%+', label: 'Độ trắng sáng CIE Whiteness', note: 'Thuộc top cao nhất khu vực' },
      { value: '25+', label: 'Quốc gia xuất khẩu', note: 'Hàn Quốc, Nhật Bản, Ấn Độ, Trung Đông' },
      { value: '100.000+ m²', label: 'Đá tự nhiên cung ứng', note: 'Cho các đại dự án Vinhomes & Novaland' },
    ],
    pillars: [
      {
        id: 'caco3-coated',
        title: 'Bột Đá Canxi Cacbonat Tráng Phủ Axit Béo (Coated CaCO₃)',
        summary: 'Chuyên dùng cho ngành sản xuất hạt nhựa Filler Masterbatch, màng film PE/PP và ống nhựa uPVC',
        description: 'Được tráng phủ một lớp axit stearic đơn phân tử trên bề mặt hạt khoáng, giúp tăng tính tương thích phân tán với nền polymer, giảm độ mài mòn thiết bị đùn ép và tăng độ dai va đập của sản phẩm nhựa.',
        features: [
          'Dải cỡ hạt siêu mịn từ D50 = 1.0µm đến 2.5µm (độ mịn tương đương 2500 - 3000 mesh)',
          'Độ tráng phủ đồng đều 0.8 - 1.2% trọng lượng, độ hút dầu thấp chỉ 18 - 22 g/100g',
          'Độ trắng sáng >98.0%, hàm lượng CaCO₃ tinh khiết >98.8%, tạp chất sắt Fe₂O₃ <0.015%',
        ],
        tag: 'TECMIN Coated Minerals',
      },
      {
        id: 'caco3-uncoated',
        title: 'Bột Đá CaCO₃ Không Tráng Phủ (Uncoated CaCO₃)',
        summary: 'Nguyên liệu độn chất lượng cao cho ngành sơn nước, giấy in, cao su và vật liệu xây dựng',
        description: 'Bột đá hoa trắng siêu mịn tự nhiên không hóa chất, độ trắng vượt trội và tính năng quang học xuất sắc giúp thay thế một phần bột màu Titan Dioxit (TiO₂) đắt đỏ, hạ giá thành sản xuất sơn và giấy cao cấp.',
        features: [
          'Độ cản sáng và độ phủ bề mặt tối ưu cho công thức sơn phủ nội - ngoại thất',
          'Tăng cường độ chịu nén, chống trầy xước và cải thiện độ cứng cho cao su và gạch men',
          'Đáp ứng tiêu chuẩn an toàn cho bao bì thực phẩm và dược phẩm theo tiêu chuẩn FDA',
        ],
        tag: 'TECMIN Pure Uncoated',
      },
      {
        id: 'natural-stone',
        title: 'Đá Tự Nhiên & Đá Ốp Lát Cảnh Quan Đại Dự Án',
        summary: 'Cung cấp đá khối, đá xẻ quy cách, đá cubic và đá marble cho các công trình đẳng cấp',
        description: 'Khai thác và gia công đá tự nhiên quy mô công nghiệp: Đá Marble trắng hoa Yên Bái, Marble vàng hoàng gia, Đá Granite băm mặt chống trượt, đá bazan và đá cubic lát lòng đường cho các khu đô thị sinh thái cao cấp.',
        features: [
          'Gia công chính xác từng milimet bằng máy cắt CNC cầu và dây cắt kim cương công suất lớn',
          'Bề mặt hoàn thiện đa dạng: băm mặt, phun cát, mài bóng, mài mờ, khò lửa chống trơn trượt',
          'Năng lực cung ứng quy mô lớn hàng chục nghìn m² đồng bộ chất lượng và tiến độ khắt khe',
        ],
        tag: 'TECMIN Architectural Stone',
      },
    ],
    products: [
      {
        id: 'prod-ks-01',
        name: 'Bột Đá Tráng Phủ Axit Stearic TECMIN MicroCoat-10',
        model: 'TECMIN-MC10',
        categoryName: 'Bột khoáng công nghiệp',
        image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
        badge: 'Top Export Product',
        description: 'Bột Canxi Cacbonat siêu mịn tráng phủ axit stearic với kích thước hạt trung bình D50 = 1.0 ± 0.2 µm, tối ưu cho màng film thổi mỏng, màng thở tã lót vệ sinh và hạt nhựa kéo sợi.',
        features: [
          'Độ phân tán vượt trội trong nhựa PE, PP, PVC không vón cục',
          'Độ trắng sáng CIE Whiteness: 98.5%, độ sáng L* >99.0',
          'Độ ẩm cực thấp dưới 0.15%, chống bọt khí trong đùn màng nhựa',
          'Quy cách bao bì: Bao 25kg PP/PE hoặc Jumbo 1 tấn chống ẩm',
        ],
        specs: [
          { label: 'Kích thước hạt D50', value: '1.0 ± 0.2 µm' },
          { label: 'Kích thước hạt Top cut D97', value: '≤ 4.5 µm' },
          { label: 'Hàm lượng CaCO₃', value: '≥ 98.8%' },
          { label: 'Tỷ lệ tráng phủ', value: '1.0% ± 0.1%' },
        ],
        targetAudience: 'Nhà máy sản xuất hạt Filler Masterbatch, màng film PE/PP, ống nhựa',
        origin: 'Nhà máy TECMIN Lục Yên, Yên Bái',
        domainSource: 'tecnic.com.vn',
      },
      {
        id: 'prod-ks-02',
        name: 'Bột Đá Siêu Mịn Không Tráng Phủ TECMIN Pure-25',
        model: 'TECMIN-P25',
        categoryName: 'Bột khoáng công nghiệp',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
        badge: 'Độ trắng 98%+',
        description: 'Bột CaCO₃ siêu mịn không tráng phủ độ tinh khiết cao, sử dụng làm chất độn cao cấp trong công nghiệp sơn nước, bột trét tường, giấy tráng phấn và cao su kỹ thuật.',
        features: [
          'Độ mịn 2500 mesh (D50 = 2.5 µm), độ che phủ cao',
          'Giảm chi phí tiêu hao chất tạo màng và bột màu trong công thức sơn',
          'Hàm lượng tạp chất Silic và Sắt cực thấp, không gây ố vàng',
          'Hạt đều phân bố hẹp theo công nghệ phân ly Alpine Đức',
        ],
        specs: [
          { label: 'Kích thước hạt D50', value: '2.5 ± 0.3 µm' },
          { label: 'Độ trắng sáng', value: '≥ 98.2%' },
          { label: 'Hàm lượng Fe₂O₃', value: '≤ 0.012%' },
          { label: 'Độ pH', value: '8.5 - 9.5' },
        ],
        targetAudience: 'Nhà máy sản xuất sơn, keo dán, cao su, giấy in cao cấp',
        origin: 'Nhà máy TECMIN Lục Yên, Yên Bái',
        domainSource: 'tecnic.com.vn',
      },
      {
        id: 'prod-ks-03',
        name: 'Đá Marble Tự Nhiên Trắng Muối Hoàng Gia Yên Bái',
        model: 'TECMIN-MRB-WHITE',
        categoryName: 'Đá tự nhiên cao cấp',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        badge: 'Quy cách đại dự án',
        description: 'Đá cẩm thạch (Marble) tự nhiên khai thác tại mỏ đá hoa Lục Yên, độ tinh khiết cao, vân mây nhẹ tự nhiên, bề mặt mài bóng sang trọng dùng cho sảnh đại sảnh khách sạn và biệt thự.',
        features: [
          'Độ cứng chắc cao, khả năng chống thấm nước và chống bám bẩn ưu việt',
          'Khai thác dạng khối quy cách lớn Block kích thước theo yêu cầu',
          'Gia công xẻ tấm Slab độ dày 18mm, 20mm, 30mm dung sai cực thấp',
          'Cung cấp cho các công trình cảnh quan và nội thất hạng sang',
        ],
        specs: [
          { label: 'Trọng lượng riêng', value: '2.71 g/cm³' },
          { label: 'Độ hút nước', value: '≤ 0.12%' },
          { label: 'Độ bền uốn', value: '≥ 14.5 MPa' },
          { label: 'Độ bền nén', value: '≥ 110 MPa' },
        ],
        targetAudience: 'Tổng thầu xây dựng, kiến trúc sư cảnh quan, chủ đầu tư biệt thự nghỉ dưỡng',
        origin: 'Mỏ đá TECMIN Yên Bái',
        domainSource: 'tecnic.com.vn',
      },
      {
        id: 'prod-ks-04',
        name: 'Đá Cubic & Đá Bazan Lát Lòng Đường Cảnh Quan Siêu Bền',
        model: 'TECMIN-CUBIC-BZ',
        categoryName: 'Đá tự nhiên hạ tầng',
        image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80',
        badge: 'Chuẩn Vinhomes / Đô thị lớn',
        description: 'Đá khối cubic tự nhiên chẻ thô hoặc băm mặt kích thước 10x10x10cm, 10x10x5cm chuyên dụng cho các trục đường nội khu, bến du thuyền và quảng trường resort.',
        features: [
          'Chịu tải trọng xe tải và xe chữa cháy di chuyển liên tục không nứt vỡ',
          'Bề mặt chống trơn trượt tuyệt đối trong mọi điều kiện thời tiết mưa ẩm',
          'Tông màu xám ghi tự nhiên trường tồn với thời gian, không rêu mốc',
          'Khả năng thi công ghép họa tiết rẻ quạt hoặc hình học độc đáo',
        ],
        specs: [
          { label: 'Kích thước tiêu chuẩn', value: '100 x 100 x 100 mm hoặc 100 x 100 x 50 mm' },
          { label: 'Cường độ chịu nén', value: '≥ 150 MPa' },
          { label: 'Chống mài mòn', value: 'Cực cao, hệ số ma sát > 0.7' },
          { label: 'Quy cách đóng gói', value: 'Bao Jumbo hoặc xếp kiện Pallet' },
        ],
        targetAudience: 'Đại dự án đô thị cao cấp, công viên, quảng trường, phố đi bộ',
        origin: 'TECMIN Natural Stone',
        domainSource: 'tecnic.com.vn',
      },
    ],
    technologies: [
      {
        title: 'Dây chuyền Nghiền Phân Ly Khí Động Học Hosokawa Alpine',
        origin: 'CHLB Đức (Germany)',
        highlight: 'Công suất 15 tấn/giờ với bộ phân ly Turboplex đa rotor',
        description: 'Hệ thống nghiền bi kín kết hợp luồng khí động lực học phân loại hạt mịn chính xác từng micromet, kiểm soát chặt chẽ kích thước tối đa (Top cut D97) để loại bỏ hoàn toàn hạt thô.',
      },
      {
        title: 'Công nghệ Tráng Phủ Nhiệt Liên Tục Pin-Mill',
        origin: 'Châu Âu',
        highlight: 'Độ bao phủ bề mặt hạt khoáng đồng nhất 99.8%',
        description: 'Axit stearic tinh khiết được gia nhiệt phun sương áp lực cao trong buồng trộn phản lực, bọc đều toàn bộ bề mặt hạt canxi cacbonat, biến đặc tính từ ưa nước sang kỵ nước hoàn hảo.',
      },
      {
        title: 'Hệ thống Quản lý Chất lượng Phòng Lab Mastersizer 3000',
        origin: 'Malvern Panalytical (Vương Quốc Anh)',
        highlight: 'Kiểm soát kích thước hạt bằng tán xạ Laser tự động',
        description: 'Mỗi lô hàng xuất xưởng đều được kiểm định trên máy tán xạ laser hiện đại, phát hành chứng chỉ phân tích COA chi tiết từng chỉ số độ trắng, độ ẩm, độ mịn và hàm lượng dầu.',
      },
    ],
    projects: [
      {
        id: 'pj-ks-1',
        title: 'Cung Ứng Đá Cảnh Quan Đại Dự Án Vinhomes Royal Island (Vũ Yên, Hải Phòng)',
        client: 'Tập đoàn Vingroup / Ban Quản lý Dự án Vũ Yên',
        location: 'Đảo Vũ Yên, Huyện Thủy Nguyên, TP. Hải Phòng',
        scale: '45.000 m² đá cubic, đá lát vỉa hè & đá granite quảng trường',
        year: '2023 - 2025',
        image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80',
        description: 'TECMIN được lựa chọn là đơn vị cung ứng chủ lực toàn bộ đá tự nhiên hạ tầng cảnh quan, lối dạo bộ ven sông và khu biệt thự nghỉ dưỡng Đảo Hoàng Gia Vinhomes Royal Island.',
        deliverables: ['Giao hàng 45.000 m² đúng tiến độ khắt khe', 'Kiểm soát đồng màu 100% từng lô đá', 'Chứng chỉ cường độ nén Quatest 1'],
      },
      {
        id: 'pj-ks-2',
        title: 'Phân Khu The Crown – Vinhomes Ocean Park 3 (Hưng Yên)',
        client: 'Tổng thầu Cảnh quan Đô thị Ocean Park 3',
        location: 'Văn Giang, Hưng Yên',
        scale: '32.000 m² đá bazan xẻ băm & đá marble ốp cảnh quan',
        year: '2023 - 2024',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        description: 'Cung cấp đá cubic lát trục đại lộ, đá viền đài phun nước và bồn hoa cảnh quan tại phân khu trung tâm The Crown, tạo nên không gian kiến trúc châu Âu tráng lệ.',
        deliverables: ['Gia công quy cách chuẩn sai số < 1mm', 'Hỗ trợ kỹ thuật biện pháp thi công lát đá', 'Bảo hành chất lượng công trình 5 năm'],
      },
    ],
    certifications: [
      { code: 'ISO 9001:2015', title: 'Hệ thống quản lý chất lượng khai thác và chế biến', org: 'Bureau Veritas', year: '2021 - 2027' },
      { code: 'REACH Compliant', title: 'Tiêu chuẩn an toàn hóa chất xuất khẩu Châu Âu', org: 'ECHA (European Chemicals Agency)', year: '2022' },
      { code: 'Quatest 1', title: 'Kết quả thử nghiệm cơ lý tính đá tự nhiên & bột khoáng', org: 'Tổng cục Tiêu chuẩn Đo lường Chất lượng', year: '2023' },
      { code: 'FDA Compliance', title: 'Đạt chuẩn tiếp xúc gián tiếp trong bao bì thực phẩm', org: 'U.S. Food & Drug Administration test', year: '2023' },
    ],
    faqs: [
      {
        question: 'TECMIN có năng lực cung ứng bao nhiêu container bột đá CaCO₃ mỗi tháng?',
        answer: 'Nhà máy TECMIN hiện có công suất 15.000 tấn/tháng, sẵn sàng đáp ứng từ 200 - 300 container 20ft mỗi tháng với hệ thống đóng bao tự động, pallet quấn màng co và kiểm định COA độc lập.',
      },
      {
        question: 'Đá tự nhiên lát vỉa hè của TECMIN có bảo đảm độ bền nén cho xe tải trọng lớn không?',
        answer: 'Có. Toàn bộ đá Granite và Bazan tự nhiên của TECMIN có cường độ nén từ 120 - 160 MPa, vượt xa tiêu chuẩn TCVN cho đường đô thị, đảm bảo không sụt lún, nứt gãy trước tải trọng xe cứu hỏa hay xe rác công cộng.',
      },
      {
        question: 'Thời gian giao hàng đá quy cách cho các dự án lớn mất bao lâu?',
        answer: 'Với trữ lượng đá thô tại xưởng trên 50.000 m³ và 10 máy xẻ CNC hoạt động 3 ca, TECMIN có thể giao những đợt hàng đầu tiên trong 7 - 10 ngày và cung ứng liên tục 5.000 - 10.000 m²/tuần.',
      },
    ],
  },

  'nang-luong': {
    id: 'nang-luong',
    title: 'NĂNG LƯỢNG & HỆ THỐNG ĐIỆN CÔNG NGHIỆP',
    englishTitle: 'Energy Solutions & Industrial Electrical Systems',
    unit: 'TECNIC ELECTRIC',
    tagline: 'Tổng thầu EPC điện mặt trời áp mái công nghiệp (C&I Solar), hệ thống lưu trữ BESS Lithium và giải pháp tiết kiệm năng lượng nhà máy',
    bannerImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80',
    primaryColor: '#0369a1',
    accentColor: '#38bdf8',
    domains: [
      { name: 'tecnic.com.vn', url: 'https://tecnic.com.vn', note: 'Giải pháp Năng lượng & Cơ điện TECNIC' },
    ],
    overview: {
      lead: 'TECNIC ELECTRIC cung cấp giải pháp toàn diện từ tư vấn, thiết kế, tổng thầu thi công EPC đến vận hành bảo dưỡng O&M cho hệ thống điện mặt trời áp mái, trạm biến áp và hệ thống lưu trữ năng lượng pin Lithium BESS công suất lớn.',
      paragraphs: [
        'Trước xu hướng chuyển dịch năng lượng xanh và yêu cầu chứng chỉ xanh (RE100, I-REC, CBAM) của các thị trường xuất khẩu như Châu Âu và Mỹ, TECNIC ELECTRIC đồng hành cùng các doanh nghiệp sản xuất và khu công nghiệp cắt giảm tới 35% chi phí tiền điện hàng tháng, giảm thiểu dấu chân carbon.',
        'Hệ thống lưu trữ điện năng thông minh BESS (Battery Energy Storage System) ứng dụng công nghệ pin Lithium LiFePO4 của chúng tôi mang lại giải pháp dịch đỉnh phụ tải (Peak Shaving), bảo vệ dây chuyền sản xuất công nghiệp và hệ thống thiết bị phòng mổ y tế khỏi sự cố sụt áp lưới điện.',
      ],
      coreValues: [
        { title: 'Tối ưu tài chính ROI', desc: 'Thời gian hoàn vốn hệ thống điện mặt trời từ 3.5 - 5 năm, vòng đời hoạt động trên 25 năm.' },
        { title: 'An toàn phòng cháy NFPA', desc: 'Hệ thống ngắt khẩn cấp Rapid Shutdown cấp module và cảm biến nhiệt độ cảnh báo hồ quang điện AFCI.' },
        { title: 'Giám sát SCADA 24/7', desc: 'Theo dõi sản lượng điện thời gian thực qua app di động, bảo trì dự đoán bằng trí tuệ nhân tạo.' },
      ],
    },
    stats: [
      { value: '35+ MWp', label: 'Tổng công suất lắp đặt', note: 'Tại các nhà máy và khu công nghiệp' },
      { value: '45.000', label: 'Tấn CO₂ cắt giảm/năm', note: 'Đóng góp vào mục tiêu Net Zero 2050' },
      { value: '25 Năm', label: 'Bảo hành hiệu suất pin', note: 'Hiệu suất còn lại >84.8% sau 25 năm' },
      { value: '99.8%', label: 'Độ tin cậy vận hành hệ thống', note: 'Thời gian hoạt động liên tục' },
    ],
    pillars: [
      {
        id: 'ci-solar-epc',
        title: 'Tổng Thầu EPC Điện Mặt Trời Áp Mái Công Nghiệp',
        summary: 'Giải pháp chìa khóa trao tay cho nhà máy, kho vận logistics và tổ hợp văn phòng',
        description: 'Khảo sát kết cấu mái, mô phỏng 3D bức xạ mặt trời PVsyst chính xác 99%, thiết kế xin phép PCCC và đấu nối điện lực EVN, cung cấp thiết bị và thi công cơ điện an toàn chuẩn quốc tế.',
        features: [
          'Tấm pin mặt trời công nghệ TopCon hai mặt kính N-Type hiệu suất siêu cao >22.5%',
          'Biến tần Inverter hòa lưới công nghiệp thông minh Huawei / Sungrow hiệu suất chuyển đổi 98.8%',
          'Hệ khung nhôm anode AL6005-T5 chống ăn mòn muối biển, chịu tải gió bão cấp 12',
        ],
        tag: 'C&I Solar Rooftop EPC',
      },
      {
        id: 'bess-storage',
        title: 'Hệ Thống Lưu Trữ Năng Lượng Công Nghiệp BESS',
        summary: 'Pin lưu trữ Lithium LiFePO4 công suất lớn từ 500 kWh đến 5 MWh cho doanh nghiệp',
        description: 'Giải pháp sạc điện giờ thấp điểm và xả điện vào giờ cao điểm giá cao, giúp giảm hàng trăm triệu tiền điện mỗi tháng, đồng thời cung cấp nguồn điện lưu trữ liên tục như một máy phát điện siêu tốc 0 ms.',
        features: [
          'Cell pin Lithium sắt photphat LiFePO4 tuổi thọ trên 6.000 chu kỳ sạc xả (tương đương 15 năm)',
          'Tích hợp hệ thống chữa cháy khí sạch Aerosol tự động và điều hòa nhiệt độ chất lỏng Liquid Cooling',
          'Hệ thống quản lý pin thông minh BMS cân bằng từng cell, chống quá nhiệt và ngắn mạch',
        ],
        tag: 'BESS Energy Storage',
      },
      {
        id: 'ems-automation',
        title: 'Tủ Bảng Điện Trung Hạ Thế & Giải Pháp EMS Tiết Kiệm Điện',
        summary: 'Thiết kế sản xuất tủ điện MSB, tủ bù cosφ và phần mềm quản lý năng lượng thông minh',
        description: 'Tự động hóa phân phối điện năng, giám sát dòng rò, bù công suất phản kháng nâng hệ số cosφ >0.98 để không bị phạt tiền điện vô công, kết hợp giải pháp biến tần tiết kiệm điện cho hệ thống máy nén khí và bơm quạt.',
        features: [
          'Vỏ tủ điện sơn tĩnh điện IP54/IP65 gia công trên máy đột dập CNC tiêu chuẩn IEC 61439-1',
          'Thiết bị đóng cắt cao cấp Schneider, ABB, Mitsubishi chính hãng',
          'Phần mềm EMS thu thập dữ liệu tiêu thụ điện từng phân xưởng theo thời gian thực',
        ],
        tag: 'Industrial Electrical & EMS',
      },
    ],
    products: [
      {
        id: 'prod-nl-01',
        name: 'Tấm Pin Năng Lượng Mặt Trời TopCon N-Type 585W Hai Mặt Kính',
        model: 'TECNIC-SOLAR-585N',
        categoryName: 'Điện mặt trời',
        image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
        badge: 'Hiệu suất 22.7%',
        description: 'Tấm quang điện công nghệ TopCon N-Type 16BB hai mặt phát điện (Bifacial) giúp tăng thêm 10-25% sản lượng điện từ ánh sáng phản xạ mặt đất, độ suy giảm năm đầu dưới 1%.',
        features: [
          'Hiệu suất quang năng module đạt 22.7%, diện tích lắp đặt tối ưu',
          'Hệ số nhiệt độ thấp Pmax -0.30%/°C, hoạt động bền bỉ trong khí hậu nắng nóng Việt Nam',
          'Chống suy giảm PID và LID vượt trội, chịu tải gió 2400Pa và tải tuyết 5400Pa',
          'Bảo hành vật lý 12 năm, bảo hành hiệu suất tuyến tính 25 năm',
        ],
        specs: [
          { label: 'Công suất đỉnh Pmax', value: '585 Watt' },
          { label: 'Hiệu suất quang năng', value: '22.7%' },
          { label: 'Kích thước module', value: '2278 x 1134 x 30 mm' },
          { label: 'Trọng lượng', value: '31.5 kg (Kính kép 2.0mm + 2.0mm)' },
        ],
        targetAudience: 'Dự án điện mặt trời mái nhà xưởng công nghiệp, trang trại nông nghiệp công nghệ cao',
        origin: 'TECNIC Renewable Partner (Tier 1)',
        domainSource: 'tecnic.com.vn',
      },
      {
        id: 'prod-nl-02',
        name: 'Hệ Thống Pin Lưu Trữ Năng Lượng Container BESS 1MWh / 500kW',
        model: 'TECNIC-BESS-1000',
        categoryName: 'Lưu trữ năng lượng',
        image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
        badge: 'Pin LiFePO4 · Chu kỳ 6000+',
        description: 'Tổ hợp trạm lưu trữ năng lượng pin Lithium đóng gói trong vỏ container 20ft tiêu chuẩn công nghiệp, tích hợp biến tần lưu trữ PCS, hệ thống làm mát bằng dung dịch và PCCC Aerosol tự động.',
        features: [
          'Dung lượng lưu trữ 1.075 kWh, công suất phát 500 kW liên tục',
          'Thời gian chuyển mạch UPS siêu tốc < 15ms khi mất lưới điện',
          'Cắt giảm chi phí giờ cao điểm: tiết kiệm 2.500 - 3.200 VNĐ cho mỗi kWh dịch chuyển',
          'Kết nối điều khiển SCADA đám mây tương thích lưới điện thông minh Smart Grid',
        ],
        specs: [
          { label: 'Dung lượng danh định', value: '1.075 MWh (1075 kWh)' },
          { label: 'Công suất biến tần PCS', value: '500 kW 3 pha 380V/400V' },
          { label: 'Tuổi thọ chu kỳ', value: '≥ 6.000 chu kỳ tại 80% DOD' },
          { label: 'Chuẩn bảo vệ vỏ ngoài', value: 'IP55 / Chống ăn mòn C5M' },
        ],
        targetAudience: 'Nhà máy luyện kim, dệt may, chế biến thủy sản, trung tâm dữ liệu và bệnh viện lớn',
        origin: 'TECNIC Electric & ESS Technology',
        domainSource: 'tecnic.com.vn',
      },
      {
        id: 'prod-nl-03',
        name: 'Tủ Điện Phân Phối Tổng MSB & Tủ Bù Tự Động Tiết Kiệm Năng Lượng',
        model: 'TECNIC-MSB-4000',
        categoryName: 'Hệ thống điện công nghiệp',
        image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
        badge: 'Chuẩn IEC 61439-1',
        description: 'Tủ điện tổng phân phối hạ thế dòng định mức đến 4000A trang bị ACB/MCCB cao cấp, tích hợp ngăn tủ bù công suất phản kháng điều khiển vi xử lý giúp ổn định lưới điện nội bộ.',
        features: [
          'Khung tủ dạng module Form 3b/4b an toàn chống chạm chập hồ quang',
          'Bộ điều khiển tụ bù 12 - 16 cấp tự động giữ hệ số cosφ luôn ở mức 0.98 - 0.99',
          'Đồng hồ đo lường kỹ thuật số hiển thị điện áp, dòng điện, sóng hài THD và điện năng tiêu thụ',
          'Tích hợp cổng truyền thông Modbus RS485 kết nối hệ thống BMS nhà máy',
        ],
        specs: [
          { label: 'Dòng điện định mức', value: '800A - 4000A' },
          { label: 'Điện áp định mức', value: '3 Pha 4 Dây 380V/415V' },
          { label: 'Dung lượng bù', value: '100 kVAr - 600 kVAr' },
          { label: 'Tiêu chuẩn', value: 'IEC 61439-1/2, TCVN 7994-1' },
        ],
        targetAudience: 'Các nhà máy công nghiệp, tòa nhà văn phòng, khu chế xuất',
        origin: 'Nhà máy sản xuất thiết bị điện TECNIC',
        domainSource: 'tecnic.com.vn',
      },
    ],
    technologies: [
      {
        title: 'Phần mềm Mô phỏng Bức xạ Chuyên nghiệp PVsyst 7.4',
        origin: 'Thụy Sĩ (Switzerland)',
        highlight: 'Dự báo sản lượng điện với sai số dưới 1.5%',
        description: 'Mô phỏng chi tiết đổ bóng 3D từ các chướng ngại vật xung quanh, tính toán góc nghiêng tối ưu và lập biểu đồ suy hao năng lượng để xây dựng mô hình tài chính hoàn vốn chuẩn xác.',
      },
      {
        title: 'Công nghệ Làm mát Chất lỏng Liquid Cooling BESS',
        origin: 'Tiêu chuẩn an toàn năng lượng quốc tế',
        highlight: 'Chênh lệch nhiệt độ giữa các cell pin < 2.5°C',
        description: 'Chất lỏng tản nhiệt luân chuyển trực tiếp qua từng bề mặt cell pin giúp kéo dài tuổi thọ cell thêm 20% so với làm mát bằng quạt gió truyền thống, triệt tiêu nguy cơ thoát nhiệt nhiệt độ cao.',
      },
    ],
    projects: [
      {
        id: 'pj-nl-1',
        title: 'Dự Án Điện Mặt Trời Áp Mái C&I Nhà Máy Chế Biến Khoáng Sản',
        client: 'Tổ hợp Công nghiệp Khai khoáng & Sản xuất',
        location: 'Khu công nghiệp phía Bắc',
        scale: '2.4 MWp áp mái nhà xưởng',
        year: '2023 - 2024',
        image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
        description: 'Tổng thầu EPC trọn gói 2.4 MWp với hơn 4.100 tấm pin N-type TopCon, giúp nhà máy tự chủ 40% sản lượng điện tiêu thụ ban ngày và giảm hơn 2.800 tấn CO₂ phát thải hàng năm.',
        deliverables: ['Thi công an toàn 0 tai nạn lao động', 'Hệ thống SCADA giám sát biến tần thời gian thực', 'Đạt chứng nhận nghiệm thu PCCC và EVN'],
      },
    ],
    certifications: [
      { code: 'IEC 61215 / IEC 61730', title: 'Tiêu chuẩn chất lượng & an toàn quang điện', org: 'TUV SUD', year: '2022' },
      { code: 'UL 9540A', title: 'Thử nghiệm an toàn chống lan truyền nhiệt pin lưu trữ BESS', org: 'Underwriters Laboratories', year: '2023' },
      { code: 'ISO 50001:2018', title: 'Hệ thống quản lý năng lượng', org: 'SGS Certification', year: '2022' },
    ],
    faqs: [
      {
        question: 'Doanh nghiệp lắp điện mặt trời tự dùng có cần xin giấy phép không?',
        answer: 'Theo quy định hiện hành, hệ thống điện mặt trời mái nhà tự sản tự tiêu cần hoàn thiện thủ tục thẩm duyệt PCCC công trình, kiểm định khả năng chịu lực của kết cấu mái và thông báo đấu nối với công ty điện lực địa phương (EVN). TECNIC lo trọn gói các thủ tục này.',
      },
      {
        question: 'Hệ thống pin lưu trữ BESS có tự động cấp điện khi mất điện lưới không?',
        answer: 'Có. Khi phát hiện mất điện lưới, biến tần lưu trữ thông minh BESS kích hoạt chế độ đảo lưới tự động chỉ trong 10-15 mili-giây, cung cấp điện liên tục cho các phụ tải ưu tiên mà máy móc không bị reset hay gián đoạn.',
      },
    ],
  },

  'vat-lieu': {
    id: 'vat-lieu',
    title: 'VẬT LIỆU KỸ THUẬT CAO & GIẢI PHÁP XANH',
    englishTitle: 'Advanced Materials & Green Engineering Solutions',
    unit: 'TECNIC MAT',
    tagline: 'Nghiên cứu ứng dụng vật liệu composite sợi gia cường, polymer y sinh kháng khuẩn và đá thạch anh nhân tạo bề mặt cao cấp',
    bannerImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
    primaryColor: '#0f766e',
    accentColor: '#2dd4bf',
    domains: [
      { name: 'tecnic.com.vn', url: 'https://tecnic.com.vn', note: 'Giải pháp Vật liệu kỹ thuật cao TECNIC MAT' },
    ],
    overview: {
      lead: 'TECNIC MAT đại diện cho nhánh nghiên cứu và phát triển vật liệu mới của Tập đoàn TECNIC, kết nối thế mạnh về nguồn khoáng sản chất lượng cao với các công nghệ polymer hóa tiên tiến để tạo ra các giải pháp vật liệu có tính năng cơ lý vượt trội.',
      paragraphs: [
        'Chúng tôi tập trung vào 3 hướng phát triển cốt lõi: Vật liệu composite siêu nhẹ siêu bền ứng dụng làm khung sườn cho các thiết bị y tế phục hồi chức năng của TECNIC MEDICAL; Vật liệu đá nhân tạo gốc thạch anh (Engineered Quartz Surface) kháng khuẩn nano ion bạc cho nội thất phòng sạch y tế và căn hộ hạng sang; cùng các dòng phụ gia polyme kỹ thuật xanh thân thiện môi trường.',
        'Sự kết hợp liên ngành giữa TECMIN (nguồn khoáng Canxi Cacbonat siêu mịn) và TECNIC MAT cho phép chúng tôi chủ động kiểm soát chi phí nguyên liệu đầu vào và tối ưu hóa tính năng cơ lý của vật liệu theo yêu cầu khắt khe của từng khách hàng.',
      ],
      coreValues: [
        { title: 'Trọng lượng nhẹ - Độ bền cao', desc: 'Vật liệu composite sợi carbon và sợi thủy tinh gia cường giảm 40% trọng lượng so với thép.' },
        { title: 'Kháng khuẩn y sinh Bio-Safe', desc: 'Ứng dụng phụ gia nano bạc tiêu diệt 99.9% vi khuẩn E.coli và tụ cầu vàng trên bề mặt tiếp xúc.' },
        { title: 'Kinh tế tuần hoàn ESG', desc: 'Sử dụng đến 70% khoáng sản tái sinh và phụ phẩm công nghiệp trong công thức sản xuất.' },
      ],
    },
    stats: [
      { value: '40%', label: 'Trọng lượng giảm thiểu', note: 'So với vật liệu kim loại truyền thống' },
      { value: 'Mohs 7', label: 'Độ cứng đá thạch anh', note: 'Chống trầy xước chỉ sau kim cương' },
      { value: '99.9%', label: 'Khả năng kháng khuẩn bề mặt', note: 'Chứng nhận kiểm nghiệm Pasteur' },
      { value: '15+', label: 'Công thức vật liệu độc quyền', note: 'Đăng ký sở hữu trí tuệ' },
    ],
    pillars: [
      {
        id: 'biomed-composite',
        title: 'Vật Liệu Composite Ứng Dụng Y Sinh & Trợ Năng',
        summary: 'Composite sợi carbon / sợi thủy tinh siêu bền nhẹ cho xe lăn điện và khung nẹp y tế',
        description: 'Tận dụng đặc tính không bị ăn mòn hóa chất, đàn hồi tốt và giảm chấn xuất sắc, TECNIC MAT phát triển các chi tiết khung vỏ xe lăn điện, càng phuộc nhún và nẹp định hình cột sống y tế.',
        features: [
          'Tỷ trọng nhẹ chỉ bằng 1/4 thép nhưng độ bền kéo tương đương thép hợp kim',
          'Không gây nhiễu từ trường khi đi qua máy quét an ninh hoặc chụp cộng hưởng từ MRI',
          'Độ bền mỏi cơ học trên 1.000.000 chu kỳ dao động uốn liên tục',
        ],
        tag: 'Biomedical Composite',
      },
      {
        id: 'quartz-surface',
        title: 'Đá Thạch Anh Nhân Tạo Kháng Khuẩn Bề Mặt',
        summary: 'Mặt đá Engineered Quartz độ cứng Mohs 7 ứng dụng cho bệnh viện và nội thất cao cấp',
        description: 'Sản xuất bằng công nghệ rung ép chân không với hơn 90% cốt liệu hạt thạch anh tự nhiên kết hợp keo nhựa polymer chuyên dụng và hạt nano bạc kháng khuẩn Microban.',
        features: [
          'Độ cứng bề mặt vượt trội Mohs 7, hoàn toàn không bị trầy xước bởi dao kéo thông thường',
          'Độ hút nước cực thấp < 0.05%, ngăn chặn 100% hiện tượng ố vàng từ cà phê, hóa chất y tế',
          'Bề mặt bóng mịn không lỗ xốp, dễ lau chùi khử trùng bằng cồn y tế 70-90 độ',
        ],
        tag: 'Antimicrobial Quartz Surface',
      },
      {
        id: 'green-additives',
        title: 'Phụ Gia Xây Dựng Xanh & Keo Dán Đá Kỹ Thuật Cao',
        summary: 'Keo dán gạch đá khổ lớn chuyên dụng và vữa chống thấm tinh thể thẩm thấu',
        description: 'Được nghiên cứu tối ưu hóa tương thích với các dòng đá tự nhiên của TECMIN, keo dán gạch đá TECNIC MAT sở hữu độ bám dính polyme cực cao, triệt tiêu hiện tượng bong rộp.',
        features: [
          'Độ bám dính tiêu chuẩn C2TE theo chuẩn quốc tế ISO 13007-1',
          'Chống trượt theo phương thẳng đứng cho các tấm đá ốp mặt dựng khổ lớn',
          'Thành phần phát thải hợp chất hữu cơ dễ bay hơi VOC cực thấp, an toàn cho phòng sạch',
        ],
        tag: 'Green Construction Materials',
      },
    ],
    products: [
      {
        id: 'prod-vl-01',
        name: 'Đá Thạch Anh Nhân Tạo Phòng Sạch Y Tế TECNIC MediQuartz-90',
        model: 'TECNIC-MQ90',
        categoryName: 'Vật liệu bề mặt kháng khuẩn',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        badge: 'Kháng khuẩn Nano Ag+',
        description: 'Tấm đá thạch anh nhân tạo tích hợp công nghệ ion bạc nano tiêu diệt vi khuẩn, thiết kế chuyên dụng cho mặt bàn xét nghiệm, phòng mổ, quầy lễ tân bệnh viện và bàn bếp cao cấp.',
        features: [
          'Cốt liệu 93% bột thạch anh tự nhiên siêu sạch tuyển chọn',
          'Kháng các loại hóa chất tẩy rửa bệnh viện, cồn sát khuẩn và dung dịch Betadine',
          'Đạt chứng nhận an toàn thực phẩm NSF 51 cho bề mặt tiếp xúc trực tiếp thức ăn',
          'Kích thước tấm lớn Jumbo 3200 x 1600 mm giảm thiểu tối đa đường nối mạch',
        ],
        specs: [
          { label: 'Độ cứng bề mặt', value: 'Mohs 7.0' },
          { label: 'Độ hút nước', value: '≤ 0.03%' },
          { label: 'Kích thước tấm tiêu chuẩn', value: '3200 x 1600 x 20 mm' },
          { label: 'Chứng chỉ an toàn', value: 'NSF / Greenguard Gold / CE' },
        ],
        targetAudience: 'Bệnh viện, phòng xét nghiệm, trung tâm dược phẩm, căn hộ cao cấp',
        origin: 'Nhà máy Vật liệu Công nghệ cao TECNIC MAT',
        domainSource: 'tecnic.com.vn',
      },
      {
        id: 'prod-vl-02',
        name: 'Keo Dán Đá Tự Nhiên & Gạch Khổ Lớn Siêu Bám Dính TECNIC FlexBond C2TE',
        model: 'TECNIC-FB-C2TE',
        categoryName: 'Hóa chất & Keo xây dựng',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
        badge: 'Đạt chuẩn ISO 13007 C2TE',
        description: 'Vữa keo dán gạch đá gốc xi măng tăng cường polyme biến tính chuyên dụng cho việc ốp lát các loại đá tự nhiên Marble, Granite TECMIN lên bề mặt tường bê tông và thạch cao.',
        features: [
          'Cường độ bám dính kéo sau ngâm nước > 1.5 N/mm²',
          'Thời gian mở kéo dài trên 30 phút, thuận tiện căn chỉnh vị trí đá khổ lớn',
          'Khả năng chống trượt tuyệt đối khi ốp đá nặng theo phương thẳng đứng',
          'Chống thấm nước và co ngót, không gây hiện tượng ố mốc chân đá tự nhiên',
        ],
        specs: [
          { label: 'Tiêu chuẩn phân loại', value: 'C2TE (ISO 13007 / TCVN 7899)' },
          { label: 'Độ bám dính kéo ban đầu', value: '≥ 1.8 MPa' },
          { label: 'Độ dày lớp keo thi công', value: '3 - 10 mm' },
          { label: 'Quy cách đóng gói', value: 'Bao giấy chống ẩm 25 kg' },
        ],
        targetAudience: 'Nhà thầu ốp lát đá, dự án resort, biệt thự, công trình thương mại',
        origin: 'TECNIC MAT Technology',
        domainSource: 'tecnic.com.vn',
      },
    ],
    technologies: [
      {
        title: 'Công nghệ Rung Ép Hút Chân Không Bretonstone',
        origin: 'Italia',
        highlight: 'Mật độ nén tuyệt đối không còn bọt khí li ti',
        description: 'Cốt liệu thạch anh và polymer được rung ép đồng thời với tần số cao dưới áp suất chân không cực sâu 0.05 bar, tạo ra cấu trúc tinh thể liên kết đồng nhất không có khe hở cho vi khuẩn phát triển.',
      },
      {
        title: 'Công nghệ Kháng Khuẩn Bạc Nano Silver-Lock',
        origin: 'Hoa Kỳ',
        highlight: 'Kháng khuẩn vĩnh viễn không bị rửa trôi',
        description: 'Các ion bạc nano Ag+ được phân tán đều vào trong ma trận keo polymer trong suốt quá trình đông rắn, liên tục phá vỡ màng tế bào của vi khuẩn khi chúng tiếp xúc với bề mặt đá.',
      },
    ],
    projects: [
      {
        id: 'pj-vl-1',
        title: 'Ốp Mặt Bàn Y Tế & Phòng Sạch Chuỗi Phòng Khám Đa Khoa Quốc Tế',
        client: 'Tổ hợp Y tế & Dược phẩm cao cấp',
        location: 'Hà Nội & TP. Hồ Chí Minh',
        scale: '3.500 m² đá thạch anh MediQuartz-90',
        year: '2023 - 2024',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        description: 'Thi công hoàn thiện toàn bộ mặt bàn xét nghiệm, bàn tiểu phẫu và quầy tiếp đón bệnh nhân bằng đá thạch anh kháng khuẩn đạt chuẩn kiểm định an toàn vi sinh.',
        deliverables: ['Gia công phay vát cạnh chuẩn vi sinh', 'Mạch ghép bằng keo kháng khuẩn đồng màu', 'Nghiệm thu vô trùng vi sinh trước khi đưa vào vận hành'],
      },
    ],
    certifications: [
      { code: 'NSF Standard 51', title: 'Chứng nhận an toàn tiếp xúc thực phẩm và y tế', org: 'National Sanitation Foundation (USA)', year: '2023' },
      { code: 'Greenguard Gold', title: 'Tiêu chuẩn phát thải khí hữu cơ VOC cực thấp cho trường học & bệnh viện', org: 'UL Environment', year: '2022' },
      { code: 'ISO 14001:2015', title: 'Hệ thống quản lý môi trường sản xuất vật liệu', org: 'BVC', year: '2023' },
    ],
    faqs: [
      {
        question: 'Đá nhân tạo gốc thạch anh có bị ố vàng khi tiếp xúc với cồn hay hóa chất y tế không?',
        answer: 'Không. Với độ hút nước gần như bằng 0 (< 0.03%), đá MediQuartz-90 kháng hoàn toàn cồn y tế, dung dịch Betadine, thuốc nhuộm và hóa chất xét nghiệm, lau chùi sạch dễ dàng mà không để lại vết ố.',
      },
      {
        question: 'TECNIC MAT có nhận gia công theo kích thước bản vẽ thiết kế không?',
        answer: 'Chúng tôi sở hữu trung tâm gia công CNC tự động 5 trục, sẵn sàng cắt mòi, khoét lỗ chìm, phay gờ chỉ và uốn cong theo đúng từng chi tiết bản vẽ kỹ thuật của kiến trúc sư.',
      },
    ],
  },

  'logistics': {
    id: 'logistics',
    title: 'LOGISTICS & CHUỖI CUNG ỨNG VẬN TẢI',
    englishTitle: 'Logistics & Supply Chain Solutions',
    unit: 'TECNIC LOGISTICS',
    tagline: 'Vận tải chuyên dụng đa phương thức, chuỗi cung ứng lạnh y tế chuẩn GDP và giải pháp logistics xuất nhập khẩu khoáng sản quốc tế',
    bannerImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
    primaryColor: '#0f766e',
    accentColor: '#14b8a6',
    domains: [
      { name: 'tecnic.com.vn', url: 'https://tecnic.com.vn', note: 'Giải pháp Logistics & Chuỗi cung ứng Tập đoàn TECNIC' },
    ],
    overview: {
      lead: 'TECNIC LOGISTICS là mắt xích vận hành huyết mạch trong hệ sinh thái TECNIC Group, đảm bảo sự lưu thông liên tục, an toàn và đúng tiến độ của các thiết bị y tế nhạy cảm cao, cũng như vận chuyển khối lượng lớn khoáng sản và vật tư kỹ thuật trên toàn quốc và quốc tế.',
      paragraphs: [
        'Với đội xe tải chuyên dụng trang bị hệ thống giảm chấn bóng hơi (Air Suspension), bửng nâng thủy lực và hệ thống cảm biến nhiệt độ - độ ẩm thời gian thực IoT, chúng tôi đáp ứng những tiêu chuẩn vận chuyển khắt khe nhất của ngành y tế (tiêu chuẩn Thực hành tốt phân phối GDP) và tiêu chuẩn chất lượng ISO 9001:2015.',
        'Đồng thời, TECNIC LOGISTICS sở hữu năng lực vận chuyển hàng nặng, hàng rời quy mô công nghiệp từ các mỏ đá hoa Lục Yên (Yên Bái) và Nghệ An về cảng Hải Phòng, cảng Cửa Lò để xuất khẩu đi Hàn Quốc, Nhật Bản, Ấn Độ và cung ứng trực tiếp tới các đại dự án hạ tầng quốc gia như Vinhomes Royal Island Hải Phòng.',
      ],
      coreValues: [
        { title: 'An toàn tuyệt đối 100%', desc: 'Quy trình chằng buộc, chống rung lắc cơ học chuyên biệt cho các thiết bị y tế tinh vi và robot phục hồi chức năng.' },
        { title: 'Chuỗi lạnh chuẩn GDP', desc: 'Kiểm soát nhiệt độ liên tục từ 2°C - 8°C và 15°C - 25°C, cảnh báo tức thì sai lệch qua vệ tinh GPS.' },
        { title: 'Giao hàng đúng hẹn JIT', desc: 'Mạng lưới vận chuyển phủ sóng 63 tỉnh thành, kết nối giao nhận nhanh trong 24h - 48h tại các trung tâm kinh tế.' },
      ],
    },
    stats: [
      { value: '63', label: 'Tỉnh thành phủ sóng', note: 'Mạng lưới giao nhận thiết bị y tế toàn quốc' },
      { value: '12.000+ m²', label: 'Kho bãi & Kho lạnh chuẩn GDP', note: 'Tại Hà Nội, Hải Phòng & TP. Hồ Chí Minh' },
      { value: '150+', label: 'Phương tiện chuyên dụng', note: 'Xe tải bóng hơi, xe đông lạnh & đầu kéo container' },
      { value: '99.8%', label: 'Tỷ lệ giao hàng đúng hẹn', note: 'Đo lường theo chỉ số KPI dịch vụ' },
    ],
    pillars: [
      {
        id: 'medical-cold-chain',
        title: 'Logistics Y Tế & Chuỗi Cung Ứng Lạnh (Medical Cold-Chain GDP)',
        summary: 'Vận chuyển thiết bị y tế, giường điện ICU, xe lăn điện và sinh phẩm y tế đạt chuẩn GDP',
        description: 'Đội xe chuyên dụng trang bị hệ thống giảm sốc bóng hơi và bửng nâng thủy lực, tài xế và kỹ thuật viên được đào tạo chuyên môn về bảo quản, nâng hạ thiết bị y sinh nhạy cảm cao, bảo đảm không sai lệch hiệu chuẩn thiết bị khi bàn giao.',
        features: [
          'Thùng xe cách nhiệt chuyên dụng, điều hòa nhiệt độ tự động 2°C - 8°C hoặc 15°C - 25°C',
          'Thiết bị ghi nhận nhiệt độ thời gian thực kết nối Internet IoT, xuất báo cáo điện tử cho cơ quan kiểm định',
          'Đội ngũ giao nhận kiêm kỹ thuật viên hỗ trợ lắp đặt, hiệu chỉnh và hướng dẫn vận hành tại bệnh viện',
        ],
        tag: 'Medical Cold-Chain & Installation',
      },
      {
        id: 'mineral-heavy-freight',
        title: 'Vận Tải Khoáng Sản & Hàng Siêu Trường Siêu Trọng',
        summary: 'Vận chuyển bột đá CaCO₃ đóng bao Jumbo và đá tự nhiên nguyên khối từ mỏ ra cảng biển',
        description: 'Giải pháp vận tải đa phương thức kết hợp đường bộ, đường sắt và đường thủy nội địa, tối ưu hóa chi phí logistics cho hàng vạn tấn khoáng sản xuất khẩu và cung ứng đá tự nhiên quy cách lớn cho các đại dự án bất động sản.',
        features: [
          'Đội xe đầu kéo container và sơ mi rơ moóc chuyên dụng chở đá khối và bao Jumbo 1 tấn',
          'Hợp đồng nguyên tắc với các hãng tàu quốc tế lớn, đảm bảo đủ vỏ container rỗng trong mùa cao điểm',
          'Kho bãi lưu trữ hàng rời gần cảng Hải Phòng và cảng Cửa Lò thuận tiện bốc dỡ 24/7',
        ],
        tag: 'Industrial & Heavy Freight',
      },
      {
        id: 'smart-warehousing',
        title: 'Kho Bãi Thông Minh (WMS/TMS) & Khai Thuê Hải Quan',
        summary: 'Hệ thống kho ngoại quan, kho y tế GSP và dịch vụ thông quan trọn gói xuất nhập khẩu',
        description: 'Quản trị hàng tồn kho bằng phần mềm WMS mã vạch thông minh theo thời gian thực, quản lý lô date (FIFO/FEFO) khắt khe cho thiết bị y tế và linh kiện thay thế, hỗ trợ thủ tục hải quan xuất nhập khẩu thông suốt.',
        features: [
          'Hệ thống giá kệ Selective & Drive-in đa tầng, xe nâng điện tự động Reach Truck nâng cao 10m',
          'Phần mềm TMS tối ưu hóa lộ trình xe, giảm thiểu 20% chi phí cước vận chuyển cho khách hàng',
          'Đội ngũ khai thuê hải quan giàu kinh nghiệm, hoàn tất thủ tục thông quan hàng hóa trong vòng 24h',
        ],
        tag: 'Smart Warehousing & Customs',
      },
    ],
    products: [
      {
        id: 'prod-lg-01',
        name: 'Dịch Vụ Vận Chuyển & Lắp Đặt Thiết Bị Y Tế Chuyên Dụng Tận Nơi',
        model: 'TECNIC-MED-LOG',
        categoryName: 'Logistics Y Tế Chuyên Sâu',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
        badge: 'Bảo hiểm hàng hóa 100%',
        description: 'Dịch vụ vận tải giao nhận tận phòng bệnh, khoa ICU của các bệnh viện trên 63 tỉnh thành. Sử dụng xe tải bóng hơi chống rung sốc và kỹ thuật viên nâng hạ, kiểm tra test máy trước khi bàn giao.',
        features: [
          'Xe tải trang bị giảm chấn bóng hơi (Air Suspension) bảo vệ mạch điện tử y sinh',
          'Bửng nâng thủy lực chịu tải 2.000 kg, đưa thiết bị cồng kềnh lên xe nhẹ nhàng',
          'Quy trình đóng gói pallet gỗ hun trùng chống ẩm và màng bọc chống xước chuyên dụng',
          'Cung cấp biên bản bàn giao kỹ thuật, tem niêm phong và bảo hiểm hàng hóa trọn vẹn',
        ],
        specs: [
          { label: 'Phạm vi cung cấp', value: 'Toàn quốc 63 tỉnh thành' },
          { label: 'Thời gian giao hàng', value: 'Hà Nội - HCM: 36 - 48h; Nội thành: 2 - 4h' },
          { label: 'Tải trọng phương tiện', value: '1.5 tấn đến 15 tấn' },
          { label: 'Chuẩn an toàn', value: 'GDP / ISO 9001 / Giảm chấn khí nén' },
        ],
        targetAudience: 'Bệnh viện, viện điều dưỡng, trung tâm y tế, công ty trang thiết bị y khoa',
        origin: 'TECNIC Logistics Fleet',
        domainSource: 'tecnic.com.vn',
      },
      {
        id: 'prod-lg-02',
        name: 'Chuỗi Cung Ứng Lạnh Vận Chuyển Sinh Phẩm & Dược Liệu Chuẩn GDP',
        model: 'TECNIC-COLD-CHAIN',
        categoryName: 'Logistics Chuỗi Lạnh',
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
        badge: 'Kiểm soát nhiệt độ IoT 24/7',
        description: 'Vận chuyển dược phẩm, sinh phẩm y tế và thiết bị xét nghiệm cần bảo quản nhiệt độ đặc biệt với hệ thống máy lạnh Thermo King chính xác ±0.5°C và cảm biến truyền dữ liệu liên tục.',
        features: [
          'Dải nhiệt độ linh hoạt: 2°C đến 8°C (lạnh) hoặc 15°C đến 25°C (mát)',
          'Cảm biến nhiệt độ đa điểm trong thùng xe, cảnh báo chuông và SMS tức thì khi lệch nhiệt',
          'Máy phát điện phụ trợ độc lập, duy trì nhiệt độ liên tục ngay cả khi xe tắt máy dừng nghỉ',
          'Xuất đồ thị biểu đồ nhiệt độ tự động cho từng chuyến xe kèm hóa đơn vận chuyển',
        ],
        specs: [
          { label: 'Dải nhiệt độ', value: '2°C - 8°C hoặc 15°C - 25°C' },
          { label: 'Độ chính xác nhiệt', value: '± 0.5°C' },
          { label: 'Hệ thống lạnh', value: 'Thermo King / Carrier chuyên dụng' },
          { label: 'Giám sát', value: 'IoT GPS & Cảm biến nhiệt 4 điểm' },
        ],
        targetAudience: 'Công ty dược phẩm, viện vắc xin, chuỗi nhà thuốc, phòng xét nghiệm vi sinh',
        origin: 'TECNIC Cold-Chain Division',
        domainSource: 'tecnic.com.vn',
      },
      {
        id: 'prod-lg-03',
        name: 'Dịch Vụ Vận Tải Đa Phương Thức Xuất Khẩu Khoáng Sản & Đá Tự Nhiên',
        model: 'TECNIC-BULK-FREIGHT',
        categoryName: 'Vận tải công nghiệp nặng',
        image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80',
        badge: 'Công suất 15.000 tấn/tháng',
        description: 'Giải pháp vận chuyển trọn gói từ mỏ đá Lục Yên (Yên Bái) về các cụm cảng biển quốc tế và các đại dự án đô thị lớn (Vinhomes Royal Island Vũ Yên, Vinhomes Ocean Park 3).',
        features: [
          'Đội xe đầu kéo moóc sàn và moóc ben chuyên chở đá khối tự nhiên đến 35 tấn',
          'Quy trình xếp dỡ bao Jumbo bột đá CaCO₃ tự động bằng xe nâng gắn càng kẹp chuyên dụng',
          'Thủ tục thông quan xuất khẩu, cấp chứng nhận xuất xứ C/O, kiểm định hun trùng trọn gói',
          'Ký kết hợp đồng dài hạn với chi phí cước vận tải ổn định cạnh tranh nhất thị trường',
        ],
        specs: [
          { label: 'Năng lực vận chuyển', value: '15.000 - 20.000 tấn/tháng' },
          { label: 'Phương tiện', value: 'Đầu kéo container 40ft & Rơ moóc ben siêu tải' },
          { label: 'Tuyến đường chính', value: 'Yên Bái - Hải Phòng; Nghệ An - Cửa Lò' },
          { label: 'Dịch vụ đi kèm', value: 'Khai hải quan, kiểm định SGS, cấp C/O form AK/AJ/E' },
        ],
        targetAudience: 'Doanh nghiệp xuất khẩu khoáng sản, tổng thầu xây dựng các đại dự án',
        origin: 'TECNIC Heavy Logistics',
        domainSource: 'tecnic.com.vn',
      },
    ],
    technologies: [
      {
        title: 'Hệ thống Quản lý Vận tải Thông minh TECNIC TMS Cloud',
        origin: 'Phần mềm tối ưu lộ trình AI',
        highlight: 'Tiết kiệm 18% thời gian di chuyển và giảm 15% nhiên liệu tiêu hao',
        description: 'Thuật toán tự động phân bổ tuyến đường tránh kẹt xe và đường cấm tải, đồng bộ trạng thái đơn hàng thời gian thực cho người nhận và người gửi trên ứng dụng di động.',
      },
      {
        title: 'Công nghệ Treo Khí Nén Chống Sốc Air Suspension',
        origin: 'Đức & Thụy Điển',
        highlight: 'Triệt tiêu 95% xung lực rung lắc từ mặt đường',
        description: 'Hệ thống bóng hơi tự động điều chỉnh áp suất theo tải trọng xe, giữ mặt sàn thùng xe luôn cân bằng êm ái, đảm bảo an toàn tuyệt đối cho các linh kiện quang học và cảm biến y tế.',
      },
    ],
    projects: [
      {
        id: 'pj-lg-1',
        title: 'Vận Chuyển & Lắp Đặt 450 Giường Điện & Thiết Bị Y Tế ICU Tuyến Tỉnh',
        client: 'Ban Quản lý Dự án Mua sắm Y tế phía Bắc',
        location: 'Hà Nội, Hải Phòng, Quảng Ninh, Phú Thọ',
        scale: '450 giường điện CareBed & 120 xe lăn trợ lực',
        year: '2023 - 2024',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
        description: 'Huy động 25 lượt xe tải thùng kín bửng nâng, vận chuyển an toàn 100% thiết bị y tế qua các cung đường đồi núi, bàn giao và lắp đặt hoàn thiện tận giường bệnh viện đúng tiến độ nghiệm thu.',
        deliverables: ['100% chuyến xe an toàn 0 sự cố va đập', 'Biên bản nghiệm thu kỹ thuật tại từng khoa phòng', 'Bảo hiểm trách nhiệm hàng hóa 100%'],
      },
      {
        id: 'pj-lg-2',
        title: 'Chuỗi Logistics Vận Tải 45.000m² Đá Cảnh Quan Đại Dự Án Vinhomes Royal Island',
        client: 'Tập đoàn Vingroup / Dự án Đảo Hoàng Gia Vũ Yên',
        location: 'Vũ Yên, Thủy Nguyên, TP. Hải Phòng',
        scale: '45.000 m² đá cubic và đá tự nhiên TECMIN',
        year: '2023 - 2025',
        image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80',
        description: 'Tổ chức chuỗi vận tải liên tục 3 ca ngày đêm từ mỏ khai thác về đại công trường đảo Vũ Yên Hải Phòng, đáp ứng tiến độ thi công khắt khe của chủ đầu tư Vingroup.',
        deliverables: ['Vận chuyển đúng cam kết 1.500m²/tuần', 'Xếp dỡ pallet đồng bộ tại chân công trình', 'Đảm bảo vệ sinh môi trường đường bộ'],
      },
    ],
    certifications: [
      { code: 'GDP Standard', title: 'Thực hành tốt phân phối thuốc & thiết bị y tế', org: 'Bộ Y Tế / Cục Quản lý Dược', year: '2022 - 2025' },
      { code: 'ISO 9001:2015', title: 'Hệ thống quản lý chất lượng dịch vụ logistics & kho bãi', org: 'DAS Certification', year: '2021 - 2027' },
      { code: 'GPS IoT Certified', title: 'Chứng nhận giám sát hành trình phương tiện đạt chuẩn quốc gia', org: 'Bộ Giao thông Vận tải', year: '2023' },
    ],
    faqs: [
      {
        question: 'TECNIC LOGISTICS có nhận vận chuyển thiết bị y tế đi các tỉnh miền núi không?',
        answer: 'Có. Mạng lưới xe tải chuyên dụng của TECNIC LOGISTICS phủ sóng toàn bộ 63 tỉnh thành, kể cả các huyện vùng sâu vùng xa, biên giới và hải đảo, với đội ngũ tài xế thông thạo địa hình và quy trình chằng buộc an toàn.',
      },
      {
        question: 'Hàng hóa thiết bị y tế có được bảo hiểm trong quá trình vận chuyển không?',
        answer: '100% các chuyến hàng của TECNIC LOGISTICS đều được mua bảo hiểm hàng hóa toàn diện từ các công ty bảo hiểm uy tín (Bảo Việt, PVI). Trong trường hợp có bất kỳ rủi ro va đập nào, chúng tôi cam kết đổi mới thiết bị và bồi hoàn thỏa đáng.',
      },
      {
        question: 'Dịch vụ chuỗi cung ứng lạnh có cung cấp dữ liệu nhiệt độ sau chuyến đi không?',
        answer: 'Có. Sau khi giao hàng, khách hàng sẽ nhận được file trích xuất dữ liệu biểu đồ nhiệt độ chi tiết từng phút từ thiết bị ghi nhận nhiệt độ IoT để lưu trữ vào hồ sơ quản lý chất lượng GDP của bệnh viện hoặc cơ sở dược phẩm.',
      },
    ],
  },
};
