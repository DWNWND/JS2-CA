const API_BASE_URL = "https://v2.api.noroff.dev";

// async function registerUser(url, data) {
//   try {
//     const postData = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     };

//     const response = await fetch(url, postData);
//     console.log(response);
//     const json = await response.json();
//     console.log(json);
//     return json;
//   } catch (error) {
//     console.log(error);
//   }
// }

const user = {
  name: "test1234", // Required
  email: "test123dwnwnd@stud.noroff.no", // Required
  password: "testdwnwnd123", // Required
};

// registerUser(`${API_BASE_URL}/auth/register`, user);

const userLogin = {
  email: "test.dwnwnd@noroff.no",
  password: "test1234",
};

async function loginUser(url, data) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, postData);
    // console.log(response);

    const json = await response.json();
    const accessToken = json.data.accessToken;

    localStorage.setItem("accessToken", accessToken);

    console.log(json);
    // Logs:
    // accessToken: "eyJhbGciOiJIuzI1NiIsInR...
    // avatar: ""
    // email: "test-account-a@noroff.no
    // name: "test_account_a"
    return json;
  } catch (error) {
    console.log(error);
  }
}

loginUser(`${API_BASE_URL}/auth/login`, user);
