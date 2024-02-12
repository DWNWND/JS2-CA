import * as listener from "../ui/listeners/index.js";
import * as templates from "../templates/index.js";
import * as HTTPMethod from "../api/requests/index.js";

async function buildFeed() {
  const posts = await HTTPMethod.getPostsFromAPI();
  const feedContainer = document.querySelector(".feed-container");
  templates.renderPostTemplates(posts, feedContainer);
}

export async function feedPage() {
  buildFeed();
  listener.postListener();
}

//RENDER POSTS
// async function testTemplate() {
//   const posts = await HTTPMethod.getPostsFromAPI();
//   const postContainer = document.querySelector(".post-example");
//   templates.renderPostTemplates(posts, postContainer);
// }

// testTemplate();
