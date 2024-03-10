import { filtering } from "../ui/listeners/onFilter.mjs";
import { search } from "../ui/listeners/onSearch.mjs";
import { publishNewPost } from "../ui/listeners/publishPost.mjs";
import { clearErrorMessages } from "../ui/listeners/clearErrorMsg.mjs";
import { logOut } from "../ui/listeners/logOut.mjs";
import { clickToLoadMore } from "../ui/listeners/loadMore.mjs";
import { clearFiltersAndInputs } from "../ui/listeners/clearFiltersAndInputs.mjs";

import { renderModal } from "../templates/modals/renderModal.mjs";
import { renderPostTemplates } from "../templates/posts/renderPosts.mjs";
import { getPostsByPage } from "../api/httpRequests/get.mjs";
import { runMasonryOnAccordion } from "../ux/layout/masonry.mjs";
import { loadMoreBtn, loader, feedContainer, allErrorContaines } from "../constants.mjs";

function generateStartFeed(allPosts, container) {
  container.innerHTML = "";
  renderPostTemplates(allPosts, container);
  logOut();
  loader.style.display = "none";
  loadMoreBtn.style.display = "block";
  clickToLoadMore(loadMoreBtn);
}

export async function feedPage() {
  clearFiltersAndInputs();
  const postByPage = await getPostsByPage;

  try {
    if (postByPage) {
      //open post as modal if you go directly to url with id
      let params = new URLSearchParams(document.location.search);
      let postId = params.get("post-id");
      let id = parseInt(postId);
      postByPage.filter(async (allPosts) => {
        if (allPosts.id === id) {
          await renderModal(id);
          let newModal = new bootstrap.Modal(document.getElementById(`modal-${id}`), {});
          newModal.toggle();
        } else {
          return;
        }
      });

      generateStartFeed(postByPage, feedContainer);
      filtering();
      search();
      runMasonryOnAccordion();
      publishNewPost();
      clearErrorMessages(allErrorContaines);
    }
  } catch (error) {
    console.log(error);
  }
}
