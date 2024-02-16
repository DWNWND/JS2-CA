import { makeModalByID } from "../../templates/modals/index.js";

function removeModals() {
  if (document.body.contains(document.querySelector(".modal"))) {
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".btn-close");
    closeBtn.addEventListener("click", () => {
        modal.remove();
    });
  } else {
    console.log("i dont know");
  }
}

export async function openPostAsModal() {
  const modalBtn = document.querySelectorAll(".modalBtn");
  const modalContainer = document.querySelector(".modal-container");

  for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener("mousedown", async (event) => {
      const id = event.target.id;
      const modal = await makeModalByID(id);
      modalContainer.append(modal);

      let myModal = new bootstrap.Modal(document.getElementById(`modal-${id}`), {});
      myModal.toggle();

      removeModals();
    });
  }
}