import { navMenu } from "./elementSelectors.js";
export default function handleBurgerBtnClick() {
    navMenu === null || navMenu === void 0 ? void 0 : navMenu.classList.toggle("show");
}
