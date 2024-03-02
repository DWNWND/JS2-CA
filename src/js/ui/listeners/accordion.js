import { masonry } from "../../ux/layout/index.js";

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

export function openAccordion() {
  var accordions = document.getElementsByClassName("detect-collapse");
  let accordionsArray = [...accordions];

  accordionResize(accordionsArray);
}
