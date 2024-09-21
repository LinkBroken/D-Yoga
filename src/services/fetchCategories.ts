import { Categories, Category } from "./interfaces";

export async function fetchCat(): Promise<Categories<Category>> {
    const data: Awaited<Categories<Category>> = await fetch("https://yoga-api-nzy4.onrender.com/v1/categories").then(Response => Response?.json()).then(data => data)
    return data
}


