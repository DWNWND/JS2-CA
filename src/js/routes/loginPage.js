import * as listener from "../ui/listeners/index.js";
// import * as templates from "../templates/index.js";
// import * as HTTPMethod from "../api/requests/index.js";


export async function loginPage() {
  listener.authListener();
}

// async function testTemplate() {
//   const posts = await HTTPMethod.getPostsFromAPI();
//   const postContainer = document.querySelector(".post-example");
//   templates.renderPostTemplates(posts, postContainer);
// }

// testTemplate();
