import { poseClickHandler } from "./interfaces";


export const handlePoseClick: poseClickHandler = function (element: HTMLDivElement, poseImage: string): void {

  const modal = document.createElement("dialog");
  modal.classList.add("modal");

  
  const modalText = document.createElement("p");
  const modalTextLength = 150;

  modalText.textContent = element.innerHTML.slice(0,modalTextLength);
  modalText.classList.add("modal-text");
  modal.appendChild(modalText);

  const modalPoseImg= document.createElement("img");
  modalPoseImg.src=poseImage
  
  const exitIcon = document.createElement("img");
  exitIcon.classList.add("modal-exit-btn")
  exitIcon.src="https://www.svgrepo.com/download/80301/cross.svg";



  modal.appendChild(modalPoseImg)
  modal.appendChild(exitIcon)
  
  
  const rect = element.getBoundingClientRect();
  modal.style.top = `${rect.top + window.scrollY + 40}px`;
  modal.style.left = `${rect.right + window.scrollX}px`;


  document.body.appendChild(modal);

  exitIcon.addEventListener("click", (event) => {
    if (event.target === exitIcon) {
      modal.close();
      document.body.removeChild(modal);
    }
  });
}
