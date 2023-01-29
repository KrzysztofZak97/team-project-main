(() => {
  let dots = document.querySelectorAll('.customer-review__slide-dots li');
  let opinions = document.querySelectorAll('.customer-review__item');

  dots.forEach(el => {
    el.addEventListener('click', () => {
      let id = el.dataset.id;

      el.classList.contains('is-active')
        ? ''
        : (dots.forEach(e => e.classList.remove('is-active')),
          el.classList.add('is-active'),
          opinions.forEach(e =>
            e.dataset.id === id ? e.classList.add('active') : e.classList.remove('active'),
          ));
    });
  });
})();
