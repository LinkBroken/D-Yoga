import { burgerBtnClickHandler } from "./interfaces.js";

export const handleBurgerBtnClick: burgerBtnClickHandler = function (navLinks: Element): void {
  navLinks?.classList.toggle("show");
}