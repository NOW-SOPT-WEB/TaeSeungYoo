import { BANNER_IMAGES } from "./constants.js";
import { Dom } from "../utils/index.js";

const banner = Dom.qs(".banner");

// 배너 이미지를 렌더링하는 함수
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

  banner.append(ulFirst, ulSecond);
};

renderBanner();
