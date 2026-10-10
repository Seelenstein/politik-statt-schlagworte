(() => {
  'use strict';
  const menu = document.querySelector('.menu-toggle');
  const nav = document.getElementById('hauptmenue');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('open', open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menu.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    }));
  }

  // GitHub-Pages-Adresse erkennen: sowohl <name>.github.io als auch <name>.github.io/<projekt>/.
  const host = location.hostname.toLowerCase();
  let repository = null;
  if (/^[a-z0-9-]+\.github\.io$/.test(host)) {
    const owner = host.slice(0, -'.github.io'.length);
    const first = location.pathname.split('/').filter(Boolean)[0] || '';
    const pages = ['index.html', 'fragen.html', 'updates.html', 'impressum.html'];
    const name = (!first || pages.includes(first)) ? `${owner}.github.io` : first;
    repository = `https://github.com/${encodeURIComponent(owner)}/${encodeURIComponent(name)}`;
  }
  document.querySelectorAll('[data-repo-link], [data-issues-link]').forEach(link => {
    if (!repository) { link.hidden = true; return; }
    link.href = link.hasAttribute('data-issues-link') ? `${repository}/issues/new` : repository;
    link.target = '_blank'; link.rel = 'noopener noreferrer';
  });

  const copy = document.querySelector('[data-copy-questions]');
  const status = document.querySelector('.copy-status');
  if (copy && status) copy.addEventListener('click', async () => {
    const questions = Array.from(document.querySelectorAll('#kopiertext li p')).map((p, i) => `${i + 1}. ${p.textContent.trim()}`).join('\n\n');
    try { await navigator.clipboard.writeText(questions); status.textContent = ' Kopiert.'; }
    catch { status.textContent = ' Kopieren nicht möglich: Bitte die Fragen markieren und manuell kopieren.'; }
  });
})();
