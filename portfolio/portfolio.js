document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const workCards = document.querySelectorAll('.work-card');
  const lightbox = document.getElementById('lightbox');
  const lightboxContent = document.getElementById('lightboxContent');
  const closeLightbox = document.getElementById('closeLightbox');

  // Category Filter Logic
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      workCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  // Open Image or Video in Fullscreen Modal
  workCards.forEach(card => {
    card.addEventListener('click', () => {
      const type = card.getAttribute('data-type');
      const src = card.getAttribute('data-src');

      if (type === 'video') {
        lightboxContent.innerHTML = `<video src="${src}" controls autoplay></video>`;
      } else {
        lightboxContent.innerHTML = `<img src="${src}" alt="Portfolio Work">`;
      }

      lightbox.classList.add('open');
    });
  });

  // Close Modal
  function closeModal() {
    lightbox.classList.remove('open');
    lightboxContent.innerHTML = ''; // Video ki awaz band karne ke liye
  }

  closeLightbox.addEventListener('click', closeModal);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeModal();
  });
});
