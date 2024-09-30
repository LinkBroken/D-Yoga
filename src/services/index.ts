import { handleBurgerBtnClick } from "./burgerBtnClickHandler.js"
import { displayCategories } from "./displayCategoriesData.js"
import { displayPoses } from "./displayPosesData.js"
import { hamburgerBtn, navLinks } from "./elementSelectors.js"

hamburgerBtn?.addEventListener("click", function () {
  navLinks && handleBurgerBtnClick(navLinks)
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 800 && document.querySelector(".show")) {
    navLinks?.classList.remove("show")

  }
})
displayCategories()
displayPoses()

//kevin powell