export function updateForm() {
  const form = document.createElement("form");
  form.classList.add("container-sm", "mt-2");
  form.id = "updatePost";

  form.innerHTML = `
  <div class="mb-3">
    <input type="text" class="form-control" id="title" name="title" placeholder="Post title" />
    <label for="title" class="text-primary d-none">Post title</label>
  </div>
  <div class="mb-3">
    <input type="text" class="form-control" id="body" name="body" placeholder="Post body" />
    <label for="body" class="text-primary d-none">Post body</label>
  </div>`;

  const button = document.createElement("button");
  button.classList.add("btn", "btn-primary", "btn-lg", "w-100");
  button.innerText = "update post";

  form.append(button);

  return form;
}

function getIDfromModal() {
  if (document.querySelector(".modal-content")) {
    const getModalID = document.querySelector(".modal-content");
    const id = getModalID.id;
    return id;
  }
}

export async function populateUpdateForm() {
  const form = document.querySelector("#updatePost");
  const id = getIDfromModal();

  if (form) {
    const button = form.querySelector("button");
    button.disabled = true;

    const postPopulation = await getPostFromAPI(id);

    if (postPopulation.title) {
      form.title.value = postPopulation.title;
    }
    if (postPopulation.body) {
      form.body.value = postPopulation.body;
    }
    if (!postPopulation.body || !postPopulation.title) {
      console.log("the post is lacking some content");
    }

    button.disabled = false;
  }
}

// <div class="d-grid gap-2 mt-4">
//   <button for="login" type="submit" class="btn btn-primary btn-lg w-100">Log in</button>
// </div>`
