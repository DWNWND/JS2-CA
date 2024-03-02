import { fetchWithToken } from "../fetchWithToken.js";
import { API_BASE, API_POSTS } from "../constants.js";
import { displayErrorMessage } from "../../templates/errorMessage/errorMessage.js";

const authorParam = "_author=true";
const commentsParam = "_comments=true";
const reactionsParam = "_reactions=true";
const limitParam = "limit";
const postLimit = 10;

export async function getPostsFromAPI(page) {
  const getPostsURL = `${API_BASE}${API_POSTS}?${authorParam}&${commentsParam}&${reactionsParam}&${limitParam}=${postLimit}&page=${page}`;
  const response = await fetchWithToken(getPostsURL);

  if (response.ok) {
    const posts = await response.json();
    const allPosts = posts.data;
    return allPosts;
  } else if (!response.ok) {
    const errorMessage = "We are having some trouble with our servers, please wait and try again later";
    const loader = document.querySelector(".spinner-grow");
    loader.style.display = "none";
    displayErrorMessage(errorMessage);
    throw new Error("couldn't fetch posts from api");
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
