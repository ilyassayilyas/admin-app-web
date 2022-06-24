import { Table } from "react-fluid-table";
import style from "../../../styles/stages-style.module.css";

const columns = [
  { key: "id", header: "ID", sortable: true, width: 50 },
  { key: "fullName", header: "Name", sortable: true, width: 200 },
  { key: "email", header: "Email", sortable: true, width: 250 },
  {
    key: "total",
    header: "Screening Score",
    sortable: true,
    width: 200,
  },
  { key: "stack", header: "Stack", sortable: true, width: 200 },
  { key: "programming", header: "Programming Exp", sortable: true, width: 200 },
  { key: "comExp", header: "Commercial Exp", sortable: true, width: 200 },
];

const UnacceptedTable = (props) => {
  const studentsList = [...props.students];

  //   studentsList.forEach(() => {});

  return (
    <div className={style.table}>
      <Table
        data={studentsList}
        columns={columns}
        itemKey={(row) => row.id}
        rowHeight={35}
        tableHeight={400}
        sortColumn="fullName"
        sortDirection="ASC"
      />
    </div>
  );
};

export default UnacceptedTable;
