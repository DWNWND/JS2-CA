import { API_BASE, API_POSTS } from "../../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

const method = "put"; //or add it manually into the function..

//FROM OLIS YT
export async function updatePostInAPI(postData) {
  if (!postData.id) {
    throw new Error("Update is missing a postID");
  }

  const updatePostURL = `${API_BASE}${API_POSTS}/${postData.id}`;
  const response = await fetchWithToken(updatePostURL, {
    method,
    body: JSON.stringify(postData),
  });

  if (response.ok) {
    //add a message telling user it was successful?
    // const post = await response.json();
    location.reload();
  } else {
    throw new Error("Couln't update post", post);
  }
  return post;
}
