import { fetchWithToken } from "../fetchWithToken.js";
import { API_AUTH, API_BASE, API_LOGIN } from "../../constants.js";
import { save } from "../../storage/index.js";
import { displayErrorMessage } from "../../templates/errorMessage/index.js";

export async function login(email, password) {
  try {
    const response = await fetchWithToken(API_BASE + API_AUTH + API_LOGIN, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { accessToken, ...profile } = (await response.json()).data;
      save("token", accessToken);
      save("profile", profile);
      return profile;
    } else {
      throw new Error("Could not login the account");
    }
  } catch (error) {
    displayErrorMessage(error);
    console.log(error);
  }
}
