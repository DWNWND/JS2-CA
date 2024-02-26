import * as listenFor from "../ui/listeners/index.js";
import * as templates from "../templates/posts/index.js";
import * as HTTPMethod from "../api/requests/index.js";
import { makeModal } from "../templates/modals/index.js";
import { load } from "../storage/index.js";
import { resizeAllMasonryItems, waitForImages } from "../ui/events/index.js";

export async function startFeed(allPosts) {
  const feedContainer = document.querySelector(".feed-container");
  feedContainer.innerHTML = "";
  templates.renderPostTemplates(allPosts, feedContainer);
  listenFor.logOut();
  await listenFor.openPostAsModal();
}

//clean up the modal-thing

export async function feedPage() {
  try {
    const posts = await HTTPMethod.getPostsFromAPI();

    if (posts) {
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
      await startFeed(posts);
      listenFor.filter(posts);
      listenFor.search(posts);
      listenFor.publishNewPost();
      resizeAllMasonryItems();
      listenFor.masonryOnChange();
      listenFor.openAccordion();

      /* Do a resize once more when all the images finish loading */
      waitForImages();
    } else if (!posts) {
      const token = load("token");
      if (!token) {
        localStorage.clear();
        location.pathname = "/";
      }
      if (token) {
        throw new Error("something went wrong when calling API");
      }
    }
  } catch (error) {
    console.log(error);
  }
}
