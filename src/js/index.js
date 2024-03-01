import { loginPage, feedPage } from "./routes/index.js";

if (window.location.pathname === "/") {
  loginPage();
}

if (window.location.pathname === "/feed/" || window.location.pathname === "/feed/index" || window.location.pathname === "/feed/index.html" || window.location.pathname === "/feed/index.html?") {
  feedPage();
}

// LOGIN DETAILS
//   name: "test1234",
//   email: "test123dwnwnd@stud.noroff.no",
//   password: "testdwnwnd123",

//TEST REGISTER:
//   name: "testreg123"
//   email: "testreg123@stud.noroff.no"
//   password: "testreg123"