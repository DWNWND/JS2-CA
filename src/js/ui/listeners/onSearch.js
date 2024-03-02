import { getPostsFromSearch, resizeAllMasonryItems } from "../events/index.js";
import { masonryOnChange, openPostAsModal } from "./index.js";

export async function search(postsFromAPI) {
  const searchInput = document.querySelector("#searchbar");

  searchInput.addEventListener("input", async () => {
    getPostsFromSearch(postsFromAPI);
    await openPostAsModal();
    resizeAllMasonryItems();
    masonryOnChange();
  });
}
