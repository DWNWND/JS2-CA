import { makeModalByID } from "../../templates/modals/index.js";
import { newPostContent, updatePostContent } from "../events/index.js";

export function postListener() {
  document.forms.newPost.addEventListener("submit", newPostContent);
  // document.forms.updatePost.addEventListener("submit", updatePostContent);
}

function checkForModals() {
  if (document.body.contains(document.querySelector(".modal"))) {
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".btn-close");
    closeBtn.addEventListener("click", () => {
      modal.remove();
    });
  } else {
    console.log("this some bullshit");
  }
}

export async function openModal() {
  const modalBtn = document.querySelectorAll(".modalBtn");
  const modalContainer = document.querySelector(".modal-container");

  for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener("mousedown", async (event) => {
      const id = event.target.id;
      const modal = await makeModalByID(id);
      modalContainer.append(modal);

      let myModal = new bootstrap.Modal(document.getElementById(`modal-${id}`), {});
      myModal.toggle();

      checkForModals();
    });
  }
}

//SAME SAME/DIFFERENT::::
// export async function openModal() {
//   // const modalBtn = await btn();
//   const modalBtn = document.querySelectorAll(".modalBtn");
//   const modalContainer = document.querySelector(".modal-container");

//   modalBtn.forEach(async function (mod) {
//     mod.addEventListener("click", async (event) => {
//       const id = event.target.id;
//       // console.log(id);
//       const modal = await makeModalByID(id);
//       modalContainer.append(modal);
//       // let myModal = new bootstrap.Modal(document.getElementById(`modal-${id}`), {});
//       // myModal.show();
//     });
//   });
// }
