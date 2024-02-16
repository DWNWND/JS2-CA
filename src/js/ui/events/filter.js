import { renderPostTemplates } from "../../templates/posts/index.js";

export function getPostsFromFiltering(postsFromAPI) {
  let postsFiltered = postsFromAPI.filter((allPosts) => {
    if (document.getElementById("sortbymostliked").checked && allPosts._count.reactions > 0) {
      return allPosts;
    }
  });
  const feedContainer = document.querySelector(".feed-container");
  feedContainer.innerHTML = "";

  renderPostTemplates(postsFiltered, feedContainer);
}
