import * as listenFor from "../ui/listeners/index.mjs";
import * as content from "../templates/index.mjs";
import { getPostsByPage } from "../api/httpRequests/index.mjs";
import { runMasonryOnAccordion } from "../ux/layout/index.mjs";
import { loadMoreBtn, loader, feedContainer, allErrorContaines } from "../constants.mjs";

function generateStartFeed(allPosts, container) {
  container.innerHTML = "";
  content.renderPostTemplates(allPosts, container);
  listenFor.logOut();
  loader.style.display = "none";
  loadMoreBtn.style.display = "block";
  listenFor.clickToLoadMore(loadMoreBtn);
}

//////// clean up this function if you want to
export async function feedPage() {
  listenFor.clearFiltersAndInputs();
  const postByPage = await getPostsByPage;

  try {
    if (postByPage) {
      //open post as modal if you go directly to url with id
      let params = new URLSearchParams(document.location.search);
      let postId = params.get("post-id");
      let id = parseInt(postId);

      postByPage.filter(async (allPosts) => {
        if (allPosts.id === id) {
          await content.renderModal(id);
          let newModal = new bootstrap.Modal(document.getElementById(`modal-${id}`), {});
          newModal.toggle();
        } else {
          return;
        }
      });

      generateStartFeed(postByPage, feedContainer);

      listenFor.filtering();
      listenFor.search();
      runMasonryOnAccordion();
      listenFor.publishNewPost();
      listenFor.clearErrorMessages(allErrorContaines);
    }
  } catch (error) {
    console.log(error);
  }
}
