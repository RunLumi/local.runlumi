# Campaign scope template — sao chép vào kho riêng

**Mẫu này để trống, không phải bằng chứng ủy quyền.** Không điền dữ liệu thực vào bản Git. Điền từ chỉ dẫn người dùng và bằng chứng đã kiểm tra; một agent tự tick không tạo quyền.

## Phạm vi

| Field | Value |
|---|---|
| campaign_id / pilot_cohort_id | |
| mode: research_and_draft / human_operated_facebook / authorized_browser_execution | research_and_draft |
| user_authorization_ref, date, expiry (private) | |
| actual sender identity + account/Page URL (private) | |
| operator / execution_owner / handoff rule | |
| permitted browser/session and allowed surfaces | |
| vertical / operating area labels | Garage độc lập / Bình Thạnh và Quận 4, trừ quyết định đổi rõ ràng |
| exact recipient allowlist or user-approved selection criteria | |
| permitted actions: research / opener / replies / preview / follow-up / calendar | Research và draft; các hành động khác chưa cấp |
| approved message version / permitted factual personalization | |
| policy review evidence/date + unresolved items | Chưa kiểm tra cho live execution |
| Meta permission evidence + exact method/data/action scope, expiry | Chưa có; không bật Facebook agent automation |
| contact/data basis per recipient, opt-out handling | |
| private storage absolute path/service + access owner | Chưa chọn; không lưu lead thật |
| retention / deletion authorization / suppression policy | |
| allowed work slots UTC+7 / presenter / actual availability | |
| calendar provider/account + read/create/update/invite authorization | Chưa có; chỉ draft lịch |
| preview storage/access + authorized assets + disabled real actions | |
| cash cap / human-hour rate / research & sales time cap | 0đ mặc định; research ≤120 phút; phần sales phải chọn |
| initial batch / opener quota / permitted follow-up | ≤5 business; 1 opener/business; follow-up chỉ theo đồng ý cụ thể |
| stop conditions / next review date | Quyền thiếu/hết hạn, opt-out, restriction, unknown send/event |

## Kiểm tra trước run

Ghi bằng chứng hiện tại cho từng cổng, không chỉ “yes”: human scope; platform method; contact basis; dữ liệu/địa điểm/website; suppression & duplicate; private storage; lịch presenter nếu cần; quota; capacity cho lời hứa. Cổng thiếu giữ draft; không ép người dùng cấp quyền chỉ để đủ bảng.

## Kết quả và handoff

Ghi run_id, started/ended_at (ISO 8601 có `+07:00`), owner, số tuyệt đối và thời gian/chi phí, verified/unknown actions, meeting confirmed/held, paid verified, policy blocker và next action. Handoff chỉ business/action ID trong repo; thông tin nhận diện/consent giữ riêng.
