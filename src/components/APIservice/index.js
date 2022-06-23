export const loginRequest = async (loginFormData) => {
  try {
    const loginResponse = await fetch(
      "http://164.92.192.48:8081/authenticate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify(loginFormData),
      }
    );
    if (loginResponse.status !== 200) throw new Error(loginResponse.status);

    const token = await loginResponse.text();
    return [loginResponse, token];
  } catch (err) {
    alert(err.message);
    return;
  }
};

export const logoutRequest = async () => {
  try {
    const logoutResponse = await fetch("http://164.92.192.48:8081/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(""),
    });
    return logoutResponse;
  } catch (err) {
    alert(err.message);
    return;
  }
};

export const getAdminData = async () => {
  try {
    const adminDataResponse = await fetch("http://164.92.192.48:8081/admin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(adminDataResponse);
    // if (adminDataResponse.status !== 200)
    //   throw new Error(adminDataResponse.status);
    const result = await adminDataResponse.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    // alert(err.message);
    return;
  }
};

// export const adminRegister = async (obj) => {
//   try {
//     const adminRegisterResponse = await fetch(
//       "http://164.92.192.48:8081/register",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "*/*",
//         },
//         body: JSON.stringify(obj),
//       }
//     );
//     return adminRegisterResponse;
//   } catch (err) {
//     alert(err.message);
//     return;
//   }
// };
