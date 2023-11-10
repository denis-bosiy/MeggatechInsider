import React from "react";
import IconButton from "../../../../../components/IconButton/IconButton";
import {GarbageIcon} from "../../../../../icons";
import "./CategoriesTeachersTable.scss";
import {useDispatch, useSelector} from "react-redux";
import {CategoriesTeachersItem} from "../model/types";
import {CategoriesTeachersActionBuilder} from "../model/actions";

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
  const items = useSelector(
    (state: { categoriesTeachersStore: CategoriesTeachersItem[] }) => state.categoriesTeachersStore
  );
  const dispatch = useDispatch();

  const rows = items.map((item, index) => <tr className="row" key={`${item.id}-${index}`}>
    <td className="cell"><CategoriesTeachersCategoriesCell label={item.category}/></td>
    <td className="cell">
      <CategoriesTeachersCoefficientCell
        coefficient={item.coefficient}
        icon={<IconButton
          icon={<GarbageIcon />}
          small={true}
          onClick={() => dispatch(CategoriesTeachersActionBuilder.deleteItem(item.id))}
        />}
      />
    </td>
  </tr>);

  return <table className="table">
    <thead className="header">
      <tr className="row">
        <th className="cell -filter">Категории преподавателей</th>
        <th className="cell">Коэффициент</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>;
};

export default CategoriesTeachersTable;
