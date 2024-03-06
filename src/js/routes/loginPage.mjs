import * as listenFor from "../ui/listeners/index.mjs";

export function loginPage() {
  listenFor.authentication();
  listenFor.validation();
}
