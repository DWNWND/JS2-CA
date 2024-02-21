import { newPost } from "../events/index.js";

export function publishNewPost() {
  document.forms.newPost.addEventListener("submit", newPost);
}