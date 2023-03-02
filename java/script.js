const MENU_ACTIVE_CLASS_NAME = "visible-element";
const ICON_HIDDEN_CLASS_NAME = "icon-hidden";
const ICON_VISIBLE_CLASS_NAME = "icon-visible";

/*menu*/
const myMenu = document.querySelector("#my-menu");

const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");
const closeMenuBtns = document.querySelectorAll(".link-menu");

openMenuBtn.addEventListener("click", () => {
  myMenu.classList.add(MENU_ACTIVE_CLASS_NAME);
});

openMenuBtn.addEventListener("click", () => {
  closeMenuBtn.classList.add(ICON_VISIBLE_CLASS_NAME);
});

openMenuBtn.addEventListener("click", () => {
  openMenuBtn.classList.add(ICON_HIDDEN_CLASS_NAME);
});

closeMenuBtn.addEventListener("click", () => {
  myMenu.classList.remove(MENU_ACTIVE_CLASS_NAME);
});
closeMenuBtn.addEventListener("click", () => {
  closeMenuBtn.classList.remove(ICON_VISIBLE_CLASS_NAME);
});
closeMenuBtn.addEventListener("click", () => {
  openMenuBtn.classList.remove(ICON_HIDDEN_CLASS_NAME);
});

const closeMyMenu = () => {
  myMenu.classList.remove(MENU_ACTIVE_CLASS_NAME);
};
const hideCloseBtn = () => {
  closeMenuBtn.classList.remove(ICON_VISIBLE_CLASS_NAME);
};
const showMenuBtn = () => {
  openMenuBtn.classList.remove(ICON_HIDDEN_CLASS_NAME);
};

closeMenuBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeMyMenu();
    hideCloseBtn();
    showMenuBtn();
  });
});

/*popup*/
const myMailForm = document.querySelector("#modal-mail-form");

const openModalBtn = document.querySelector("#open-mail-form");
const footerOpenModalBtn = document.querySelector("#open-mail-form-footer");
const closeModalBtn = document.querySelector("#close-mail-form");

openModalBtn.addEventListener("click", () => {
  myMailForm.classList.add(MENU_ACTIVE_CLASS_NAME);
});
footerOpenModalBtn.addEventListener("click", () => {
  myMailForm.classList.add(MENU_ACTIVE_CLASS_NAME);
});
closeModalBtn.addEventListener("click", () => {
  myMailForm.classList.remove(MENU_ACTIVE_CLASS_NAME);
});
