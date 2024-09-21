var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { posesSection } from "./elementSelectors.js";
import { fetchPoses } from "./fetchPoses.js";
import { handlePoseClick } from "./poseClickHandler.js";
export function displayPoses() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fetchPoses();
            data.splice(0, 15).map((pose) => {
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
                detailsButton.textContent = "See more ...";
                detailsButton.addEventListener("click", () => {
                    handlePoseClick(benefitsElement, pose.url_svg);
                });
                poseElement.appendChild(detailsButton);
                posesSection === null || posesSection === void 0 ? void 0 : posesSection.appendChild(poseElement);
            });
        }
        catch (error) {
            alert("Error fetching poses: " + error);
        }
    });
}
