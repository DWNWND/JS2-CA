import { getPostFromAPI, removePostFromAPI } from "../../api/requests/index.js";
import { updatePostContent } from "../../ui/events/index.js";


// const deleteBtn = document.createElement("button");
// deleteBtn.classList.add("btn", "btn-primary", "btn-lg", "w-100");
// deleteBtn.innerText = "delete post";
// deleteBtn.addEventListener("click", async (event) => {
//   removePostFromAPI(postData.id);
// });


export function updateForm(id) {
  const form = document.createElement("form");
  form.classList.add("container-sm", "mt-2");
  form.name = id;
  form.id = "updatePost";

  form.innerHTML = `
  <div class="mb-3">
    <input type="text" class="form-control" id="title" name="title" placeholder="Post title" />
    <label for="title" class="text-primary d-none">Post title</label>
  </div>
  <div class="mb-3">
    <input type="text" class="form-control" id="body" name="body" placeholder="Post body" />
    <label for="body" class="text-primary d-none">Post body</label>
  </div>`;

  const updateBtn = document.createElement("button");
  updateBtn.classList.add("btn", "btn-primary", "btn-lg", "w-100");
  updateBtn.innerText = "update post";
  updateBtn.type = "submit";

  form.append(updateBtn );
  form.addEventListener("submit", updatePostContent);

  return form;
}

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
