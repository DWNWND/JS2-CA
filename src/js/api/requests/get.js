import { fetchWithToken } from "../fetchWithToken.js";
import { API_BASE, API_POSTS } from "../constants.js";

//extra queryParams for extra info in the request
const authorParam = "?_author=true";
const commentsParam = "&_comments=true";
const reactionsParam = "&_reactions=true";

export async function getPostsFromAPI() {
  // const getPostsURL = API_BASE + API_POSTS + authorParam;
  const getPostsURL = `${API_BASE}${API_POSTS}?_author=true&_comments=true&_reactions=true`;
  const response = await fetchWithToken(getPostsURL);

  const posts = await response.json();
  const allPosts = posts.data;
  // console.log("ALL POSTS: ", allPosts);

  return allPosts;
}

export async function getPostFromAPI(id, getParam) {
  if (!id) {
    throw new Error("getPost funciton is missing a postID");
  }
  const getPostURL = `${API_BASE}${API_POSTS}/${id}?${getParam}`;
  const response = await fetchWithToken(getPostURL);

  const post = await response.json();
  const singlePost = post.data;
  // console.log("POST BY ID: ", singlePost);

  return singlePost;
}
