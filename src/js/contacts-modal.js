(() => {
    const refs = {
      openModalBtn: document.querySelector("[loc-modal-open]"),
      closeModalBtn: document.querySelector("[loc-modal-close]"),
      modal: document.querySelector("[loc-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("contacts-modal--is-hidden");
    }
  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelector("[fran-modal-open]"),
      closeModalBtn: document.querySelector("[fran-modal-close]"),
      modal: document.querySelector("[fran-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("contacts-modal--is-hidden");
    }
  })();
  