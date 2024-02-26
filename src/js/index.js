import { loginPage, feedPage } from "./routes/index.js";
import { resizeMasonryItem } from "./ui/events/index.js";

if (window.location.pathname === "/") {
  loginPage();
}

if (window.location.pathname === "/feed/" || window.location.pathname === "/feed/index" || window.location.pathname === "/feed/index.html" || window.location.pathname === "/feed/index.html?") {
  feedPage();
}

///MASONRY TEST

// https://imagesloaded.desandro.com/

/**
 * Resize the items when all the images inside the masonry grid
 * finish loading. This will ensure that all the content inside our
 * masonry items is visible.
 *
 * @uses ImagesLoaded
 * @uses resizeMasonryItem
 */
function waitForImages() {
  var allItems = document.getElementsByClassName("masonry-brick");

  for (var i = 0; i < allItems.length; i++) {
    imagesLoaded(allItems[i], function (instance) {
      var item = instance.elements[0];
      resizeMasonryItem(item);
    });
  }
}

/* Do a resize once more when all the images finish loading */
waitForImages();



// LOGIN DETAILS
//   name: "test1234",
//   email: "test123dwnwnd@stud.noroff.no",
//   password: "testdwnwnd123",

//TEST REGISTER:
//   name: "testreg123"
//   email: "testreg123@stud.noroff.no"
//   password: "testreg123"

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
