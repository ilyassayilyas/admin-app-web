const animation = new Animation();

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
        token: sessionStorage.getItem("token"),
      },
    });
    const result = await adminDataResponse.json();
    return result;
  } catch (err) {
    console.log(err);
    alert(err.message);
    return;
  }
};

export const getScreeningStudents = async () => {
  try {
    const response = await fetch(
      "http://164.92.192.48:8090/students/students",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: sessionStorage.getItem("token"),
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
    alert(err.message);
    return;
  }
};

export const getJobOfferStudents = async () => {
  try {
    const response = await fetch(
      "http://164.92.192.48:8090/students/joboffer",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: sessionStorage.getItem("token"),
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
    alert(err.message);
    return;
  }
};

export const sendStepikExcelRequest = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const sendStepikExcelResponse = await fetch(
      "http://164.92.192.48:8090/fraud/import-order-excel",
      {
        method: "POST",
        headers: {
          token: sessionStorage.getItem("token"),
        },
        body: formData,
      }
    );
    if (sendStepikExcelResponse.status !== 200)
      throw new Error(sendStepikExcelResponse.status);
    const result = await sendStepikExcelResponse.text();
    alert("Success!");
    return result;
  } catch (err) {
    alert(err.message);
    return;
  } finally {
  }
};

export const registerAdminRequest = async (registerAdminData) => {
  try {
    const registerAdminResponse = await fetch(
      "http://164.92.192.48:8081/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          token: sessionStorage.getItem("token"),
        },
        body: JSON.stringify(registerAdminData),
      }
    );
    if (registerAdminResponse.status !== 200)
      throw new Error(registerAdminResponse.status);
    const result = await registerAdminResponse.json();
    return result;
  } catch (err) {
    console.log(err);
    alert(err.message);
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
