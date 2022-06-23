import { Table } from "react-fluid-table";
import { useEffect, useState } from "react";
import style from "../../styles/stages-style.module.css";

const columns = [
  { key: "number", header: "№", sortable: true, width: 50 },
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
  { key: "status", header: "Status", sortable: true, width: 120 },
];

const UserTable = (props) => {
  const screeningStudentsList = [...props.screeningStudents];

  //   const sorting = (col) => {
  //     const sorted = [...screeningStudentsList].sort((a, b) =>
  //       a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
  //     );
  //     setScreeningStudentsList(sorted);
  //   };

  //   const onSort = (col, dir) => {
  //     setScreeningStudentsList(
  //       !col || !dir
  //         ? screeningStudentsList
  //         : _.orderBy(screeningStudentsList, [col], [dir.toLowerCase()])
  //     );
  //   };

  return (
    <div className={style.table}>
      {/* <table>
        <tbody>
          <tr>
            <th>№</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Screening Score</th>
            <th>Stack</th>
            <th>Status</th>
          </tr>
          {data.map((student, i) => (
            <tr key={student.id}>
              <td>{i}</td>
              <td>{student.id}</td>
              <td>{student.fullName}</td>
              <td>{student.email}</td>
              <td>{student.total}</td>
              <td>{student.stack}</td>
              <td>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <Table
        data={screeningStudentsList}
        columns={columns}
        itemKey={(row) => row.id}
        rowHeight={35}
        tableHeight={500}
        // onSort={sorting}
        sortColumn="fullName"
        sortDirection="ASC"
      />
    </div>
  );
};

export default UserTable;
