import { getPostsFromSearch } from "../events/search.mjs";
import { getPostsByPage, getAllPosts } from "../../api/httpRequests/get.mjs";
import { searchInput, loadMoreBtn } from "../../constants.mjs";

export async function search() {
  const postByPage = await getPostsByPage;
  const allPost = await getAllPosts;

  searchInput.addEventListener("input", async () => {
    loadMoreBtn.style.display = "none";
    getPostsFromSearch(allPost, postByPage);
  });
}
