# Playbook: tìm cửa hàng phù hợp và kiểm tra website

Đọc [phạm vi chiến dịch](templates/CAMPAIGN.md) và [browser runbook](BROWSER_AGENT.md) trước khi truy cập. Mode theo user instruction ngày 2026-10-07 là Browser UI trong Facebook session người dùng đã đăng nhập. Dùng private ledger đã được chọn; Git chỉ chứa mẫu trống và báo cáo ẩn danh.

## 1. Chốt một nhóm, không tìm mọi ngành

Mặc định theo [STRATEGY.md](../../STRATEGY.md): garage độc lập, Bình Thạnh và Quận 4. Chọn một cụm trước; kiểm tra với danh sách pilot hiện có để không đếm/gửi lại. Cửa hàng có website tốt không thuộc campaign này; website lỗi hoặc yếu được ghi riêng, không gán là chưa có website.

Một lead phù hợp phải có đủ: đúng ngành/khu vực, dấu hiệu đang hoạt động, danh tính cửa hàng khớp qua nguồn, chưa tìm thấy website riêng sau các bước dưới, có một khoảng trống thông tin có thể mô tả đúng và có kênh business phù hợp. Đủ chuẩn sản phẩm chưa có nghĩa được phép liên hệ.

Loại: chuỗi có quyết định tập trung, page agency/reseller, đóng cửa, page trùng, không khớp địa điểm, nội dung không thể xác minh, website hiện có phù hợp, nhu cầu đòi ads/booking/custom app hay quản lý Maps. Không đánh giá dựa trên đời tư, mức giàu, ngoại hình hoặc số follower của chủ.

## 2. Tìm ứng viên bằng Browser UI — chỉ khi có prior Meta permission

Meta Terms §3.2.3 yêu cầu prior permission của Meta trước khi agent-controlled Browser truy cập/thu thập dữ liệu từ Products. Permission này chưa có evidence trong campaign hiện tại; vì vậy không chạy tìm kiếm dưới đây trong run hiện tại. Nếu permission chính xác được cấp về sau và private cohort ledger đã dedupe, dùng UI search tuần tự, mở từng Page và ghi bằng chứng vào private ledger. Browser do agent điều khiển vẫn là automation; không giả là người thật hoặc mô phỏng hành vi.

Ví dụ truy vấn cho UI search; đây là mẫu, không phải danh sách kết quả đã kiểm tra:

```text
site:facebook.com "garage" "Bình Thạnh"
site:facebook.com "gara ô tô" "Bình Thạnh"
site:facebook.com "sửa chữa ô tô" "Quận 4"
site:facebook.com "chăm sóc xe" "Quận 4"
```

Chỉ mở từng kết quả cần đánh giá, không thu thập hàng loạt, xuất dữ liệu hay lặp qua follower/commenter. Kết quả có thể là bài cá nhân hoặc nhầm chi nhánh. Lưu query, Page URL và bằng chứng tối thiểu trong private ledger. Không dùng API, script, extension, Graph endpoint hay Google Maps export/scrape để tạo marketing database.

Trước khi tra cứu trong campaign được phép, cần evidence prior Meta permission §3.2.3, xác minh đúng Browser tab/account/Page và đọc toàn bộ cohort/suppression/action ledger. User authorization chọn Browser mode không thay permission này. Nếu thiếu permission hay ledger, không mở prospect Pages. Không mở profile chủ, follower list, nhóm kín hoặc bình luận khách để lấy contact.

## 3. Kiểm tra fanpage và danh tính

Quan sát page name/handle, địa chỉ/khu vực, ngành, About/Intro, contact/website, CTA, bài ghim và bài của page trong 30 ngày gần nhất. Ghi ngày của dấu hiệu hoạt động thực tế; nếu 30 ngày không thấy, xem tối đa 90 ngày và đánh dấu `activity_uncertain`, không giả định đã đóng. Giới hạn đọc tối đa 5 bài phù hợp trong timebox; không lưu bình luận/danh tính khách.

Nút CTA có thể là Message/Call/Book/Visit website tùy page và người xem. Ghi đúng cái thấy; không bấm Book để tạo booking giả. Người vận hành kiểm tra nơi nút website dẫn tới nếu được phép. Nếu một link rút gọn dẫn ra miền lạ/yêu cầu download/login, không theo mù quáng; chuyển `needs_review`.

So khớp ít nhất hai đặc điểm như tên + khu vực/dịch vụ/địa chỉ. Số điện thoại business nếu thật sự cần cho việc chống trùng chỉ ở kho riêng; không dùng để suy ra profile cá nhân hoặc nhắn Zalo khi chưa có đồng ý kênh. Nếu page chính/chi nhánh chưa rõ, chưa soạn câu “bên mình chưa có website”.

## 4. Kiểm tra “chưa có website” trong 3–5 phút

1. Xem website field trong About/Intro và đích CTA được phép xem; không có field là một quan sát, chưa phải kết luận.
2. Xem bio, bài ghim và tối đa 5 bài phù hợp: có domain/linktree/website/booking link không?
3. Tìm tên chính xác và khu vực trên web, có và không có dấu. Nếu có tên giao dịch khác trên page, tìm thêm tên đó.

```text
"[tên cửa hàng chính xác]" "[khu vực]" -site:facebook.com
"[tên cửa hàng không dấu]" website
"[tên giao dịch khác đã thấy]" "[khu vực]"
```

4. Kiểm tra domain ứng viên: có đúng tên/dịch vụ/địa điểm/contact business không? Không suy ra là website của họ chỉ vì tên giống. Không điền form hay gọi số để kiểm tra.
5. Ghi trạng thái và nguồn đã kiểm tra. Trước gửi, dữ liệu cũ quá 7 ngày phải được kiểm tra lại; trước meeting hỏi chủ xác nhận. Đây là quy tắc nội bộ về độ mới.

| `website_status` | Nghĩa và hành động |
|---|---|
| `not_found_after_checks` | Chưa tìm thấy sau các bước; có thể soạn câu quan sát có giới hạn |
| `owner_confirmed_none` | Chủ xác nhận chưa có; ghi ngày và evidence riêng |
| `existing_suitable` | Có website phù hợp; loại khỏi campaign này |
| `existing_needs_review` | Có site nhưng nghi vấn; chuyển queue khác, không chào như chưa có |
| `link_hub_only` | Link hub/social/marketplace; hỏi xem có website riêng khác không |
| `unknown` | Bị chặn/không khớp/thiếu bước; chưa đủ chuẩn, không gửi |

“Không tìm thấy” không chứng minh “không tồn tại”. Câu đúng: “Em chưa thấy đường dẫn website riêng trong phần giới thiệu của page”; không nói “bên mình không có website” khi chưa được chủ xác nhận.

## 5. Chấm ưu tiên bằng bằng chứng

Điểm là **heuristic nội bộ**, không dự đoán conversion. Mỗi mục 0–2; không có bằng chứng thì 0, không đoán để đủ điểm.

| Mục | 2 điểm | 1 điểm |
|---|---|---|
| Hoạt động | Bài của page về dịch vụ/công việc trong 30 ngày | Dấu hiệu trong 31–90 ngày |
| Danh tính/địa điểm | Khớp ít nhất 2 đặc điểm, đúng khu vực | Khớp chưa chắc, cần kiểm tra |
| Khoảng trống website | `not_found_after_checks` hoặc `owner_confirmed_none` | Chỉ có link hub, cần hỏi thêm |
| Pain thông tin | Chủ xác nhận tình huống thật hoặc page chủ động hỏi giải pháp | Có quan sát cụ thể: thông tin dịch vụ rải rác/chưa thấy danh mục gọn |
| Cơ sở cuộc trao đổi | Chủ mời đề xuất phù hợp/inbound/giới thiệu có đồng ý | Chỉ thấy kênh business; chưa có đồng ý nhận offer |

`score ≥8` chỉ đưa vào hàng ưu tiên. Gửi còn cần `contact_basis` và các cổng ở BROWSER_AGENT.md. Page có Message button hoặc nhiều likes không đủ cơ sở. Giữ lý do loại lead để thấy selection bias; không bỏ lead im lặng khỏi mẫu số sau khi đã gửi.

## 6. Chuẩn bị gói tiếp cận

Mỗi lead có một note ngắn: business ID; nguồn/ngày; câu quan sát chính xác; website status; pain giả thuyết; cơ sở liên hệ; tin dự thảo; bước tiếp theo. Nếu không thể viết một quan sát thật, chưa gửi.

Trước khi chủ đồng ý, dùng demo ngành chung với nội dung hư cấu được ghi rõ là minh họa. Nếu chuẩn bị preview riêng, giữ private, ghi “Bản nháp đề xuất — chưa phải website chính thức”, dùng placeholder/ảnh có quyền và không lấy ảnh/logo page làm tài sản của Lumi. Tắt form thật, QR thật và hành động contact khách trong preview; dữ liệu chưa được chủ xác nhận phải gắn nhãn. Không public deploy, mua domain, đưa vào portfolio hoặc tạo bản clone chính thức.

Giới hạn trung bình phần thao tác con người cho preview ≤5 phút theo STRATEGY.md; ghi riêng tổng thời gian công cụ. Nếu chưa có hệ thống làm preview đáp ứng giới hạn, dùng demo chung và đo thời gian thật; repo marketing không chứng minh đã có factory dựng website khách.

## 7. Handoff cho gửi tin và meeting

Dùng [mẫu tin](MESSAGES_AND_MEETINGS.md), chỉ điền chi tiết đã kiểm chứng. Lead chưa được phép gửi vẫn có thể có draft. Tin gửi đúng người quyết định hoặc người quản lý page có thể chuyển nội dung; không khai thác nhân viên để lấy số cá nhân. Chỉ tạo meeting sau khi bên cửa hàng và presenter đồng ý giờ cụ thể.
