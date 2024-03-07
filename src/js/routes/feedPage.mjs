import * as listenFor from "../ui/listeners/index.mjs";
import * as templates from "../templates/posts/index.mjs";
import { renderModal } from "../templates/modals/index.mjs";
import { clickToLoadMore } from "../ui/listeners/index.mjs";
import { getPostsByPage } from "../api/httpRequests/index.mjs";
import { loadMoreBtn, loader, feedContainer, allErrorContaines } from "../constants.mjs";

export function startFeed(allPosts, container) {
  container.innerHTML = "";
  templates.renderPostTemplates(allPosts, container);
  listenFor.logOut();
  loader.style.display = "none";
  loadMoreBtn.style.display = "block";
  clickToLoadMore(loadMoreBtn);
}

//////// clean up this function if you want to
export async function feedPage() {
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
          let myModal = new bootstrap.Modal(document.getElementById(`modal-${id}`), {});
          myModal.toggle();
          listenFor.removeModals();
        } else {
          return;
        }
      });

      //generate feed
      startFeed(postByPage, feedContainer);

      listenFor.filtering();
      listenFor.search();
      listenFor.publishNewPost();
      listenFor.openAccordion();
      listenFor.clearErrorMessages(allErrorContaines);
    }
  } catch (error) {
    console.log(error);
  }
}
