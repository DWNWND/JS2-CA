import { renderPostTemplate, renderPostTemplates } from "../../templates/posts/index.js";
import { sortingByLikes, sortingByComments, sortingByThreads, sortingByPhotos, feedContainer, loadMoreBtn, loader } from "../../constants.js";
import { getPostsFromAPI } from "../../api/requests/get.js";

let page = 1;

//could not get the filter method to work on multiple sorting options at the same time, therefore using a loop and if-statements
export async function filtering(posts) {
  loader.style.display = "flex";
  
  //UPDATE TO STARTFEED
  if (!sortingByComments.checked && !sortingByLikes.checked && !sortingByThreads.checked && !sortingByPhotos.checked) {
    const posts = await getPostsFromAPI(page);
    renderPostTemplates(posts, feedContainer);
    loadMoreBtn.style.display = "block";
  } else {
    loadMoreBtn.style.display = "none";
    loader.style.display = "none";
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
    }
  }
}
