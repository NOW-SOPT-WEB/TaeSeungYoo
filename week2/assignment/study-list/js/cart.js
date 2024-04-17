import { PART_NAME } from "./constants.js";
import { Utils } from "../utils";

const table = document.querySelector(".cart-table");
const tbody = table.querySelector(".cart-table__body");

const handleDeleteItem = (id, price) => {
  const cartObj = JSON.parse(localStorage.getItem("cart"));
  delete cartObj[id];
  localStorage.setItem("cart", JSON.stringify(cartObj));
  const totalPrice = Number(localStorage.getItem("totalPrice"));
  localStorage.setItem("totalPrice", (totalPrice - price).toString());
  renderCartList();
};

const renderCartList = () => {
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  const cartObj = JSON.parse(localStorage.getItem("cart"));
  if (cartObj || Object.keys(cartObj).length !== 0) {
    Object.entries(cartObj).forEach(([key, value]) => {
      const { image_url, title, price, part } = value;
      const tr = document.createElement("tr");
      tr.className = "cart-table__row";
      tr.dataset.id = key;

      const td_checkbox = document.createElement("td");
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
      td_checkbox.appendChild(input);

      const img = document.createElement("img");
      img.alt = "study-thumbnail";
      img.src = image_url;
      td_image.appendChild(img);

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
    });
  }
};

renderCartList();