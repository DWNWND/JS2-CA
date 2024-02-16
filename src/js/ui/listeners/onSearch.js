import { getPostsFromSearch } from "../events/index.js";


export async function search(postsFromAPI) {
  const searchInput = document.querySelector("#searchbar");

  searchInput.addEventListener("input", async () => {
    getPostsFromSearch(postsFromAPI)
  });
}