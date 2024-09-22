
import { fetchCat } from "./fetchCategories.js";
import { Categories, Category } from "./interfaces";
import { categories } from "./elementSelectors.js";



export async function displayCategories() {

    try {
        const categoriesData: Awaited<Categories<Category>> = await fetchCat();
        const elementNumbers = 3;
        categoriesData.splice(0, elementNumbers).map((category, index: number) => {
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
            imageElement.src = category.poses[index].url_svg
            categoryElement.appendChild(imageElement)
            categories?.appendChild(categoryElement);
        });
    } catch (error) {
        alert("Error fetching categories: " + error);
    }
}
