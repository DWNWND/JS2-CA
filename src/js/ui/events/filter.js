import { renderPostTemplate } from "../../templates/posts/index.js";

export const sortingByLikes = document.getElementById("sortbymostliked");
export const sortingByComments = document.getElementById("sortbymostcommented");
export const sortingByThreads = document.getElementById("sortbytypethreads");
export const sortingByPhotos = document.getElementById("sortbytypephoto");
export const feedContainer = document.querySelector(".feed-container");

//could not get the filter method to work on multiple sorting options at the same time, therefore using a loop and if-statements
export function filtering(posts) {
  for (let i = 0; i < posts.length; i++) {
    //FILTERING ON LIKES
    if (sortingByLikes.checked && !sortingByPhotos.checked && !sortingByThreads.checked && !sortingByComments.checked && posts[i]._count.reactions > 2) {
      renderPostTemplate(posts[i], feedContainer);
    }
    if (sortingByLikes.checked && !sortingByPhotos.checked && !sortingByThreads.checked && sortingByComments.checked && posts[i]._count.reactions > 2 && posts[i]._count.comments > 2) {
      renderPostTemplate(posts[i], feedContainer);
    }
    if (sortingByLikes.checked && sortingByPhotos.checked && !sortingByThreads.checked && !sortingByComments.checked && posts[i]._count.reactions > 2 && posts[i].media) {
      renderPostTemplate(posts[i], feedContainer);
    }
    if (sortingByLikes.checked && !sortingByPhotos.checked && sortingByThreads.checked && !sortingByComments.checked && posts[i]._count.reactions > 2 && posts[i].title && !posts[i].media) {
      renderPostTemplate(posts[i], feedContainer);
    }

    //FILTERING ON COMMENTS
    if (sortingByComments.checked && !sortingByLikes.checked && !sortingByThreads.checked && !sortingByPhotos.checked && posts[i]._count.comments > 2) {
      renderPostTemplate(posts[i], feedContainer);
    }
    if (sortingByComments.checked && !sortingByLikes.checked && sortingByThreads.checked && !sortingByPhotos.checked && posts[i]._count.comments > 2 && posts[i].title && !posts[i].media) {
      renderPostTemplate(posts[i], feedContainer);
    }
    if (sortingByComments.checked && !sortingByLikes.checked && !sortingByThreads.checked && sortingByPhotos.checked && posts[i]._count.comments > 2 && posts[i].media) {
      renderPostTemplate(posts[i], feedContainer);
    }

    //FILTERING ON THREADS
    if (!sortingByComments.checked && !sortingByLikes.checked && sortingByThreads.checked && !sortingByPhotos.checked && posts[i].title && !posts[i].media) {
      renderPostTemplate(posts[i], feedContainer);
    }

    //FILTERING ON PHOTOS
    if (!sortingByComments.checked && !sortingByLikes.checked && !sortingByThreads.checked && sortingByPhotos.checked && posts[i].media) {
      renderPostTemplate(posts[i], feedContainer);
    }

    //UPDATE TO STARTFEED
    if (!sortingByComments.checked && !sortingByLikes.checked && !sortingByThreads.checked && !sortingByPhotos.checked) {
      renderPostTemplate(posts[i], feedContainer);
    }
  }
}