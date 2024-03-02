import * as listenFor from "../ui/listeners/index.js";
import * as templates from "../templates/posts/index.js";
import * as HTTPMethod from "../api/requests/index.js";
import { makeModal } from "../templates/modals/index.js";
import { load } from "../storage/index.js";
import { masonry } from "../ux/layout/index.js";

const loadMoreBtn = document.querySelector(".load-more");
loadMoreBtn.style.display = "none";

const feedContainer = document.querySelector(".feed-container");
let page = 1;

export async function startFeed(allPosts) {
  feedContainer.innerHTML = "";
  templates.renderPostTemplates(allPosts, feedContainer);
  listenFor.logOut();
  await listenFor.openPostAsModal();
}

//////// clean up this function if you want to
export async function feedPage() {
  const loader = document.querySelector(".spinner-grow");

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
      await startFeed(posts);
      listenFor.filter(posts);
      listenFor.search(posts);
      listenFor.publishNewPost();
      masonry();
      listenFor.openAccordion();
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

loadMoreBtn.addEventListener("click", async (event) => {
  loadMoreBtn.style.display = "none";
  page++;
  const posts = await HTTPMethod.getPostsFromAPI(page);
  templates.renderPostTemplates(posts, feedContainer);
  masonry();
  await listenFor.openPostAsModal();
});
