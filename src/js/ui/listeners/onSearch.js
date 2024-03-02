import { getAllPostsFromAPI, getPostsFromAPI } from "../../api/requests/get.js";
import { masonry } from "../../ux/layout/index.js";
import { getPostsFromSearch } from "../events/index.js";
import { openPostAsModal } from "./index.js";
import { loadMoreBtn } from "../../constants.js";

let page = 1;

export async function search() {
  const searchInput = document.querySelector("#searchbar");
  const postsPerPage = await getPostsFromAPI(page);

  searchInput.addEventListener("input", async () => {
    loadMoreBtn.style.display = "none";
    const allPosts = await getAllPostsFromAPI();

    getPostsFromSearch(allPosts, postsPerPage);
    await openPostAsModal();
    masonry();
  });
}
