import { STUDY_LIST, PART_NAME, FILTER_NAME } from "./constants.js";
import { Utils } from "../utils";

const studySection = document.querySelector(".study-section");
const navItems = document.querySelectorAll(".nav__item");
let selectPart = null; // all, common, web, server

const handleClickStudy = (study) => {
  const { id, title, image_url, part, price } = study;
  const studyObj = JSON.stringify({
    title,
    image_url,
    part,
    price,
  });
  localStorage.setItem(id, studyObj);
};

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

      article.appendChild(img);
      article.appendChild(h3);
      article.appendChild(part);
      article.appendChild(price);
      article.appendChild(icon);

      article.addEventListener("click", () => {
        if (confirm(`${study.title}를(을) 장바구니에 담으시겠어요?`)) {
          handleClickStudy(study);
        }
      });

      li.appendChild(article);
      ul.appendChild(li);
    }
    studySection.appendChild(ul);
  });
};

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
