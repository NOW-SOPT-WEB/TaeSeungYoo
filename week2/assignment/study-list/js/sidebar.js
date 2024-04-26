import { Dom } from "../utils/index.js";

const sidebarOpenBtn = Dom.qs(".header__right span");
const sidebarCloseBtn = Dom.qs(".sidebar__header span");
const wrapper = Dom.qs(".bg-wrapper");

const setBodyOverflow = (overflow) => {
  document.body.style.overflow = overflow;
};

// 사이드바 열렸을 때 스크롤 제한
const handleToggleSidebar = () => {
  const sidebar = Dom.qs(".sidebar");

  if (sidebar.classList.contains("show-sidebar")) {
    setBodyOverflow("auto");
  } else {
    setBodyOverflow("hidden");
  }

  sidebar.classList.toggle("show-sidebar");
  sidebar.classList.toggle("hide-sidebar");
  wrapper.classList.toggle("hidden");
  wrapper.classList.toggle("visible");
};

sidebarOpenBtn.addEventListener("click", handleToggleSidebar);
sidebarCloseBtn.addEventListener("click", handleToggleSidebar);
wrapper.addEventListener("click", handleToggleSidebar);
