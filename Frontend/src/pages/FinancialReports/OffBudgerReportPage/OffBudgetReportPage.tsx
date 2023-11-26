import React, { useState } from "react";
import ActionButton, { ActionButtonType } from "../../../components/ActionButton/ActionButton";
import { PenIcon } from "../../../icons";
import Button, { ButtonType, ButtonSize } from "../../../components/Button/Button";
import Input, { InputSize, InputType } from "../../../components/Input/Input";
import { TeachersOffBudgetReportPageData, TeacherData } from "./model/types";
import { useSelector } from "react-redux";
import { CTableBuilder } from "../../../core/Table/CTableBuilder";
import { CTable } from "../../../core/Table/CTable";
import { CTableManager } from "../../../core/Table/CTableManager";
import { TableType } from "../../../core/Table/TableType";
import { SortingOrder } from "../../../core/Table/SortingOrder";

const OffBudgetReportPage = (): JSX.Element => {
  const teachers = useSelector(
    (state: { teachersOffBudgetReportPageStore: TeachersOffBudgetReportPageData }) =>
      state.teachersOffBudgetReportPageStore
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isTableEditing, setIsTableEditing] = useState<{ value: boolean }>({ value: false });
  const [teachersTableData, setTeachersTableData] = useState<TeachersOffBudgetReportPageData>(
    structuredClone(teachers)
  );
  const teachersTableBuilder: CTableBuilder = new CTableBuilder(teachersTableData, setTeachersTableData);
  teachersTableBuilder.addEditFeature(isTableEditing, setIsTableEditing);
  teachersTableBuilder.addExportFeature();
  teachersTableBuilder.addSearchFeature();
  const teachersTable: CTable = teachersTableBuilder.getTable();
  const teachersTableManager: CTableManager = new CTableManager(teachersTable);

  const handleSearch = (): void => {
    teachersTableManager.invokeFunction("search", TableType.Searchable, [searchQuery, teachers]);
  };
  const handleSort = (columnName: string): void => {
    teachersTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__buttons-wrapper">
          <ActionButton
            className="toolbar__button"
            label="Редактировать"
            icon={<PenIcon width={18} height={18} />}
            type={ActionButtonType.Default}
            onClick={() => console.log("make editing")}
          />
          <Button type={ButtonType.Secondary} size={ButtonSize.Default} label="Скачать в excel" />
        </div>

        <Input
          placeholder="Поиск"
          value={searchQuery}
          onValueChange={setSearchQuery}
          size={InputSize.Default}
          type={InputType.Search}
          onSearch={handleSearch}
        />
      </div>

      <table className="table">
        <thead className="header">
          <tr className="row">
            <th className="cell -filter" onClick={() => handleSort("teacherName")}>
              ФИО
            </th>
            <th className="cell -filter" onClick={() => handleSort("subjectName")}>
              Предмет
            </th>
            <th className="cell -filter" onClick={() => handleSort("hoursPerWeek")}>
              Часов в неделю
            </th>
            <th className="cell -filter" onClick={() => handleSort("rate")}>
              Ставка
            </th>
            <th className="cell -filter" onClick={() => handleSort("offBudgetCategory")}>
              Внебюджетная категория
            </th>
            <th className="cell -filter" onClick={() => handleSort("corporateSalary")}>
              Корп. оклад
            </th>
            <th className="cell -filter" onClick={() => handleSort("salary")}>
              Размер з.п.
            </th>
          </tr>
        </thead>
        <tbody>
          {teachersTableData.map((teacher: TeacherData) => (
            <tr className="row" key={teacher.id}>
              <td className="cell">{teacher.teacherName}</td>
              <td className="cell">{teacher.subjectName}</td>
              <td className="cell">{teacher.hoursPerWeek}</td>
              <td className="cell">{teacher.rate}</td>
              <td className="cell">{teacher.offBudgetCategory}</td>
              <td className="cell">{teacher.corporateSalary}</td>
              <td className="cell">{teacher.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default OffBudgetReportPage;
