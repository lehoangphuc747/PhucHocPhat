export const routineSteps = [
  { label: "Chuẩn bị: ngồi thẳng, thở 3 hơi", minutes: 1 },
  { label: "Tịnh pháp giới / Tam quy", minutes: 1 },
  { label: "Tụng Chú Đại Bi (1–3 biến)", minutes: 7 },
  { label: "Thiền/chánh niệm theo dõi hơi thở", minutes: 8 },
  { label: "Hồi hướng có mục tiêu", minutes: 2 },
] as const;

export const weekPlan = [
  {
    title: "Tuần 1: Bắt đầu đúng",
    goals: [
      "Duy trì 1 biến Đại Bi/ngày (≥5/7 ngày)",
      "Nghe 2 pháp thoại căn bản, ghi 3 ý chính/1 ứng dụng",
      "Viết nhật ký 3 dòng mỗi ngày",
    ],
  },
  {
    title: "Tuần 2: Thêm định",
    goals: [
      "Thêm 5–10’ thiền theo dõi hơi thở",
      "Đọc 10–20 kệ Pháp Cú (chọn chủ đề)",
      "Chọn 1 việc thiện nhỏ, thực hành 7 ngày",
    ],
  },
  {
    title: "Tuần 3: Tăng biến nhưng giữ chất",
    goals: [
      "Tăng 3 biến Đại Bi nếu vẫn giữ chánh niệm",
      "Học chủ đề Nghiệp – Nhân quả (1–2 bài)",
      "Giữ đều nhật ký 3 dòng",
    ],
  },
  {
    title: "Tuần 4: Củng cố & hồi hướng",
    goals: [
      "Giữ nhịp hành trì hiện có",
      "Thêm hồi hướng có mục tiêu rõ (gia đình/học tập/sức khỏe)",
      "Tổng kết, điều chỉnh kế hoạch tháng sau",
    ],
  },
];

export const beliefChecklist = [
  { label: "Xác định vì sao mình tin (tránh mê tín)", note: "Bám Nhân–Quả, Tứ diệu đế" },
  { label: "Xác định nương tựa: Phật – Pháp – Tăng", note: "Tam bảo" },
  { label: "Kết nối thiện tri thức/cộng đồng" },
  { label: "Nhận diện sai lầm thường gặp và cách khắc phục" },
];

export const studyChecklist = [
  { label: "Tứ diệu đế – 1 bài pháp thoại" },
  { label: "Bát chánh đạo – 1 bài pháp thoại" },
  { label: "Nghiệp – Nhân quả – 1 bài pháp thoại" },
  { label: "Từ bi – Trí tuệ – 1 bài pháp thoại" },
  { label: "Đọc 10–20 kệ Pháp Cú" },
  { label: "Kinh ngắn: Kinh Từ Bi (hoặc tương đương)" },
];

export const applicationChecklist = [
  { label: "Ái ngữ: 1 câu nói tử tế mỗi ngày" },
  { label: "Không nói dối, tiết giảm mạng xã hội" },
  { label: "Bố thí nhỏ: 1 hành động giúp người/ngày" },
  { label: "Ăn chay kỳ: 2 ngày/tháng (tuỳ duyên)" },
  { label: "10’ giúp việc nhà mỗi ngày" },
];

export const courseModules = [
  {
    slug: "module-1",
    title: "Module 1: Niềm tin & Chánh kiến",
    description: "Vì sao tin, tin đúng gì, tránh mê tín; nương tựa Tam bảo.",
    lessons: [
      { slug: "vi-sao-tin", title: "Vì sao tin (Nhân–Quả, Tứ diệu đế)", duration: "10’", summary: "Đặt nền tảng niềm tin đúng dựa trên Nhân–Quả và Tứ diệu đế." },
      { slug: "sai-lam-thuong-gap", title: "Sai lầm thường gặp & cách khắc phục", duration: "8’", summary: "Nhận diện 3–5 sai lầm thường gặp và cách tránh." },
      { slug: "thien-tri-thuc", title: "Kết nối thiện tri thức/cộng đồng", duration: "5’", summary: "Tìm nơi nương tựa đúng: chùa, đạo tràng, nhóm học." },
    ],
  },
  {
    slug: "module-2",
    title: "Module 2: Học căn bản",
    description: "4 chủ đề nền tảng + tài liệu ngắn để bắt đầu đúng.",
    lessons: [
      { slug: "tu-dieu-de", title: "Tứ diệu đế (pháp thoại)", duration: "15’", summary: "Khổ–Tập–Diệt–Đạo và ý nghĩa thực hành." },
      { slug: "bat-chanh-dao", title: "Bát chánh đạo (pháp thoại)", duration: "15’", summary: "Con đường 8 nhánh dẫn đến an lạc." },
      { slug: "nghiep-nhan-qua", title: "Nghiệp – Nhân quả (pháp thoại)", duration: "15’", summary: "Hiểu cơ chế nghiệp để sống có trách nhiệm." },
      { slug: "tu-bi-tri-tue", title: "Từ bi – Trí tuệ (pháp thoại)", duration: "15’", summary: "Cân bằng lòng từ và trí tuệ trong tu học." },
      { slug: "phap-cu-chon-loc", title: "Pháp Cú chọn 10–20 kệ", duration: "15’", summary: "Những kệ ngắn gọn, thực tiễn, dễ ứng dụng." },
    ],
  },
  {
    slug: "module-3",
    title: "Module 3: Routine 10–20 phút/ngày",
    description: "Checklist từng bước + quy tắc tăng biến chú khi giữ chánh niệm.",
    lessons: [
      { slug: "routine-10-20", title: "Chuẩn bị – Tịnh – Tụng – Thiền – Hồi hướng", duration: "10–20’", summary: "Thực đơn hằng ngày cô đọng, dễ làm." },
      { slug: "tang-bien-chu", title: "Quy tắc tăng 1 → 3 biến (tuần 3)", duration: "5’", summary: "Tăng số biến khi vẫn giữ chánh niệm." },
    ],
  },
  {
    slug: "module-4",
    title: "Module 4: Đạo đức & Ứng dụng",
    description: "Ngũ giới theo khả năng, ái ngữ, bố thí, chay kỳ, việc thiện nhỏ.",
    lessons: [
      { slug: "5-thuc-hanh-nho", title: "5 thực hành nhỏ mỗi ngày", duration: "10’", summary: "Việc thiện đơn giản nhưng bền bỉ." },
      { slug: "1-viec-thien-7-ngay", title: "1 việc thiện/tuần – theo dõi 7 ngày", duration: "5’", summary: "Tạo đà thói quen tốt, có đo đếm." },
    ],
  },
  {
    slug: "module-5",
    title: "Module 5: Lộ trình 4 tuần",
    description: "Tiến độ nâng dần – giữ chất lượng chánh niệm.",
    lessons: [
      { slug: "lo-trinh-4-tuan", title: "Tuần 1 → 4: mục tiêu, checklist, tiêu chí hoàn thành", duration: "10’", summary: "Bản đồ 1 tháng, rõ mục tiêu – tiêu chí." },
    ],
  },
  {
    slug: "module-6",
    title: "Module 6: Theo dõi & điều chỉnh",
    description: "Nhật ký 3 dòng/ngày, đánh giá tuần, điều chỉnh kế hoạch.",
    lessons: [
      { slug: "nhat-ky-va-danh-gia", title: "Mẫu nhật ký & đánh giá tuần", duration: "5’", summary: "Giữ thói quen phản tỉnh đều đặn." },
    ],
  },
];


