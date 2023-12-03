import React from "react";
import IconButton from "../../../../../../components/IconButton/IconButton";
import { CheckIcon, GarbageIcon } from "../../../../../../icons";
import { TypesContractsItem } from "../model/types";
import Input, { InputSize } from "../../../../../../components/Input/Input";

interface ITypesContractsTableProps {
  items: TypesContractsItem[];
  handleDeleteRow(id: string): void;
  isAdding: boolean;
  handleApplying(): void;
  setItems(items: TypesContractsItem[]): void;
  handleSort(columnName: string): void;
}

const TypesContractsTable = (props: ITypesContractsTableProps) => {
  const rows = props.items
    .filter((item: TypesContractsItem, index: number) => !props.isAdding || index !== props.items.length - 1)
    .map((item, index) => (
      <tr className="row" key={`${item.id}-${index}`}>
        <td className="cell">{item.name}</td>
        <td className="cell">
          <IconButton icon={<GarbageIcon />} small={true} onClick={() => props.handleDeleteRow(item.id)} />
        </td>
      </tr>
    ));

  return (
    <table className="table -fill -list">
      <thead className="header">
        <tr className="row">
          <th className="cell -filter" onClick={() => props.handleSort("name")}>
            Типы договоров
          </th>
        </tr>
      </thead>
      <tbody>
        {rows}{" "}
        {props.isAdding && (
          <tr className="row">
            <td className="cell">
              <Input
                size={InputSize.Micro}
                value={props.items[props.items.length - 1].name}
                placeholder=""
                onValueChange={(newNameValue: string) => {
                  props.setItems(
                    props.items.map((value: TypesContractsItem, index: number) =>
                      index === props.items.length - 1
                        ? {
                          id: value.id,
                          name: newNameValue
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

export default TypesContractsTable;
