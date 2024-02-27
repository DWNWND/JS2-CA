// FUNCTIONS AND DOCUMENTATION FOR MASONRY FROM:
// https://w3bits.com/css-grid-masonry/#google_vignette

/**
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

/**
 * Resize the items when all the images inside the masonry grid finish loading.
 * This will ensure that all the content inside our masonry items is visible.
 *
 * USES: https://imagesloaded.desandro.com/ (CDN added to HTML)
 *
 * @uses ImagesLoaded
 * @uses resizeMasonryItem
 */
export function waitForImages() {
  var allItems = document.getElementsByClassName("media-masonry-brick");

  for (var i = 0; i < allItems.length; i++) {
    imagesLoaded(allItems[i], function (instance) {
      var item = instance.elements[0];
      resizeMasonryItem(item);
    });
  }
}
