import * as listenFor from "../ui/listeners/index.js";
import * as templates from "../templates/posts/index.js";
import { makeModal } from "../templates/modals/index.js";
import { clickToLoadMore } from "../ui/listeners/index.js";
import { getPostsByPage, loadMoreBtn, loader, feedContainer, allErrorContaines } from "../constants.js";

export async function startFeed(allPosts, container) {
  container.innerHTML = "";
  templates.renderPostTemplates(allPosts, container);
  listenFor.logOut();
  await listenFor.openPostAsModal();
  loader.style.display = "none";
  loadMoreBtn.style.display = "block";
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
          await makeModal(id);
          let myModal = new bootstrap.Modal(document.getElementById(`modal-${id}`), {});
          myModal.toggle();
          listenFor.removeModals();
        } else {
          return;
        }
      });

      //generate feed
      await startFeed(postByPage, feedContainer);
      clickToLoadMore(loadMoreBtn);

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
