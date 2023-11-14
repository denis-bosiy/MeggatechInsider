import React from "react";
import IconButton from "../../../../../../components/IconButton/IconButton";
import {GarbageIcon} from "../../../../../../icons";
import "./TeacherEducationTable.scss";
import {useDispatch, useSelector} from "react-redux";
import {TeacherEducationItem} from "../model/types";
import {TeacherEducationActionBuilder} from "../model/actions";

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
  const items = useSelector(
    (state: { teacherEducationStore: TeacherEducationItem[] }) => state.teacherEducationStore
  );
  const dispatch = useDispatch();

  const rows = items.map((item, index) => <tr className="row" key={`${item.id}-${index}`}>
    <td className="cell"><TeacherEducationEducationCell label={item.education}/></td>
    <td className="cell">
      <TeacherEducationCoefficientCell
        coefficient={item.coefficient}
        icon={<IconButton
          icon={<GarbageIcon />}
          small={true}
          onClick={() => dispatch(TeacherEducationActionBuilder.deleteItem(item.id))}
        />}
      />
    </td>
  </tr>);

  return <table className="table -fill -list">
    <thead className="header">
      <tr className="row">
        <th className="cell -filter">Образование преподавателей</th>
        <th className="cell">Коэффициент</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>;
};

export default TeacherEducationTable;
