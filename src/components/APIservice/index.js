export const loginRequest = async (loginFormData) => {
  try {
    const loginResponse = await fetch("http://164.92.192.48:8081/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(loginFormData),
    });
    if (loginResponse.status !== 200) throw new Error(loginResponse.status);
    console.log(loginResponse);
    return loginResponse;
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
        Accept: "*/*",
      },
    });
    // if (adminDataResponse.status !== 200)
    //   throw new Error(adminDataResponse.status);
    console.log(await adminDataResponse.json());
    return adminDataResponse;
  } catch (err) {
    // alert(err.message);
    return;
  }
};
