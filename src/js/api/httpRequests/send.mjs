import { API_BASE, API_POSTS, newPostErrorContainer } from "../../constants.mjs";
import { fetchWithToken } from "../apiCall.mjs";
import { displayMessage } from "../../templates/userFeedback/index.mjs";

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
      displayMessage(errorMessage, newPostErrorContainer);
    } else if (response.status >= 401) {
      errorMessage = "An unexpected error occured, please try again later";
      displayMessage(errorMessage, newPostErrorContainer);
      throw new Error("Unknown error - investigate");
    }
  } catch (error) {
    console.log(error);
  }
}
