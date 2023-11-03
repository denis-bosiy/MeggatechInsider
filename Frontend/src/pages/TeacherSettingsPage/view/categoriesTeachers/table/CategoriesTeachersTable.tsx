import React from "react";
import IconButton from "../../../../../components/IconButton/IconButton";
import {GarbageIcon} from "../../../../../icons";
import "./CategoriesTeachersTable.scss";

interface CategoriesTeachersCategoriesCellProps {
  label: string,
}

const CategoriesTeachersCategoriesCell = ({
  label,
}: CategoriesTeachersCategoriesCellProps) => {
  return <>{label}</>;
};

interface CategoriesTeachersCoefficientCellProps {
  coefficient: number,
  icon: React.ReactNode,
}

const CategoriesTeachersCoefficientCell = ({
  coefficient,
  icon,
}: CategoriesTeachersCoefficientCellProps) => {
  return <div className="categories-teachers-coefficient-cell">
    {coefficient}
    {icon}
  </div>;
};

const CategoriesTeachersTable = () => {
  return <table className="table">
    <thead className="header">
      <tr className="row">
        <th className="cell -filter">Категории преподавателей</th>
        <th className="cell">Коэффициент</th>
      </tr>
    </thead>
    <tbody>
      <tr className="row">
        <td className="cell"><CategoriesTeachersCategoriesCell label={"Высшая категория"}/></td>
        <td className="cell">
          <CategoriesTeachersCoefficientCell
            coefficient={0.3}
            icon={<IconButton icon={<GarbageIcon />} small={true}/>}
          />
        </td>
      </tr>
      <tr className="row">
        <td className="cell"><CategoriesTeachersCategoriesCell label={"Высшая категория"}/></td>
        <td className="cell">
          <CategoriesTeachersCoefficientCell
            coefficient={0.3}
            icon={<IconButton icon={<GarbageIcon />} small={true}/>}
          />
        </td>
      </tr>
    </tbody>
  </table>;
};

export default CategoriesTeachersTable;
