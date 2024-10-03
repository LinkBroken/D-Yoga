import { handleBurgerBtnClick } from "./burgerBtnClickHandler.js"
import { displayCategories } from "./displayCategoriesData.js"
import { displayPoses } from "./displayPosesData.js"
import { hamburgerBtn, navLinks } from "./elementSelectors.js"

hamburgerBtn?.addEventListener("click", function () {
  navLinks && handleBurgerBtnClick(navLinks)
});

window.addEventListener("resize", function () {
  const availabeNavLinks = document.querySelector(".show");
  if (window.innerWidth >= 800 && availabeNavLinks) {
    navLinks?.classList.remove("show")

  }
})
displayCategories()
displayPoses()

//kevin powell