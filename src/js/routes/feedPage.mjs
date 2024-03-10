import * as listen from "../ui/listeners/feed/index.mjs";
import { clearErrorMessages } from "../ui/listeners/general/clearErrorMsg.mjs";
import { renderModal } from "../templates/modals/renderModal.mjs";
import { renderPostTemplates } from "../templates/posts/renderPosts.mjs";
import { getPostsByPage, getAllPosts } from "../api/httpRequests/get.mjs";
import { runMasonryOnAccordion } from "../ux/layout/masonry.mjs";
import { loadMoreBtn, loader, feedContainer, allErrorContaines } from "../constants.mjs";

function generateStartFeed(allPosts, container) {
  container.innerHTML = "";
  renderPostTemplates(allPosts, container);
  listen.logOut();
  loader.style.display = "none";
  loadMoreBtn.style.display = "block";
  listen.clickToLoadMore(loadMoreBtn);
}

export async function feedPage() {
  listen.clearFiltersAndInputs();
  const postByPage = await getPostsByPage;

  try {
    let params = new URLSearchParams(document.location.search);
    let postId = params.get("post-id");
    let id = parseInt(postId);

    if (id) {
      const allPosts = await getAllPosts;
      allPosts.filter(async (allPosts) => {
        if (allPosts.id === id) {
          await renderModal(id);
          let newModal = new bootstrap.Modal(document.getElementById(`modal-${id}`), {});
          newModal.toggle();
        } else {
          return;
        }
      });
    }

    if (postByPage) {
      generateStartFeed(postByPage, feedContainer);
      listen.filtering();
      listen.search();
      runMasonryOnAccordion();
      listen.publishNewPost();
      clearErrorMessages(allErrorContaines);
    }
  } catch (error) {
    console.log(error);
  }
}
