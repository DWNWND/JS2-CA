import { updatePostInAPI } from "../../api/requests/index.js";

export async function updatePostContent(event) {
  event.preventDefault();

  const form = event.target;

  if (form) {
    const formData = new FormData(form);
    const post = Object.fromEntries(formData.entries());
    post.id = form.name;

    updatePostInAPI(post);
  }
}
