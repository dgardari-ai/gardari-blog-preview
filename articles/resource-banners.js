/* One approved photograph per resource and page load. Stable throughout reading. */
(() => {
  document.querySelectorAll('[data-banner-images]').forEach(banner => {
    const pool = JSON.parse(banner.dataset.bannerImages);
    const image = banner.querySelector('.promo-image img');
    if (!image || !pool.length) return;
    const apply = photo => {
      banner.dataset.bannerCurrent = photo.id;
      image.alt = photo.alt;
      image.width = photo.width;
      image.height = photo.height;
      image.style.objectPosition = photo.position;
      image.src = photo.src;
    };
    const selected = pool[Math.floor(Math.random() * pool.length)];
    if (selected.id !== pool[0].id) image.addEventListener('error', () => apply(pool[0]), {once: true});
    apply(selected);
  });
})();
