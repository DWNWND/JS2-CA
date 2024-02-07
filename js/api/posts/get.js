import { authFetch } from "../fetch.js";
import { API_BASE, API_POSTS } from "../constants.js";

export async function getPosts() {
  const response = await authFetch (API_BASE + API_POSTS);
  console.log(await response.json);
  return await response.json();
}
