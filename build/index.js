import { handleBurgerBtnClick } from "./burgerBtnClickHandler.js";
import { displayCategories } from "./displayCategoriesData.js";
import { displayPoses } from "./displayPosesData.js";
import { hamburgerBtn, navLinks } from "./elementSelectors.js";
hamburgerBtn === null || hamburgerBtn === void 0 ? void 0 : hamburgerBtn.addEventListener("click", function () {
    navLinks && handleBurgerBtnClick(navLinks);
});
window.addEventListener("resize", function () {
    const availabeNavLinks = document.querySelector(".show");
    if (window.innerWidth >= 800 && availabeNavLinks) {
        navLinks === null || navLinks === void 0 ? void 0 : navLinks.classList.remove("show");
    }
});
displayCategories();
displayPoses();
//kevin powell
