import { masonry } from "../../ux/layout/index.js";
import { filtering, sortingByLikes, sortingByComments, sortingByThreads, sortingByPhotos, feedContainer } from "../events/index.js";
import { openPostAsModal } from "./index.js";

function sort(filter, postsFromAPI) {
  filter.addEventListener("change", async () => {
    feedContainer.innerHTML = "";
    filtering(postsFromAPI);
    await openPostAsModal();
    masonry();
  });
}

export function filter(postsFromAPI) {
  sort(sortingByLikes, postsFromAPI);
  sort(sortingByThreads, postsFromAPI);
  sort(sortingByPhotos, postsFromAPI);
  sort(sortingByComments, postsFromAPI);
}
