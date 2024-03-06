import { newPost } from "../events/index.mjs";

export function publishNewPost() {
  document.forms.newPost.addEventListener("submit", newPost);
}
