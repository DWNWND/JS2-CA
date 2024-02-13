import * as listener from "../ui/listeners/index.js";
import * as templates from "../templates/posts/index.js";
import * as HTTPMethod from "../api/requests/index.js";

async function buildFeed() {
  const posts = await HTTPMethod.getPostsFromAPI();
  const feedContainer = document.querySelector(".feed-container");
  templates.renderPostTemplates(posts, feedContainer);
}

export async function feedPage() {
  try {
    await buildFeed();
    await listener.openModal();
    listener.postListener();
  } catch (error) {
    console.log(error);
  }
}
