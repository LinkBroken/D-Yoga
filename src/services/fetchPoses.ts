import { Poses } from "./types";

export async function fetchPoses(): Promise<Poses> {
    const data: Awaited<Poses> = await fetch("https://yoga-api-nzy4.onrender.com/v1/poses", { cache: "force-cache" }).then(Response => Response.json()).then(data => data)
    return data
}


