import { updatePostContent } from "../../ui/events/index.mjs";

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
  updateBtn.classList.add("btn", "btn-outline-warning", "btn-lg", "w-100", "update-post-btn");
  updateBtn.innerText = "update post";
  updateBtn.type = "submit";

  form.append(updateBtn);
  form.addEventListener("submit", updatePostContent);

  return form;
}
