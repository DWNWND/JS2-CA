import { getPostsFromAPI } from "../../api/requests/index.mjs";
import { renderPostTemplates } from "../../templates/posts/index.mjs";
import { openPostAsModal } from "./index.mjs";
import { feedContainer } from "../../constants.mjs";

let page = 1;

export function clickToLoadMore(loadMoreBtn) {
  loadMoreBtn.addEventListener("click", async () => {
    loadMoreBtn.style.display = "none";
    page++;
    const posts = await getPostsFromAPI(page);
    renderPostTemplates(posts, feedContainer);
    await openPostAsModal();
    loadMoreBtn.style.display = "block";
  });
}
