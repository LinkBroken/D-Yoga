import handleBurgerBtnClick from "./burgerBtnClickHandler.js"
import { displayCategories } from "./displayCategoriesData.js"
import { displayPoses } from "./displayPosesData.js"
import { hamburgerBtn } from "./elementSelectors.js"

hamburgerBtn?.addEventListener("click", handleBurgerBtnClick);

displayCategories()
displayPoses()