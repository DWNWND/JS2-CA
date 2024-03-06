import { fetchWithToken } from "../fetchWithToken.mjs";
import { displayErrorMessage } from "../../templates/errorMessage/errorMessage.mjs";
import { API_BASE, API_POSTS, authorParam, commentsParam, reactionsParam, limitParam, postLimit, loader, loadMoreBtn } from "../../constants.mjs";
import { load } from "../../storage/index.mjs";

export async function getPostsFromAPI(page) {
  try {
    const token = load("token");
    if (token) {
      const getPostsURL = `${API_BASE}${API_POSTS}?${authorParam}&${commentsParam}&${reactionsParam}&${limitParam}=${postLimit}&page=${page}`;
      const response = await fetchWithToken(getPostsURL);

      if (response.ok) {
        const posts = await response.json();
        const allPosts = posts.data;
        return allPosts;
      } else if (!response.ok) {
        loader.style.display = "none";
        loadMoreBtn.style.display = "none";

        throw new Error("couldn't fetch posts from api");
      }
    }
  } catch (error) {
    const errorMessage = "We are having some trouble with our servers, please wait and try again later";
    displayErrorMessage(errorMessage);
  }
}

export async function getAllPostsFromAPI() {
  const token = load("token");
  if (token) {
    const getPostsURL = `${API_BASE}${API_POSTS}?${authorParam}&${commentsParam}&${reactionsParam}`;
    const response = await fetchWithToken(getPostsURL);

    if (response.ok) {
      const posts = await response.json();
      const allPosts = posts.data;
      return allPosts;
    } else if (!response.ok) {
      loader.style.display = "none";
      loadMoreBtn.style.display = "none";

      const errorMessage = "We are having some trouble with our servers, please wait and try again later";
      displayErrorMessage(errorMessage);

      throw new Error("couldn't fetch posts from api");
    }
  }
}

export async function getPostFromAPI(id, getParam) {
  if (!id) {
    throw new Error("getPost funciton is missing a postID");
  }
  const getPostURL = `${API_BASE}${API_POSTS}/${id}?${getParam}`;
  const response = await fetchWithToken(getPostURL);

  if (response.ok) {
    const post = await response.json();
    const singlePost = post.data;
    return singlePost;
  }
}
