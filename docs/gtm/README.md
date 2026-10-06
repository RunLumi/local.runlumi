# Facebook Fanpage → cuộc trao đổi thật → demo Lumi Local

Cập nhật: **2026-10-07, Asia/Ho_Chi_Minh**. Trạng thái: **playbook sẵn để dùng; chưa chạy chiến dịch, chưa tìm/xác minh lead thật, chưa gửi tin hoặc tạo meeting**.

Mục tiêu là tìm cửa hàng đang hoạt động, chưa tìm thấy website riêng và có một vướng mắc cụ thể trong việc trình bày dịch vụ hoặc nhận liên hệ. Agent chuẩn bị bằng chứng, offer phù hợp và cuộc hẹn với người có quyền quyết định. Đo bằng cuộc trao đổi có nhu cầu và Starter đã thanh toán; số fanpage tìm được không phải kết quả kinh doanh.

**Phản biện mạnh nhất:** Facebook/Zalo có thể đã đủ dùng. Không có website là tiêu chí sàng lọc, không phải bằng chứng về nhu cầu hay khả năng trả tiền. Một lời khen bản mẫu cũng chưa phải tín hiệu mua.

## Đọc và sử dụng

| Tài liệu | Dùng lúc nào |
|---|---|
| [Nghiên cứu và giới hạn bằng chứng](RESEARCH-2026-10-07.md) | Trước khi chọn cách truy cập và gửi tin |
| [Playbook tìm và chọn cửa hàng](FACEBOOK_PLAYBOOK.md) | Tìm ứng viên, kiểm tra website, chọn 5 lead đầu |
| [Tin nhắn và kịch bản meeting](MESSAGES_AND_MEETINGS.md) | Soạn offer, trả lời, hẹn giờ, demo, bàn giao |
| [Hướng dẫn browser agent](BROWSER_AGENT.md) | Giao việc cho agent; kiểm tra quyền, gửi một lần, xác minh, resume |
| [Mẫu phạm vi chiến dịch](templates/CAMPAIGN.md) | Chốt tài khoản, người vận hành, lưu trữ, thời gian và quyền thực thi |
| [Prospects](templates/prospects.csv), [actions](templates/actions.csv), [meetings](templates/meetings.csv) | Sao chép vào kho vận hành riêng trước khi điền dữ liệu thật |

Đọc [COPY.md](../../COPY.md), [PRICING.md](../../PRICING.md), [STRATEGY.md](../../STRATEGY.md), [PILOT.md](../PILOT.md) và [SECURITY.md](../../SECURITY.md). Giá và phạm vi trong các tài liệu này là nguồn chuẩn; mẫu tin nhắn phải được cập nhật nếu nguồn chuẩn đổi. Các hướng dẫn cũ ở GTM/field playbook không được dùng để mở rộng lời hứa về Maps, ảnh công khai hay alerts.

## Phạm vi tự làm của agent

**Mặc định `research_and_draft`:** agent nghiên cứu nguồn web được phép, xử lý thông tin do người vận hành cung cấp hợp lệ, đánh giá lead, soạn tin, chuẩn bị demo và đề xuất lịch. Khi chưa có căn cứ cho phép tự động truy cập Meta, người vận hành tự xem fanpage và inbox, rồi cung cấp ghi chú tối thiểu cho agent. Agent không tự mở/quét Facebook để xây danh sách và không tự gửi tin.

**`human_operated_facebook`:** người vận hành dùng Facebook UI, kiểm tra nguồn và gửi từng tin đã được duyệt trong phạm vi chiến dịch. Không coi một tin mở lời là mặc nhiên hợp lệ: kiểm tra chính sách và cơ sở liên hệ tại thời điểm gửi. Ưu tiên cửa hàng đã mời đề xuất nhà cung cấp, được giới thiệu có đồng ý, hoặc chủ cửa hàng chủ động hỏi Lumi. Không giả làm khách mua dịch vụ để vào inbox.

**`authorized_browser_execution`:** agent thao tác Facebook chỉ khi có cả phạm vi người dùng đã cấp và bằng chứng Meta cho phép đúng phương thức/loại dữ liệu/hành động đó; chính sách hiện hành và cơ sở liên hệ cũng phải được kiểm tra. Quyền API không tự cấp quyền browser automation. Có tài khoản đăng nhập, nút Message, goal trong repo hay mẫu CAMPAIGN đã điền không tự tạo quyền. Nếu quyền đã được cấp rõ và còn hiệu lực, không hỏi lại cho từng tin trong phạm vi đó.

Yêu cầu hiện tại là nghiên cứu và lưu hướng dẫn; không phải lệnh chạy một batch liên hệ thực tế. Không có tài khoản gửi, người trình bày, lịch rảnh hoặc kho lead riêng đã được xác nhận.

## Pilot và tiêu chí quyết định

Giữ wedge hiện tại: **garage độc lập tại Bình Thạnh và Quận 4, 30 business duy nhất tổng cộng** theo STRATEGY.md. Đây là nhãn khu vực vận hành, không khẳng định ranh giới hành chính hiện tại. Nếu chuyển sang ngành khác, ghi quyết định trước khi bắt đầu; không trộn salon, garage, spa và nha khoa để đủ chỉ tiêu. Facebook là một nhánh tiếp cận của pilot, không tạo thêm 30 business hoặc đếm lại cửa hàng đã tiếp cận ngoài đời.

Các mốc dưới đây là **giả thuyết vận hành**, không phải benchmark Facebook hay giới hạn an toàn của Meta:

1. Ngày 1–2: đặt trần **120 phút nghiên cứu**, kiểm tra tối đa 20 ứng viên, chọn tối đa 5 lead có căn cứ liên hệ tốt nhất. Không trả tiền cho danh sách; ngân sách tiền mặc định 0đ. Chuẩn bị 1 mẫu demo ngành dùng lại được và tin cá nhân hóa. Người dùng chọn khung làm việc để không lấn giờ gia đình/nghỉ.
2. Ngày 3–4: người vận hành liên hệ tối đa 5 business đầu nếu các cổng thực thi đã đạt. Mỗi business chỉ một tin mở lời; không follow-up khi im lặng. Chờ ít nhất 3 ngày làm việc trước khi đánh giá phản hồi của batch, không tăng số tin vì chưa có reply.
3. Ngày 5–7: trả lời trong phạm vi đã đồng ý, hẹn và trình bày demo nếu có phản hồi. Chỉ tiếp tục sang batch 5 tiếp theo khi có **ít nhất 2 phản hồi thực chất và 1 cuộc hẹn được hai bên xác nhận** từ batch đầu, không có phản đối spam/hạn chế tài khoản. Đo meeting đã diễn ra riêng với meeting đã hẹn. Thiếu tín hiệu: xem lại pain, đối tượng và cách mở lời trước khi gửi thêm.

Nếu không có 5 lead có căn cứ liên hệ trong 120 phút, kết luận nhánh tìm lạnh này chưa khả thi trong giới hạn hiện tại; thử giới thiệu/tiếp xúc trực tiếp trong phạm vi riêng đã được cấp. Không đổi tài khoản hay dùng comment công khai để ép chủ cửa hàng chú ý.

Giữ cổng thương mại của [STRATEGY.md](../../STRATEGY.md): ≥6/30 business có thanh toán, ≥2 Starter đã thanh toán, trung bình thao tác con người cho preview ≤5 phút và không cần quản lý Google thủ công mới đủ để thử cohort kế tiếp. Zero Starter sau 20 cuộc trao đổi với chủ đủ chuẩn kích hoạt review. Chờ đủ cửa sổ nâng cấp 30 ngày; 7 ngày chỉ là mốc học về kênh. Không tự tăng headcount hay đổi giá.

## Đo đúng mẫu số và chi phí

Báo cáo số tuyệt đối và khoảng quan sát: ứng viên đã kiểm tra → business đủ chuẩn → business có cơ sở liên hệ → tin gửi được xác minh → phản hồi thực chất → người quyết định đã trao đổi → meeting xác nhận → meeting diễn ra → offer có phạm vi → Trust-only / Starter trực tiếp / upgrade. Tin bot tự động, seen và lời cảm ơn không tính là phản hồi thực chất. Doanh thu chỉ ghi khi có bằng chứng thanh toán; không lưu chứng từ có dữ liệu riêng tư vào Git.

Chi phí nhánh Facebook gồm thời gian nghiên cứu, soạn tin, trả lời, preview thất bại và meeting kể cả no-show, theo đơn giá giờ được khai báo; cộng chi phí thật phát sinh. Chưa có Starter thì CAC không xác định, không ghi 0đ. Contribution và cổng mở rộng theo STRATEGY.md; chưa có dữ liệu hiện tại để khẳng định kênh có lãi.

Đánh đổi: chọn kỹ giảm số lượng và tăng thời gian/lead; đổi lại giảm tiếp cận sai người. Rủi ro bậc hai là reputation, tài khoản bị hạn chế và unpaid custom work. Dừng ngay khi có opt-out, cảnh báo nền tảng, quyền không rõ hoặc bằng chứng sai; quy trình phục hồi nằm trong BROWSER_AGENT.md.

## Kiểm tra tài liệu — 2026-10-07

Đã kiểm tra liên kết nội bộ, whitespace và ba CSV chỉ chứa header. Trên clone độc lập từ `main` hiện hành, Node **24.19.0**: `npm run build` thành công, `npm test` đạt **48/48**, EmDash seed validation và `npm run build:blog` đều thành công. Đây là bằng chứng cục bộ cho repo/tài liệu. Chưa có dry-run browser Facebook, quyền platform được xác minh, tin gửi thật, meeting thật hoặc production deployment trong nhiệm vụ này. Giao diện website không được sửa bởi bộ tài liệu này.
