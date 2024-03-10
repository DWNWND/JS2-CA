/**
 * Loads posts into a masonry layout
 * @uses waitForImages to wait until the images are loaded before completing the masonry layout
 * @uses masonryOnChange to reload the masonry layout on load or resize events
 * @uses resizeAllMasonryItems to build the masonry layout
 */
export function masonry() {
  waitForImages();
  masonryOnChange();
  resizeAllMasonryItems();
}

/**
 * Reloads the masonry layout on load and resize events
 * @uses resizeAllMasonryItems to make the masonry layout
 */
function masonryOnChange() {
  const masonryEvents = ["load", "resize"];
  masonryEvents.forEach((event) => {
    window.addEventListener(event, resizeAllMasonryItems);
  });
}

/**
 * Waits for the images to load befor resizes the masonry-items
 *
 * @uses ImagesLoaded from https://imagesloaded.desandro.com/ (CDN added to HTML)
 * @uses resizeMasonryItem To make the masonry layout
 */
export function waitForImages() {
  const allDisplayedPosts = document.getElementsByClassName("media-masonry-brick");
  for (var i = 0; i < allDisplayedPosts.length; i++) {
    imagesLoaded(allDisplayedPosts[i], (posts) => {
      const imagePosts = posts.elements[0];
      resizeMasonryItem(imagePosts);
    });
  }
}

/**
 * Resizes the masonry layout when an accordion-element on open and close events
 * @param {string} accordion An accordion-element
 * @uses masonry To load the masonry layout
 * */
function accordionResize(accordion) {
  accordion.forEach((accordionelement) => {
    accordionelement.addEventListener("hidden.bs.collapse", () => {
      masonry();
    });
    accordionelement.addEventListener("shown.bs.collapse", () => {
      masonry();
    });
  });
}

/**
 * Runs the accordionResize function on each of the accordions.
 * @uses accordionResize Resizes the masonry layout when an accordion-element on open and close events
 * */
export function runMasonryOnAccordion() {
  const accordions = document.getElementsByClassName("detect-collapse");
  let accordionsArray = [...accordions];
  accordionResize(accordionsArray);
}

/**
 * Function and documentation for masonry layout lent from: https://w3bits.com/css-grid-masonry/#google_vignette
 *
 * Set appropriate spanning to any masonry item
 *
 * Get different properties we already set for the masonry, calculate height or spanning for any cell of the masonry grid based on its
 * content-wrapper's height, the (row) gap of the grid, and the size of the implicit row tracks.
 *
 * @param {object} masonrycell A brick/tile/cell inside the masonry
 */
export function resizeMasonryItem(masonrycell) {
  /* Get the grid object, its row-gap, and the size of its implicit rows */
  var grid = document.getElementsByClassName("masonry")[0],
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue("grid-row-gap")),
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue("grid-auto-rows"));

  /*
   * Spanning for any brick = S
   * Grid's row-gap = G
   * Size of grid's implicitly create row-track = R
   * Height of item content = H
   * Net height of the item = H1 = H + G
   * Net height of the implicit row-track = T = G + R
   * S = H1 / T
   */
  var rowSpan = Math.ceil((masonrycell.querySelector(".masonry-content").getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
  /* Set the spanning as calculated above (S) */
  masonrycell.style.gridRowEnd = "span " + rowSpan;
}

/**
 * Function and documentation for masonry layout lent from: https://w3bits.com/css-grid-masonry/#google_vignette
 *
 * Apply spanning to all the masonry items
 * Loop through all the items and apply the spanning to them using `resizeMasonryItem()` function.
 * @uses resizeMasonryItem
 */
export function resizeAllMasonryItems() {
  // Get all item class objects in one list
  var allItems = document.getElementsByClassName("masonry-brick");

  /* Loop through the above list and execute the spanning function to each list-item (i.e. each masonry item)*/
  for (var i = 0; i < allItems.length; i++) {
    resizeMasonryItem(allItems[i]);
  }
}
