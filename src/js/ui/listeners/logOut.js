import { load } from "../../storage/load.js";

export function logOut() {
  const logOutBtn = document.querySelector(".logout");

  if (logOutBtn) {
    logOutBtn.addEventListener("mouseup", (event) => {
      localStorage.clear();
      const token = load("token");
      if (!token) {
        location.pathname = "/";
      }
    });
  }
  if (!logOutBtn) {
    throw new Error();
  }
}
