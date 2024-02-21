import { getPostFromAPI } from "../../api/requests/index.js";

export async function populateUpdateForm(updateForm) {
  const id = updateForm.name

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
    if (!postPopulation.body || !postPopulation.title) {
      console.log("the post is lacking some content");
    }

    button.disabled = false;
  }
}
