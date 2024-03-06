import { removeUrlParameter } from "../urlParams/index.mjs";

/**
 * Checkes to see if theres a element with the class ".modal" (a modal-element) in the HTML, and if there is, select it and add a close-btn to it.
 * If you click on the close-btn it removes the searchParam called "post-id" and removes the element with the class ".modal" (the modal element) from the DOM.
 */
export function removeModals() {
  if (document.body.contains(document.querySelector(".modal"))) {
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".post-close-btn");

    if (document.body.contains(document.querySelector(".modal-backdrop"))) {
      const modalBackdrop = document.querySelector(".modal");
      closeBtn.addEventListener("click", () => {
        removeUrlParameter("post-id");
        modal.remove();
        modalBackdrop.remove();
      });

      closeBtn.addEventListener("click", () => {
        removeUrlParameter("post-id");
        modal.remove();
      });
    }
  } else {
    console.log("there's no modals to remove");
  }
}
