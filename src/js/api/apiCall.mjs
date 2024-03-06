import { load } from "../storage/index.mjs";
import { API_KEY } from "../constants.mjs";

export async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(Boolean(options.body)),
  });
}

function headers(hasBody = false) {
  const headers = new Headers();
  const token = load("token");

  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }
  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }
  if (hasBody) {
    headers.append("Content-Type", "application/json");
  }
  return headers;
}
