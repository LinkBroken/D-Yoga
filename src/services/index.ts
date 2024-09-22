import { handleBurgerBtnClick } from "./burgerBtnClickHandler.js"
import { displayCategories } from "./displayCategoriesData.js"
import { displayPoses } from "./displayPosesData.js"
import { hamburgerBtn, navLinks } from "./elementSelectors.js"

hamburgerBtn?.addEventListener("click", () => {
  navLinks && handleBurgerBtnClick(navLinks)
});

displayCategories()
displayPoses()

//kevin powell