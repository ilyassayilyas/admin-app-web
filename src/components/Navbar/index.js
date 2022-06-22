import style from "../../styles/mainpage-style.module.css";
import jusanLogo from "../../img/jusan-logo.png";
import { logoutRequest } from "../APIservice";

const Navbar = (props) => {
  const handleLogout = async () => {
    await logoutRequest();
    props.setLoginStatus(false);
  };

  return (
    <div className={style.navbar}>
      <img src={jusanLogo} alt="jusan logo" className={style.jusanLogo} />
      <div className={style.linkGroup}>
        <div className={style.link}>Admin Profile</div>
        <div className={style.link} onClick={handleLogout}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Navbar;
