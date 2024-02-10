import { newPostContent, populateUpdateForm, updatePostContent } from "../events/index.js";

export function postListener() {
  populateUpdateForm();
  document.forms.createPost.addEventListener("submit", newPostContent);
  document.forms.updatePost.addEventListener("submit", updatePostContent);
}
