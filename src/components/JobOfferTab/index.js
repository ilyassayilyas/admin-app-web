import style from "../../styles/stages-style.module.css";
import JobOfferUserTable from "../UserTables/JobOfferTable";
import { useState, useEffect } from "react";
import { getJobOfferStudents } from "../APIservice";

const JobOfferTab = () => {
  const [students, setStudents] = useState([]);

  const getStudentsData = async () => {
    const data = await getJobOfferStudents();
    setStudents(data);
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

      <JobOfferUserTable students={students} />
    </div>
  );
};

export default JobOfferTab;
