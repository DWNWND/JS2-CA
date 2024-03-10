import { API_BASE, API_POSTS } from "../../constants.mjs";
import { displayMessage } from "../../templates/userFeedback/displayMessage.mjs";
import { fetchWithToken } from "../apiCall.mjs";

let errorMessage;

export async function updatePostInAPI(postData) {
  try {
    const updatePostErrorContainer = document.querySelector(".update-post-error-message");

    if (!postData.id) {
      throw new Error("Update is missing a postID");
    }

    const updatePostURL = `${API_BASE}${API_POSTS}/${postData.id}`;
    const response = await fetchWithToken(updatePostURL, {
      method: "PUT",
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      errorMessage = "The post was updated";
      updatePostErrorContainer.classList.add("success");
      displayMessage(errorMessage, updatePostErrorContainer);
      setTimeout(function () {
        location.reload();
      }, 2000);
    } else {
      errorMessage = "An unexpected error occured, please try again later";
      updatePostErrorContainer.classList.add("error");
      displayMessage(errorMessage, updatePostErrorContainer);
      throw new Error("Couln't update post", post);
    }
  } catch (error) {
    console.log(error);
  }
}
