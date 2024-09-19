import { Categories, Poses } from "./interfaces";

async function fetchCat(): Promise<Categories<Poses>> {
    const data: Awaited<Categories<Poses>> = await fetch("https://yoga-api-nzy4.onrender.com/v1/categories").then(Response => Response?.json()).then(data => data)

    return data
}


