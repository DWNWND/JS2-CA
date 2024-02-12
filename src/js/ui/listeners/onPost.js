// import { makeModalByID } from "../../templates/modals/index.js";
import { newPostContent, updatePostContent } from "../events/index.js";


export function postListener() {
  document.forms.newPost.addEventListener("submit", newPostContent);
  // document.forms.updatePost.addEventListener("submit", updatePostContent);
}
