import { resizeAllMasonryItems } from "../events/index.js";

/* Resize all the grid items on the load and resize events */
export function masonryOnChange() {
  var masonryEvents = ["load", "resize"];
  masonryEvents.forEach(function (event) {
    window.addEventListener(event, resizeAllMasonryItems);
  });
}
