import { renderPostTemplates } from "../../templates/posts/index.js";
import { postsByPage, allPosts, filterByLikes, filterByThreads, filterByPhotos, filterByComments, feedContainer, loadMoreBtn, loader } from "../../constants.js";
import { openPostAsModal } from "../listeners/openModal.js";

export async function filterPosts() {
  loader.style.display = "flex";

  if (!filterByComments.checked && !filterByLikes.checked && !filterByThreads.checked && !filterByPhotos.checked) {
    renderPostTemplates(postsByPage, feedContainer);
    loadMoreBtn.style.display = "block";
    
  } else {
    loadMoreBtn.style.display = "none";

    if (filterByLikes.checked) {
      const mostLiked = allPosts.filter(({ _count: { reactions, comments }, media, title }) => {
        if (!filterByPhotos.checked && !filterByThreads.checked && !filterByComments.checked && reactions > 2) {
          return allPosts;
        }
        if (!filterByPhotos.checked && !filterByThreads.checked && filterByComments.checked && reactions > 2 && comments > 2) {
          return allPosts;
        }
        if (filterByPhotos.checked && !filterByThreads.checked && !filterByComments.checked && reactions > 2 && media) {
          return allPosts;
        }
        if (!filterByPhotos.checked && filterByThreads.checked && !filterByComments.checked && reactions >= 2 && title && !media) {
          return allPosts;
        }
      });
      renderPostTemplates(mostLiked, feedContainer);
    }

    if (filterByComments.checked) {
      const mostCommented = allPosts.filter(({ _count: { comments }, media, title }) => {
        if (!filterByLikes.checked && !filterByThreads.checked && !filterByPhotos.checked && comments > 2) {
          return allPosts;
        }
        if (!filterByLikes.checked && filterByThreads.checked && !filterByPhotos.checked && comments > 2 && title && !media) {
          return allPosts;
        }
        if (!filterByLikes.checked && !filterByThreads.checked && filterByPhotos.checked && comments > 2 && media) {
          return allPosts;
        }
      });
      renderPostTemplates(mostCommented, feedContainer);
    }

    if (filterByThreads.checked) {
      const sortThreads = allPosts.filter(({ media, title }) => {
        if (!filterByComments.checked && !filterByLikes.checked && !filterByPhotos.checked && title && !media) {
          return allPosts;
        }
      });
      renderPostTemplates(sortThreads, feedContainer);
    }

    if (filterByPhotos.checked) {
      const sortPhotos = allPosts.filter(({ media }) => {
        if (!filterByComments.checked && !filterByLikes.checked && !filterByThreads.checked && media) {
          return allPosts;
        }
      });
      renderPostTemplates(sortPhotos, feedContainer);
    }
  }
  await openPostAsModal();
}
