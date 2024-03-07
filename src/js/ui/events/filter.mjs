import { renderPostTemplates } from "../../templates/posts/index.mjs";
import { getPostsByPage, getAllPosts } from "../../api/httpRequests/index.mjs";
import { filterByLikes, filterByThreads, filterByPhotos, filterByComments, feedContainer, loadMoreBtn, loader } from "../../constants.mjs";

export async function filterPosts() {
  loader.style.display = "flex";

  const postsByPage = await getPostsByPage;
  const allPosts = await getAllPosts;

  if (!filterByComments.checked && !filterByLikes.checked && !filterByThreads.checked && !filterByPhotos.checked) {
    renderPostTemplates(postsByPage, feedContainer);
    loadMoreBtn.style.display = "block";
  } else {
    loadMoreBtn.style.display = "none";

    const fileredPosts = allPosts.filter(({ _count: { reactions, comments }, media, title }) => {
      //BY LIKES
      if (filterByLikes.checked && !filterByPhotos.checked && !filterByThreads.checked && !filterByComments.checked && reactions >= 2) {
        return allPosts;
      }
      if (filterByLikes.checked && filterByPhotos.checked && !filterByThreads.checked && !filterByComments.checked && reactions >= 2 && media) {
        return allPosts;
      }
      if (filterByLikes.checked && !filterByPhotos.checked && filterByThreads.checked && !filterByComments.checked && reactions >= 2 && title && !media) {
        return allPosts;
      }
      if (filterByLikes.checked && !filterByPhotos.checked && !filterByThreads.checked && filterByComments.checked && reactions >= 2 && comments >= 2) {
        return allPosts;
      }

      //BY COMMENTS
      if (!filterByLikes.checked && !filterByPhotos.checked && !filterByThreads.checked && filterByComments.checked && comments >= 2) {
        return allPosts;
      }
      if (!filterByLikes.checked && !filterByPhotos.checked && filterByThreads.checked && filterByComments.checked && comments >= 2 && title && !media) {
        return allPosts;
      }
      if (!filterByLikes.checked && filterByPhotos.checked && !filterByThreads.checked && filterByComments.checked && comments >= 2 && media) {
        return allPosts;
      }

      //BY LIKES AND COMMENTS
      if (filterByLikes.checked && !filterByPhotos.checked && filterByThreads.checked && filterByComments.checked && title && !media && reactions >= 2 && comments >= 2) {
        return allPosts; //threads
      }
      if (filterByLikes.checked && filterByPhotos.checked && !filterByThreads.checked && filterByComments.checked && media && reactions >= 2 && comments >= 2) {
        return allPosts; //photos
      }

      //BY THREADS
      if (!filterByLikes.checked && !filterByPhotos.checked && filterByThreads.checked && !filterByComments.checked && title && !media) {
        return allPosts;
      }

      //BY PHOTOS
      if (!filterByLikes.checked && filterByPhotos.checked && !filterByThreads.checked && !filterByComments.checked && media) {
        return allPosts;
      }
    });
    renderPostTemplates(fileredPosts, feedContainer);
  }
}
