import { startFeed } from "../../routes/index.js";
import { renderPostTemplates } from "../../templates/posts/index.js";
import { openPostAsModal } from "./index.js";

//Simplify this:

const sortingByLikes = document.getElementById("sortbymostliked");
const sortingByThreads = document.getElementById("sortbytypethreads");
const sortingByPhotos = document.getElementById("sortbytypephoto");

export function getPostsFromFiltering(postsFromAPI) {
  let postsFiltered = postsFromAPI.filter((allPosts) => {
    if (sortingByLikes.checked && allPosts._count.reactions > 0) {
      return allPosts;
    }
    if (sortingByThreads.checked && allPosts.title && !allPosts.body) {
      return allPosts;
    }
    if (sortingByPhotos.checked && allPosts.media) {
      return allPosts;
    }
    if (sortingByPhotos.checked && sortingByLikes.checked && allPosts.media) {
      console.log("working on this");
    }
  });
  const feedContainer = document.querySelector(".feed-container");
  feedContainer.innerHTML = "";

  renderPostTemplates(postsFiltered, feedContainer);
}

function sorting(filter, postsFromAPI) {
  filter.addEventListener("change", async (event) => {
    if (event.target.checked) {
      getPostsFromFiltering(postsFromAPI);
      await openPostAsModal();
    }
    if (!event.target.checked && sortingByLikes.checked) {
      getPostsFromFiltering(postsFromAPI);
      await openPostAsModal();
    }
    if (!event.target.checked && sortingByThreads.checked) {
      getPostsFromFiltering(postsFromAPI);
      await openPostAsModal();
    }
    if (!event.target.checked && sortingByPhotos.checked) {
      getPostsFromFiltering(postsFromAPI);
      await openPostAsModal();
    } else if (!event.target.checked && !sortingByPhotos.checked && !sortingByThreads.checked && !sortingByLikes.checked) {
      await startFeed(postsFromAPI);
    }
  });
}

export function filter(postsFromAPI) {
  sorting(sortingByLikes, postsFromAPI);
  sorting(sortingByThreads, postsFromAPI);
  sorting(sortingByPhotos, postsFromAPI);
}
