import style from "../../styles/mainpage-style.module.css";
import Navbar from "../../components/Navbar";

const MainPage = (props) => {
  return (
    <div className={style.mainPage}>
      <Navbar setLoginStatus={props.setLoginStatus} />
    </div>
  );
};

export default MainPage;
