import { API_BASE, API_POSTS } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

const method = "put"; //or add it manually into the function..

//FROM OLIS YT
export async function updatePostInAPI(postData) {
  if (!postData.id) {
    throw new Error("Update is missing a postID");
  }
  const updatePostURL = `${API_BASE}${API_POSTS}/${postData.id}`;
  const respons = await fetchWithToken(updatePostURL, {
    method,
    body: JSON.stringify(postData),
  });
  const post = await respons.json();

  console.log("THIS IS THE POST THAT WAS UPDATED: ", post);

  return post;
}
