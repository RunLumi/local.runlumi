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
  > *Trọn gói từ Google Maps, standee QR review đặt quầy đến website di động Gọi/Zalo. Bạn an tâm làm nghề, kỹ thuật để Lumi lo.*

* **Tiếng Anh (EN):**
  > **Found on Google Maps.**  
  > **Trusted with Real Reviews.**  
  > **Booked on Your Website.**  
  >
  > *All-in-one setup from Google Maps and counter review standee to your mobile website with Call/Zalo. You run your craft, we run the tech.*

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
| **Subcopy** | Trọn gói từ Google Maps, standee QR review đặt quầy đến website di động Gọi/Zalo. Bạn an tâm làm nghề, kỹ thuật để Lumi lo. | All-in-one setup from Google Maps and counter review standee to your mobile website with Call/Zalo. You run your craft, we run the tech. |
| **Secondary CTA** | Xem bảng giá & gói | View packages & pricing |
| **Price Tag** | **1.990.000đ** /năm đầu (Gói chính) | **1,990,000 VND** /year one (Core package) |
| **Honest Note** | Minh bạch: Không bán review ảo hay hứa hẹn top 1. Lumi tạo uy tín thật từ khách ghé quán và bảo trì kỹ thuật trọn năm. | Transparent: Zero fake reviews or fantasy top rankings. We build real trust from visiting customers and handle your tech all year. |

---

### C. Thanh 3 Trụ Cột (Proof Bar)
| Trụ cột | Tiêu đề | Nội dung diễn giải |
| :--- | :--- | :--- |
| **01. Maps** | **Đón khách từ Google Maps** *(Captured via Google Maps)* | Định vị chuẩn xác, chỉ đường tận nơi. Bạn giữ trọn 100% quyền sở hữu hồ sơ. *(Precise GPS directions while keeping 100% Google account ownership.)* |
| **02. Review** | **Tích lũy Review thật tại quầy** *(Real Counter Review QR)* | Standee QR in sẵn. Mời khách hài lòng để lại đánh giá 5 sao vĩnh viễn trên Google. *(Print-ready standee. Invite happy visitors to leave permanent 5-star reviews.)* |
| **03. Website** | **Website chốt khách 1 chạm** *(1-Tap Mobile Conversion)* | Tải tức thì trên di động. Xem menu, bảng giá và bấm Gọi/Zalo đặt lịch ngay. *(Sub-second loading. Browse menus, check prices, and call or book instantly.)* |

---

### D. Giá trị Done-for-you (Đảo màu Navy Inversion)
* **Tiêu đề:** **Bạn là chuyên gia làm nghề, không phải thợ làm web.**  
  *(EN: You master your craft, not web maintenance.)*
* **Đoạn dẫn:** Không mất hàng tuần tự mày mò viết bài, chỉnh ảnh hay sửa lỗi kỹ thuật. Lumi Local chuẩn bị trọn gói để quán sẵn sàng đón khách.  
  *(EN: Stop wasting weekends fighting site builders or fixing tech errors. Lumi Local delivers your Maps presence, counter standee, and ready-to-book website.)*
* **3 bước Done-for-you:**
  1. `01. Lumi chuẩn bị`: Dựng sẵn toàn bộ nội dung, hình ảnh và mã QR từ thông tin thực tế của quán. *(Complete mobile draft, photos, and review assets crafted from your real business details.)*
  2. `02. Bạn duyệt trên điện thoại`: Trải nghiệm thử như khách thật. Yêu cầu chỉnh sửa câu chữ, hình ảnh đến khi hài lòng. *(Test the live draft on your phone just like a customer. Request edits until satisfied.)*
  3. `03. Bàn giao & Đón khách`: Kích hoạt tên miền, máy chủ, nút Gọi/Zalo và bàn giao standee QR đặt quầy đón khách. *(We connect your domain, wire direct Call/Zalo buttons, and hand over counter QR files.)*

---

### E. Bento Grid 6 Thành Phần Cốt Lõi (Included Features)
* **Tiêu đề:** **6 thành phần cốt lõi để khách tìm là ghé.** *(6 core assets to turn searchers into paying clients.)*
* **Đoạn dẫn:** Trọn gói trong một lần thanh toán. Đầy đủ mọi công cụ để khách tìm thấy, tin tưởng và bấm gọi. *(Everything included in one payment. Every link to help customers find, trust, and call you.)*

1. **Website chuẩn di động:** Tải dưới 1 giây. Khách lướt nhanh menu, bảng giá và địa chỉ ngay trên điện thoại.
2. **Nút Gọi ngay & Nhắn Zalo:** Bấm 1 chạm để gọi hotline hoặc nhắn Zalo tư vấn ngay, không để rơi rớt khách.
3. **Chỉ đường Google Maps:** Dẫn đường chuẩn xác tới quán. Bạn giữ trọn quyền quản trị Google Maps.
4. **Standee QR Google Review:** Đặt quầy thu ngân để mời khách hài lòng để lại đánh giá 5 sao thật trên Google.
5. **Hosting tốc độ cao + SSL:** Máy chủ đám mây ổn định, bảo mật an toàn, duy trì hoạt động 24/7.
6. **Cảnh báo hiện diện công khai:** Thông báo ngay khi số hotline, giờ mở cửa hay địa chỉ trên Google bị thay đổi bất thường.

---

### F. Thang Giá & Chính Sách Khấu Trừ (Offer Ladder)
* **Gói 1: Lumi Trust Kit — 399.000đ một lần**
  * *Nội dung:* Bộ tạo uy tín tại quầy: Standee QR Google Review để bàn, file in chuẩn và checklist tối ưu thông tin Google.
  * *Cam kết:* Tích lũy review thật từ khách ghé quán, không chiêu trò · Bạn giữ 100% tài khoản, không cần cấp quyền quản trị Google · **Khấu trừ đủ 399.000đ khi nâng cấp lên Starter trong 30 ngày.**
* **Gói 2: Lumi Local Starter — 1.990.000đ năm đầu**
  * *Nội dung:* Trọn gói hiện diện: Website riêng chuẩn di động, standee QR review, nút Gọi/Zalo, hosting, SSL và bảo trì cả năm.
  * *Quyền lợi:* Website riêng chuẩn di động, bảng giá & nút Gọi/Zalo 1 chạm · Standee QR để bàn dẫn thẳng vào trang đánh giá Google · Đã gồm hosting tốc độ cao, chứng chỉ SSL và bảo trì cả năm · Lumi dựng trọn vẹn nội dung & kỹ thuật, bạn duyệt là online.
* **Credit Rule Banner:** *"Đã mua Trust Kit? Nâng cấp lên Starter trong 30 ngày chỉ cần thanh toán thêm 1.591.000đ."*
* **Gia hạn từ năm 2 (Renewal):**
  * `599.000đ/năm`: Địa chỉ RunLumi (`tenquan.runlumi.app`), hosting tốc độ cao & bảo trì định kỳ.
  * `999.000đ/năm` *(Khuyên dùng)*: Tên miền riêng tiêu chuẩn (`.vn` hoặc `.com`), hosting & bảo trì trọn gói cả năm.

---

### G. 4 Nguyên Tắc Giữ Trọn Sự Tin Cậy (Honesty Principles)
1. **Giữ 100% quyền Google Maps:** Tài khoản Google luôn là của bạn. Lumi không bao giờ hỏi mật khẩu hay quyền quản trị.
2. **Nói không với review ảo:** Chỉ tạo công cụ xin review từ khách thật tại quầy. Tuyệt đối không mua bán đánh giá ảo.
3. **Không cam kết viển vông:** Không hứa hẹn lên top 1 hay doanh số ảo. Lumi tập trung làm chuẩn hiện diện và trải nghiệm khách.
4. **Rõ ràng, không phát sinh:** Chi phí trọn gói thống nhất từ đầu. Không có phụ phí mập mờ sau khi bàn giao.

---

### H. Câu Hỏi Thường Gặp (Canonical FAQ)
1. **Gói 399k Trust Kit gồm những gì?**  
   *Trả lời:* Gồm file in standee QR Review đặt quầy, mã QR dẫn thẳng trang đánh giá Google và checklist tối ưu thông tin. Khi nâng cấp lên Starter trong 30 ngày, 399.000đ được trừ thẳng (chỉ trả thêm 1.591.000đ).
2. **Lumi có cần quyền chỉnh Google Maps không?**  
   *Trả lời:* Hoàn toàn không. Tài khoản Google luôn là của bạn. Lumi chỉ dùng thông tin công khai để tạo mã QR và nhúng bản đồ chỉ đường, tuyệt đối không hỏi mật khẩu hay quyền admin.
3. **Tôi tự làm website bằng AI được mà?**  
   *Trả lời:* Được chứ. Nhưng với Lumi, bạn không phải mất hàng tuần viết bài, chỉnh ảnh, nối tên miền hay sửa lỗi máy chủ. Bạn tập trung làm nghề, kỹ thuật đã có bên em lo.
4. **Làm web này có cam kết lên top Google hay ra khách không?**  
   *Trả lời:* Thẳng thắn là không. Bất kỳ ai hứa hẹn lên top hay doanh số ở mức giá này đều nói quá. Lumi cam kết website chuẩn chỉn, tải tức thì để khi khách tìm thấy quán, họ tin tưởng và bấm gọi ngay.
5. **Chi phí duy trì từ năm thứ 2 là bao nhiêu?**  
   *Trả lời:* Rất nhẹ nhàng: 599.000đ/năm với địa chỉ RunLumi, hoặc 999.000đ/năm với tên miền riêng tiêu chuẩn (.vn/.com). Đã gồm trọn gói hosting, SSL và bảo trì kỹ thuật.
6. **Có bắt buộc phải mua Trust Kit trước không?**  
   *Trả lời:* Không bắt buộc. Nếu cần trọn bộ website và standee review ngay, bạn có thể đăng ký gói Starter (1.990.000đ) từ đầu.

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
