import { STUDY_LIST, PART_NAME, FILTER_NAME } from "./constants.js";

const studySection = document.querySelector(".study-section");
const navItems = document.querySelectorAll(".nav__item");
let selectPart = null; // all, common, web, server

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
      price.textContent = `참가비: ${study.price}원`;

      icon.className = "material-symbols-outlined study__like";
      icon.textContent = "favorite";

      article.appendChild(img);
      article.appendChild(h3);
      article.appendChild(part);
      article.appendChild(price);
      article.appendChild(icon);

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
