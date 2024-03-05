import { renderPostTemplates } from "../../templates/posts/index.js";
import { searchInput, feedContainer, loadMoreBtn } from "../../constants.js";

export async function getPostsFromSearch(allPostsFromAPI, postsPerPage) {
  let query = searchInput.value;

  let postsSearched = allPostsFromAPI.filter((allPosts) => {
    if (allPosts.title.toLowerCase().includes(query.toLowerCase())) {
      return allPosts;
    }
    if (allPosts.body && allPosts.body.toLowerCase().includes(query.toLowerCase())) {
      return allPosts;
    }
  });

  if (query === "") {
    postsSearched = postsPerPage;
    loadMoreBtn.style.display = "block";
  }

  feedContainer.innerHTML = "";
  renderPostTemplates(postsSearched, feedContainer);
}
