import * as listenFor from "../ui/listeners/index.js";
import * as templates from "../templates/posts/index.js";
import * as HTTPMethod from "../api/requests/index.js";
import { makeModal } from "../templates/modals/index.js";
import { clickToLoadMore } from "../ui/listeners/index.js";
import { loadMoreBtn, loader, feedContainer, allErrorContaines } from "../constants.js";

let page = 1;

export async function startFeed(allPosts, container) {
  container.innerHTML = "";
  templates.renderPostTemplates(allPosts, container);
  listenFor.logOut();
  await listenFor.openPostAsModal();
}

//////// clean up this function if you want to
export async function feedPage() {
  loadMoreBtn.style.display = "none";

  try {
    const posts = await HTTPMethod.getPostsFromAPI(page);
    if (posts) {
      loader.style.display = "none";

      //open post as modal if you go directly to url with id
      let params = new URLSearchParams(document.location.search);
      let postId = params.get("post-id");
      let id = parseInt(postId);
      posts.filter(async (allPosts) => {
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
      await startFeed(posts, feedContainer);
      clickToLoadMore(loadMoreBtn);

      listenFor.filter();
      listenFor.search();
      listenFor.publishNewPost();
      listenFor.openAccordion();
      listenFor.clearErrorMessages(allErrorContaines);

      loadMoreBtn.style.display = "block";
    }
  } catch (error) {
    console.log(error);
  }
}
