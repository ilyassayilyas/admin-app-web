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
    if (logoutResponse.status !== 200) throw new Error(logoutResponse.status);
    return logoutResponse;
  } catch (err) {
    alert(err.message);
    return;
  }
};
