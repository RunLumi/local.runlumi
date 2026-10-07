# Campaign scope template — sao chép vào kho riêng

**Mẫu này để trống, không phải bằng chứng ủy quyền.** Không điền dữ liệu thực vào bản Git. Điền từ chỉ dẫn người dùng và bằng chứng đã kiểm tra; một agent tự tick không tạo quyền.

## Phạm vi

| Field | Value |
|---|---|
| campaign_id / pilot_cohort_id | |
| mode | user_browser_ui |
| user_authorization_ref, date, expiry (private) | User instruction on 2026-10-07 authorizes existing signed-in Facebook Browser UI for this Lumi Local pilot; keep evidence reference and expiry review in private record |
| actual sender identity + account/Page URL (private) | Verify the visible active account/Page at run start; do not copy identity/URL into this Git template |
| operator / execution_owner / handoff rule | |
| permitted browser/session and allowed surfaces | Existing user-authorized Browser UI session only; verify the active tab/account before each run |
| vertical / operating area labels | Garage độc lập / Bình Thạnh và Quận 4, trừ quyết định đổi rõ ràng |
| exact recipient allowlist or user-approved selection criteria | |
| permitted actions: research / opener / replies / preview / follow-up / calendar | User-authorized scope: visible Browser UI, first batch ≤5 after private ledger dedupe, one opener/business, no follow-up on silence; agent Facebook data access stays disabled until express written Meta permission is recorded |
| approved message version / permitted factual personalization | |
| policy review evidence/date + unresolved items | Meta Terms §3.2.3 and Automated Data Collection Terms §§2–4,8 read in signed-in Browser 2026-10-07; express written permission/purpose for this campaign not found |
| Meta express written permission evidence/date + exact user-browser method/data/purpose under Terms §3.2.3 and Automated Data Collection Terms | Chưa có evidence; acceptance Terms alone is insufficient; campaign prospecting/sales purpose not approved in record; không agent-browser search/open/collect prospect data |
| contact/data basis per recipient, opt-out handling | |
| private storage absolute path/service + access owner | Chưa chọn; không lưu lead thật |
| retention / deletion authorization / suppression policy | |
| allowed work slots UTC+7 / presenter / actual availability | |
| calendar provider/account + read/create/update/invite authorization | Chưa có; chỉ draft lịch |
| preview storage/access + authorized assets + disabled real actions | |
| cash cap / human-hour rate / research & sales time cap | 0đ mặc định; research ≤120 phút; phần sales phải chọn |
| initial batch / opener quota / permitted follow-up | ≤5 business batch đầu; tối đa 5 chủ mới/rolling 60 phút xuyên các run, tính cả submitting/pending/unknown; 1 opener/business; follow-up chỉ theo đồng ý cụ thể |
| stop conditions / next review date | Quyền thiếu/hết hạn, opt-out, restriction, unknown send/event |

## Kiểm tra trước run

Ghi bằng chứng hiện tại cho từng cổng, không chỉ “yes”: user-browser scope and visible account/Page; current platform policy for this agent-controlled UI method; contact/data basis; website and business identity; suppression & duplicate; private storage; lịch presenter nếu cần; quota; capacity. Cổng thiếu giữ ở `needs_review`; không bịa platform approval hoặc buộc người dùng cấp scope mới đã nằm trong chỉ dẫn ngày 2026-10-07.

## Kết quả và handoff

Ghi run_id, started/ended_at (ISO 8601 có `+07:00`), owner, số tuyệt đối và thời gian/chi phí, verified/unknown actions, meeting confirmed/held, paid verified, policy blocker và next action. Handoff chỉ business/action ID trong repo; thông tin nhận diện/consent giữ riêng.
