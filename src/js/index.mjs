import { load } from "./storage/load.mjs";

if (window.location.pathname === "/" || window.location.pathname === "") {
  const routesModule = "./routes/loginPage.mjs";
  const { loginPage } = await import(routesModule);
  loginPage();

  const token = load("token");
  if (token) {
    location.pathname = "/feed";
  }
}

if (window.location.pathname === "/feed/" || window.location.pathname === "/feed/index" || window.location.pathname === "/feed/index.html" || window.location.pathname === "/feed/index.html?") {
  const routesModule = "./routes/feedPage.mjs";
  const { feedPage } = await import(routesModule);
  feedPage();

  const token = load("token");
  if (!token) {
    location.pathname = "/";
  }
}
