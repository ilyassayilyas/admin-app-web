import style from "../../styles/stages-style.module.css";
import UserTable from "../UserTable";
import { useState, useEffect } from "react";
import { getScreeningStudents } from "../APIservice";

const ScreeningTab = () => {
  const [screeningStudents, setScreeningStudents] = useState([]);

  const getScreeningStudentsData = async () => {
    const data = await getScreeningStudents();
    setScreeningStudents(data);
  };

  useEffect(() => {
    getScreeningStudentsData();
  }, []);

  //   const screeningStudentsLength = screeningStudents.length;

  return (
    <div className={style.stageTab}>
      <h3>Total Students:</h3>
      <nav className={style.stageTabNav}>
        <div className={style.stageTabNavLink}>All</div>
        <div className={style.stageTabNavLink}>Frontend</div>
        <div className={style.stageTabNavLink}>Java</div>
        <div className={style.stageTabNavLink}>IOS</div>
        <div className={style.stageTabNavLink}>Android</div>
        <div className={style.stageTabNavLink}>Devops</div>
        <div className={style.stageTabNavDeleteBtn}>Dismiss Student</div>
      </nav>

      <UserTable screeningStudents={screeningStudents} />
    </div>
  );
};

export default ScreeningTab;
