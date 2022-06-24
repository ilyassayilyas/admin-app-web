import style from "../../styles/stages-style.module.css";

const StepikTab = () => {
  return (
    <div className={style.stageTab}>
      <h3 className={style.stageTabHeader}>Stepik Total Students:</h3>
      <nav className={style.stageTabNav}>
        <div className={style.stageTabNavLink}>All</div>
        <div className={style.stageTabNavLink}>Frontend</div>
        <div className={style.stageTabNavLink}>Java</div>
        <div className={style.stageTabNavLink}>IOS</div>
        <div className={style.stageTabNavLink}>Android</div>
        <div className={style.stageTabNavLink}>Devops</div>
        <div className={style.stageTabNavDeleteBtn}>Dismiss Student</div>
      </nav>
      <h3 className={style.stepikLabelWarning}>
        Upload Final Stepik Table In Admin Profile!
      </h3>
    </div>
  );
};

export default StepikTab;
