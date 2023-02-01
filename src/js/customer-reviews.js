// 1
// funkcja
(() => {
  // definiuje zmienna dots i opinions, ktora zawiera wszystkie elementy HTML z selektorem
  let dots = document.querySelectorAll('.customer-review__slide-dots li');
  let opinions = document.querySelectorAll('.customer-review__item');
  // rozpoczyna petle forEach dla kazdego elementu dot. Zmienna el jest elementem biezacego cyklu
  dots.forEach(el => {
    // nasluchuje zdarzenie "click" na kazdym elemencie dots i wywoluje funkcje, gdy zdarzenie jest wywolane
    el.addEventListener('click', () => {
      // definiuje zmienna id, która bedzie zawierac wartosc atrybutu el.dataset.id biezacego elementu dots
      let id = el.dataset.id;
      // sprawdza, czy klasa is-active jest obecna w klasach biezacego elementu dots
      el.classList.contains('is-active')
        ? // jesli klasa jest obecna, nic nie jest robione
          ''
        : // jesli klasa nie jest obecna, ta linia usuwa klase is-active z wszystkich elementow dots
          (dots.forEach(e => e.classList.remove('is-active')),
          // dodaje klase is-active do biezacego elementu dots
          el.classList.add('is-active'),
          // rozpoczyna petle forEach dla kazdego elementu opinion. Zmienna e jest elementem biezacego cyklu
          opinions.forEach(e =>
            // sprawdza, czy wartosc atrybutu el.dataset.id biezacego elementu opinion jest rowna wartosci zmiennej
            e.dataset.id === id ? e.classList.add('active') : e.classList.remove('active'),
          ));
    });
  });
})();
