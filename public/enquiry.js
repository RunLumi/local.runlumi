const form = document.getElementById('enquiry-form');
const status = document.getElementById('form-status');

if (form && status) {
  let pending = false;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (pending || !form.reportValidity()) return;

    const button = form.querySelector('button[type="submit"]');
    const original = button.textContent;
    const payload = Object.fromEntries(new FormData(form));
    payload.consent = form.elements.namedItem('consent')?.checked === true;

    pending = true;
    button.disabled = true;
    button.textContent = form.elements.namedItem('locale')?.value === 'en' ? 'Sending…' : 'Đang gửi…';
    status.textContent = '';
    status.removeAttribute('data-state');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('request failed');

      form.reset();
      status.textContent = status.dataset.success || 'Sent.';
      status.dataset.state = 'success';
    } catch {
      status.textContent = status.dataset.error || 'Could not send.';
      status.dataset.state = 'error';
    } finally {
      pending = false;
      button.disabled = false;
      button.textContent = original;
    }
  });
}
