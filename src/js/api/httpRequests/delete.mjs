import { removeUrlParameter } from "../../routes/urlParams/index.mjs";
import { API_BASE, API_POSTS } from "../../constants.mjs";
import { fetchWithToken } from "../apiCall.mjs";

export async function removePostFromAPI(id) {
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
    console.log(error);
  }
}
