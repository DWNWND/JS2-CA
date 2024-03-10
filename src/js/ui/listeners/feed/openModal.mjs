/**
 * Loops through the open-modal btns and makes an id-spesific modal if the btn is clicked.
 *
 * @param {string} openModalBtn the open-modal btn html elements
 * @uses renderModal To generate a new modal-element to be passed into a bootstrap modal element
 * @uses insertUrlParam To add the id of the post to the url param when the modal is open
 */
export async function openPostAsModal(openModalBtn) {
  openModalBtn.addEventListener("click", async (event) => {
    openModalBtn.innerText = "loading";
    const id = event.target.id;

    const modalModule = "../../../templates/modals/renderModal.mjs";
    const urlParamModule = "../../../urlParams/index.mjs";

    const { renderModal } = await import(modalModule);
    const { insertUrlParam } = await import(urlParamModule);

    await renderModal(id);

    let newModal = new bootstrap.Modal(document.getElementById(`modal-${id}`), {});
    newModal.toggle();

    openModalBtn.innerText = "open";

    insertUrlParam("post-id", id);
  });
}
