import { newPost } from "../events/newPost.mjs";

export function publishNewPost() {
  document.forms.newPost.addEventListener("submit", newPost)
}
