import style from "../../styles/stages-style.module.css";

const StepikTab = () => {
  return (
    <div className={style.stageTab}>
      <h3>Stepik Total Students:</h3>
      <nav className={style.stageTabNav}>
        <div className={style.stageTabNavLink}>All</div>
        <div className={style.stageTabNavLink}>Frontend</div>
        <div className={style.stageTabNavLink}>Java</div>
        <div className={style.stageTabNavLink}>IOS</div>
        <div className={style.stageTabNavLink}>Android</div>
        <div className={style.stageTabNavLink}>Devops</div>
      </nav>
    </div>
  );
};

export default StepikTab;
