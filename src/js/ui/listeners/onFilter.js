import { getAllPostsFromAPI } from "../../api/requests/index.js";
import { sortingByLikes, sortingByComments, sortingByThreads, sortingByPhotos, feedContainer } from "../../constants.js";
import { openPostAsModal } from "./index.js";
import { filtering } from "../events/index.js";

export function filter() {
  sort(sortingByLikes);
  sort(sortingByThreads);
  sort(sortingByPhotos);
  sort(sortingByComments);
}

function sort(filterType) {
  filterType.addEventListener("change", async () => {
    const allPosts = await getAllPostsFromAPI();
    feedContainer.innerHTML = "";

    filtering(allPosts);

    await openPostAsModal();
  });
}
