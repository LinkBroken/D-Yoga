import { navMenu } from "./elementSelectors.js";

export default function handleBurgerBtnClick() {
  navMenu?.classList.toggle("show")
}