import { API_BASE, API_POSTS } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

const method = "post"; //or add it manually into the function..

//FROM OLIS YT
export async function sendPostToAPI(postData) {
  const sendPostURL = API_BASE + API_POSTS;
  const response = await fetchWithToken(sendPostURL, {
    method,
    body: JSON.stringify(postData),
  });
  const post = await response.json();
  // console.log("THE SENDING OF THIS POST TO THE API WAS SUCCESSFUL: ", post);

  if (post) {
    location.reload();
  }
  // return post;
}
