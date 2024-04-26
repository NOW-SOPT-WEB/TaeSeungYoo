import { Utils, Dom } from "../utils/index.js";
import { MESSAGES } from "./constants.js";
import { renderCartList } from "./cart.js";

const modalList = Dom.qs(".modal__list");
const span_totalPrice = Dom.qs(".modal__total-price span:last-of-type");
const wrapper = Dom.qs(".modal-wrapper");
const modalOpenBtn = Dom.qs(".cart-buttons__apply");
const modalCloseIcon = Dom.qs(".modal__header span");
const modalCloseBtn = Dom.qs(".modal-buttons__cancel");
const applyBtn = Dom.qs(".modal-buttons__apply");

const applyKeys = [];

// 신청 목록 렌더링
const renderApplyList = () => {
  while (modalList.firstChild) {
    modalList.removeChild(modalList.firstChild);
  }
  let totalPrice = 0;
  applyKeys.length = 0;
  const cartObj = JSON.parse(localStorage.getItem("cart"));
  if (cartObj || Object.keys(cartObj).length !== 0) {
    Object.entries(cartObj).forEach(([key, value]) => {
      const { image_url, title, price, part, checked } = value;
      if (checked) {
        applyKeys.push(key);
        totalPrice += Number(price);
        const li = document.createElement("li");
        li.className = "modal__item";
        const img = document.createElement("img");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        img.alt = "study-thumbnail";
        img.className = "item__image";
        img.src = image_url;

        h4.className = "item__title";
        h4.textContent = title;

        p.className = "item__price";
        p.textContent = `${Utils.numberWithCommas(price)}원`;

        li.append(img, h4, p);

        modalList.appendChild(li);
      }
    });
    span_totalPrice.textContent = `${Utils.numberWithCommas(totalPrice)}원`;
  }
};

// 모달 토글 이벤트 핸들러
const handleToggleModal = () => {
  const modal = Dom.qs(".apply-modal");

  modal.classList.toggle("hide-modal");
  modal.classList.toggle("show-modal");
  wrapper.classList.toggle("hidden");
  wrapper.classList.toggle("visible");
};

// 모딜에서 신청 버튼 클릭 이벤트 핸들러
const handleClickApplyBtn = () => {
  if (confirm(MESSAGES.APPLY(applyKeys.length))) {
    const cartObj = JSON.parse(localStorage.getItem("cart"));
    applyKeys.forEach((key) => {
      delete cartObj[key];
    });
    localStorage.setItem("cart", JSON.stringify(cartObj));

    handleToggleModal();
    renderCartList();

    alert(MESSAGES.COMPLETE);
  }
};

// 장바구니에서 신청버튼 클릭 이벤트 핸들러
modalOpenBtn.addEventListener("click", () => {
  const cartObj = JSON.parse(localStorage.getItem("cart"));
  const checkedList = Object.values(cartObj).map((study) => study.checked);
  if (checkedList.length === 0) {
    alert(MESSAGES.EMPTY);
    return;
  }
  if (checkedList.every((isCheck) => isCheck === false)) {
    alert(MESSAGES.NOT_CHECKED);
    return;
  }

  handleToggleModal();
  renderApplyList();
});

modalCloseIcon.addEventListener("click", handleToggleModal);
modalCloseBtn.addEventListener("click", handleToggleModal);
wrapper.addEventListener("click", handleToggleModal);
applyBtn.addEventListener("click", handleClickApplyBtn);
