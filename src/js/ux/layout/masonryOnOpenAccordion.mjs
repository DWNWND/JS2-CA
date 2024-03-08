import { masonry } from "./index.mjs";

function accordionResize(accordion) {
  accordion.forEach((accordionelement) => {
    accordionelement.addEventListener("hidden.bs.collapse", function () {
      masonry();
    });
    accordionelement.addEventListener("shown.bs.collapse", function () {
      masonry();
    });
  });
}

export function runMasonryOnAccordion() {
  var accordions = document.getElementsByClassName("detect-collapse");
  let accordionsArray = [...accordions];

  accordionResize(accordionsArray);
}
