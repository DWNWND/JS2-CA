import { authFetch } from "../fetch.js";
import { API_AUTH, API_BASE, API_LOGIN } from "../constants.js";
import { save } from "../../storage/save.js";

export async function login(email, password) {
  const response = await authFetch(API_BASE + API_AUTH + API_LOGIN, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { accessToken, ...profile } = (await response.json()).data;
    save("token", accessToken);
    save("profile", profile);
    return profile;
  }

  throw new Error("Could not login the account");
}