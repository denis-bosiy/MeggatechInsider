import React from "react";
import IconButton from "../../../../../../components/IconButton/IconButton";
import { CheckIcon, GarbageIcon } from "../../../../../../icons";
import "./CategoriesTeachersTable.scss";
import { CategoriesTeachersItem } from "../model/types";
import Input, { InputSize } from "../../../../../../components/Input/Input";

interface CategoriesTeachersCategoriesCellProps {
  isAdding: boolean;
  label: string;
  items: CategoriesTeachersItem[];
  setItems: (items: CategoriesTeachersItem[]) => void;
}

const CategoriesTeachersCategoriesCell = ({
  isAdding,
  label,
  items,
  setItems
}: CategoriesTeachersCategoriesCellProps) => {
  if (isAdding) {
    return (
      <Input
        placeholder="Категория преподавателя"
        value={label}
        onValueChange={(newCategory: string) =>
          setItems(
            items.map((data: CategoriesTeachersItem) =>
              data.category === label ? { ...data, category: newCategory } : data
            )
          )
        }
        size={InputSize.Micro}
      />
    );
  }
  return <>{label}</>;
};

interface CategoriesTeachersCoefficientCellProps {
  isAdding: boolean;
  coefficient: string;
  icon: React.ReactNode;
  items: CategoriesTeachersItem[];
  setItems: (items: CategoriesTeachersItem[]) => void;
}

const CategoriesTeachersCoefficientCell = ({
  coefficient,
  icon,
  isAdding,
  setItems,
  items
}: CategoriesTeachersCoefficientCellProps) => {
  return (
    <div className="categories-teachers-coefficient-cell">
      {isAdding ? (
        <Input
          placeholder="Коэффицент"
          value={coefficient.toString()}
          onValueChange={(newCoefficient: string) =>
            setItems(
              items.map((data: CategoriesTeachersItem) =>
                data.coefficient === coefficient ? { ...data, coefficient: newCoefficient } : data
              )
            )
          }
          size={InputSize.Micro}
        />
      ) : (
        <>{coefficient}</>
      )}
      {icon}
    </div>
  );
};

interface CategoriesTeachersTableProps {
  items: CategoriesTeachersItem[];
  isAdding: boolean;
  handleDeleteRowInCategoriesTeachers: (id: string) => void;
  handleApplyingNewTableSetting: () => void;
  setItems: (items: CategoriesTeachersItem[]) => void;
  handleSort: (columnName: string) => void;
}

const CategoriesTeachersTable = (props: CategoriesTeachersTableProps) => {
  const rows = props.items.map((item, index) => (
    <tr className="row" key={`${item.id}-${index}`}>
      <td className="cell">
        <CategoriesTeachersCategoriesCell
          isAdding={index === props.items.length - 1 && props.isAdding}
          label={item.category}
          items={props.items}
          setItems={props.setItems}
        />
      </td>
      <td className="cell">
        <CategoriesTeachersCoefficientCell
          isAdding={index === props.items.length - 1 && props.isAdding}
          items={props.items}
          setItems={props.setItems}
          coefficient={item.coefficient}
          icon={
            index !== props.items.length - 1 || !props.isAdding ? (
              <IconButton
                icon={<GarbageIcon />}
                small={true}
                onClick={() => props.handleDeleteRowInCategoriesTeachers(item.id)}
              />
            ) : (
              <IconButton icon={<CheckIcon />} onClick={() => props.handleApplyingNewTableSetting()} />
            )
          }
        />
      </td>
    </tr>
  ));

  return (
    <table className="table -fill -list">
      <thead className="header">
        <tr className="row">
          <th className="cell -filter" onClick={() => props.handleSort("category")}>
            Категории преподавателей
          </th>
          <th className="cell">Коэффициент</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default CategoriesTeachersTable;
