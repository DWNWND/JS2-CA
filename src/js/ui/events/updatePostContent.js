import { getPostFromAPI, updatePostInAPI } from "../../api/requests/index.js";

//GET SEARCHPARAMS/ID
// function getIDfromModal() {
//   if (document.querySelector(".modal-content")) {
//   const getModalID = document.querySelector(".modal-content")
//   const id = getModalID.id
//   return id
//   }
// }

// const url = new URL(location.href);
// const id = url.searchParams.get("id");

// POPULATE FORM
// export async function populateUpdateForm() {
//   const form = document.querySelector("#updatePost");
//   const id = getIDfromModal()

//   if (form) {
//     const button = form.querySelector("button");
//     button.disabled = true;

//     const postPopulation = await getPostFromAPI(id);

//     if (postPopulation.title) {
//       form.title.value = postPopulation.title;
//     }
//     if (postPopulation.body) {
//       form.body.value = postPopulation.body;
//     }
//     if (!postPopulation.body || !postPopulation.title) {
//       console.log("the post is lacking some content");
//     }

//     button.disabled = false;
//   }
// }

//UPDATE CONTENT
export async function updatePostContent(event) {
  event.preventDefault();

  const form = event.target;

  if (form) {
    const formData = new FormData(form);
    const post = Object.fromEntries(formData.entries());
    post.id = id;

    console.log("THIS IS THE POST THAT IS REQUESTED THE REQUESTED UPDATE: ", post);

    //send it to the api
    updatePostInAPI(post);
  }
}
