export async function populateUpdateForm(updateForm) {
  const id = updateForm.name;

  if (updateForm) {
    const button = updateForm.querySelector("button");
    button.disabled = true;

    const requestModule = "../../api/httpRequests/index.mjs";
    const { getPostFromAPI } = await import(requestModule);
    const { title, body } = await getPostFromAPI(id);

    if (title) {
      updateForm.title.value = title;
    }
    if (body) {
      updateForm.body.value = body;
    }
    button.disabled = false;
  }
}
