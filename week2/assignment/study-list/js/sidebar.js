const sidebarOpenBtn = document.querySelector(".header__right span");
const sidebarCloseBtn = document.querySelector(".sidebar__header span");
const wrapper = document.querySelector(".bg-wrapper");

const setBodyOverflow = (overflow) => {
  document.body.style.overflow = overflow;
};

const handleToggleSidebar = () => {
  const sidebar = document.querySelector(".sidebar");

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
