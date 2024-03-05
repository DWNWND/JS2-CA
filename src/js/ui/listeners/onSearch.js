import { getPostsFromSearch } from "../events/index.js";
import { openPostAsModal } from "./index.js";
import { searchInput, postsByPage, allPosts, loadMoreBtn } from "../../constants.js";

export async function search() {

  searchInput.addEventListener("input", async () => {

    loadMoreBtn.style.display = "none";
    getPostsFromSearch(allPosts, postsByPage);
    await openPostAsModal();
  });
}
