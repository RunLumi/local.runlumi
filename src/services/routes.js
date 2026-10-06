export const serviceRoutes = {
 maps:{type:'service',vi:'/dich-vu/google-maps/',en:'/en/services/google-maps/',intent:'check',offer:'unsure'},
 qr:{type:'service',vi:'/dich-vu/ma-qr-danh-gia-google/',en:'/en/services/google-review-qr/',intent:'trust-kit',offer:'trust-kit'},
 check:{type:'service',vi:'/dich-vu/kiem-tra-hien-dien-google/',en:'/en/services/google-presence-check/',intent:'check',offer:'unsure'},
 website:{type:'service',vi:'/dich-vu/website-doanh-nghiep-dia-phuong/',en:'/en/services/local-business-website/',intent:'preview',offer:'starter'},
 spa:{type:'industry',vi:'/nganh/spa/',en:'/en/industries/spa/',intent:'preview',offer:'starter'},
 garage:{type:'industry',vi:'/nganh/garage/',en:'/en/industries/auto-repair/',intent:'preview',offer:'starter'},
 hvac:{type:'industry',vi:'/nganh/dien-lanh/',en:'/en/industries/hvac/',intent:'preview',offer:'starter'}
};
export const sourceContexts = Object.entries(serviceRoutes).flatMap(([key,r])=>['vi','en'].map(locale=>({page_slug:key,source:r[locale],locale,cta_intent:r.intent,offer_interest:r.offer})));
export function validatedContext(raw) {
 const item=sourceContexts.find(c=>c.source===raw?.source && c.locale===raw?.locale);
 return item ? {...item} : null;
}
