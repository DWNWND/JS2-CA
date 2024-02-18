import { makeModalByID } from "../../templates/modals/index.js";

export function removeModals() {
  if (document.body.contains(document.querySelector(".modal"))) {
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".btn-close");
    closeBtn.addEventListener("click", () => {
      removeUrlParameter("post-id");
      modal.remove();
    });
  } else {
    console.log("i dont know");
  }
}

// export function openPostOnClick() {
//   const allArticles = document.querySelectorAll("article");
//   allArticles.forEach(function (article) {
//     article.addEventListener("click", () => {
//       window.location.href = `/html/post.html?key=${article.id}`;
//     });
//   });
// }

export async function makeModal(id) {
  const modalContainer = document.querySelector(".modal-container");
  const modal = await makeModalByID(id);
  modalContainer.append(modal);
}

export async function openPostAsModal() {
  const modalBtn = document.querySelectorAll(".modalBtn");

  for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener("mousedown", async (event) => {
      const id = event.target.id;

      await makeModal(id);
      let myModal = new bootstrap.Modal(document.getElementById(`modal-${id}`), {});
      myModal.toggle();

      insertUrlParam(id);

      removeModals();
    });
  }
}

// https://stackoverflow.com/questions/10970078/modifying-a-query-string-without-reloading-the-page
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/set

function insertUrlParam(id) {
  if (history.pushState) {
    let searchParams = new URLSearchParams(window.location.search);
    searchParams.set("post-id", id);
    let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + searchParams.toString();
    window.history.pushState({ path: newurl }, "", newurl);
  }
}

// to remove the specific key
export function removeUrlParameter(paramKey) {
  const url = window.location.href;
  // console.log("url", url)
  var r = new URL(url);
  r.searchParams.delete(paramKey);
  const newUrl = r.href;
  // console.log("r.href", newUrl)
  window.history.pushState({ path: newUrl }, "", newUrl);
}
