import * as listenFor from "../ui/listeners/index.js";
import * as templates from "../templates/posts/index.js";
import * as HTTPMethod from "../api/requests/index.js";

export async function startFeed(allPosts) {
  const feedContainer = document.querySelector(".feed-container");
  feedContainer.innerHTML = "";
  templates.renderPostTemplates(allPosts, feedContainer);
  await listenFor.openPostAsModal();
}

export async function feedPage() {
  try {
    const posts = await HTTPMethod.getPostsFromAPI();

    if (posts) {
      await startFeed(posts);
      listenFor.filter(posts)
      listenFor.search(posts);
      listenFor.publishNewPost();
    } else if (!posts) {
      throw new Error("something went wrong when calling API");
    }
  } catch (error) {
    console.log(error);
  }
}
