import { sendPostToAPI } from "../../api/httpRequests/send.mjs";

export async function newPost(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const post = Object.fromEntries(formData.entries());

  sendPostToAPI(post);
}
