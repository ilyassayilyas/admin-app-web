import style from "../../styles/login-style.module.css";
import React from "react";
import { useForm } from "react-hook-form";
import { loginRequest } from "../../components/APIservice";

const LoginPage = (props) => {
  const handleLogin = () => {
    props.setLoginStatus(true);
  };

  const { handleSubmit, register } = useForm();
  const onSubmit = async (data) => {
    const loginResponse = await loginRequest(data);
    sessionStorage.setItem("token", loginResponse[1]);
    loginResponse[0].status === 200 ? handleLogin() : alert("Smth Wrong!");
  };

  return (
    <div className={style.loginPage}>
      <div className={style.loginFormBackground}>
        <div className={style.loginFormBackgroundShape}></div>
        <div className={style.loginFormBackgroundShape}></div>
      </div>

      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className={style.loginForm}
      >
        <h3>Authorization</h3>

        <label htmlFor="username"> Username </label>
        <input
          id="username"
          type="text"
          {...register("username", { required: true })}
          placeholder="Username"
          name="username"
          required
        />

        <label htmlFor="password"> Password </label>
        <input
          id="password"
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
