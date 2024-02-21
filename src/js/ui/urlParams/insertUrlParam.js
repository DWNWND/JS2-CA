// https://stackoverflow.com/questions/10970078/modifying-a-query-string-without-reloading-the-page
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/set

export function insertUrlParam(id) {
  if (history.pushState) {
    let searchParams = new URLSearchParams(window.location.search);
    searchParams.set("post-id", id);
    let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + searchParams.toString();
    window.history.pushState({ path: newurl }, "", newurl);
  }
}
