/**
 * Selects all btns with the class ".modalBtn" (open modal btns) that have been generated.
 * Loops through them, and makes an id-spesific modal if the btn is clicked.
 *
 * @uses makeModal To generate a new modal-element to be passed it into a bootstrap modal element
 * @uses insertUrlParam To add the id of the post to the url param when modal is open
 * @uses removeModals To add a close btn that removes the generated modal from the DOM and the url param with the spesific post id from the url.
 */

export async function openPostAsModal(openModalBtn) {
  openModalBtn.addEventListener("click", async (event) => {
    openModalBtn.innerText = "loading";
    const id = event.target.id;

    const modalModule = "../../templates/modals/index.mjs";
    const urlParamModule = "../../routes/urlParams/index.mjs";
    const listenerModule = "./index.mjs";

    const { renderModal } = await import(modalModule);
    const { insertUrlParam } = await import(urlParamModule);
    const { removeModals } = await import(listenerModule);

    await renderModal(id);

    let myModal = new bootstrap.Modal(document.getElementById(`modal-${id}`), {});
    myModal.toggle();

    openModalBtn.innerText = "open";

    insertUrlParam(id);
    removeModals();
  });
}