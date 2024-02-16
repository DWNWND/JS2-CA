import { renderPostTemplates } from "../../templates/posts/index.js";

const searchInput = document.querySelector("#searchbar");

export function getPostsFromSearch(postsFromAPI) {
  let query = searchInput.value;

  let postsSearched = postsFromAPI.filter((allPosts) => {
    if (query === "") {
      console.log("no search params");
      return postsFromAPI;
    } else if (allPosts.title.toLowerCase().includes(query.toLowerCase())) {
      return allPosts;
    }
  });

  const feedContainer = document.querySelector(".feed-container");
  feedContainer.innerHTML = "";

  renderPostTemplates(postsSearched, feedContainer);
}
