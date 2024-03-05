import { API_BASE, API_POSTS, newPostErrorContainer } from "../../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";
import { displayErrorMessage } from "../../templates/errorMessage/index.js";

let errorMessage;

//FROM OLIS YT
export async function sendPostToAPI(postData) {
  try {
    const response = await fetchWithToken(API_BASE + API_POSTS, {
      method: "POST",
      body: JSON.stringify(postData),
    });
    if (response.status === 201) {
      location.reload();
    }
    if (response.status === 400) {
      errorMessage = "You are trying to post an empty post.";
      displayErrorMessage(errorMessage, newPostErrorContainer);
    } else if (response.status >= 401) {
      errorMessage = "An unexpected error occured, please try again later";
      displayErrorMessage(errorMessage, newPostErrorContainer);
      throw new Error("Unknown error - investigate");
    }
  } catch (error) {
    console.log(error);
  }
}
