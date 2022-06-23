import style from "../../styles/mainpage-style.module.css";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { getAdminData } from "../APIservice";

const dynamicCreateAdminTabStyles = (isHidden) => ({
  display: `${isHidden}`,
});

const AdminTab = () => {
  getAdminData();

  const [isCreateAdminTabHidden, setIsCreateAdminTabHidden] = useState("none");
  const [isCreateAdminBtnDisabled, setIsCreateAdminBtnDisabled] =
    useState(true);

  const [isMasterAdmin, setIsMasterAdmin] = useState(false);

  useEffect(() => {
    isMasterAdmin
      ? setIsCreateAdminBtnDisabled(false)
      : setIsCreateAdminBtnDisabled(true);
  }, [isMasterAdmin]);

  const handleClose = () => {
    setIsCreateAdminTabHidden("none");
  };

  const handleCreateAdminBtnClick = () => {
    setIsCreateAdminTabHidden("block");
  };

  const { handleSubmit, register } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className={style.adminTab}>
      <button
        className={style.createAdminOpenBtn}
        disabled={isCreateAdminBtnDisabled}
        onClick={handleCreateAdminBtnClick}
      >
        Create New Admin
      </button>

      <h3>Username: </h3>
      <h3>{`Status: ${isMasterAdmin ? "Master Admin" : "Admin"}`}</h3>

      <form
        className={style.createAdminTab}
        style={dynamicCreateAdminTabStyles(isCreateAdminTabHidden)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3>Create New Admin</h3>
        <div className={style.closeBtn} onClick={handleClose}></div>
        <label htmlFor="Username"> Username </label>
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

export default AdminTab;
