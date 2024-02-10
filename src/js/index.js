// LOGIN DETAILS
//   name: "test1234",
//   email: "test123dwnwnd@stud.noroff.no",
//   password: "testdwnwnd123",

//TEST REGISTER:
//   name: "testreg123"
//   email: "testreg123@stud.noroff.no"
//   password: "testreg123"

// TEST CREATE POST // THIS WORKED:
//   import { createPost } from "./api/posts/create.js";
//   createPost({
//     title: "My example title 2",
//     body: "My example body 2",
//   });

// TEST UPDATE POST // THIS WORKED:
// EXAMPLE POST ID 2 = 55
// import { updatePost } from "./api/posts/update.js";
// updatePost({
// id: 55,
//   title: "My example title 2 - UPDATED",
//   body: "My example body 2 - UPDATED",
// });

// TEST DELETE POST // THIS WORKED:
// EXAMPLE POST ID 2 = 55 //now removed
// import { removePost } from "./api/posts/delete.js";
// removePost(55);

// TESTS
// post.createPost()
// post.updatePost()
// post.removePost()
// post.getPost()
// post.getPosts()
// post.getPost(58)
// post.removePost(58)

import { homePage } from "./routes/home.js";

homePage();

// async function testTemplate() {
//   const posts = await postMethods.getPosts();
//   const post = posts.data.pop();
//   // const post = posts.data[3];

//   const postContainer = document.querySelector(".post-example");
//   templates.renderPostTemplate(post, postContainer);
// }

