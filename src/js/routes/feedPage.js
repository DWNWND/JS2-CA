import * as listener from "../ui/listeners/index.js";
import * as templates from "../templates/posts/index.js";
import * as HTTPMethod from "../api/requests/index.js";

async function buildFeed(allPosts) {
  const feedContainer = document.querySelector(".feed-container");
  feedContainer.innerHTML = "";
  templates.renderPostTemplates(allPosts, feedContainer);
  await templates.openModal();
}

export async function feedPage() {
  try {
    const posts = await HTTPMethod.getPostsFromAPI();
    if (posts) {
      await buildFeed(posts);
      listener.search(posts);
      listener.postListener();
    } else if (!posts) {
      throw new Error("something went wrong when calling API");
    }
  } catch (error) {
    console.log(error);
  }
}
