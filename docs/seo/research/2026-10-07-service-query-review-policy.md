# Google Maps service query and review-policy gap — RUN-041

## SERP snapshot

Observed 2026-10-07 at 10:16 +07:00 in Google Search for `dịch vụ google map`, using `hl=vi`, `gl=vn`, `num=10`, `pws=0`. Google’s footer said results were not personalized, showed Vietnam and left precise location unknown. A Google account was present; this is one contextual sample, not a controlled or universal SERP.

The page showed an AI Overview with a Sota Group pricing citation. It defined a Google Maps service as profile setup/verification/optimization and listed review offers alongside SEO and recovery. Organic results included service pages, verification guidance and price lists; related searches explicitly included buying Google reviews, five-star review services and paid review requests. This is evidence of a commercial/comparison SERP with a review-policy risk, not evidence that any specific provider violates policy or that the terms have current buyer volume. The CSV’s 4,400/month estimate and −32% year-over-year figure remain historical proxies with unknown export settings.

## Primary-source check and content decision

The current [Google Maps contribution policy in Vietnamese](https://support.google.com/contributionpolicy/answer/7400114?hl=vi) says reviews must reflect real experiences; paid reviews and incentives for posting, editing or removing reviews are prohibited. It also prohibits selectively soliciting positive reviews and asking for a specific rating/content. Google permits inviting customers to share a genuine experience without incentives or rating influence. The corresponding [English policy page](https://support.google.com/contributionpolicy/answer/7400114?hl=en) was checked for the same scope.

The existing bilingual comparison guide already separated profile setup, verification, SEO and review QR, but did not explain why a “five-star review” promise is a policy warning. A short VI/EN paragraph was added within that existing comparison section, linked inline to Google’s policy. It tells owners to invite all genuine customers without asking for a rating or wording. No competitor is accused, no new URL is created, and no rankings or customer results are promised.

### Added VI copy

> Gói “đánh giá 5 sao” là dấu hiệu cảnh báo, không phải sản phẩm bàn giao. Google không cho phép mua đánh giá, đổi ưu đãi lấy việc đăng, sửa hoặc xoá đánh giá, hay chỉ mời khách dự kiến sẽ đánh giá tích cực. Lời mời nên dành cho mọi khách thật; không yêu cầu số sao hay nội dung cụ thể. [Chính sách Google về nội dung đánh giá.](https://support.google.com/contributionpolicy/answer/7400114?hl=vi)

### Added EN copy

> A “five-star review” promise is a warning sign, not a deliverable. Google does not allow paid reviews, incentives in exchange for posting, editing or removing reviews, or selectively inviting customers expected to leave positive feedback. Invite all genuine customers without asking for a rating or specific wording. [Google’s policy on review content and rating manipulation.](https://support.google.com/contributionpolicy/answer/7400114?hl=en)

Sources checked 2026-10-07. Both EmDash locales were published on 2026-10-07 and public readback confirms the policy paragraph, inline source and source-check date. Publication time was not captured. Static snapshots are aligned in this PR; EmDash remains authoritative and no seed import or direct database write occurred.

A fresh headless Chromium pass at 320, 375, 768 and 1440 CSS px found no horizontal overflow on all eight VI/EN combinations. Both 320px views were visually inspected and are retained outside Git at `/private/tmp/seo-review-policy-vi-320.png` and `/private/tmp/seo-review-policy-en-320.png`. No ranking, citation, referral, enquiry or paid outcome is claimed.
