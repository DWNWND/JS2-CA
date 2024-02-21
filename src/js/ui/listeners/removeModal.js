import { removeUrlParameter } from "../urlParams/index.js";

export function removeModals() {
  if (document.body.contains(document.querySelector(".modal"))) {
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".btn-close");
    closeBtn.addEventListener("click", () => {
      removeUrlParameter("post-id");
      modal.remove();
    });
  } else {
    console.log("there's no modals to remove"); //FIX THIS
  }
}