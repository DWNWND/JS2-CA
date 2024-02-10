import { sendPostToAPI } from "../../api/requests/index.js";

export async function newPostContent(event) {
  event.preventDefault();

  const form = event.target;

  if (form) {
    const formData = new FormData(form);
    const post = Object.fromEntries(formData.entries());

    console.log("THIS IS THE POST THAT IS REQUESTED TO SEND TO THE API: ", post);

    //send it to the api
    sendPostToAPI(post);
  }

  //add an reload/update page-ting
}
