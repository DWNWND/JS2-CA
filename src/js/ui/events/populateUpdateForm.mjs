import { getPostFromAPI } from "../../api/requests/index.mjs";

export async function populateUpdateForm(updateForm) {
  const id = updateForm.name;

  if (updateForm) {
    const button = updateForm.querySelector("button");
    button.disabled = true;

    const postPopulation = await getPostFromAPI(id);

    if (postPopulation.title) {
      updateForm.title.value = postPopulation.title;
    }
    if (postPopulation.body) {
      updateForm.body.value = postPopulation.body;
    }
    button.disabled = false;
  }
}
