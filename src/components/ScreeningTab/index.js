import style from "../../styles/stages-style.module.css";
import ScreeningUserTable from "../UserTables/ScreeningUserTable";
import { useState, useEffect } from "react";
import { getScreeningStudents } from "../APIservice";
import { sendEmailRequest } from "../APIservice";

const ScreeningTab = () => {
  const [students, setStudents] = useState([]);

  const getStudentsData = async () => {
    const data = await getScreeningStudents();
    setStudents(data);
  };

  const handleSendEmail = async () => {
    const email = [];
    const newStudentArray = [...students];

    newStudentArray.forEach((student) => {
      const object = {};
      object.email = student.email;
      email.push(object);
    });

    await sendEmailRequest(email);
  };

  useEffect(() => {
    getStudentsData();
  }, []);

  return (
    <div className={style.stageTab}>
      <h3
        className={style.stageTabHeader}
      >{`Total Students : ${students.length}`}</h3>
      <nav className={style.stageTabNav}>
        <div className={style.stageTabNavLink}>All</div>
        <div className={style.stageTabNavLink}>Frontend</div>
        <div className={style.stageTabNavLink}>Java</div>
        <div className={style.stageTabNavLink}>IOS</div>
        <div className={style.stageTabNavLink}>Android</div>
        <div className={style.stageTabNavLink}>Devops</div>
        <div className={style.stageTabNavDeleteBtn}>Dismiss Student</div>
      </nav>
      <ScreeningUserTable students={students} />
      <button className={style.sendEmailBtn} onClick={handleSendEmail}>
        Send Email
      </button>
    </div>
  );
};

export default ScreeningTab;
