import { startFeed } from "../../routes/index.js";
import { getPostsFromFiltering } from "../events/index.js";
import { openPostAsModal } from "./index.js";

export function filter(postsFromAPI) {
  const sortingOptions = document.getElementById("sortbymostliked");

  sortingOptions.addEventListener("change", async (event) => {
    if (event.target.checked) {
      getPostsFromFiltering(postsFromAPI)
      await openPostAsModal();
    } else {
      await startFeed(postsFromAPI);
    }
  });
}