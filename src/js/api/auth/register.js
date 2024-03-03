import { fetchWithToken } from "../fetchWithToken.js";
import { API_AUTH, API_BASE, API_REGISTER, generalErrorContainer } from "../../constants.js";
import { displayErrorMessage } from "../../templates/errorMessage/index.js";
import { login } from "./index.js";

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
    displayErrorMessage(errorMessage, generalErrorContainer);
    console.log(error);
  }
}
