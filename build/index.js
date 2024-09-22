import handleBurgerBtnClick from "./burgerBtnClickHandler.js";
import { displayCategories } from "./displayCategoriesData.js";
import { displayPoses } from "./displayPosesData.js";
import { hamburgerBtn } from "./elementSelectors.js";
hamburgerBtn === null || hamburgerBtn === void 0 ? void 0 : hamburgerBtn.addEventListener("click", handleBurgerBtnClick);
displayCategories();
displayPoses();
