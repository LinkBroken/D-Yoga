import {  posesSection } from "./elementSelectors.js";
import { fetchPoses } from "./fetchPoses.js";
import { Poses, Pose } from "./types.js";
import { handlePoseClick } from "./poseClickHandler.js"

export async function displayPoses() {
    try {
        const data: Awaited<Poses> = await fetchPoses();
        const posesCount = 15
        data.splice(0, posesCount).map((pose: Pose) => {
            const poseElement = document.createElement('div');
            poseElement.classList.add('pose');

            const nameElement = document.createElement('h2');
            nameElement.classList.add('pose__name');
            nameElement.textContent = pose.english_name;
            poseElement.appendChild(nameElement);

            const imageElement = document.createElement('img');
            imageElement.classList.add('pose__image');
            imageElement.src = pose.url_svg;
            imageElement.alt = pose.english_name;
            poseElement.appendChild(imageElement);

            const benefitsElement = document.createElement('p');
            benefitsElement.classList.add('pose__benefits');
            benefitsElement.textContent = pose.pose_benefits;
            poseElement.appendChild(benefitsElement);

            const detailsButton = document.createElement("button");
            detailsButton.classList.add("more-details-button");
            detailsButton.textContent = "See more ..."
            detailsButton.addEventListener("click", () => {
                !document.querySelector(".modal") && handlePoseClick(benefitsElement, pose.url_svg)
            })


            poseElement.appendChild(detailsButton)

            posesSection?.appendChild(poseElement)

        })
    } catch (error) {
        alert("Error fetching poses: " + error);
    }
}


