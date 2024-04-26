import { STUDY_LIST, PART_NAME, FILTER_NAME, MESSAGES } from "./constants.js";
import { Utils, Dom } from "../utils/index.js";

const studySection = Dom.qs(".study-section");
const navItems = Dom.qsAll(".nav__item");
let selectPart = null; // all, common, web, server

// 스터디 클릭 이벤트 핸들러. 장바구니에 담기(로컬스토리지)
const handleClickStudy = (study) => {
  const { id, title, image_url, part, price } = study;
  const cartObj = JSON.parse(localStorage.getItem("cart")) ?? {};
  if (!(id in cartObj)) {
    cartObj[id] = {
      title,
      image_url,
      part,
      price,
      checked: false,
    };
  }
  localStorage.setItem("cart", JSON.stringify(cartObj));
};

// 스터디 목록 렌더링
const renderStudyList = () => {
  while (studySection.firstChild) {
    studySection.removeChild(studySection.firstChild);
  }
  const h2 = document.createElement("h2");
  h2.textContent = selectPart ? FILTER_NAME[selectPart] : "전체";
  h2.className = "study-section__title";
  studySection.appendChild(h2);

  const ul = document.createElement("ul");
  ul.className = "study-section__list";

  STUDY_LIST.forEach((study) => {
    if (!selectPart || selectPart === "all" || selectPart === study.part) {
      const li = document.createElement("li");
      const article = document.createElement("article");
      const img = document.createElement("img");
      const h3 = document.createElement("h3");
      const part = document.createElement("p");
      const price = document.createElement("p");
      const icon = document.createElement("img");

      article.className = "study";

      img.alt = "study-thumbnail";
      img.src = study.image_url;
      img.className = "study__image";

      h3.className = "study__title";
      h3.textContent = study.title;

      part.className = "study__part";
      part.textContent = `모집대상: ${PART_NAME[study.part]}`;

      price.className = "study__price";
      price.textContent = `참가비: ${Utils.numberWithCommas(study.price)}원`;

      icon.className = "material-symbols-outlined study__like";
      icon.textContent = "favorite";

      article.append(img, h3, part, price, icon);

      article.addEventListener("click", () => {
        if (confirm(MESSAGES.ADD_CART(study.title))) {
          handleClickStudy(study);
        }
      });

      li.appendChild(article);
      ul.appendChild(li);
    }
    studySection.appendChild(ul);
  });
};

// 네비게이션 클릭 이벤트 핸들러
const handleClickNav = (event) => {
  const select = event.target.textContent;
  if (select === "전체") {
    selectPart = "all";
  } else if (select === "공통") {
    selectPart = "common";
  } else if (select === "웹파트") {
    selectPart = "web";
  } else if (select === "서버파트") {
    selectPart = "server";
  }
  renderStudyList();
};

const init = () => {
  navItems.forEach((item) => {
    item.addEventListener("click", handleClickNav);
  });
  renderStudyList();
};

init();
