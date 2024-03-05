import { getPostsFromAPI } from "../../api/requests/index.js";
import { renderPostTemplates } from "../../templates/posts/index.js";
import { openPostAsModal } from "./index.js";
import { feedContainer } from "../../constants.js";

let page = 1;

export function clickToLoadMore(loadMoreBtn) {
  loadMoreBtn.addEventListener("click", async () => {
    loadMoreBtn.style.display = "none";
    page++
    const posts = await getPostsFromAPI(page);
    renderPostTemplates(posts, feedContainer)
    await openPostAsModal();
    loadMoreBtn.style.display = "block";
  });
}
