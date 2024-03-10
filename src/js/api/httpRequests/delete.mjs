import { removeUrlParameter } from "../../urlParams/index.mjs";
import { API_BASE, API_POSTS } from "../../constants.mjs";
import { fetchWithToken } from "../apiCall.mjs";
import { displayMessage } from "../../templates/userFeedback/displayMessage.mjs";

let errorMessage;

export async function removePostFromAPI(id) {
  const updatePostErrorContainer = document.querySelector(".update-post-error-message");
  if (!id) {
    throw new Error("Delete is missing a postID");
  }
  try {
    const removePostURL = `${API_BASE}${API_POSTS}/${id}`;
    const response = await fetchWithToken(removePostURL, {
      method: "DELETE",
    });
    if (response.ok) {
      removeUrlParameter("post-id");
      location.reload();
    } else {
      throw new Error("Something went wrong when contacting the API");
    }
  } catch (error) {
    errorMessage = error;
    displayMessage(errorMessage, updatePostErrorContainer);
    console.log(error);
  }
}
