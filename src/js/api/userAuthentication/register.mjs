import { fetchWithToken } from "../apiCall.mjs";
import { API_AUTH, API_BASE, API_REGISTER, generalErrorContainer } from "../../constants.mjs";
import { displayMessage } from "../../templates/userFeedback/displayMessage.mjs";
import { login } from "./login.mjs";

let errorMessage;

export async function register(name, email, password) {
  try {
    const response = await fetchWithToken(API_BASE + API_AUTH + API_REGISTER, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });
    if (response.status === 201) {
      login(email, password);
    }
    if (response.status === 400) {
      errorMessage = "There is already an account with these credentials, try logging in instead";
      throw new Error("There is already an account with these credentials");
    } else if (response.status >= 401) {
      errorMessage = "An unexpected error occured, please try again later";
      throw new Error("Unknown error - investigate");
    }
  } catch (error) {
    displayMessage(errorMessage, generalErrorContainer);
    console.log(error);
  }
}
