import * as listener from "../ui/listeners/index.js";
// import * as templates from "../templates/index.js";
// import * as HTTPMethod from "../api/requests/index.js";

// export async function router() {
//   const path = location.pathname;

//   switch (path) {
//     case "/feed":
//       listener.authListener();
//       return;
//   }
// }

export async function homePage() {
  listener.authListener();
  listener.postListener();
}

// async function testTemplate() {
//   const posts = await HTTPMethod.getPostsFromAPI();
//   const postContainer = document.querySelector(".post-example");
//   templates.renderPostTemplates(posts, postContainer);
// }

// testTemplate();
