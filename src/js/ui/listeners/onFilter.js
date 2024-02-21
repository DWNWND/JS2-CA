import { startFeed } from "../../routes/index.js";
import { renderPostTemplates } from "../../templates/posts/index.js";
import { openPostAsModal } from "./index.js";

//Simplify this:

const sortingByLikes = document.getElementById("sortbymostliked");
const sortingByComments = document.getElementById("sortbymostcommented");
const sortingByThreads = document.getElementById("sortbytypethreads");
const sortingByPhotos = document.getElementById("sortbytypephoto");

export function getPostsFromFiltering(postsFromAPI) {
  let postsFiltered = postsFromAPI.filter((allPosts) => {
    if (sortingByLikes.checked && allPosts._count.reactions > 0) {
      return allPosts;
    }
    if (sortingByComments.checked && allPosts._count.comments > 0) {
      return allPosts;
    }
    if (sortingByThreads.checked && allPosts.title && !allPosts.body && !allPosts.media) {
      return allPosts;
    }
    if (sortingByPhotos.checked && allPosts.media) {
      return allPosts;
    }
    if (sortingByPhotos.checked && sortingByLikes.checked) {
      for (let i = 0; i < allPosts.length; i++) {
        console.log("wokring on it");
      }
    }
  });

  return postsFiltered;
}

function sort(filter, postsFromAPI) {
  filter.addEventListener("change", async (event) => {
    if (event.target.checked) {
      const posts = getPostsFromFiltering(postsFromAPI);

      for (let i = 0; i < posts.length; i++) {
        console.log(posts[i].media);
      }

      const feedContainer = document.querySelector(".feed-container");
      feedContainer.innerHTML = "";
      renderPostTemplates(posts, feedContainer);

      await openPostAsModal();
    }

    // if (event.target.checked && sortingByLikes.checked) {
    //   let postsFiltered = postsFromAPI.filter((allPosts) => {
    //     if (allPosts._count.reactions > 0) {
    //       return allPosts;
    //     }
    //     feedContainer.innerHTML = "";
    //     renderPostTemplates(postsFiltered, feedContainer);
    //   });
    //   await openPostAsModal();
    // }
    // if (!event.target.checked && sortingByLikes.checked) {
    //   getPostsFromFiltering(postsFromAPI);
    //   await openPostAsModal();
    // }
    // if (!event.target.checked && sortingByThreads.checked) {
    //   getPostsFromFiltering(postsFromAPI);
    //   await openPostAsModal();
    // }
    // if (!event.target.checked && sortingByPhotos.checked) {
    //   getPostsFromFiltering(postsFromAPI);
    //   await openPostAsModal();
    else if (!event.target.checked && !sortingByPhotos.checked && !sortingByThreads.checked && !sortingByLikes.checked) {
      await startFeed(postsFromAPI);
    }
  });
}

export function filter(postsFromAPI) {
  sort(sortingByLikes, postsFromAPI);
  sort(sortingByThreads, postsFromAPI);
  sort(sortingByPhotos, postsFromAPI);
  sort(sortingByComments, postsFromAPI);
}
