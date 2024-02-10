import { headers } from "./headers.js";

export async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(Boolean(options.body)),
  });
}
