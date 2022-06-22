import style from "../../styles/mainpage-style.module.css";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";

const MainPage = (props) => {
  return (
    <div className={style.mainPage}>
      <Navbar setLoginStatus={props.setLoginStatus} />
      <Outlet />
    </div>
  );
};

export default MainPage;
