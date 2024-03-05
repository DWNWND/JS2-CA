import { loginPage, feedPage } from "./routes/index.js";
import { load } from "./storage/index.js";

if (window.location.pathname === "/" || window.location.pathname === "") {
  loginPage();

  const token = load("token");
  if (token) {
    location.pathname = "/feed";
  }
}

if (window.location.pathname === "/feed/" || window.location.pathname === "/feed/index" || window.location.pathname === "/feed/index.html" || window.location.pathname === "/feed/index.html?") {
  feedPage();

  const token = load("token");
  if (!token) {
    location.pathname = "/";
  }
}

// LOGIN DETAILS
//   name: "test1234",
//   email: "test123dwnwnd@stud.noroff.no",
//   password: "testdwnwnd123",

//TEST REGISTER:
//   name: "testreg123"
//   email: "testreg123@stud.noroff.no"
//   password: "testreg123"

//TEST V1
// name: theatesterv1
// email: v1testthea@noroff.no
// password: test12345
