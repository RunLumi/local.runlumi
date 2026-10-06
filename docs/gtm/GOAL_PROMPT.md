# `/goal` prompt: Facebook pilot cho Lumi Local

Dùng nguyên prompt dưới đây để bắt đầu goal; điền các trường `[...]` chỉ khi đã có bằng chứng. Prompt không tự cấp quyền Facebook, quyền lưu dữ liệu hay lịch calendar.

```text
/goal

MỤC TIÊU
Hoàn thành một pilot acquisition nhỏ cho Lumi Local: tìm garage phù hợp,
xác minh hiện diện/website và nhu cầu, chuẩn bị offer, liên hệ trong phạm vi
được phép, rồi hẹn và trình bày meeting khi chủ cửa hàng đồng ý. Đóng loop bằng
kết quả đã xác minh. Không tối ưu số tin gửi.

ĐỌC TRƯỚC
Đọc root và nearest AGENTS.md; docs/gtm/README.md, WORKLOG.md,
BROWSER_AGENT.md, FACEBOOK_PLAYBOOK.md, MESSAGES_AND_MEETINGS.md,
RESEARCH-2026-10-07.md; cùng COPY.md, PRICING.md, STRATEGY.md,
docs/PILOT.md và SECURITY.md.

CHỐNG TRÙNG — GATE BẮT BUỘC
1. Đọc WORKLOG.md từ entry mới nhất; tìm run in_progress, submitting,
   unknown hoặc pending. Reconcile trạng thái đang lửng trước khi nghiên cứu
   hay gửi mới. Không tạo run song song cho cùng pilot.
2. Đọc cohort/pipeline, action journal và suppression list trong kho riêng đã
   được cấp. Worklog Git không phải CRM hay nguồn dedupe người nhận. Nếu thiếu
   kho riêng hoặc không kiểm tra được lịch sử, dừng trước khi tìm/contact.
3. Dedupe theo business identity xuyên mọi kênh: page URL/handle, tên giao dịch,
   địa điểm và lịch sử pilot. Page/chi nhánh khác của cùng business vẫn dùng
   business ID cũ trừ khi có bằng chứng ngược lại. Không tạo ID mới để né
   suppression, lần liên hệ trước hoặc quota.
4. Append `in_progress` vào WORKLOG.md trước discovery. Worklog chỉ chứa ngày/
   giờ +07:00, run ID, trạng thái, aggregate, thời gian, truy vấn/khoảng thời
   gian đã rà ở mức tổng hợp, blocker và next step. Không ghi tên, URL, phone,
   email, nội dung tin, thread/event link, credential hay mapping ID vào Git.

PHẠM VI PILOT
Giữ cohort hiện hành: garage độc lập tại Bình Thạnh và Quận 4, 30 business
duy nhất tổng cộng theo STRATEGY.md/PILOT.md. Facebook chỉ là một kênh trong
cohort; không tạo cohort thứ hai hoặc đếm lại cửa hàng đã tiếp cận offline.
Nếu chiến lược/ledger mới nhất cho thấy pilot đã đổi/đóng, theo bằng chứng mới
nhất và ghi lý do vào worklog.

Lượt đầu: tối đa 120 phút nghiên cứu; kiểm tra tối đa 20 ứng viên; chọn tối đa
5 business đủ chuẩn cho batch đầu. Đây là ngưỡng học nội bộ, không phải
benchmark hay mức an toàn Meta. Tiền mặc định 0đ; không mua list/quảng cáo.
Không tăng quota vì chưa có reply. Không làm prospect đã có trong cohort thành
“mới” chỉ vì tìm thấy trên Facebook.

CHẶNG 0 — AUDIT REPO VÀ TRẠNG THÁI
Ghi branch/HEAD/diff và origin/main. Giữ WIP không liên quan; không stash,
reset, clean, switch hoặc ghi đè checkout dùng chung. Kiểm tra worklog, ledger,
PR và action pending để tránh lặp việc. Báo cáo trạng thái chỉ bằng aggregate.

CHẶNG 1 — QUYỀN VÀ DỮ LIỆU
Mặc định `research_and_draft`. Kiểm tra độc lập:
- quyền người dùng cho identity, người nhận/tiêu chí, hành động, giới hạn và hạn;
- quyền/chính sách nền tảng hiện hành cho đúng phương thức truy cập/gửi;
- contact/data basis cho business cụ thể, cùng kho riêng được phép.

Quyền API không thay quyền browser. Trang công khai, nút Message, login sẵn,
hoặc thiếu website không tự cấp quyền scraping/cold outreach. Nếu chưa có quyền
Meta automation, không tự duyệt/quét Facebook; dùng nguồn web/phương thức được
phép và ghi chú page do operator cung cấp hợp lệ. Operator tự thao tác UI nếu
campaign được phép nhưng browser automation chưa được phép.

Giữ authorization đã cấp rõ và còn hiệu lực; không hỏi lại từng hành động nằm
trong phạm vi đó. Nếu thiếu thông tin bắt buộc, hoàn tất phần độc lập trước,
ghi blocker trong worklog rồi hỏi một câu ngắn về đúng thông tin còn thiếu.
Không đoán account/Page, sender, contact basis, storage, lịch rảnh hoặc policy.

CHẶNG 2 — NGHIÊN CỨU VÀ LỌC
Theo docs/gtm/FACEBOOK_PLAYBOOK.md. Xác minh business/ngành/khu vực/tín hiệu
hoạt động và kiểm tra website qua nhiều nguồn. Không kết luận không có website
chỉ vì field trống. Dùng trạng thái `not_found_after_checks`,
`owner_confirmed_none`, `existing_suitable`, `existing_needs_review`,
`link_hub_only` hoặc `unknown` theo evidence.

Nhu cầu vẫn là giả thuyết tới khi chủ xác nhận; Facebook/Zalo có thể đã đủ dùng.
Loại business site tốt, không hoạt động, không khớp, hoặc chỉ cần ads/booking/
CRM/Google profile management. Không lấy follower/commenter, profile cá nhân,
nhóm kín, Maps export/scrape, ảnh/logo không có quyền hay contact riêng tư.

Append checkpoint worklog sau mỗi tối đa 5 ứng viên đã rà hoặc trước pause:
thời gian, số đã kiểm tra/đủ chuẩn/loại, query/source family và date range ở
mức tổng hợp, lý do loại tổng hợp, next step. Đừng lặp query/date range đã rà
trừ khi ghi rõ lý do mới.

CHẶNG 3 — OFFER VÀ PREVIEW
Soạn tối đa một tin cá nhân hóa/business theo
docs/gtm/MESSAGES_AND_MEETINGS.md. Claims/price chỉ theo COPY.md/PRICING.md.
Không hứa rank, traffic, leads, khách hay revenue; không bán như AI website
builder. Không follow-up im lặng, đổi kênh/tài khoản để né từ chối.

Preview riêng chỉ khi assets được phép, dữ liệu đã xác nhận hoặc gắn draft,
link private có kiểm soát, form/contact/QR thật tắt và thời gian phù hợp
STRATEGY.md. Nếu chưa đủ, dùng demo ngành chung hoặc dừng ở draft; không public
deploy site chính thức cho prospect.

CHẶNG 4 — GỬI ĐÚNG MỘT LẦN TRONG PHẠM VI
Chỉ gửi nếu cả ba gate ở Chặng 1 đạt, recipient xác minh, chưa trùng/suppressed
và quota còn. Dùng browser tool được hỗ trợ; một sender mỗi campaign. Ghi
`prepared`, `authorized`, rồi `submitting` vào private action journal trước
Send. Gửi một lần, đọc lại thread; `verified_sent` chỉ khi UI xác nhận.
Timeout/queued/kết quả mơ hồ là `unknown`: reconcile trước, không retry.

Sau batch tối đa 5 business, append worklog aggregate ngay: số
verified_sent/unknown/failed_confirmed, reply thực chất, opt-out/restriction,
thời gian và next checkpoint. Chi tiết recipient/message/evidence chỉ ở kho
riêng được cấp. Opt-out, Meta warning/restriction, quyền hết hạn hoặc evidence
sai: dừng liên hệ bị ảnh hưởng và ghi blocker.

CHẶNG 5 — REPLY VÀ MEETING
Meeting chỉ `both_confirmed` khi khách chọn slot cụ thể và presenter kiểm tra,
đồng ý. Dùng Asia/Ho_Chi_Minh. Không giả định calendar access hay tự gửi invite.
Chỉ tạo/cập nhật event khi có quyền calendar cụ thể và khách đồng ý kênh nhận;
ghi `submitting` trước Save, đọc lại event. Reminder chỉ khi khách đồng ý
ngày/kênh. Phân biệt `proposed`, `both_confirmed`, `invite_verified`, `held`,
`no_show`, `unknown`.

Demo 12 phút theo agenda trong MESSAGES_AND_MEETINGS.md. Hỏi pain thật trước;
nói đủ giá năm đầu/renewal, exclusions, domain ownership/transfer, một vòng sửa
cơ bản và điều khoản đã được xác nhận. Không ép mua/nhận tiền khi scope,
capacity hoặc payment path chưa được duyệt.

WORKLOG XUYÊN SUỐT
Append entry tại run start, sau mỗi batch tối đa 5 ứng viên/actions, trước
handoff/compaction/pause và khi kết thúc. Đây là log append-only PII-free;
không sửa/xóa entry cũ. Nếu sai, append correction ẩn danh. Reconcile mọi
submitting/unknown trước khi đánh dấu complete. Không báo dữ liệu không chắc
thành verified.

ĐÁNH GIÁ VÀ KẾT THÚC
Không scale vì reply, likes, lời khen demo hay Trust Kit riêng. Dùng gate mới
nhất trong STRATEGY.md: ≥6/30 có thanh toán, ≥2 Starter đã thanh toán, preview
human time trung bình ≤5 phút, delivery chuẩn hóa và gần như không Google work.
7 ngày không chứng minh upgrades; đợi hết credit window 30 ngày. Zero Starter
sau 20 owner conversations đủ chuẩn kích hoạt review ICP/pain/pitch trước khi
gửi thêm. Đây là ngưỡng nội bộ, không phải benchmark thị trường.

Append worklog terminal status `complete`, `paused` hoặc `blocked`, giờ dừng,
aggregate cuối, dedupe check cuối, blockers, proof source và next step.
Kết quả cuối báo riêng số researched/qualified/draft/sent verified/unknown/
reply/owner conversations/meeting confirmed/held/paid, thời gian/chi phí và
cách tính, contribution đã thực nhận so với dự báo. Không có PII; không bịa
lead/permission/send/meeting/sale. Không tuyên bố CI, policy, revenue, market
fit hay production đã xác minh nếu chưa có bằng chứng tương ứng.
```

Khi chạy prompt, agent đọc worklog ở mọi lần resume. Chỉ mở goal/run mới sau khi goal trước đã kết thúc hoặc action pending được reconcile. Dữ liệu thật không được ghi vào `WORKLOG.md` hay các CSV template trong Git; dùng kho riêng đã được cấp quyền.
