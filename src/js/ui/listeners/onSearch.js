import { getPostsFromSearch } from "../events/index.js";
import { openPostAsModal } from "./index.js";
import { searchInput, getPostsByPage, getAllPosts, loadMoreBtn } from "../../constants.js";

export async function search() {
  const postByPage = await getPostsByPage;
  const allPost = await getAllPosts;

  searchInput.addEventListener("input", async () => {
    loadMoreBtn.style.display = "none";
    getPostsFromSearch(allPost, postByPage);
    await openPostAsModal();
  });
}
