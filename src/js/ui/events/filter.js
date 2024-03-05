import { renderPostTemplate, renderPostTemplates } from "../../templates/posts/index.js";
import { sortingByLikes, sortingByComments, sortingByThreads, sortingByPhotos, feedContainer, loadMoreBtn, loader } from "../../constants.js";
import { getPostsFromAPI } from "../../api/requests/get.js";
import { openPostAsModal } from "../listeners/openModal.js";

let page = 1;

export async function filtering(allPosts) {
  loader.style.display = "flex";

  //UPDATE TO STARTFEED
  if (!sortingByComments.checked && !sortingByLikes.checked && !sortingByThreads.checked && !sortingByPhotos.checked) {
    const postsByPage = await getPostsFromAPI(page);
    renderPostTemplates(postsByPage, feedContainer);
    loadMoreBtn.style.display = "block";
    await openPostAsModal();
  } else {
    loadMoreBtn.style.display = "none";

    if (sortingByLikes.checked) {
      const mostLiked = allPosts.filter(({ _count: { reactions, comments }, media, title }) => {
        if (!sortingByPhotos.checked && !sortingByThreads.checked && !sortingByComments.checked && reactions > 2) {
          return allPosts;
        }
        if (!sortingByPhotos.checked && !sortingByThreads.checked && sortingByComments.checked && reactions > 2 && comments > 2) {
          return allPosts;
        }
        if (sortingByPhotos.checked && !sortingByThreads.checked && !sortingByComments.checked && reactions > 2 && media) {
          return allPosts;
        }
        if (!sortingByPhotos.checked && sortingByThreads.checked && !sortingByComments.checked && reactions >= 2 && title && !media) {
          return allPosts;
        }
      });
      renderPostTemplates(mostLiked, feedContainer);
    }

    if (sortingByComments.checked) {
      const mostCommented = allPosts.filter(({ _count: { comments }, media, title }) => {
        if (!sortingByLikes.checked && !sortingByThreads.checked && !sortingByPhotos.checked && comments > 2) {
          return allPosts;
        }
        if (!sortingByLikes.checked && sortingByThreads.checked && !sortingByPhotos.checked && comments > 2 && title && !media) {
          return allPosts;
        }
        if (!sortingByLikes.checked && !sortingByThreads.checked && sortingByPhotos.checked && comments > 2 && media) {
          return allPosts;
        }
      });
      renderPostTemplates(mostCommented, feedContainer);
    }

    if (sortingByThreads.checked) {
      const sortThreads = allPosts.filter(({ media, title }) => {
        if (!sortingByComments.checked && !sortingByLikes.checked && !sortingByPhotos.checked && title && !media) {
          return allPosts;
        }
      });
      renderPostTemplates(sortThreads, feedContainer);
    }

    if (sortingByPhotos.checked) {
      const sortPhotos = allPosts.filter(({ media }) => {
        if (!sortingByComments.checked && !sortingByLikes.checked && !sortingByThreads.checked && media) {
          return allPosts;
        }
      });
      renderPostTemplates(sortPhotos, feedContainer);
    }
  }
}
