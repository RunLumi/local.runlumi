export const origin = 'https://local.runlumi.app';
export const topics = [
  { slug:'lua-chon-dich-vu', vi:'Chọn đúng dịch vụ', en:'Choosing a service', description:{ vi:'So phạm vi, chi phí và quyền sở hữu trước khi thuê.', en:'Compare scope, costs and ownership before hiring.' } },
  { slug:'quyen-so-huu', vi:'Hồ sơ & quyền sở hữu', en:'Profiles & ownership', description:{ vi:'Hướng dẫn để chủ tự làm việc với Google và giữ quyền tài khoản.', en:'Owner actions on Google, with account control retained.' } },
  { slug:'hien-dien-dia-phuong', vi:'Hiện diện địa phương', en:'Local presence', description:{ vi:'Thông tin rõ ràng, website dễ đọc và giới hạn của SEO địa phương.', en:'Clear information, readable websites and the limits of local SEO.' } },
  { slug:'danh-gia-trung-thuc', vi:'Đánh giá trung thực', en:'Honest reviews', description:{ vi:'Mời khách thật chia sẻ trải nghiệm, không thao túng đánh giá.', en:'Invite genuine customer experiences without manipulating reviews.' } },
];
export const base = locale => locale === 'en' ? '/en/blog/' : '/blog/';
export const home = locale => locale === 'en' ? '/en/' : '/';
export const topicFor = slug => topics.find(t => t.slug === slug);
export const articleUrl = p => `${base(p.locale)}${p.slug}/`;
export const plainText = blocks => (blocks ?? []).map(b => (b.children ?? []).map(c => c.text ?? '').join('')).join(' ');
export const readingMinutes = p => Math.max(1, Math.ceil(plainText(p.content).split(/\s+/).length / 220));
export const dateLabel = (value, locale) => new Intl.DateTimeFormat(locale === 'vi' ? 'vi-VN' : 'en-GB', { day:'numeric', month:'long', year:'numeric', timeZone:'Asia/Ho_Chi_Minh' }).format(new Date(value));
export const headingId = block => `section-${block._key}`;
export const xml = value => String(value).replace(/[<>&"']/g, ch => ({ '<':'&lt;', '>':'&gt;', '&':'&amp;', '"':'&quot;', "'":'&apos;' })[ch]);
export const safeJson = value => JSON.stringify(value).replace(/</g, '\\u003c');
export const isPublishedPath = (posts,path) => !path || ['search','about'].includes(path) || posts.some(p => p.slug===path || `topics/${p.topic}`===path);
