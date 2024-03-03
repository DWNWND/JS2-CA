import { fetchWithToken } from "../fetchWithToken.js";
import { API_AUTH, API_BASE, API_LOGIN } from "../../constants.js";
import { save } from "../../storage/index.js";
import { displayErrorMessage } from "../../templates/errorMessage/index.js";

let errorMessage;
export async function login(email, password) {
  try {
    const response = await fetchWithToken(API_BASE + API_AUTH + API_LOGIN, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    if (response.status === 200) {
      const { accessToken, ...profile } = (await response.json()).data;
      save("token", accessToken);
      save("profile", profile);
      location.pathname = "/feed";
      // return profile;
    }
    if (response.status === 401) {
      errorMessage = "The login credentials is not correct (or there is no user in the V2 with these credentials)";
      throw new Error("The login credentials is not correct (or there is no user in the V2 with these credentials) - the server will not send a token");
    } else if (response.status === 400 || response.status >= 402) {
      errorMessage = "An unexpected error occured, please try again later";
      throw new Error("Unknown error - investigate");
    }
  } catch (error) {
    displayErrorMessage(errorMessage);
    console.log(error);
  }
}
