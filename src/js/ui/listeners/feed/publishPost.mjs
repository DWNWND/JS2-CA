import { newPost } from "../../events/feed/newPost.mjs";

export function publishNewPost() {
  document.forms.newPost.addEventListener("submit", newPost);
}
