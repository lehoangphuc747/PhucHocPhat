export interface Article {
  id: string;
  title: string;
  videoUrl?: string;
  content?: string; // Giữ lại content cho các bài viết khác nếu cần, hoặc có thể loại bỏ nếu không dùng
  chantLines?: string[]; // Thêm trường mới để lưu các dòng chú
  part1Content?: string; // Nội dung cho Phần 1
  part3Content?: string; // Nội dung cho Phần 3
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
    // content: ``, // Đã loại bỏ content gốc vì đã tách ra
    chantLines: [
      "Nam mô Đại Bi Hội Thượng Phật Bồ Tát (3 lần)",
      "Thiên thủ thiên nhãn vô ngại Đại bi tâm đà la ni.",
      "Nam mô hắc ra đát na, đa ra dạ da.",
      "Nam mô a rị da, bà lô yết đế, thước bát ra da.",
      "Bồ Đề tát đỏa bà da. Ma ha tát đỏa bà da.",
      "Ma ha ca lô ni ca da.",
      "Án, tát bàn ra phạt duệ, số đát na đát tỏa.",
      "Nam mô tất kiết lật đỏa, y mông a rị da,",
      "bà lô yết đế, thất Phật ra lăng đà bà.",
      "Nam mô na ra cẩn trì. Hê rị, ma ha bàn đa sa mế.",
      "Tát bà a tha đậu du bằng, a thệ dựng.",
      "Tát bà tát đa, na ma bà già.",
      "Ma phạt đạt đậu, đát điệt tha.",
      "Án, a bà lô hê, lô ca đế, ca ra đế, di hê rị.",
      "Ma ha bồ đề tát đỏa.",
      "Tát bà tát bà. Ma ra ma ra.",
      "Ma hê ma hê, rị đà dựng.Câu lô câu lô, yết mông.",
      "Độ lô độ lô, phạt xà da đế.",
      "Ma ha phạt xà da đế.",
      "Đà ra đà ra. Địa rị ni.",
      "Thất Phật ra da. Giá ra giá ra.",
      "Mạ mạ phạt ma ra, mục đế lệ.",
      "Y hê y hê, thất na thất na.",
      "A ra sâm Phật ra xá lợi.",
      "Phạt sa phạt sâm. Phật ra xá da.",
      "Hô lô hô lô, ma ra.",
      "Hô lô hô lô, hê rị.",
      "Ta ra ta ra, tất rị tất rị, tô rô tô rô.",
      "Bồ Đề dạ, Bồ Đề dạ.",
      "Bồ đà dạ, bồ đà dạ.",
      "Di đế rị dạ. Na ra cẩn trì.Địa rị sắc ni na. Ba dạ ma na.",
      "Ta bà ha. Tất đà dạ.",
      "Ta bà ha. Ma ha tất đà dạ.",
      "Ta bà ha. Tất đà du nghệ.",
      "Thất bàn ra dạ. Ta bà ha.",
      "Na ra cẩn trì. Ta bà ha.",
      "Ma ra na ra. Ta bà ha.",
      "Tất ra tăng a mục khê da.",
      "Ta bà ha. Ta bà ma ha, a tất đà dạ.",
      "Ta bà ha. Giả kiết ra a tất đà dạ.",
      "Ta bà ha. Ba đà ma yết tất đà dạ.",
      "Ta bà ha. Na ra cẩn trì bàn đà ra dạ.",
      "Ta bà ha. Ma bà lị thắng yết ra dạ.",
      "Ta bà ha.",
      "Nam mô hắc ra đát na, đa ra dạ da.",
      "Nam mô a rị da, bà lô yết đế,",
      "thước bàn ra dạ. Ta bà ha.",
      "Án, tất điện đô, mạn đa ra, bạt đà dạ. Ta bà ha.",
    ],
    part1Content: `
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
    `,
    part3Content: `
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
  {
    id: "lieu-pham-tu-huan-tinh-khong-tap-1",
    title: "Liễu Phàm Tứ Huấn - Tịnh Không (Tập 1)",
    content: `
      <p>Chư vị đồng học, xin chào mọi người!</p>

      <p>Hôm nay, chúng ta có thể ở trong phòng quay của đài truyền hình Phụng Hoàng cùng thảo luận với mọi người về Liễu Phàm Tứ Huấn.</p>

      <p>Vào năm tôi 26 tuổi, khi mới tiếp xúc với Phật pháp, đây là cuốn sách đầu tiên tôi đọc. Nó có ảnh hưởng rất lớn đối với tôi, có thể nói là đã ảnh hưởng cả cuộc đời tôi. Tôi vô cùng yêu thích cuốn sách này, cũng thường đọc tụng, và đã từng giảng không ít lần. Hiện nay giảng so với trước đây, trên phương diện cảnh giới đương nhiên có nhiều điểm khác nhau, nhưng những gì giảng trước đây vẫn có thể làm tham khảo.</p>

      <p>Tiên sinh Liễu Phàm họ Viên, ông tên Hoàng, hoàng trong “hồng hoàng xanh trắng đen”, tự là Khôn Nghi, đương thời ông là người huyện Ngô Giang, tỉnh Giang Nam. Ông sinh vào thời Minh Thế Tông, Thế Tông là Hoàng đế đời thứ 12 của nhà Minh, năm Gia Tĩnh thứ 14, tức năm 1.535 sau công nguyên. Như vậy, quý vị sẽ có một khái niệm tương đối rõ ràng, đại khái là cách chúng ta hiện nay hơn 500 năm. Ở sau Liễu Phàm Tử Huấn có kèm theo một bài viết là Du Tịnh Ý Công Ngộ Táo Thần Ký, cũng là một môn học rất đáng để chúng ta học tập. Du Tịnh Ý sanh vào năm Gia Tĩnh thứ 4, lớn hơn tiên sinh Liễu Phàm 10 tuổi. Vào năm Đinh Sửu, tức là lần thứ hai tiên sinh Liễu Phàm đi thi tiến sĩ, năm đó ông 43 tuổi, còn tiên sinh Du Tịnh Ý 53 tuổi, hai người họ là cùng khoa thi. Du Tịnh Ý thi đậu, tiên sinh Liễu Phàm thi không đậu. Mãi cho đến năm Bính Tuất, tiên sinh Liễu Phàm 52 tuổi mới thi đỗ tiến sĩ. Chúng ta quan sát từ trong truyện ký sẽ thấy được, việc cả đời ông sửa sai đổi mới cũng tương đối gian khổ, không phải là chuyện đơn giản. Đặc biệt là thời gian đầu, 20 năm đầu rất gian nan; đến lúc về già, công phu thuần thục rồi nên việc đoạn ác tu thiện càng ngày càng dễ dàng hơn.</p>

      <p>Chúng ta xem nội dung:</p>

      <p>Khi tôi còn nhỏ cha đã qua đời. “Tôi” là tiên sinh Liễu Phàm tự xưng, “đồng niên” là lúc còn nhỏ. Căn cứ theo “học thuyết lập mạng”, chúng ta biết ông chắc chắn mất cha trước năm 15 tuổi. Làm sao biết được? Vì lúc ông gặp Khổng tiên sinh là năm 15 tuổi, bởi vậy chắc chắn là trước năm 15 tuổi.</p>

      <p>Mẹ tôi bảo tôi từ bỏ con đường công danh khoa cử để theo học nghề y. “Cử nghiệp” nghĩa là đọc sách cầu lấy công danh. Mẹ ông nói với ông, không nhất định phải đọc sách cầu công danh nữa, mà khuyên ông học nghề y. Học y có thể duy trì cuộc sống, lại có thể cứu giúp người khác. Học y có lợi ích, có thể tự nuôi thân, cũng có thể cứu giúp những người bệnh khổ. Hơn nữa, nếu có thể tỉnh thông y thuật thì sẽ trở thành danh y nổi tiếng. Đó là tâm nguyện trước đây của cha con. Nếu con thật sự học tốt nghề y thì tương lai có thể trở thành danh y, đây là nguyện vọng của cha con đối với con.</p>

      <p>Sau đó ở chùa Từ Vân, tôi gặp một ông lão tướng mạo phi phàm, râu dài phất phới, phong thái nhẹ nhàng như tiên ông. Tôi cung kính hành lễ với ông. Sau đó, “hậu” là năm ông 15 tuổi, tức là năm 1.549 sau công nguyên, tại chùa Từ Vân ông gặp một cụ già. “Tu nhiêm vĩ mạo”, “tu nhiêm” là râu dài phất phới, tướng mạo phi phàm. Nhìn thấy phong thái nhẹ nhàng như tiên ông, không giống như người phàm, sau khi ông nhìn thấy thì rất kính lễ đối với người này. Do đây có thể biết, tiên sinh Liễu Phàm từ nhỏ được dạy bảo rất tốt. Tuy còn rất trẻ, mới 15 tuổi nhưng rất hiểu quy củ xử sự đối nhân tiếp vật, vậy mới có thể khiến người hoan hỷ, khiến người quý mến.</p>

      <p>Ông lão nói với tôi. Cụ già này nói với ông. Cậu là người trong quan trường. Ông lão này hình như biết xem tướng, vừa gặp liền nói, cậu có số làm quan. Năm sau sẽ thi đỗ tú tài. “Tấn học” tức là sang năm cậu sẽ thi đậu tú tài. Vì sao không đọc sách. Vì sao cậu không đọc sách? Vì sao cậu không lo đọc sách mà đi dạo khắp nơi ở bên ngoài vậy?</p>

      <p>Tôi liền nói rõ nguyên nhân. Ông liền [kể rõ chuyện] mẹ ông dạy ông đừng đọc sách nữa, [mà chuyển sang] học y. Ông đi khắp nơi ở bên ngoài, có thể là đi hái thuốc. Bởi vì 15 tuổi học y, vậy nhất định là học nghề, hoặc là đi theo đại phu, hoặc là học nghề trong tiệm thuốc. Điều này chúng ta đều có thể tưởng tượng được. Cho nên, ông đem ngọn nguồn nói với vị đạo trưởng này. Và hỏi tên họ của ông, nhà ở đâu. Ông thỉnh giáo quý tánh của ông cụ này, từ đâu đến?</p>

      <p>Ông lão trả lời rằng: “Ta họ Khổng, người Vân Nam". Ông nói với Liễu Phàm, ông họ Khổng, người Vân Nam. Ta được chân truyền thuật Hoàng Cực Số của tiên sinh Triệu Khang Tiết. Hoàng Cực Số Chánh Truyền của Thiệu Khang Tiết, hiện nay được thu thập trong Tứ Khố Toàn Thư. Tôi từng mở ra xem, nói thật là xem không hiểu, sách này hoàn toàn thuộc về toán học cao cấp. Trong sách này không những có thể nói về vận mệnh của một người, mà còn nói đến vận mệnh của quốc gia, vận mệnh của thế giới, hoàn toàn đoán định theo quẻ số trong Kinh Dịch. Theo số mạng thì ta nên truyền lại cho cậu. Từ trên định số mà nói, thì tôi nên truyền cho cậu. Bạn xem vị đạo trưởng này lần đầu tiên gặp Liễu Phàm, làm sao biết có thể truyền cho ông? Trong này chắc chắn có học vấn lớn, loại học vấn này rất giống với phương pháp truyền đạo của tổ sư đại đức trong Tông môn, Giáo hạ của nhà Phật.</p>

      <p>Tôi liền mời ông lão ấy về nhà, đem mọi việc trình lên với mẹ. Tiên sinh Liễu Phàm đưa cụ già ấy về nhà gặp mẹ ông, và trình bày với mẹ. Mẹ nói: “Phải tiếp đãi ông chu đáo, rồi mời ông đoán mạng cho con thử xem”, những việc rất nhỏ ông đoán đều chính xác. Người mẹ bảo: Hãy tiếp đãi ông thật tốt, thử xem ông có đoán đúng hay không? Kết quả vừa thử, quả nhiên ông bói rất chính xác. Tôi bèn khởi lên ý niệm muốn đọc sách. Từ chỗ này, Liễu Phàm đối với những lời đạo trưởng đoán cho ông, ông đã có niềm tin, ông lại sanh khởi ý niệm muốn đọc sách.</p>

      <p>Tôi thương lượng với anh họ tên là Thẩm Xứng. Ông thương lượng với anh họ của mình, anh họ nói: Anh bảo: “Tiên sinh Uất Hải Cốc ở nhà Thẩm Hữu Phu dạy tư thục, anh đưa em đến trọ học ở đó sẽ rất thuận tiện”. Do vậy, tôi lạy tiên sinh Uất Hải Cốc làm thầy. Anh họ đưa ông đến chỗ của tiên sinh Uất Hải Cốc, Uất Hải Cốc ở đó dạy tư thục. “Khai quán chính là dạy tư thục. Người anh họ gửi Liễu Phàm đến đó học nội trú. Tiên sinh Liễu Phàm bèn lạy tiên sinh Uất Hải Cốc làm thầy.</p>

      <p>Khổng tiên sinh đoán mạng cho tôi khi thi huyện đứng thứ 14, thi phủ đứng thứ 71, thi đề học đứng thứ 9. Khổng tiên sinh xem cho Liễu Phàm, ông nói: Sang năm cậu lên huyện thi tú tài, thi huyện đứng thứ 14, thi phủ đứng thứ 71, thi đề học đứng thứ 9, “đề học” là thi tỉnh. Lúc đó thi tú tài phải thông qua ba cửa này. Sang năm đi thi, sang năm là 16 tuổi, năm 16 tuổi đi thi quả nhiên thi đậu, hơn nữa thứ hạng hoàn toàn phù hợp.</p>

      <p>Sang năm đi thi thứ tự ở ba nơi đều đúng như Khổng tiên sinh đã dự đoán. Có thể thấy tài bói toán của Khổng tiên sinh không tệ, rất cao minh. Ông không phải là hàng thuật sĩ giang hồ, mà là một chuyên gia thuật số thật sự tài giỏi, người ta thường gọi là chuyên gia đoán mạng. Ông có tài thật sự, không phải giả.</p>

      <p>Lại đoán cát hung họa phước cả đời cho tôi. Đã linh nghiệm như vậy, thì mời ông xem giùm lành dữ họa phước trong đời mình. Ông nói năm nào sẽ thi đỗ hạng mấy, năm nào sẽ được chọn làm lẫm sinh. “Lẫm” cũng là một cấp bậc trong tú tài, tương đương với học sinh được nhận học bổng hiện nay. Lẫm là nhận lương thực, nó có số người nhất định, cần phải có chỗ trống, chức vụ còn bỏ trống, thi đậu tú tài vị trí cao nhất, mới được bổ sung dần vào, đây gọi là bổ lẫm. Năm nào sẽ được chọn làm cống sinh. Cống sinh lại cao hơn lẫm sinh một bậc, nhưng vẫn là tú tài. Trong tú tài phân chia rất nhiều cấp bậc, cống sinh là cao nhất, lẫm sinh thứ nhì. Sau khi xuất cống, đến năm đó sẽ được chọn làm huyện trưởng tỉnh Tứ Xuyên. Sau khi ông làm cống sinh, đến năm đó thì cống sinh đã đủ tư cách vào học ở thái học. Cho nên lúc đó sẽ học trong thái học, thái học là trường đại học do quốc gia thành lập, Thời xưa chỉ có một trường, gọi là Quốc tử giám. Thái học đều thành lập ở thủ đô, thành lập ở kinh thành. Thời nhà Minh có hai trường Quốc tử giám, vì sao vậy? Khi Minh Thái Tổ xây dựng đất nước thì đóng đô tại Nam Kinh, vì thế Nam Kinh có Quốc tử giám. Về sau đến thời Thành Tổ, vua Thành Tổ dời đô đến Bắc Kinh, cho nên Bắc Kinh cũng có Quốc tử giám. Như vậy đất nước thời nhà Minh trở thành có hai trường đại học, thường thức này chúng ta cần phải biết. Cống sinh trở lên mới có tư cách vào học trong Quốc tử giám. Đây là đến năm nào đó sau khi xuất cống sinh, cậu sẽ được tuyển làm huyện trưởng ở Tứ Xuyên, “đại doãn” là huyện trưởng.</p>

      <p>Cậu nhận chức huyện trưởng 3 năm rưỡi thì sẽ từ chức về quê. Ông nhận chức 3 năm rưỡi thì phải cáo lão hồi hương. Vì sao vậy? Vào giờ Sửu, ngày 14 tháng 8, năm 53 tuổi. Xem một cách rất chuẩn xác. Sẽ mất tại nhà. Ông sẽ mất tại nhà, thọ mạng của ông đã hết rồi. Đáng tiếc cậu không có con trai. Trong mạng của ông không có con trai.</p>

      <p>Tôi ghi chép từng điều lại, và nhớ kỹ trong tâm. “Bị lục nghĩa là từng việc, từng việc mà Khổng tiên sinh nói ông đều ghi chép lại. Đây là thời vận trong suốt cuộc đời của ông. Từ đó về sau, hễ đến kỳ thi, thứ hạng thi trước sau đều đúng như dự đoán của Khổng tiên sinh. “Huyền” nghĩa là ông đã đoán chắc. Về sau, mỗi năm đọc sách thi cử, vị thứ đều đúng như Không tiên sinh dự đoán, không sai chút nào.</p>

      <p>Trong này có xen vào một việc là: Chỉ có một lần, Khổng tiên sinh đoán tôi khi làm lẫm sinh phải nhận đủ 91 thạch 5 đấu gạo thì mới được lên cống sinh. Tức khi ông làm lẫm sinh, ông lãnh lương thực của quốc gia, quốc gia phân phối lương thực cho ông, như ngày nay chúng ta gọi là học sinh được nhận học bổng. Ông sẽ được nhận bao nhiêu gạo? Được nhận 91 thạch 5 đấu thì ông liền xuất cống. Hay nói cách khác, ông từ lẫm sinh thăng lên cống sinh. Nhưng khi tôi nhận được hơn 70 thạch gạo thì Tôn sư họ Đồ liền phê chuẩn cho tôi làm cống sinh, nên trong tâm tôi có chút hoài nghi về sự tiên đoán của Khổng tiên sinh. Lúc Khổng tiên sinh xem cho Liễu Phàm đã nói ông nhận được 91 thạch 5 đấu thì mới có thể xuất cống, nhưng khi ông nhận được hơn 70 thạch gạo thì lúc này Đồ tôn sư, “Tôn sư” nghĩa là Đề học đương thời, quản lý giáo dục của một tỉnh, tương đương với trưởng phòng giáo dục hiện nay. Ông được phê chuẩn bổ cống sinh, bổ cống sinh nghĩa là xuất cống. Trong lòng ông thấy nghi hoặc, vì sao điều này không đúng? Khổng tiên sinh đoán sai việc này rồi. Sau đó, quả nhiên bị vị quan thay quyền họ Dương bác bỏ. Đồ tôn sư phê chuẩn bổ cống, văn kiện đưa lên nhưng bị quan thay quyền, “thự ấn là thay quyền, bị ông Dương đang thay quyền gạt bỏ, không chấp nhận Liễu Phàm bổ cống. Mãi đến năm Đinh Mão. Năm Đinh Mão là năm đầu tiên Minh Mục Tông Càn Khánh lên ngôi, lúc này tiên sinh Liễu Phàm 33 tuổi. Chư vị nghĩ thử xem, 16 tuổi ông thi đậu tú tài, mãi đến 33 tuổi mới làm cống sinh, mười mấy năm, thời gian dài như vậy. Mãi đến năm Đinh Mão. Tôn sư Ân Thu Minh thấy bài thi dự bị của tôi trong trường thi thì cảm thán rằng: “Năm bài sách luận trong bài thi này giống như năm bản tấu chương dâng lên Hoàng thượng vậy”. Lúc này đốc học, tức là tiên sinh Ân Thu Minh là vị quan quản lý giáo học. Trong lúc rảnh rỗi, ông đem những bài thi của các tú tài trước đây, lấy những bài thi bị đánh rớt ra xem lại từ đầu. Đột nhiên thấy bài thi của tiên sinh Liễu Phàm viết rất hay, cho nên liền cảm thán nói rằng: Ông viết năm bài văn này giống như năm bài tấu chương vậy. Kiến giải và chữ nghĩa của ông đều rất hay, có thể sánh với tấu chương của các vị đại thần dâng lên Hoàng đế. Làm sao có thể chôn vùi tài năng của một Nho sinh có học vấn uyên bác, thâm sâu như vậy được? “Bác là nói ông có hiểu biết sâu rộng, học thức rất phong phú. “Hợp” là nói ông hiểu về lý luận rất thấu triệt. “Yêm” tức là nghĩa văn của ông rất thấu đáo, công phu toàn diện, văn chương như thế rất khó gặp được. Ông nói không thể để người có học vấn, có đức hạnh, có năng lực như vậy bị chôn vùi đến già, suốt đời làm một tú tài nghèo được. Bèn chiếu theo công văn trình lên huyện lần trước phê chuẩn cho tôi được bổ cống. Lại một lần nữa xin cho Liễu Phàm được bổ cống, lần này đã được phê chuẩn. Lúc ấy, cộng cả số gạo đã ăn trước đây quả nhiên là 91 thạch 5 đấu. Khổng tiên sinh đoán không sai chút nào, đích thực ông làm lẫm sinh, nhận đủ 91 thạch năm đấu gạo thì mới có thể xuất cống.</p>

      <p>Từ việc đó tôi càng tin chắc rằng sự thăng trầm của một người đều đã được định sẵn trong mạng, mọi việc nhanh hay chậm đều có thời gian nhất định, nên đối với mọi việc tôi rất bình thản, không mong cầu gì nữa. Đến lúc này ông hoàn toàn khẳng định, tin rằng con người đều có vận mệnh, vận mệnh chậm hay nhanh đều có thời gian, không thể cưỡng cầu. Do đó tâm ông định lại, không có vọng niệm, thật sự làm được “không tranh với người, không cầu nơi đời”. Cho nên tôi nói, người như vậy gọi là phàm phu tiêu chuẩn. Chúng ta làm phàm phu đều không chuẩn, từ sáng đến tối suy nghĩ lung tung, vọng cầu khắp nơi nhưng không cầu được. Số mạng có thì cuối cùng sẽ có, số mạng không thì đừng có vọng cầu, làm sao mà cầu được?</p>

      <p>Sau khi làm cống sinh tôi đến Bắc Kinh. Sau khi làm cống sinh thì ông đến Yên Đô, đến Bắc Kinh, đến Bắc Kinh đương nhiên là có thể muốn xem thử trường đại học quốc gia ở đó. Tôi nghĩ ông nhất định sẽ đến hai trường đại học để tìm hiểu một chút, xem rốt cuộc nên chọn học ở đâu, điều này chúng ta có thể tưởng tượng được. Tôi ở lại kinh đô 1 năm, suốt ngày tĩnh tọa, hết thảy kinh sách đều không xem. Vì sao vậy? Bởi vì cuộc đời đều có số mạng, nghĩ gì đi nữa cũng chỉ phí công, cho nên không khởi vọng niệm nữa. Nói thực, ông bị vận mệnh trói buộc, không còn cách nào khác. Chúng ta thấy tình hình này của tiên sinh Liễu Phàm đáng được thông cảm, cũng rất đáng thương. Năm Kỷ Tỵ trở về. Kỷ Tỵ là năm sau, năm sau ông từ Bắc Kinh trở về phương Nam.</p>

      <p>Vào học trong Quốc tử giám ở Nam Kinh. Lúc này tiên sinh Liễu Phàm 35 tuổi, “Nam Ung là Quốc tử giám của Nam Kinh. Có thể thấy ông đã tìm hiểu rất rõ ràng, ông chọn trường đại học ở Nam Kinh, muốn đến trường này học. Lúc chưa vào học. Là còn chưa đi học, trước khi vào học. Trước tiên, tôi đi thăm hỏi thiền sư Vân Cốc. Lúc chưa vào học, nghe nói trên núi Thê Hà, núi Thê Hà ở Nam Kinh. Hiện nay Nam Kinh có ngôi chùa Thê Hà, ông đến núi Thê Hà thăm thiền sư Vân Cốc. Vân Cốc là hiệu của đại sư, pháp danh của ngài là Pháp Hội, cho nên ở đây gọi ngài là “Hội Thiền sư”, đây là tôn xưng ngài. Thiền sư Vân Cốc là một bậc đại đức, một vị cao tăng trong Phật giáo đương thời. Lúc này thiền sư Vân Cốc đã 69 tuổi, tiên sinh Liễu Phàm 35 tuổi, thiền sư lớn hơn Liễu Phàm 34 tuổi. Liễu Phàm đi gặp thiền sư năm 35 tuổi, đây cũng là lần gặp đầu tiên. Phần sau truyện ký chúng ta thấy được, hành nghi của thiền sư Vân Cốc, đạo phong của ngài. Ngài là bậc thật sự khai ngộ. Tuy xuất gia lúc còn rất trẻ, khi xuất gia cũng giống như hiện nay vậy, làm những việc kinh sám Phật sự. Nhưng tính chất của kinh sám Phật sự lúc đó hoàn toàn khác chúng ta hiện nay. Sau đó ngài hiểu được, xuất gia làm những chuyện này không có chút liên quan gì đến việc “liễu sanh tử, xuất tam giới”. Tôi không phải vì điều này mà xuất gia, xuất gia như vậy chẳng khác nào để duy trì cuộc sống của bản thân mà thôi, cho nên sanh tử là việc lớn; 19 tuổi ngài đi tham học, tầm sư học đạo, về sau ngài quả thực đã thành tựu. Sau khi khai ngộ, ngài ở trong chùa nhưng ẩn giấu tài năng, chuyên làm những việc nặng nhọc, ngài làm những việc nặng nhọc mà người khác không muốn làm. Về sau, có một số danh sĩ và quan viên địa phương phát hiện ra ngài, ngài là một bậc cao tăng thật sự có đạo; cho nên họ giúp đỡ ngài, hy vọng khôi phục đạo tràng ở núi Thê Hà. Ngài không hề màng đến danh văn lợi dưỡng, liền giới thiệu một pháp sư khác đến đó làm trụ trì, phương trượng. Sau khi phục hưng đạo tràng, ngài ở một nơi rất kín đáo sau núi, kiến tạo một nơi tu hành nhỏ cho mình. Chỗ này gọi là “Thiên Khai Nham”, rất ít người đến, một mình ngài ở đó tu khổ hạnh. Tôi nghĩ, tiên sinh Liễu Phàm đi thăm ngài nhất định là đến đây, đến Thiên Khai Nham, nhất định là ở đây. Bởi vì lúc này pháp sư đã 69 tuổi, pháp sư viên tịch năm 75 tuổi, cũng chính là năm 1.575, năm đó tiên sinh Liễu Phàm 41 tuổi. Cho nên, khoảng thời gian từ lúc tiên sinh Liễu Phàm gặp thiền sư cho tới khi thiền sư viên tịch cũng không lâu lắm, chỉ có 7 năm. Chúng tôi nghĩ, nhất định là ngài ở tại Thiên Khai Nham, trên núi Thê Hà. Bình thường đại sư tiếp chúng, bất luận ai đến thăm ngài, ngài thường thảy một chiếc bồ đoàn và bảo người ấy ngồi xuống đó, dạy quý vị tham: “Mặt mũi vốn sẵn có lúc cha mẹ chưa sanh ra". Không nói câu nào cả, suốt ngày không nói câu nào, đều ở trong định. Tiên sinh Liễu Phàm đến thăm ngài, chắc cũng không ngoại lệ. Quý vị xem.</p>

      <p>Ở núi Thê Hà, hai người ngồi đối diện với nhau trong một căn phòng, ba ngày ba đêm không hề hôn trầm hay ngủ nghỉ. Ngài cùng với tiên sinh Liễu Phàm, ngồi trong thiền đường, ba ngày ba đêm không nói một câu nào. Thiền sư Vân Cốc hỏi: “Một người sở dĩ không thể thành thánh nhân, chỉ là do họ bị vọng niệm trói buộc”. Đặc biệt là người tu hành, vì sao người tu hành không thể thành tựu? Vì vọng niệm quá nhiều, vọng tưởng phân biệt chấp trước quá nhiều, tâm không định lại được. Ông đã ngồi ở đây ba ngày rồi, nhưng ta không thấy ông khỏi một vọng niệm nào, như vậy là sao? Ông rất kỳ lạ! Ông đã ngồi ở đây ba ngày, không thấy ông khởi một vọng niệm nào. Không thấy ông khởi lên một vọng niệm nào, như vậy là sao? Thiền sư Vân Cốc rất hiếu kỳ! Bình thường ngài rất ít nói, nhưng đến lúc gặp tiên sinh Liễu Phàm thì ngài nói với ông rất nhiều, không đơn giản, đây cũng là nhân duyên đặc biệt. Chúng ta phải hiểu đạo lý trong đây, giữa người với người đích thực có thời tiết nhân duyên. Tiên sinh Liễu Phàm gặp thiền sư Vân Cốc mới bắt đầu thay đổi vận mệnh. Học vấn lập mệnh là do thiền sư Vân Cốc truyền thụ cho ông.</p>

      <p>Tôi trả lời rằng: “Vận mệnh của con đã được Khổng tiên sinh dự đoán hết rồi; vinh nhục, sống chết đều có định số, dù muốn vọng tưởng cũng không còn gì để vọng tưởng nữa”. Trước đây tôi đọc đến câu này, tôi nghĩ tiên sinh Liễu Phàm lúc này là một phàm phu tiêu chuẩn, cũng không tệ. Suốt đời sống qua ngày theo vận mệnh, đến 53 tuổi sẽ mất tại nhà. Cả đời không có lỗi lầm gì lớn, đời sau tuyệt đối không đọa vào ba đường ác, ông là phàm phu tiêu chuẩn. Vận mệnh của ông được Khổng tiên sinh đoán chắc rồi. “Vinh nhục sống chết, đều có định số”, câu này đồng thời cũng nói với chúng ta, chúng ta cũng không ngoại lệ. Phàm phu chỉ cần có ý niệm thì bạn chắc chắn có định số. Cũng chính là nói, chỉ cần bạn có vọng niệm thì bạn không thể không có định mệnh, nếu không có vọng niệm thì bạn đã vượt khỏi vận mệnh rồi. Tuy tiên sinh Liễu Phàm có thể cải tạo vận mệnh, nhưng ông chỉ có thể thay đổi, không thể siêu vượt.</p>

      <p>Thiền sư Vân Cốc rất tuyệt vời, vì sao không dạy ông phương pháp cao hơn một bậc, dạy ông thoát khỏi vận mệnh? Điều này cũng phải quán căn cơ để dạy, Phải xem căn cơ của tiên sinh Liễu Phàm, thiên phú của ông. Những bậc cao tăng có đạo đức đều có năng lực quán cơ, xem quý vị là thượng căn, trung căn hay là hạ căn để tùy cơ mà thuyết pháp. Vì thế tất cả chúng sanh gặp được những bậc cao nhân này, không ai mà không được lợi ích. Chúng ta xem tiên sinh Liễu Phàm, ông thuộc hàng căn tánh bậc trung, ông không phải hàng thượng căn, mà thuộc hàng trung căn. Đối với hàng trung căn, đương nhiên không thể nói thượng pháp, nói thượng pháp họ không thể tiếp nhận. Vì thế, nói pháp quan trọng nhất là khế cơ, pháp không khế cơ thì chẳng khác gì nói lời vô ích. Điều này trong kinh Phật gọi là nói lời vô ích, nói như hiện nay gọi là phí lời, thừa lời, cho nên nhất định phải khế lý khế cơ. Chúng ta phải tin chắc rằng, bất kỳ ai cũng có vận mệnh, cũng có định số, chỉ là bản thân không biết mà thôi! Bản thân không biết, hay nói cách khác, cả đời này của bạn chắc chắn là bước đi một cách mù mờ. Tiên sinh Liễu Phàm được người đoán chắc số mạng nên ông rất rõ ràng, đời này phương hướng và mục tiêu ông đi rất rõ ràng tường tận, ông chỉ đi đúng theo vận mệnh đã sắp đặt. Chúng ta rất đáng thương, chúng ta không biết vận mệnh của mình. Cho nên, trong biển lớn mênh mông này là bước đi trong vô định. Nếu như tùy thuận theo phiền não, trong lúc lần mò sẽ tạo ra rất nhiều tội nghiệp; những tội nghiệp này sẽ làm tốn giảm phước báo của chúng ta, giảm thọ mạng của chúng ta, thông thường gọi là tổn thọ, giảm thọ mạng của chúng ta. Trong xã hội ngày nay, tình hình như vậy có thể nói là ở khắp mọi nơi. Nếu người thiện căn phước đức sâu dày, tuy họ không biết vận mệnh của chính mình, nhưng tâm địa lương thiện, không có những suy nghĩ hoang đường. Giữ tâm, hành sự đều có thể giữ quy củ, không làm những chuyện trái đạo lý, không làm những điều tổn người lợi mình. Tuy không biết vận mệnh của chính mình, nhưng nhất định sẽ giúp mình tăng phước, giúp mình tăng thọ, trong vô tình mà được phước báo. Nhưng hiện nay, hoàn cảnh lớn trong xã hội của chúng ta không tốt, điều này trong lịch sử, xưa nay trong và ngoài nước chưa từng có. Trong hoàn cảnh lớn này, con người là phàm phu, không thể không bị hoàn cảnh làm ảnh hưởng. Hoàn cảnh bất thiện thì chúng ta ngày ngày sẽ bị điều bất thiện ảnh hưởng. Nói cách khác, chúng ta có rất nhiều cơ hội tạo nghiệp bất thiện, hơn nữa không hay không biết mà tạo nghiệp, điều này rất đáng sợ! Trước kia khi tôi đi cầu học, thầy Lý kể cho chúng tôi nghe một câu chuyện, không phải nói cho riêng mình tôi, mà khi lên lớp thầy kể cho học trò chúng tôi nghe. Thầy nói thời xưa, có một nơi xảy ra vụ án mạng trái với luân thường, đó là con trai giết cha. Điều này đối với thời xưa là một vấn đề rất đáng sợ, đây là một chuyện nghiêm trọng. Việc này được tâu lên Hoàng đế, đương nhiên người con này bị xử tử hình. Hoàng
    `,
  },
];