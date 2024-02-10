import * as listener from "../ui/listeners/index.js";

export async function homePage() {
  listener.authListener()
  listener.postListener()
}

import * as templates from "./templates/index.js";
import * as HTTPMethod from "./api/requests/index.js";

async function testTemplate() {
  const posts = await HTTPMethod.getPostsFromAPI();
  const postContainer = document.querySelector(".post-example");
  templates.renderPostTemplates(posts, postContainer);
}

testTemplate();
