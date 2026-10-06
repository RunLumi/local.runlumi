const form = document.getElementById('enquiry-form');
const status = document.getElementById('form-status');

if (form && status) {
  let pending = false;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (pending || !form.reportValidity()) return;

    const button = form.querySelector('button[type="submit"]');
    const labelSpan = button ? (button.querySelector('.submit-label') || button.querySelector('span')) : null;
    const originalText = labelSpan ? labelSpan.textContent : (button ? button.textContent : '');
    const payload = Object.fromEntries(new FormData(form));
    payload.consent = form.elements.namedItem('consent')?.checked === true;

    pending = true;
    if (button) {
      button.disabled = true;
      button.classList.add('is-loading');
    }
    const pendingText = form.elements.namedItem('locale')?.value === 'en' ? 'Sending…' : 'Đang gửi…';
    if (labelSpan) {
      labelSpan.textContent = pendingText;
    } else if (button) {
      button.textContent = pendingText;
    }
    status.textContent = '';
    status.removeAttribute('data-state');
    let rejectedFields = false;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(12000)
      });

      const result = await response.json();
      if (!response.ok || result?.ok !== true) {
        // Only a field rejection is the visitor's to fix; everything else is ours.
        rejectedFields = response.status === 400 && result?.error === 'invalid_fields';
        throw new Error('request failed');
      }

      form.reset();
      status.textContent = status.dataset.success || 'Sent.';
      status.dataset.state = 'success';
    } catch {
      status.textContent = (rejectedFields && status.dataset.invalid) || status.dataset.error || 'Could not send.';
      status.dataset.state = 'error';
    } finally {
      pending = false;
      if (button) {
        button.disabled = false;
        button.classList.remove('is-loading');
      }
      if (labelSpan) {
        labelSpan.textContent = originalText;
      } else if (button) {
        button.textContent = originalText;
      }
      // Bring the outcome into view (on phones it can sit under the keyboard);
      // the live region announces it, so focus stays where it was.
      if (typeof status.scrollIntoView === 'function') status.scrollIntoView({ block: 'center', behavior: globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
  });
}
