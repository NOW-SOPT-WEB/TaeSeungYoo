import { PART_NAME } from "./constants.js";
import { Utils } from "../utils";

const table = document.querySelector(".cart-table");
const tbody = table.querySelector(".cart-table__body");
const checkboxAll = document.querySelector(".cart-table__checkbox-all");
const emptyTable = document.querySelector(".empty-table");
const checkCheckboxAll = (obj) => {
  const checkedList = Object.values(obj).map((study) => study.checked);
  checkboxAll.checked = checkedList.every((isCheck) => isCheck === true);
};
const handleClickCheckboxAll = (event) => {
  const checked = event.target.checked;
  const cartObj = JSON.parse(localStorage.getItem("cart")) ?? {};
  Object.keys(cartObj).forEach((key) => {
    cartObj[key].checked = checked;
  });
  localStorage.setItem("cart", JSON.stringify(cartObj));
  renderCartList();
};
const handleClickItemCheck = (event, id) => {
  const cartObj = JSON.parse(localStorage.getItem("cart"));
  cartObj[id].checked = event.target.checked;
  localStorage.setItem("cart", JSON.stringify(cartObj));
  checkCheckboxAll(cartObj);
};

const handleDeleteItem = (id, price) => {
  const cartObj = JSON.parse(localStorage.getItem("cart"));
  delete cartObj[id];
  localStorage.setItem("cart", JSON.stringify(cartObj));
  renderCartList();
};

export const renderCartList = () => {
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  const cartObj = JSON.parse(localStorage.getItem("cart"));
  if (cartObj && Object.keys(cartObj).length !== 0) {
    Object.entries(cartObj).forEach(([key, value]) => {
      const { image_url, title, price, part, checked } = value;
      const tr = document.createElement("tr");
      tr.className = "cart-table__row";
      tr.dataset.id = key;

      const td_checkbox = document.createElement("td");
      const label = document.createElement("label");
      const td_image = document.createElement("td");
      const td_title = document.createElement("td");
      const td_price = document.createElement("td");
      const td_part = document.createElement("td");
      const td_deleteBtn = document.createElement("td");
      td_checkbox.className = "cart-table__checkbox";
      td_image.className = "cart-table__image";
      td_title.className = "cart-table__title";
      td_title.textContent = title;
      td_price.className = "cart-table__price";
      td_price.textContent = `${Utils.numberWithCommas(price)}원`;
      td_part.className = "cart-table__part";
      td_part.textContent = PART_NAME[part];
      td_deleteBtn.className = "cart-table__delete";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.id = key;
      input.addEventListener("click", (event) => {
        handleClickItemCheck(event, key);
      });
      input.checked = checked;
      td_checkbox.appendChild(input);

      label.htmlFor = key;
      const img = document.createElement("img");
      img.alt = "study-thumbnail";
      img.src = image_url;
      label.appendChild(img);
      td_image.appendChild(label);

      const button = document.createElement("button");
      const icon = document.createElement("span");
      icon.className = "material-symbols-outlined";
      icon.textContent = "delete";
      button.appendChild(icon);
      button.addEventListener("click", () => {
        if (confirm(`${title}을(를) 삭제하시겠습니까?`))
          handleDeleteItem(key, price);
      });
      td_deleteBtn.append(button);

      tr.appendChild(td_checkbox);
      tr.appendChild(td_image);
      tr.appendChild(td_title);
      tr.appendChild(td_price);
      tr.appendChild(td_part);
      tr.appendChild(td_deleteBtn);
      tbody.appendChild(tr);

      checkCheckboxAll(cartObj);
    });
  } else {
    emptyTable.classList.add("flex");
    emptyTable.classList.remove("hidden");
    checkboxAll.checked = false;
  }
};

checkboxAll.addEventListener("click", handleClickCheckboxAll);
renderCartList();
