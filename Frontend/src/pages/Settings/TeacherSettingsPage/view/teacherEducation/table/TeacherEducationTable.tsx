import React from "react";
import IconButton from "../../../../../../components/IconButton/IconButton";
import { CheckIcon, GarbageIcon } from "../../../../../../icons";
import { TeacherEducationItem } from "../model/types";
import Input, { InputSize } from "../../../../../../components/Input/Input";

interface ITeacherEducationTableProps {
  items: TeacherEducationItem[];
  handleDeleteRow(id: string): void;
  isAdding: boolean;
  handleApplying(): void;
  setItems(items: TeacherEducationItem[]): void;
  handleSort(columnName: string): void;
}

const TeacherEducationTable = (props: ITeacherEducationTableProps) => {
  const rows = props.items
    .filter((item: TeacherEducationItem, index: number) => !props.isAdding || index !== props.items.length - 1)
    .map((item, index) => (
      <tr className="row" key={`${item.id}-${index}`}>
        <td className="cell">{item.education}</td>
        <td className="cell">{item.coefficient}</td>
        <td className="cell">
          <IconButton icon={<GarbageIcon />} small={true} onClick={() => props.handleDeleteRow(item.id)} />
        </td>
      </tr>
    ));

  return (
    <table className="table -fill -list">
      <thead className="header">
        <tr className="row">
          <th className="cell -filter" onClick={() => props.handleSort("education")}>
            Образование преподавателей
          </th>
          <th className="cell">Коэффициент</th>
          <th className="cell"></th>
        </tr>
      </thead>
      <tbody>
        {rows}
        {props.isAdding && (
          <tr className="row">
            <td className="cell">
              <Input
                size={InputSize.Micro}
                value={props.items[props.items.length - 1].education}
                placeholder=""
                onValueChange={(newEducationValue: string) => {
                  props.setItems(
                    props.items.map((value: TeacherEducationItem, index: number) =>
                      index === props.items.length - 1
                        ? {
                          id: value.id,
                          education: newEducationValue,
                          coefficient: value.coefficient
                        }
                        : value
                    )
                  );
                }}
              />
            </td>
            <td className="cell">
              <Input
                size={InputSize.Micro}
                value={
                  props.items[props.items.length - 1].coefficient
                    ? props.items[props.items.length - 1].coefficient.toString()
                    : ""
                }
                placeholder=""
                onValueChange={(newCoefficientValue: string) => {
                  props.setItems(
                    props.items.map((value: TeacherEducationItem, index: number) =>
                      index === props.items.length - 1
                        ? {
                          id: value.id,
                          education: value.education,
                          coefficient: parseFloat(newCoefficientValue)
                        }
                        : value
                    )
                  );
                }}
              />
            </td>
            <td className="cell">
              <IconButton icon={<CheckIcon />} small={true} onClick={() => props.handleApplying()} />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TeacherEducationTable;
