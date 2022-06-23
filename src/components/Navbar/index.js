import style from "../../styles/mainpage-style.module.css";
import jusanLogo from "../../img/jusan-logo.png";
import { logoutRequest } from "../APIservice";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const handleLogout = async () => {
    await logoutRequest();
    sessionStorage.clear();
    props.setLoginStatus(false);
  };

  return (
    <div className={style.navbar}>
      <img src={jusanLogo} alt="jusan logo" className={style.jusanLogo} />
      <div className={style.navbarCenterLinkGroup}>
        <Link className={style.link} to="screeningtab">
          Screening Stage
        </Link>
        <Link className={style.link} to="stepik">
          Stepik
        </Link>
        <Link className={style.link} to="autointerview">
          Autointerview
        </Link>
        <Link className={style.link} to="techinterview" status="admin">
          Technical Interview
        </Link>
        <Link className={style.link} to="joboffer">
          Job Offer
        </Link>
      </div>
      <div className={style.linkGroup}>
        <Link className={style.link} to="admintab">
          Admin Profile
        </Link>
        <div className={style.link} onClick={handleLogout}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Navbar;
