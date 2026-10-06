const locked = () => new Response('The Lumi Local editor is awaiting owner setup.', {status:503,headers:{'Cache-Control':'no-store','X-Robots-Tag':'noindex, nofollow'}});

// Temporary first-admin boundary. Disabled by a verified BLOG_ADMIN_READY flag,
// never by absence of the setup credential. No credentials are logged or echoed.
export async function checkBlogSetupAccess(request,env) {
  if(env.BLOG_ADMIN_READY === 'true') return null;
  const secret=env.BLOG_SETUP_TOKEN;
  if(typeof secret !== 'string' || secret.length<32) return locked();
  const challenge=()=>new Response('Owner setup access required.',{status:401,headers:{'WWW-Authenticate':'Basic realm="Lumi Local owner setup", charset="UTF-8"','Cache-Control':'no-store','X-Robots-Tag':'noindex, nofollow'}});
  const header=request.headers.get('Authorization') ?? '';
  if(header.length>1024 || !/^Basic [A-Za-z0-9+/]+=*$/.test(header)) return challenge();
  let value;
  try {value=atob(header.slice(6));} catch{return challenge();}
  if(!value.startsWith('owner:')) return challenge();
  const encode=new TextEncoder();
  const [actual,expected]=await Promise.all([crypto.subtle.digest('SHA-256',encode.encode(value.slice(6))),crypto.subtle.digest('SHA-256',encode.encode(secret))]);
  const a=new Uint8Array(actual),b=new Uint8Array(expected);let different=0;
  for(let i=0;i<a.length;i++) different |= a[i]^b[i];
  if(different) return challenge();
  return null;
}
