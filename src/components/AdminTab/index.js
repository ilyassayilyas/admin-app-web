import style from "../../styles/mainpage-style.module.css";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { sendStepikExcelRequest, registerAdminRequest } from "../APIservice";

const dynamicCreateAdminTabStyles = (isHidden) => ({
  display: `${isHidden}`,
});

const AdminTab = (props) => {
  const [isCreateAdminTabHidden, setIsCreateAdminTabHidden] = useState("none");
  const [isCreateAdminBtnDisabled, setIsCreateAdminBtnDisabled] =
    useState(true);

  const [isUploadStepik, setIsUploadStepik] = useState("none");

  const isMaster = props.adminDataProps.isMaster;
  const userName = props.adminDataProps.username;

  const handleClose = () => {
    setIsCreateAdminTabHidden("none");
  };

  const handleCreateAdminBtnClick = () => {
    setIsCreateAdminTabHidden("block");
  };

  const { handleSubmit, register } = useForm();
  const onSubmit = async (data) => {
    await registerAdminRequest(data);
  };
  const { register: register2, handleSubmit: handleSubmit2, watch } = useForm();
  const onSubmitExcelFile = async (data) => {
    console.log(data.excel[0]);
    await sendStepikExcelRequest(data.excel[0]);
  };

  const handleUploadStepikOpenTab = () => {
    setIsUploadStepik("flex");
  };

  const handleCloseUploadStepikTab = () => {
    setIsUploadStepik("none");
  };

  useEffect(() => {
    isMaster
      ? setIsCreateAdminBtnDisabled(false)
      : setIsCreateAdminBtnDisabled(true);
  }, [isMaster]);

  return (
    <div className={style.adminTab}>
      <div className={style.adminTabContentContainer}>
        <h3>{`Status: ${isMaster ? "Master Admin" : "Admin"}`}</h3>
        <h3>{`Username: ${userName}`} </h3>
        <button
          className={style.uploadStepik}
          onClick={handleUploadStepikOpenTab}
        >
          Upload Stepik Excel
        </button>

        <button
          className={style.createAdminOpenBtn}
          disabled={isCreateAdminBtnDisabled}
          onClick={handleCreateAdminBtnClick}
        >
          Create New Admin
        </button>
      </div>

      <form
        className={style.uploadStepikTab}
        style={dynamicCreateAdminTabStyles(isUploadStepik)}
        onSubmit={handleSubmit2(onSubmitExcelFile)}
        encType="multipart/form-data"
      >
        <h3>Upload Final Excel</h3>
        {!watch("excel") || watch("excel").length === 0 ? (
          <div>
            <label htmlFor="excel-upload" className={style.fileInput}>
              Choose File
              <input
                style={{ display: "none" }}
                {...register2("excel")}
                id="excel-upload"
                type="file"
                name="excel"
              />
            </label>
          </div>
        ) : (
          <div>
            <label htmlFor="excel-upload" className={style.fileInput}>
              Choose File
              <input
                style={{ display: "none" }}
                {...register2("excel")}
                id="excel-upload"
                type="file"
                name="excel"
              />
            </label>
            <div className={style.fileName}>{watch("excel")[0].name}</div>
          </div>
        )}
        <button className={style.uploadStepikTabBtn}>Upload</button>
        <div
          className={style.closeBtn}
          onClick={handleCloseUploadStepikTab}
        ></div>
      </form>

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
