const wrapper = document.querySelector(".modal-wrapper");
const modalOpenBtn = document.querySelector(".cart-buttons__apply");
const modalCloseIcon = document.querySelector(".modal__header span");
const modalCloseBtn = document.querySelector(".modal-buttons__cancel");
const applyBtn = document.querySelector(".modal-buttons__apply");

const handleToggleModal = () => {
  const modal = document.querySelector(".apply-modal");

  modal.classList.toggle("hide-modal");
  modal.classList.toggle("show-modal");
  wrapper.classList.toggle("hidden");
  wrapper.classList.toggle("visible");
};
modalOpenBtn.addEventListener("click", handleToggleModal);
modalCloseIcon.addEventListener("click", handleToggleModal);
modalCloseBtn.addEventListener("click", handleToggleModal);
wrapper.addEventListener("click", handleToggleModal);
