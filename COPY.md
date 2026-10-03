# Lumi Local Customer Copy Contract

Last updated: **2026-10-03**  
Canonical implementation: [`src/components/Landing.astro`](file:///Volumes/SSD/local.runlumi/src/components/Landing.astro)  
Related specifications: [`AGENTS.md`](file:///Volumes/SSD/local.runlumi/AGENTS.md), [`DESIGN.md`](file:///Volumes/SSD/local.runlumi/DESIGN.md), [`POSITIONING.md`](file:///Volumes/SSD/local.runlumi/POSITIONING.md), [`PRICING.md`](file:///Volumes/SSD/local.runlumi/PRICING.md)

---

## 1. Product Identity & Strategy

* **Product Name:** **Lumi Local** (Never call it "Lumi Website" or "Lumi Web").
* **Core Sales Proposition:** **Setup & vận hành trọn gói phần hiện diện online cho cơ sở kinh doanh địa phương.**
* **What we DO NOT sell:** "Dịch vụ làm web bằng AI", "Nền tảng kéo thả website", hay "Chuyển đổi số 10x". Việc ứng dụng AI vào sinh code chỉ là lợi thế chi phí nội bộ của Lumi, không phải là giá trị mà chủ cơ sở trả tiền để mua.
* **What customers pay for:** Sự thảnh thơi và chuyên nghiệp. Chủ quán là chuyên gia làm nghề (cắt tóc, spa, sửa xe, nấu phở...), họ trả tiền để Lumi lo trọn vẹn từ Google Maps, Standee QR đặt quầy đến Website di động chốt đơn mà không phải tự học công nghệ hay mất cuối tuần sửa lỗi kỹ thuật.

---

## 2. Bộ 3 Hiện Diện Cốt Lõi (The 3-Pillar Local Presence Trinity)

Hành vi tìm kiếm dịch vụ địa phương của khách hàng luôn đi qua vòng tròn khép kín 3 bước:

```
[1. Google Maps]             →  [2. Standee QR Review]         →  [3. Website Di Động]
Khách tìm kiếm dịch vụ           Khách tin tưởng nhờ đánh giá       Khách xem giá, giờ mở cửa
gần đây ("gara gần đây",         5 sao thực tế từ khách ghé quán    và bấm Gọi / Zalo 1 chạm
"spa gội đầu quận 1")            (tài sản uy tín tích lũy)          để chốt lịch hẹn
```

### Thông điệp chủ đạo (Core Headline):

* **Tiếng Việt (VI):**
  > **Được tìm thấy trên Google.**  
  > **Được tin tưởng nhờ Review.**  
  > **Chốt khách ngay trên Website.**  
  >
  > *Lumi Local làm trọn gói từ Google Maps, standee QR review đặt quầy đến website di động kết nối Gọi/Zalo. Bạn tập trung làm nghề, kỹ thuật để bên em.*

* **Tiếng Anh (EN):**
  > **Found on Google Maps.**  
  > **Trusted with Real Reviews.**  
  > **Booked on Your Website.**  
  >
  > *Lumi Local bundles your Google Maps presence, counter review standee, and high-converting mobile website with direct Call/Zalo. You run your craft, we run the tech.*

---

## 3. Bản Hợp Đồng Copy Chuẩn (Bilingual Copy Contract)

Mọi thay đổi trên giao diện web (`src/components/Landing.astro`) phải tuân theo nguyên bản copy dưới đây:

### A. Navigation & Header
| Thành phần | Tiếng Việt (VI) | Tiếng Anh (EN) | Ghi chú |
| :--- | :--- | :--- | :--- |
| **Nav Links** | Gói dịch vụ · Cách hoạt động · Chi phí duy trì · Câu hỏi | Packages · How it works · Renewal · FAQ | Trỏ vào `#goi-dich-vu`, `#cach-hoat-dong`, `#gia-duy-tri`, `#cau-hoi` |
| **Primary CTA** | **Xem thử Lumi Local cho business của tôi** | **Show me Lumi Local for my business** | CTA duy nhất xuyên suốt site, dẫn về form |
| **Mobile Header CTA** | **Xem thử** | **See demo** | Co gọn cho màn hình <420px |

---

### B. Hero Section
| Thành phần | Tiếng Việt (VI) | Tiếng Anh (EN) |
| :--- | :--- | :--- |
| **Eyebrow** | `LUMI LOCAL · BỘ 3 HIỆN DIỆN CHO KINH DOANH ĐỊA PHƯƠNG` | `LUMI LOCAL · THE LOCAL BUSINESS PRESENCE TRINITY` |
| **H1 Title** | 3 dòng: *Được tìm thấy trên Google.* / *Được tin tưởng nhờ Review.* / *Chốt khách ngay trên Website.* | 3 lines: *Found on Google Maps.* / *Trusted with Real Reviews.* / *Booked on Your Website.* |
| **Subcopy** | Lumi Local làm trọn gói từ Google Maps, standee QR review đặt quầy đến website di động kết nối Gọi/Zalo. Bạn tập trung làm nghề, kỹ thuật để bên em. | Lumi Local bundles your Google Maps presence, counter review standee, and high-converting mobile website with direct Call/Zalo. You run your craft, we run the tech. |
| **Secondary CTA** | Xem bảng giá & gói | View packages & pricing |
| **Price Tag** | **1.990.000đ** /năm đầu (Gói chính) | **1,990,000 VND** /year one (Core package) |
| **Honest Note** | Minh bạch: Lumi không bán review ảo hay hứa hẹn thứ hạng top 1. Chúng tôi tạo uy tín thật từ khách ghé quán và vận hành kỹ thuật trọn năm. | Transparent: Zero bought reviews or fantasy top-ranking claims. We build compound trust from real visitors and maintain your technical stack all year. |

---

### C. Thanh 3 Trụ Cột (Proof Bar)
| Trụ cột | Tiêu đề | Nội dung diễn giải |
| :--- | :--- | :--- |
| **01. Maps** | **Hứng khách từ Google Maps** *(Captured via Google Maps)* | Khách tìm là thấy. Định vị chuẩn xác, dẫn đường tận nơi mà bạn giữ trọn 100% quyền hồ sơ. *(Right where local buyers search. Clear directions while keeping 100% account ownership.)* |
| **02. Review** | **Tích lũy Review thật tại quầy** *(Real Counter Review QR)* | Standee mica in sẵn QR. Mời khách hài lòng đánh giá 5 sao, tích lũy uy tín vĩnh viễn trên Google. *(Print-ready acrylic standee. Invite happy visitors to leave permanent 5-star Google reviews.)* |
| **03. Website** | **Website chốt khách trong 3 giây** *(Website Closes the Deal)* | Tải tức thì trên di động. Bảng giá minh bạch, bấm 1 chạm Gọi hotline hoặc nhắn Zalo đặt lịch. *(Sub-second mobile speed. Transparent menus, one-tap calling, and instant Zalo bookings.)* |

---

### D. Giá trị Done-for-you (Đảo màu Navy Inversion)
* **Tiêu đề:** **Bạn là chuyên gia làm nghề, không phải thợ làm web.**  
  *(EN: You master your craft, not web maintenance.)*
* **Đoạn dẫn:** Đừng mất hàng tuần loay hoay viết chữ, chỉnh ảnh, nối tên miền hay sửa lỗi máy chủ. Giá trị của Lumi Local là làm trọn vẹn từ Google Maps, Standee QR đến Website sẵn sàng đón khách.  
  *(EN: Stop wasting weekends fighting builders, writing copy, or debugging DNS. Lumi Local handles the entire operational legwork from Maps presence to your counter standee and ready-to-book website.)*
* **3 bước Done-for-you:**
  1. `01. Lumi chuẩn bị`: Dựng trọn nội dung, hình ảnh và mã review từ thông tin thật của cơ sở. Bạn không phải ngồi trước trang trắng.
  2. `02. Bạn duyệt trên điện thoại`: Lướt thử web và xem standee như một người khách thực tế. Yêu cầu điều chỉnh câu chữ, hình ảnh đến khi ưng ý.
  3. `03. Bàn giao & Đón khách`: Kích hoạt tên miền, máy chủ, nút Gọi/Zalo và gửi file standee QR in chuẩn để bạn đặt ngay quầy thu ngân.

---

### E. Bento Grid 6 Thành Phần Cốt Lõi (Included Features)
* **Tiêu đề:** **6 thành phần cốt lõi để khách tìm là ghé.** *(6 core assets to turn searchers into paying clients.)*
* **Đoạn dẫn:** Không xé lẻ tính thêm tiền. Mọi mắt xích để khách tìm thấy, tin tưởng và liên hệ đều nằm sẵn trong một gói.

1. **Website chuẩn di động:** Tải dưới 1 giây. Bố cục rõ ràng để khách lướt nhanh menu, bảng giá và địa chỉ ngay trên điện thoại.
2. **Nút Gọi ngay & Nhắn Zalo:** Khách xem dịch vụ là bấm gọi hotline hoặc chat tư vấn ngay sau 1 chạm, không rớt khách.
3. **Chỉ đường Google Maps:** Dẫn đường chuẩn xác vào quán mà bạn không bao giờ phải giao mật khẩu hay quyền admin.
4. **Standee QR Google Review:** File in ấn đặt quầy thu ngân, mời khách thật đánh giá 5 sao, tích lũy uy tín thương hiệu vĩnh viễn.
5. **Hosting tốc độ cao + SSL:** Máy chủ ổn định, khóa bảo mật xanh, tự động vận hành không để website gián đoạn.
6. **Cảnh báo hiện diện công khai:** Tự động theo dõi và báo ngay khi số hotline, giờ mở cửa hay địa chỉ trên Google có thay đổi bất thường.

---

### F. Thang Giá & Chính Sách Khấu Trừ (Offer Ladder)
* **Gói 1: Lumi Trust Kit — 399.000đ một lần**
  * *Nội dung:* Bộ tạo uy tín tại quầy: Standee QR Google Review để bàn, file in chuẩn xưởng và checklist chuẩn hóa dữ liệu Google.
  * *Cam kết:* Tích lũy review thật từ khách ghé quán, không mồi chài · Không cần mật khẩu hay quyền chỉnh sửa Google Maps · **Khấu trừ trọn vẹn 100% (399k) khi nâng cấp Starter trong 30 ngày.**
* **Gói 2: Lumi Local Starter — 1.990.000đ năm đầu**
  * *Nội dung:* Giải pháp trọn gói: Website riêng chuẩn di động, standee QR Google Review đặt quầy, nút Gọi/Zalo/Maps, hosting + SSL và bảo trì suốt năm đầu.
  * *Quyền lợi:* Website chuẩn điện thoại, bảng giá & nút Gọi/Zalo 1 chạm · Standee mica in sẵn QR dẫn thẳng trang đánh giá · Bao gồm trọn gói hosting tốc độ cao, chứng chỉ SSL và bảo trì cả năm · Lumi chuẩn bị mọi thứ, bạn duyệt là online.
* **Credit Rule Banner:** *"Đã mua Trust Kit? Nâng cấp lên Starter trong 30 ngày chỉ cần thanh toán thêm 1.591.000đ."*
* **Gia hạn từ năm 2 (Renewal):**
  * `599.000đ/năm`: Dùng địa chỉ RunLumi (`tenquan.runlumi.app`) + hosting tốc độ cao + bảo trì định kỳ.
  * `999.000đ/năm` *(Khuyên dùng)*: Tên miền riêng tiêu chuẩn (`.vn` hoặc `.com`) + hosting + bảo trì trọn gói cả năm.

---

### G. 4 Nguyên Tắc Giữ Trọn Sự Tin Cậy (Honesty Principles)
1. **Giữ 100% quyền Google Maps:** Tài khoản Google là của bạn. Lumi không bao giờ hỏi mật khẩu hay quyền chỉnh sửa profile.
2. **Nói không với review ảo:** Chỉ làm công cụ xin đánh giá từ khách thật ghé quán. Tuyệt đối không bán hay mua review gian dối.
3. **Không hứa hẹn trên trời:** Không cam kết lên top 1 Google hay doanh số ảo. Chúng tôi làm chuẩn hiện diện và đường liên hệ.
4. **Phạm vi rõ, không phát sinh:** Mọi chi phí được thống nhất từ đầu. Tuyệt đối không có phí mập mờ sau khi bàn giao.

---

### H. Câu Hỏi Thường Gặp (Canonical FAQ)
1. **Gói 399k Trust Kit gồm những gì?**  
   *Trả lời:* Bạn nhận được file in standee QR Google Review đặt quầy, mã QR dẫn thẳng trang đánh giá, checklist chuẩn hóa dữ liệu Google và template mời khách review. Nếu nâng cấp lên Starter trong 30 ngày, toàn bộ 399.000đ được trừ thẳng vào chi phí (chỉ cần trả thêm 1.591.000đ).
2. **Lumi có cần quyền chỉnh Google Maps không?**  
   *Trả lời:* Hoàn toàn không. Tài khoản Google luôn là của bạn. Lumi chỉ dùng thông tin công khai của cơ sở để tạo mã QR và nhúng bản đồ chỉ đường, không bao giờ hỏi mật khẩu hay quyền admin.
3. **Tôi tự làm website bằng AI được mà?**  
   *Trả lời:* Chắc chắn được. Nhưng bạn trả tiền cho Lumi để không mất thời gian tự viết nội dung, chỉnh ảnh, nối tên miền, in standee QR và sửa lỗi kỹ thuật. Bạn an tâm làm nghề, kỹ thuật có bên em trực.
4. **Làm web này có cam kết lên top Google hay ra khách không?**  
   *Trả lời:* Thẳng thắn là không. Bất kỳ ai cam kết doanh thu hay thứ hạng Google cho mức giá này đều là nói quá. Lumi cam kết một trang web chuẩn chỉn, tải nhanh để khi khách tìm thấy bạn, họ tin tưởng và bấm gọi ngay.
5. **Chi phí duy trì từ năm thứ 2 là bao nhiêu?**  
   *Trả lời:* Rất nhẹ nhàng: 599.000đ/năm nếu dùng địa chỉ RunLumi, hoặc 999.000đ/năm nếu dùng tên miền riêng tiêu chuẩn (.vn/.com). Đã gồm toàn bộ hosting, SSL bảo mật và bảo trì kỹ thuật.
6. **Có bắt buộc phải mua Trust Kit trước không?**  
   *Trả lời:* Không bắt buộc. Nếu bạn cần ngay website và mã review để bàn, bạn có thể đăng ký gói Lumi Local Starter (1.990.000đ) trọn gói từ đầu.

---

### I. Form Tư Vấn & Phản Hồi (Enquiry Form Microcopy)
* **Tiêu đề:** **Gửi thông tin để nhận bản xem thử.** *(Send your info to receive a live preview.)*
* **Đoạn dẫn:** Chỉ cần tên cơ sở và số điện thoại/Zalo. Lumi sẽ dựng sẵn bản xem thử trên điện thoại để bạn trải nghiệm trước khi quyết định.
* **Trường bắt buộc:** Tên cơ sở kinh doanh, Tên của bạn, Số điện thoại / Zalo.
* **Checkbox đồng ý:** "Tôi đồng ý để Lumi liên hệ tư vấn về yêu cầu này."
* **Lưu ý bảo mật:** "Chưa thu phí hay tạo tài khoản. Không gửi thông tin thẻ hay tài liệu mật."
* **Thông báo thành công:** "Lumi đã nhận thông tin! Bên em sẽ liên hệ qua Zalo/Điện thoại trong vòng 24h để gửi bản xem thử."
* **Thông báo lỗi:** "Chưa gửi được yêu cầu. Vui lòng bấm thử lại hoặc nhắn tin trực tiếp cho Lumi."
* **Nút bấm:** Giữ nguyên nhãn "Xem thử Lumi Local cho business của tôi", trạng thái loading hiện "Đang gửi…" / "Sending…" mà không làm mất mũi tên SVG.

---

## 4. Tone of Voice & Quy Tắc Hành Văn

1. **Viết cho chủ quán bận rộn, không viết cho dân công nghệ hay startup:**
   * Dùng tiếng Việt đời thường, khiêm tốn, đanh gọn:
     * Dùng: *"Bên em làm trọn phần setup."*
     * Tránh: *"Giải pháp chuyển đổi số toàn diện hỗ trợ tăng trưởng 10x."*
2. **Loại bỏ hoàn toàn các từ sáo rỗng (Buzzword Ban):**
   * Tuyệt đối không dùng: "Cách mạng", "đột phá", "AI ma thuật", "mở khóa tiềm năng", "tự động hóa đỉnh cao".
3. **Quy tắc mời đánh giá Google Review:**
   * Không bao giờ hối lộ, tặng quà hay giảm giá để đổi lấy đánh giá Google.
   * Không bao giờ ép buộc hay xin cụ thể số sao (5 sao).
   * Câu copy chuẩn in trên Standee đặt quầy:  
     > **Bạn đã sử dụng dịch vụ của chúng tôi? Quét QR để chia sẻ trải nghiệm trên Google. Mọi phản hồi đều được trân trọng.**
