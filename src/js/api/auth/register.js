import { fetchWithToken } from "../fetchWithToken.js";
import { API_AUTH, API_BASE, API_REGISTER } from "../../constants.js";
import { displayErrorMessage } from "../../templates/errorMessage/index.js";

export async function register(name, email, password) {
  try {
    const response = await fetchWithToken(API_BASE + API_AUTH + API_REGISTER, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Could not register the account");
    }
  } catch (error) {
    displayErrorMessage(error);
    console.log(error);
  }
}
