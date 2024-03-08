import { removeUrlParameter } from "../../routes/urlParams/index.mjs";
/**
 * Checkes to see if theres a element with the class ".modal" (a modal-element) in the HTML, and if there is, select it and add a close-btn to it.
 * If you click on the close-btn it removes the searchParam called "post-id" and removes the element with the class ".modal" (the modal element) from the DOM.
 */

export function removeModalFromDOM() {
  const modal = document.querySelector(".modal");
  const modalBackdrop = document.querySelector(".modal-backdrop");
  modal.remove();
  modalBackdrop.remove();
  removeUrlParameter("post-id");
}



// export function closeModal(closeBtn, postIsUpdated) {
//   if (document.body.contains(document.querySelector(".modal"))) {
//     // const closeBtn = document.querySelector(".post-close-btn");

//     if (postIsUpdated) {
//       closeBtn.addEventListener("click", (event) => {
//         event.preventDefault();
//         removeModalFromDOM();
//         console.log("something");
//       });
//     }
//     if (!postIsUpdated) {
//       closeBtn.addEventListener("click", (event) => {
//         event.preventDefault();
//         removeModalFromDOM();
//         console.log("something else");
//       });
//     }
//   } else {
//     console.log("there's no modals to remove");
//   }
// }
