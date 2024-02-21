import { removeUrlParameter } from "../../ui/urlParams/index.js";
import { API_BASE, API_POSTS } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

const method = "delete"; //or add it manually into the function..

//FROM OLIS YT
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
    }
  } catch {
    Error;
    console.log(Error);
  }
}
