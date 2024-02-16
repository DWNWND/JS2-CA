// import { renderPostTemplates } from "../../templates/posts/index.js";

// export function getPostsFromFiltering(postsFromAPI) {
//   let postsFiltered = postsFromAPI.filter((allPosts) => {
//     if (document.getElementById("sortbymostliked").checked && allPosts._count.reactions > 0) {
//       return allPosts;
//     }
//     if (document.getElementById("sortbytypethreads").checked && allPosts.title && !allPosts.body) {
//       return allPosts;
//     }
//     if (document.getElementById("sortbytypephoto").checked && allPosts.media) {
//       return allPosts;
//     }
//     if (document.getElementById("sortbytypephoto").checked && document.getElementById("sortbymostliked").checked) {
//       console.log("working on this");
//     }
//   });
//   const feedContainer = document.querySelector(".feed-container");
//   feedContainer.innerHTML = "";

//   renderPostTemplates(postsFiltered, feedContainer);
// }
