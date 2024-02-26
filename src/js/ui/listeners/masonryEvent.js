// https://w3bits.com/css-grid-masonry/#google_vignette

import { resizeAllMasonryItems } from "../events/index.js";

/* Resize all the grid items on the load and resize events */
export function masonryOnChange() {
  var masonryEvents = ["load", "resize"];
  masonryEvents.forEach(function (event) {
    window.addEventListener(event, resizeAllMasonryItems);
  });
}

function accordionResize(accordion) {
  accordion.forEach((accordionelement) => {
    accordionelement.addEventListener("hidden.bs.collapse", function () {
      resizeAllMasonryItems();
    });
    accordionelement.addEventListener("shown.bs.collapse", function () {
      resizeAllMasonryItems();
    });
  });
}

export function openAccordion() {
  var accordions = document.getElementsByClassName("detect-collapse");
  let accordionsArray = [...accordions];

  accordionResize(accordionsArray);
}
