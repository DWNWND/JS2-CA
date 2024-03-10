import { renderPostTemplates } from "../../../templates/posts/renderPosts.mjs";
import { feedContainer } from "../../../constants.mjs";

let page = 1;

export function clickToLoadMore(loadMoreBtn) {
  loadMoreBtn.addEventListener("click", async () => {
    loadMoreBtn.style.display = "none";
    page++;

    const getRequest = "../../../api/httpRequests/get.mjs";
    const { getPostsByPageFromAPI } = await import(getRequest);
    const posts = await getPostsByPageFromAPI(page);

    renderPostTemplates(posts, feedContainer);
    loadMoreBtn.style.display = "block";
  });
}
