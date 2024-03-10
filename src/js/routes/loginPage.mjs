import { authentication } from "../ui/listeners/onAuth.mjs";
import { validation } from "../ui/listeners/formValidation.mjs";
import { clearErrorMessages } from "../ui/listeners/clearErrorMsg.mjs";
import { generalErrorContainer } from "../constants.mjs";

export function loginPage() {
  authentication();
  validation();
  clearErrorMessages(generalErrorContainer);
}
