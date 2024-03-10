/**
 * Adds a new searchParam to the url and updates the url with the new url without refreshing.
 *
 * Inspired by:
 * https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/set
 *
 * @param {(string | number)} id Passes in the id of the post that you want added to the searchParam.
 *  * @param {string} searchParam Passes in the searchparam you want to set
 */
export function insertUrlParam(searchParam, id) {
  if (history.pushState) {
    let searchParams = new URLSearchParams(window.location.search);
    searchParams.set(searchParam, id);
    let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + searchParams.toString();
    window.history.pushState({ path: newurl }, "", newurl);
  }
}
