import { removeUrlParameter } from "../../ui/urlParams/index.mjs";
import { API_BASE, API_POSTS } from "../../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const method = "delete"; //or add it manually into the function..

export async function removePostFromAPI(id) {
  if (!id) {
    throw new Error("Delete is missing a postID");
  }
  try {
    const removePostURL = `${API_BASE}${API_POSTS}/${id}`;
    const response = await fetchWithToken(removePostURL, {
      method,
    });

    if (response.ok) {
      removeUrlParameter("post-id");
      location.reload();
    } else {
      throw new Error("Something went wrong when contacting the API");
    }
  } catch (error) {
    // Error;
    console.log(error);
  }
}
