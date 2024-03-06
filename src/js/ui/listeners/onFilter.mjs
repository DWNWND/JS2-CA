import { filterByLikes, filterByThreads, filterByPhotos, filterByComments, feedContainer } from "../../constants.mjs";
import { filterPosts } from "../events/index.mjs";

export function filtering() {
  checkFilter(filterByLikes);
  checkFilter(filterByThreads);
  checkFilter(filterByPhotos);
  checkFilter(filterByComments);
}

function checkFilter(filterType) {
  filterType.addEventListener("change", async () => {
    feedContainer.innerHTML = "";
    filterPosts();
  });
}
