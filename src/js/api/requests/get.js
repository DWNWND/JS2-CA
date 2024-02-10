import { fetchWithToken } from "../fetchWithToken.js";
import { API_BASE, API_POSTS } from "../constants.js";

// //can also be called "getPosts" - up to you. But remeber to change name in all files
// export async function readPosts() {
//   const response = await fetchWithToken(API_BASE + API_POSTS);
//   console.log(await response.json);
//   return await response.json();
// }

// //from Olis YT tutorial:
// //can also be called "getPost" - up to you. But remeber to change name in all files
// export async function readPost(id) {}

//In the new API V2 its all nesten in .data property

//extra queryParams for extra info in the request
const authorParam = "?_author=true";
const commentsParam = "?comments=true";
const reactionsParam = "?reactions=true";

export async function getPostsFromAPI() {
  const getPostsURL = API_BASE + API_POSTS + authorParam;
  const response = await fetchWithToken(getPostsURL);

  const posts = await response.json();
  const allPosts = posts.data;
  console.log("ALL POSTS: ", allPosts);

  return allPosts;
}

export async function getPostFromAPI(id) {
  if (!id) {
    throw new Error("getPost funciton is missing a postID");
  }
  const getPostURL = `${API_BASE}${API_POSTS}/${id}${authorParam}`;
  const response = await fetchWithToken(getPostURL);

  const post = await response.json();
  const singlePost = post.data;
  console.log("POST BY ID: ", singlePost);

  return singlePost;
}
