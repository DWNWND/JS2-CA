// https://stackoverflow.com/questions/10970078/modifying-a-query-string-without-reloading-the-page
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/set

export function removeUrlParameter(paramKey) {
  const url = window.location.href;
  var r = new URL(url);
  r.searchParams.delete(paramKey);
  const newUrl = r.href;
  window.history.pushState({ path: newUrl }, "", newUrl);
}
