/* Shared phone header, reading flow and footer. The real cover and viewer are retained. */
(() => {
  function initialize() {
    const body = document.body;
    if (body.dataset.phoneSite !== '1') return;
    const form = document.getElementById('search-form');
    const toggle = form?.querySelector('.phone-search-toggle');
    const input = document.getElementById('material-search');
    const submit = form?.querySelector('.search-submit');
    const results = document.getElementById('search-results');
    const navigation = document.getElementById('matrix-nav');
    if (!toggle || !input || !submit || !navigation) return;
    const phone = matchMedia('(max-width: 680px)');
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    const heading = document.querySelector('.main-article > .article-heading');
    const card = document.querySelector('.links-column > .current-article-card');
    const cover = card?.querySelector('.article-cover') || null;
    const cardWasHidden = card?.hidden || false;
    const originalPlace = document.createComment('Cover: original desktop position');
    if (cover) cover.before(originalPlace);
    const leadingPhoto = cover ? document.createElement('section') : null;
    if (leadingPhoto) {
      leadingPhoto.className = 'sidebar-block cover-contents a2 current-article-card phone-leading-photo';
      const width = Number(cover.querySelector('img')?.getAttribute('width'));
      if (width > 0) leadingPhoto.style.maxWidth = width + 'px';
    }
    let open = false;
    function stopIntro() { form.classList.remove('phone-search-awake'); }
    function setOpen(value, focus = false) {
      stopIntro();
      open = phone.matches && value;
      body.classList.toggle('phone-menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Свернуть поиск' : 'Открыть поиск');
      input.disabled = phone.matches && !open;
      submit.disabled = phone.matches && !open;
      navigation.inert = open;
      if (!open && results) {
        results.hidden = true;
        input.setAttribute('aria-expanded', 'false');
      }
      if (focus) (open ? input : toggle).focus({preventScroll: true});
    }
    function updateBreakpoint() {
      setOpen(false);
      if (card && heading) card.hidden = phone.matches || cardWasHidden;
      if (cover && heading && leadingPhoto) {
        if (phone.matches) {
          leadingPhoto.append(cover);
          heading.after(leadingPhoto);
        } else {
          originalPlace.after(cover);
          leadingPhoto.remove();
        }
      }
    }
    toggle.addEventListener('click', () => setOpen(!open, true));
    form.addEventListener('pointerdown', stopIntro, {once: true});
    form.addEventListener('click', event => {
      if (event.target.closest('.search-result')) setOpen(false);
    });
    form.addEventListener('animationend', event => {
      if (event.target === form && event.animationName === 'phone-search-awake') stopIntro();
    });
    form.addEventListener('keydown', event => {
      if (event.key === 'Escape' && open) {
        event.preventDefault();
        event.stopImmediatePropagation();
        setOpen(false, true);
      }
    }, true);
    phone.addEventListener('change', updateBreakpoint);
    reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) stopIntro(); });
    // An older entrance animation may still clip the rail to its pre-phone width.
    if (phone.matches) for (const animation of form.getAnimations?.() || []) animation.cancel();
    body.classList.add('phone-site-ready');
    updateBreakpoint();
    if (phone.matches && !reducedMotion.matches) form.classList.add('phone-search-awake');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, {once: true});
  else initialize();
})();
