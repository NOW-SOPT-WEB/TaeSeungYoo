import { BANNER_IMAGES } from "./constants.js";

const banner = document.querySelector(".banner");

const renderBanner = () => {
  const ulFirst = document.createElement("ul");
  ulFirst.className = "banner__images banner__images--first";
  const ulSecond = document.createElement("ul");
  ulSecond.className = "banner__images banner__images--second";

  BANNER_IMAGES.forEach((image) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = image;
    img.alt = "study-thumbnail";
    img.className = "banner__image";
    li.appendChild(img);
    ulFirst.appendChild(li);
    ulSecond.appendChild(li.cloneNode(true));
  });

  banner.appendChild(ulFirst);
  banner.appendChild(ulSecond);
};

renderBanner();
