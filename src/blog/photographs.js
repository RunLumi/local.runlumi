// Presentation assets only: article text and publication state remain in EmDash.
// Unknown/new articles do not inherit a photograph from an unrelated guide.
const scenes = {
  'vi-dich-vu-google-maps': 'Lối vào cơ sở sửa chữa mô phỏng, với cửa xanh và chậu cây bên thềm.',
  'en-dich-vu-google-maps': 'Plain folders and a phone on an illustrative shop counter.',
  'vi-seo-google-maps': 'Dãy cửa hàng mô phỏng trên một con phố nhỏ, nhìn từ lối đi.',
  'en-seo-google-maps': 'An illustrative shop doorway connecting a service counter to the street.',
  'vi-xac-minh-google-maps': 'Chìa khóa cơ sở đặt trên sổ bìa xanh trong bối cảnh mô phỏng.',
  'en-xac-minh-google-maps': 'An envelope, shop keys and a face-down phone on an illustrative counter.',
  'vi-tao-dia-diem-google-maps': 'Bậc cửa và vỉa hè trước một cơ sở mô phỏng có cửa xanh.',
  'en-tao-dia-diem-google-maps': 'A blank notebook and pencil near an illustrative shop window.',
  'vi-qr-review-google': 'Mặt sau của thẻ trắng trong giá đỡ trên quầy dịch vụ mô phỏng.',
  'en-qr-review-google': 'The back of a plain counter card beside a phone in an illustrative reception area.',
};
export const photographKeys = Object.freeze(Object.keys(scenes));
export function photographFor(post) {
  if(!post || !['vi','en'].includes(post.locale)) return undefined;
  const key = `${post.locale}-${post.slug}`;
  if(!Object.hasOwn(scenes,key)) return undefined;
  const src = `/blog-images/${key}-1536.webp`;
  const en = post.locale === 'en';
  const caption = en ? 'AI-generated editorial illustration; not a Lumi customer or premises.' : 'Ảnh minh họa tạo bằng AI, không phải cơ sở hay khách hàng của Lumi.';
  return {key,src,width:1536,height:1024,alt:scenes[key],
    srcset:[480,960,1536].map(w=>`/blog-images/${key}-${w}.webp ${w}w`).join(', '),
    label:en?'AI-generated illustration':'Ảnh minh họa tạo bằng AI',
    caption:caption+(post.slug==='qr-review-google' ? (en ? ' The pictured stand is not included in Lumi’s offer.' : ' Giá đỡ trong ảnh không nằm trong gói dịch vụ.') : '')};
}
