import { filterByLikes, filterByThreads, filterByPhotos, filterByComments, newPostInput, searchInput } from "../../constants.mjs";

export function clearFiltersAndInputs() {
  window.addEventListener("load", () => {
    filterByLikes.checked = false;
    filterByThreads.checked = false;
    filterByPhotos.checked = false;
    filterByComments.checked = false;
    newPostInput.value = "";
    searchInput.value = "";
  });
}
