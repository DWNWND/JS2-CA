import { filtering, sortingByLikes, sortingByComments, sortingByThreads, sortingByPhotos, feedContainer, resizeAllMasonryItems } from "../events/index.js";
import { masonryOnChange, openPostAsModal } from "./index.js";

function sort(filter, postsFromAPI) {
  filter.addEventListener("change", async () => {
    feedContainer.innerHTML = "";
    filtering(postsFromAPI);
    await openPostAsModal();
    resizeAllMasonryItems();
    masonryOnChange()
  });
}

export function filter(postsFromAPI) {
  sort(sortingByLikes, postsFromAPI);
  sort(sortingByThreads, postsFromAPI);
  sort(sortingByPhotos, postsFromAPI);
  sort(sortingByComments, postsFromAPI);
}
