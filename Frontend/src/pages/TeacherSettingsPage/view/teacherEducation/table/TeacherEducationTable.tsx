import React from "react";
import IconButton from "../../../../../components/IconButton/IconButton";
import {GarbageIcon} from "../../../../../icons";
import "./TeacherEducationTable.scss";

interface TeacherEducationEducationCellProps {
  label: string,
}

const TeacherEducationEducationCell = ({
  label,
}: TeacherEducationEducationCellProps) => {
  return <>{label}</>;
};

interface TeacherEducationCoefficientCellProps {
  coefficient: number,
  icon: React.ReactNode,
}

const TeacherEducationCoefficientCell = ({
  coefficient,
  icon,
}: TeacherEducationCoefficientCellProps) => {
  return <div className="teacher-education-coefficient-cell">
    {coefficient}
    {icon}
  </div>;
};

const TeacherEducationTable = () => {
  return <table className="table">
    <thead className="header">
      <tr className="row">
        <th className="cell -filter">Образование преподавателей</th>
        <th className="cell">Коэффициент</th>
      </tr>
    </thead>
    <tbody>
      <tr className="row">
        <td className="cell"><TeacherEducationEducationCell label={"Среднее образование"}/></td>
        <td className="cell">
          <TeacherEducationCoefficientCell
            coefficient={0.3}
            icon={<IconButton icon={<GarbageIcon />} small={true}/>}
          />
        </td>
      </tr>
      <tr className="row">
        <td className="cell"><TeacherEducationEducationCell label={"Высшее образование"}/></td>
        <td className="cell">
          <TeacherEducationCoefficientCell
            coefficient={0.3}
            icon={<IconButton icon={<GarbageIcon />} small={true}/>}
          />
        </td>
      </tr>
      <tr className="row">
        <td className="cell"><TeacherEducationEducationCell label={"Степень к.н."}/></td>
        <td className="cell">
          <TeacherEducationCoefficientCell
            coefficient={0.3}
            icon={<IconButton icon={<GarbageIcon />} small={true}/>}
          />
        </td>
      </tr>
      <tr className="row">
        <td className="cell"><TeacherEducationEducationCell label={"Степень д.н."}/></td>
        <td className="cell">
          <TeacherEducationCoefficientCell
            coefficient={0.3}
            icon={<IconButton icon={<GarbageIcon />} small={true}/>}
          />
        </td>
      </tr>
    </tbody>
  </table>;
};

export default TeacherEducationTable;
