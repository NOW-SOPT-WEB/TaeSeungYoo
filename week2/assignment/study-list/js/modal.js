import { Utils } from "../utils/index.js";
import { renderCartList } from "./cart.js";

const modalList = document.querySelector(".modal__list");
const span_totalPrice = document.querySelector(
  ".modal__total-price span:last-of-type"
);
const wrapper = document.querySelector(".modal-wrapper");
const modalOpenBtn = document.querySelector(".cart-buttons__apply");
const modalCloseIcon = document.querySelector(".modal__header span");
const modalCloseBtn = document.querySelector(".modal-buttons__cancel");
const applyBtn = document.querySelector(".modal-buttons__apply");

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

        li.appendChild(img);
        li.appendChild(h4);
        li.appendChild(p);

        modalList.appendChild(li);
      }
    });
    span_totalPrice.textContent = `${Utils.numberWithCommas(totalPrice)}원`;
  }
};

// 모달 토글 이벤트 핸들러
const handleToggleModal = () => {
  const modal = document.querySelector(".apply-modal");

  modal.classList.toggle("hide-modal");
  modal.classList.toggle("show-modal");
  wrapper.classList.toggle("hidden");
  wrapper.classList.toggle("visible");
};

// 모딜에서 신청 버튼 클릭 이벤트 핸들러
const handleClickApplyBtn = () => {
  if (confirm(`${applyKeys.length}개의 스터디를 신청하시겠습니까?`)) {
    const cartObj = JSON.parse(localStorage.getItem("cart"));
    applyKeys.forEach((key) => {
      delete cartObj[key];
    });
    localStorage.setItem("cart", JSON.stringify(cartObj));

    handleToggleModal();
    renderCartList();

    alert("신청이 완료되었습니다.");
  }
};

// 장바구니에서 신청버튼 클릭 이벤트 핸들러
modalOpenBtn.addEventListener("click", () => {
  const cartObj = JSON.parse(localStorage.getItem("cart"));
  const checkedList = Object.values(cartObj).map((study) => study.checked);
  if (checkedList.length === 0) {
    alert("신청할 스터디가 없어요.");
    return;
  }
  if (checkedList.every((isCheck) => isCheck === false)) {
    alert("신청할 스터디를 선택해주세요.");
    return;
  }

  handleToggleModal();
  renderApplyList();
});

modalCloseIcon.addEventListener("click", handleToggleModal);
modalCloseBtn.addEventListener("click", handleToggleModal);
wrapper.addEventListener("click", handleToggleModal);
applyBtn.addEventListener("click", handleClickApplyBtn);
