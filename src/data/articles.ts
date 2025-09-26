export interface Article {
  id: string;
  title: string;
  videoUrl: string;
  content?: string; // Thêm trường content
}

export const articles: Article[] = [
  {
    id: "bai-hat-ve-su-buong-bo",
    title: "Bài hát về sự buông bỏ",
    videoUrl: "https://www.youtube.com/embed/zNYT7HBneHY",
  },
  {
    id: "con-duong-tro-thanh-phat-tu",
    title: "Con đường trở thành Phật tử",
    videoUrl: "https://www.youtube.com/embed/-3xn4oe9Arc",
  },
  {
    id: "vo-nga-nhac-kinh",
    title: "Vô Ngã Nhạc Kinh (Bài Hát Về Vô Ngã)",
    videoUrl: "https://www.youtube.com/embed/T9ZESzU0h8s",
  },
  {
    id: "nghi-thuc-tri-tung-chu-dai-bi-tai-gia",
    title: "NGHI THỨC TRÌ TỤNG CHÚ ĐẠI BI TẠI GIA",
    videoUrl: "https://www.youtube.com/embed/zNYT7HBneHY", // Sử dụng liên kết ví dụ bạn cung cấp
    content: `
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Video tham khảo: Chú Đại Bi - YouTube</p>
      <p class="italic text-gray-700 dark:text-gray-300 mb-6">(Trước khi bắt đầu, hãy giữ thân tâm thanh tịnh, trang phục trang nghiêm, ngồi thẳng lưng và hai tay chắp trước ngực.)</p>

      <h2 class="text-2xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-200">PHẦN 1: KHAI KINH (TRƯỚC KHI TỤNG)</h2>

      <h4 class="text-xl font-semibold mt-6 mb-2 text-gray-700 dark:text-gray-300">(1) Nguyện Hương</h4>
      <p class="italic text-gray-600 dark:text-gray-400 mb-4">(Phần này dành cho những ai có thắp hương. Nếu không, bạn có thể bắt đầu từ phần Kệ Tán Lư Hương bên dưới.)</p>
      <p class="mb-2">Nguyện đem lòng thành kính,</p>
      <p class="mb-2">Gửi theo đám mây hương,</p>
      <p class="mb-2">Phảng phất khắp mười phương,</p>
      <p class="mb-2">Cúng dường ngôi Tam Bảo.</p>
      <p class="mb-2">Thề trọn đời giữ đạo,</p>
      <p class="mb-2">Theo tự tánh làm lành,</p>
      <p class="mb-2">Cùng pháp giới chúng sinh,</p>
      <p class="mb-2">Cầu Phật từ gia hộ,</p>
      <p class="mb-2">Tâm Bồ Đề kiên cố,</p>
      <p class="mb-2">Chí tu học vững bền,</p>
      <p class="mb-2">Xa bể khổ nguồn mê,</p>
      <p class="mb-2">Chóng quay về bờ Giác.</p>
      <p class="font-semibold mt-2">Nam mô Hương Cúng Dường Bồ Tát Ma Ha Tát. (3 lần)</p>

      <h4 class="text-xl font-semibold mt-6 mb-2 text-gray-700 dark:text-gray-300">(2) Kệ Tán Lư Hương</h4>
      <p class="italic text-gray-600 dark:text-gray-400 mb-4">(Nếu không có hương, hãy bắt đầu từ đây. Tấm lòng thành kính chính là lư hương quý nhất.)</p>
      <p class="mb-2">Lòng thành con gửi mười phương,</p>
      <p class="mb-2">Tâm hương một nén cúng dường Phật, Thiên.</p>
      <p class="mb-2">Cúi mong Chư Thánh, Tổ Tiên,</p>
      <p class="mb-2">Xót thương chứng giám cho niềm kính tin.</p>
      <p class="font-semibold mt-2">Nam mô Hương Cúng Dường Bồ Tát Ma Ha Tát. (3 lần)</p>

      <h4 class="text-xl font-semibold mt-6 mb-2 text-gray-700 dark:text-gray-300">(3) Tịnh Pháp Giới Chân Ngôn</h4>
      <p class="italic text-gray-600 dark:text-gray-400 mb-4">(Để làm thanh tịnh không gian đàn tràng)</p>
      <p class="font-semibold mt-2">Án Lam. (7 lần)</p>

      <h4 class="text-xl font-semibold mt-6 mb-2 text-gray-700 dark:text-gray-300">(4) Tịnh Tam Nghiệp Chân Ngôn</h4>
      <p class="italic text-gray-600 dark:text-gray-400 mb-4">(Để làm thanh tịnh Thân - Khẩu - Ý)</p>
      <p class="font-semibold mt-2">Án ta phạ bà phạ, truật đà ta phạ, đạt mạ ta phạ, bà phạ truật đô hám. (3 lần)</p>

      <h4 class="text-xl font-semibold mt-6 mb-2 text-gray-700 dark:text-gray-300">(5) Kệ Khai Kinh</h4>
      <p class="mb-2">Lời Phật dạy quý giá khôn lường,</p>
      <p class="mb-2">Trải muôn kiếp mới có duyên may.</p>
      <p class="mb-2">Nay con được thấy nghe, tu tập,</p>
      <p class="mb-2">Xin nguyện hiểu sâu nghĩa chân thật.</p>
      <p class="font-semibold mt-2">Nam mô Bổn Sư Thích Ca Mâu Ni Phật. (3 lần)</p>

      <h4 class="text-xl font-semibold mt-6 mb-2 text-gray-700 dark:text-gray-300">(6) Phát Nguyện Trì Tụng</h4>
      <p class="font-semibold mt-2">Nam mô Đại Bi Hội Thượng Phật Bồ Tát. (3 lần)</p>
      <p class="mt-4 mb-2">Kính lạy Đức Quán Thế Âm,</p>
      <p class="mb-2">Con nay vì Cửu Huyền Thất Tổ nhiều đời, vì oan gia trái chủ của con từ nhiều kiếp, vì cha mẹ hiện tiền, vì anh trai, em trai và người yêu của con, vì tất cả chúng sinh hữu duyên tại Hàn Quốc, và vì chính bản thân con trên con đường du học,</p>
      <p class="mb-2">Xin thành tâm trì tụng thần chú Đại Bi,</p>
      <p class="mb-2">Cúi mong Ngài từ bi gia hộ,</p>
      <p class="mb-2">Cho tất cả đều được tiêu trừ nghiệp chướng,</p>
      <p class="mb-2">Tăng trưởng phước lành, kết duyên Phật pháp.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-200">PHẦN 2: CHÁNH KINH (TRÌ TỤNG CHÚ ĐẠI BI)</h2>
      <p class="italic text-gray-600 dark:text-gray-400 mb-4">(Đọc 1, 3, 5 biến hoặc nhiều hơn tùy theo thời gian và tâm nguyện)</p>
      <p class="font-semibold mt-2">Nam mô Đại Bi Hội Thượng Phật Bồ Tát (3 lần)</p>
      <p class="mt-4 mb-2">Thiên thủ thiên nhãn vô ngại Đại bi tâm đà la ni.</p>
      <p class="mb-2">Nam mô hắc ra đát na, đa ra dạ da.</p>
      <p class="mb-2">Nam mô a rị da, bà lô yết đế, thước bát ra da.</p>
      <p class="mb-2">Bồ Đề tát đỏa bà da. Ma ha tát đỏa bà da.</p>
      <p class="mb-2">Ma ha ca lô ni ca da.</p>
      <p class="mb-2">Án, tát bàn ra phạt duệ, số đát na đát tỏa.</p>
      <p class="mb-2">Nam mô tất kiết lật đỏa, y mông a rị da,</p>
      <p class="mb-2">bà lô yết đế, thất Phật ra lăng đà bà.</p>
      <p class="mb-2">Nam mô na ra cẩn trì. Hê rị, ma ha bàn đa sa mế.</p>
      <p class="mb-2">Tát bà a tha đậu du bằng, a thệ dựng.</p>
      <p class="mb-2">Tát bà tát đa, na ma bà già.</p>
      <p class="mb-2">Ma phạt đạt đậu, đát điệt tha.</p>
      <p class="mb-2">Án, a bà lô hê, lô ca đế, ca ra đế, di hê rị.</p>
      <p class="mb-2">Ma ha bồ đề tát đỏa.</p>
      <p class="mb-2">Tát bà tát bà. Ma ra ma ra.</p>
      <p class="mb-2">Ma hê ma hê, rị đà dựng.Câu lô câu lô, yết mông.</p>
      <p class="mb-2">Độ lô độ lô, phạt xà da đế.</p>
      <p class="mb-2">Ma ha phạt xà da đế.</p>
      <p class="mb-2">Đà ra đà ra. Địa rị ni.</p>
      <p class="mb-2">Thất Phật ra da. Giá ra giá ra.</p>
      <p class="mb-2">Mạ mạ phạt ma ra, mục đế lệ.</p>
      <p class="mb-2">Y hê y hê, thất na thất na.</p>
      <p class="mb-2">A ra sâm Phật ra xá lợi.</p>
      <p class="mb-2">Phạt sa phạt sâm. Phật ra xá da.</p>
      <p class="mb-2">Hô lô hô lô, ma ra.</p>
      <p class="mb-2">Hô lô hô lô, hê rị.</p>
      <p class="mb-2">Ta ra ta ra, tất rị tất rị, tô rô tô rô.</p>
      <p class="mb-2">Bồ Đề dạ, Bồ Đề dạ.</p>
      <p class="mb-2">Bồ đà dạ, bồ đà dạ.</p>
      <p class="mb-2">Di đế rị dạ. Na ra cẩn trì.Địa rị sắc ni na. Ba dạ ma na.</p>
      <p class="mb-2">Ta bà ha. Tất đà dạ.</p>
      <p class="mb-2">Ta bà ha. Ma ha tất đà dạ.</p>
      <p class="mb-2">Ta bà ha. Tất đà du nghệ.</p>
      <p class="mb-2">Thất bàn ra dạ. Ta bà ha.</p>
      <p class="mb-2">Na ra cẩn trì. Ta bà ha.</p>
      <p class="mb-2">Ma ra na ra. Ta bà ha.</p>
      <p class="mb-2">Tất ra tăng a mục khê da.</p>
      <p class="mb-2">Ta bà ha. Ta bà ma ha, a tất đà dạ.</p>
      <p class="mb-2">Ta bà ha. Giả kiết ra a tất đà dạ.</p>
      <p class="mb-2">Ta bà ha. Ba đà ma yết tất đà dạ.</p>
      <p class="mb-2">Ta bà ha. Na ra cẩn trì bàn đà ra dạ.</p>
      <p class="mb-2">Ta bà ha. Ma bà lị thắng yết ra dạ.</p>
      <p class="mb-2">Ta bà ha.</p>
      <p class="mb-2">Nam mô hắc ra đát na, đa ra dạ da.</p>
      <p class="mb-2">Nam mô a rị da, bà lô yết đế,</p>
      <p class="mb-2">thước bàn ra dạ. Ta bà ha.</p>
      <p class="mb-2">Án, tất điện đô, mạn đa ra, bạt đà dạ. Ta bà ha.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-200">PHẦN 3: HỒI HƯỚNG (SAU KHI TỤNG)</h2>

      <h4 class="text-xl font-semibold mt-6 mb-2 text-gray-700 dark:text-gray-300">(1) Niệm Phật và Bồ Tát</h4>
      <p class="italic text-gray-600 dark:text-gray-400 mb-4">(Ghi chú: Để tụng ngắn gọn hàng ngày, bạn có thể chỉ niệm 3 vị Phật và Bồ Tát đầu tiên: Bổn Sư Thích Ca Mâu Ni Phật, A Di Đà Phật, và Đại Bi Quán Thế Âm Bồ Tát.)</p>
      <p class="font-semibold mt-2">Nam mô Bổn Sư Thích Ca Mâu Ni Phật. (3 lần)</p>
      <p class="font-semibold mt-2">Nam mô A Di Đà Phật. (3 lần)</p>
      <p class="font-semibold mt-2">Nam mô Đại Bi Quán Thế Âm Bồ Tát. (3 lần)</p>
      <p class="font-semibold mt-2">Nam mô Đại Hạnh Phổ Hiền Bồ Tát. (3 lần)</p>
      <p class="font-semibold mt-2">Nam mô Đại Trí Văn Thù Sư Lợi Bồ Tát. (3 lần)</p>
      <p class="font-semibold mt-2">Nam mô Đại Nguyện Địa Tạng Vương Bồ Tát. (3 lần)</p>

      <h4 class="text-xl font-semibold mt-6 mb-2 text-gray-700 dark:text-gray-300">(2) Bài Kệ Hồi Hướng</h4>
      <p class="italic text-gray-600 dark:text-gray-400 mb-4">(Đây là phần quan trọng nhất để hướng công đức đến mục tiêu của mình)</p>
      <p class="mb-2">Công đức trì chú con tạo nên,</p>
      <p class="mb-2">Xin đem hồi hướng trọn vẹn về:</p>
      <p class="mb-2">Trên là Cửu Huyền Thất Tổ được siêu sinh,</p>
      <p class="mb-2">Kế đến cha mẹ, anh em, người thương và bằng hữu,</p>
      <p class="mb-2">Cùng thầy cô, ân nhân trong đời được an vui, phước lành.</p>
      <p class="mb-2">Hồi hướng cho oan gia trái chủ nhiều đời,</p>
      <p class="mb-2">Xin oán kết hóa giải, cùng chung tu tập.</p>
      <p class="mb-2">Sau cùng hồi hướng cho chúng sinh khắp mười phương,</p>
      <p class="mb-2">Nguyện tất cả đều trọn thành Phật đạo.</p>
      <p class="mb-2">Riêng con, Lê Hoàng Phúc,</p>
      <p class="mb-2">Cúi xin Chư Phật Thánh Hiền,</p>
      <p class="mb-2">Từ bi chứng giám cho lòng thành,</p>
      <p class="mb-2">Hồi hướng công đức này cho việc học,</p>
      <p class="mb-2">Mong trí tuệ sáng, tâm kiên định,</p>
      <p class="mb-2">Thi cử thuận duyên, công thành quả mãn.</p>
      <p class="mb-2">Hồi hướng cho sự nghiệp tương lai,</p>
      <p class="mb-2">Vững bước, hanh thông, làm lợi lạc.</p>
      <p class="mb-2">Nguyện cho con tiêu trừ nghiệp chướng,</p>
      <p class="mb-2">Thiện căn tăng trưởng, tâm an vui,</p>
      <p class="mb-2">Và khi mãn báo thân này, được vãng sinh về thế giới Cực Lạc.</p>

      <h4 class="text-xl font-semibold mt-6 mb-2 text-gray-700 dark:text-gray-300">(3) Tam Tự Quy Y</h4>
      <p class="italic text-gray-600 dark:text-gray-400 mb-4">(Để kết thúc buổi lễ)</p>
      <p class="mb-2">Tự quy y Phật, xin nguyện chúng sinh, thể theo đạo cả, phát lòng vô thượng. (1 lạy)</p>
      <p class="mb-2">Tự quy y Pháp, xin nguyện chúng sinh, thấu rõ kinh tạng, trí tuệ như biển. (1 lạy)</p>
      <p class="mb-2">Tự quy y Tăng, xin nguyện chúng sinh, thống lý đại chúng, hết thảy không ngại. (1 lạy)</p>
      <p class="italic text-gray-600 dark:text-gray-400 mt-4">(Xá 3 xá và kết thúc buổi lễ.)</p>
    `,
  },
];