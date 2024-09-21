var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchCat } from "./fetchCategories.js";
import { categories } from "./elementSelectors.js";
export function displayCategories() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categoriesData = yield fetchCat();
            categoriesData.splice(0, 3).map((category, index) => {
                const categoryElement = document.createElement('div');
                categoryElement.classList.add('category');
                const nameElement = document.createElement('h2');
                nameElement.classList.add('category__name');
                nameElement.textContent = category.category_name;
                categoryElement.appendChild(nameElement);
                const descriptionElement = document.createElement('p');
                descriptionElement.classList.add('category__description');
                descriptionElement.textContent = category.category_description;
                categoryElement.appendChild(descriptionElement);
                const imageElement = document.createElement("img");
                imageElement.alt = category.category_name;
                imageElement.src = category.poses[index].url_svg;
                categoryElement.appendChild(imageElement);
                categories === null || categories === void 0 ? void 0 : categories.appendChild(categoryElement);
            });
        }
        catch (error) {
            alert("Error fetching categories: " + error);
        }
    });
}
