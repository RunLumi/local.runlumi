const form = document.querySelector('form[action="/data/login"]');
form?.addEventListener('submit', async event => {
  event.preventDefault();
  const button = form.querySelector('button');
  const error = form.querySelector('[role="alert"]');
  button.disabled = true; error.hidden = true;
  try {
    const response = await fetch('/data/login', {
      method:'POST',credentials:'same-origin',
      headers:{'Content-Type':'application/x-www-form-urlencoded',Accept:'application/json'},
      body:new URLSearchParams(new FormData(form)),signal:AbortSignal.timeout(10000),
    });
    if (response.status === 204) { location.assign('/data/'); return; }
    error.textContent = response.status === 401
      ? 'The password was not accepted. Please try again.'
      : 'Research access is unavailable. Please try again later.';
    error.hidden = false;
  } catch {
    error.textContent = 'Sign-in could not be completed. Please try again.';
    error.hidden = false;
  } finally { button.disabled = false; }
});

document.querySelector('form[action="/data/logout"]')?.addEventListener('submit', async event => {
  event.preventDefault();
  const button=event.currentTarget.querySelector('button'); button.disabled=true;
  try {
    const response=await fetch('/data/logout',{method:'POST',credentials:'same-origin',headers:{Accept:'application/json'},signal:AbortSignal.timeout(10000)});
    if(response.status===204) { location.assign('/data/login'); return; }
    button.textContent='Retry sign out';
  } catch { button.textContent='Retry sign out'; }
  finally {button.disabled=false;}
});
