# Facebook Fanpage → cuộc trao đổi thật → demo Lumi Local

**Giới hạn user xác nhận ngày 2026-10-07:** liên hệ 3–5 chủ cửa hàng mỗi giờ, tối đa **5 chủ mới trong mọi cửa sổ 60 phút liên tục**, dùng tài khoản Facebook đã đăng nhập qua Browser UI. Đây là mức trần, không phải chỉ tiêu phải đạt. Không hỏi lại quyền dùng account trong scope này.

Cập nhật: **2026-10-07, Asia/Ho_Chi_Minh**. Trạng thái: **user-authorized Browser mode documented; Meta Terms §3.2.3 and Automated Data Collection Terms require express written Meta permission for automated Page-data access and a purpose permission; neither is recorded. Private-ledger dedupe is also pending. Chưa tìm/xác minh lead, gửi tin hoặc tạo meeting**.

Mục tiêu là tìm cửa hàng đang hoạt động, chưa tìm thấy website riêng và có một vướng mắc cụ thể trong việc trình bày dịch vụ hoặc nhận liên hệ. Agent chuẩn bị bằng chứng, offer phù hợp và cuộc hẹn với người có quyền quyết định. Đo bằng cuộc trao đổi có nhu cầu và Starter đã thanh toán; số fanpage tìm được không phải kết quả kinh doanh.

**Phản biện mạnh nhất:** Facebook/Zalo có thể đã đủ dùng. Không có website là tiêu chí sàng lọc, không phải bằng chứng về nhu cầu hay khả năng trả tiền. Một lời khen bản mẫu cũng chưa phải tín hiệu mua.

## Đọc và sử dụng

| Tài liệu | Dùng lúc nào |
|---|---|
| [Goal prompt dùng ngay](GOAL_PROMPT.md) | Khởi chạy pilot bằng `/goal`; worklog và chống trùng là cổng bắt buộc |
| [Worklog append-only](WORKLOG.md) | Đọc trước run/resume; ghi checkpoint PII-free trong quá trình làm |
| [Nghiên cứu và giới hạn bằng chứng](RESEARCH-2026-10-07.md) | Trước khi chọn cách truy cập và gửi tin |
| [Playbook tìm và chọn cửa hàng](FACEBOOK_PLAYBOOK.md) | Tìm ứng viên, kiểm tra website, chọn 5 lead đầu |
| [Tin nhắn và kịch bản meeting](MESSAGES_AND_MEETINGS.md) | Soạn offer, trả lời, hẹn giờ, demo, bàn giao |
| [Hướng dẫn Browser agent](BROWSER_AGENT.md) | Dùng Browser UI trong phiên Facebook người dùng đã đăng nhập; kiểm tra account/Page, gửi một lần, xác minh, resume |
| [Mẫu phạm vi chiến dịch](templates/CAMPAIGN.md) | Chốt tài khoản, người vận hành, lưu trữ, thời gian và quyền thực thi |
| [Prospects](templates/prospects.csv), [actions](templates/actions.csv), [meetings](templates/meetings.csv) | Sao chép vào kho vận hành riêng trước khi điền dữ liệu thật |

Đọc [COPY.md](../../COPY.md), [PRICING.md](../../PRICING.md), [STRATEGY.md](../../STRATEGY.md), [PILOT.md](../PILOT.md) và [SECURITY.md](../../SECURITY.md). Giá và phạm vi trong các tài liệu này là nguồn chuẩn; mẫu tin nhắn phải được cập nhật nếu nguồn chuẩn đổi. Các hướng dẫn cũ ở GTM/field playbook không được dùng để mở rộng lời hứa về Maps, ảnh công khai hay alerts.

**Trước mỗi run/resume:** đọc [worklog](WORKLOG.md) và pipeline/action journal trong private ledger. Ghi `in_progress` trước discovery; append checkpoint sau mỗi batch tối đa 5 ứng viên/actions và trước pause/handoff; ghi kết quả cuối. Worklog ngăn lặp thao tác nhưng không thay ledger riêng, thread readback hoặc dedupe business identity. Chỉ ghi aggregate không có PII vào Git.

## Mode vận hành Browser theo chỉ dẫn người dùng — 2026-10-07

Người dùng đã chỉ định dùng **Browser UI trong phiên Facebook họ đã đăng nhập, thay mặt Lumi Local cho pilot này**. Đây là quyền của người dùng và không cần hỏi lại trong scope: garage độc lập tại Bình Thạnh/Quận 4, cohort hiện có, tối đa 5 business cho batch đầu, một opener/business nếu mọi gate đạt. Meta Terms §3.2.3 và Automated Data Collection Terms, đọc trong Browser ngày 2026-10-07, yêu cầu express written permission cho automated access/collection; chấp nhận bộ Terms không tự cấp permission và purpose prospecting/sales phải được Meta cho phép cụ thể. Chưa có evidence permission cho workflow này. Vì vậy agent không được tự tìm/mở/đọc prospect Page hoặc gửi campaign DM. User login/authorization không thay thế. Không suy rộng scope sang ads, profile khác, group, Zalo/email hay campaign khác.

Agent không được coi Browser UI là cách giả làm người dùng: Terms §3.2.3 áp dụng cả khi account logged in. Không dùng Browser để thu thập prospect hoặc gửi campaign messages trước khi có express written Meta permission bao phủ automation và purpose prospecting/sales. Không dùng API, scraper/export, proxy, tiện ích lấy dữ liệu, CAPTCHA solver hoặc cách né cảnh báo. Chỉ sau khi permission phù hợp được xác minh mới dùng account/Page trong scope, từng trang và nội dung trung thực. Nếu Facebook báo automation/rate limit/checkpoint, dừng và ghi `policy_unverified`.

Trước mọi discovery, đọc worklog và cohort/action/suppression ledger riêng. Run hiện cần đồng thời (1) private ledger access để dedupe và (2) express written Meta permission bao phủ agent-controlled Browser method và purpose prospecting/sales; hiện cả hai đều chưa có. Acceptance Automated Data Collection Terms không tự cấp permission. Login, nút Message, thiếu website hay worklog trống không chứng minh prospect mới, recipient consent hay quyền automation. Thiếu gate nào thì không tìm/mở Page và không gửi; ghi blocker. Nếu cần đăng nhập lại/2FA, để người dùng tự hoàn tất; agent không xin mật khẩu, mã OTP hay cookie.

Tại lần kiểm tra Browser UI lúc 06:53 +07:00 ngày 2026-10-07, Facebook hiển thị một session đăng nhập. Tên hiển thị và feed không được ghi vào Git; chưa mở prospect Page nào. Tab xác minh đã đóng, session không bị sign out. Khi resume, mở lại Browser UI và xác minh đúng account/Page cho campaign trước action.

**Trạng thái run hiện tại:** user authorization cho Browser mode đã có và signed-in Facebook session đã được quan sát. Automated Data Collection Terms yêu cầu express written Meta permission cho đúng method và purpose; campaign chưa có evidence đó. Private cohort/action/suppression ledger, sender/Page selection, presenter và availability cũng chưa hoàn tất. Chưa nghiên cứu hay liên hệ prospect nào. Không dùng agent Browser cho prospect discovery cho tới khi Meta permission được xác minh và private ledger được reconcile.

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
