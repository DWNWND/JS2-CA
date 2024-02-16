import {updatePostInAPI } from "../../api/requests/index.js";

export async function updatePostContent(event) {
  event.preventDefault();

  const form = event.target;

  if (form) {
    const formData = new FormData(form);
    const post = Object.fromEntries(formData.entries());
    post.id = form.name;

    console.log("THIS IS THE POST THAT IS REQUESTED THE REQUESTED UPDATE: ", post);

    //send it to the api
    updatePostInAPI(post);
  }
}
