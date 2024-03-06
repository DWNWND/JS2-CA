import { headers } from "./headers.mjs";

export async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(Boolean(options.body)),
  });
}
