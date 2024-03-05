import * as listenFor from "../ui/listeners/index.js";

export function loginPage() {
  listenFor.authentication();
  listenFor.validation();
}
