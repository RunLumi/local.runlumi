import { checkBlogSetupAccess } from './blog-setup-lock.js';

// Optional same-origin CMS service binding. Static snapshots remain the default.
export async function proxyBlog(context) {
  const path = new URL(context.request.url).pathname;
  if (!context.env.BLOG) {
    if (path.startsWith('/_emdash/') || path.startsWith('/_blog-assets/')) return new Response('Not found',{status:404});
    return context.next();
  }
  if(path.startsWith('/_emdash/') || path==='/_emdash') {
    const denied=await checkBlogSetupAccess(context.request,context.env);
    if(denied) return denied;
  }
  try {
    const response = await context.env.BLOG.fetch(context.request);
    let output = response;
    const headers = new Headers(response.headers);
    if (headers.get('Content-Type')?.includes('text/html')) headers.set('Content-Security-Policy', "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; img-src 'self' data:; font-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'");
    headers.set('Referrer-Policy','strict-origin-when-cross-origin');
    headers.set('X-Frame-Options','DENY');
    headers.set('Permissions-Policy','camera=(), microphone=(), geolocation=(), payment=()');
    if (path.startsWith('/_emdash/admin') && headers.get('Content-Type')?.includes('text/html')) {
      const nonce = crypto.randomUUID().replaceAll('-', '');
      output = new HTMLRewriter().on('script', { element(element) { element.setAttribute('nonce',nonce); } }).transform(response);
      headers.set('Content-Security-Policy', `default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; img-src 'self' data: blob:; font-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'nonce-${nonce}'; connect-src 'self'`);
      headers.delete('Content-Length');
    }
    // Never let an intermediary replay admin sessions or stale editorial states.
    headers.set('Cache-Control','no-store');
    if (path.startsWith('/_emdash/')) headers.set('X-Robots-Tag','noindex, nofollow');
    headers.set('X-Content-Type-Options','nosniff');
    return new Response(output.body,{status:response.status,statusText:response.statusText,headers});
  } catch {
    // No stale seed fallback when a live CMS is configured. No content or PII logs.
    return new Response('Publication temporarily unavailable',{status:503,headers:{'Cache-Control':'no-store','Retry-After':'60'}});
  }
}
