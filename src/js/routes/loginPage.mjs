import { authentication } from "../ui/listeners/login/onAuth.mjs";
import { validation } from "../ui/listeners/login/formValidation.mjs";
import { clearErrorMessages } from "../ui/listeners/general/clearErrorMsg.mjs";
import { generalErrorContainer } from "../constants.mjs";

export function loginPage() {
  authentication();
  validation();
  clearErrorMessages(generalErrorContainer);
}
