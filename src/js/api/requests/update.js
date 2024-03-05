import { API_BASE, API_POSTS } from "../../constants.js";
import { displayErrorMessage } from "../../templates/errorMessage/index.js";
import { fetchWithToken } from "../fetchWithToken.js";

let errorMessage;

function removeError() {
  const updatePostErrorContainer = document.querySelector(".update-post-error-message");
  updatePostErrorContainer.innerText = "";
}

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
      displayErrorMessage(errorMessage, updatePostErrorContainer);
      setTimeout(removeError, 5000);
    } else {
      errorMessage = "An unexpected error occured, please try again later";
      updatePostErrorContainer.classList.add("error");
      displayErrorMessage(errorMessage, updatePostErrorContainer);
      throw new Error("Couln't update post", post);
    }
  } catch (error) {
    console.log(error);
  }
}
