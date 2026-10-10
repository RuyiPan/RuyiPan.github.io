document.getElementById('year').textContent = new Date().getFullYear();
// The CV path is intentionally kept local so that the site works on GitHub Pages.
// Until a CV is uploaded, show a useful, nonbroken message instead of linking to a missing file.
fetch('./assets/Ruyi_Pan_CV.pdf', { method: 'HEAD' }).then(response => {
  if (!response.ok) throw new Error('CV not uploaded');
}).catch(() => {
  document.querySelectorAll('[data-cv]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      alert('CV coming soon. Please add assets/Ruyi_Pan_CV.pdf to enable this link.');
    });
  });
});
