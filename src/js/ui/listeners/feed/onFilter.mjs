import { filterByLikes, filterByThreads, filterByPhotos, filterByComments, feedContainer } from "../../../constants.mjs";

export function filtering() {
  checkFilter(filterByLikes);
  checkFilter(filterByThreads);
  checkFilter(filterByPhotos);
  checkFilter(filterByComments);
}

function checkFilter(filterType) {
  filterType.addEventListener("change", async () => {
    feedContainer.innerHTML = "";

    const eventModule = "../../events/feed/filter.mjs";
    const { filterPosts } = await import(eventModule);
    filterPosts();
  });
}
