import * as listenFor from "../ui/listeners/index.mjs";
import { generalErrorContainer } from "../constants.mjs";

export function loginPage() {
  listenFor.authentication();
  listenFor.validation();
  listenFor.clearErrorMessages(generalErrorContainer);
}
