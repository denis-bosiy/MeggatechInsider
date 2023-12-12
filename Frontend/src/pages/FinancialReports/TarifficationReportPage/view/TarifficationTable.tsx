import {useTableData} from "../useTableData";
import Button, {ButtonSize, ButtonType} from "../../../../components/Button/Button";
import Input, {InputSize, InputType} from "../../../../components/Input/Input";
import React from "react";
import {TarifficationReportData, TarifficationReportItem} from "../model/types";
import "./TarifficationTable.scss";

function TarifficationTable({
  title,
  data,
}: {
  title: string,
  data: TarifficationReportData
}) {
  const {
    state,
    actions,
  } = useTableData(data);

  return (
    <div className="tariffication-table">
      <div className="toolbar -fill">
        <div className="tariffication-table__header">
          <h2>{title}</h2>
          <div className="toolbar__buttons-wrapper">
            <Button
              className="toolbar__button"
              type={ButtonType.Secondary}
              size={ButtonSize.Default}
              label="Скачать в excel"
              onClick={actions.handleExport}
            />
          </div>
        </div>
        <Input
          className="toolbar__search"
          placeholder="Поиск"
          value={state.searchQuery}
          onValueChange={actions.setSearchQuery}
          size={InputSize.Default}
          type={InputType.Search}
          onSearch={actions.handleSearch}
        />
      </div>
      <table className="table">
        <thead className="header">
          <tr className="row">
            <th className="cell -filter" onClick={() => actions.handleSort("teacherName")}>
              Преподаватель
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("subject")}>
              Предмет
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("salary")}>
              Базовый оклад
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("categoryRatio")}>
              Катег.
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("educationRatio")}>
              Обр.
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("subjectType")}>
              Тип предмета
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("bookExpenses")}>
              На книги
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("salaryRate")}>
              Ставка з.п.
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("hoursPerWeek")}>
              Ч. в неделю
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("rateCoefficient")}>
              Ставка
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("notebooksPercentage")}>
              % за тетради
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("notebooksPrice")}>
              руб. за тетради
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("salaryWithNotebooksPrice")}>
              З.п. + за тетради
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("budgetSalary")}>
              З.п. бюджетная
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("extraBudgetaryCategory")}>
              Внеб. катег.
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("corporateSalary")}>
              Корп. оклад
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("corporateWages")}>
              Корп. з.п.
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("extraBudgetaryAllowance")}>
              Надбавка внеб.
            </th>
          </tr>
        </thead>
        <tbody>
          {state.tableData.map((item: TarifficationReportItem) => (
            <tr className="row" key={item.id}>
              <td className="cell">{item.teacherName}</td>
              <td className="cell">{item.subject}</td>
              <td className="cell">{item.salary}</td>
              <td className="cell">{item.categoryRatio}</td>
              <td className="cell">{item.educationRatio}</td>
              <td className="cell">{item.subjectType}</td>
              <td className="cell">{item.bookExpenses}</td>
              <td className="cell">{item.salaryRate}</td>
              <td className="cell">{item.hoursPerWeek}</td>
              <td className="cell">{item.rateCoefficient}</td>
              <td className="cell">{item.notebooksPercentage}</td>
              <td className="cell">{item.notebooksPrice}</td>
              <td className="cell">{item.salaryWithNotebooksPrice}</td>
              <td className="cell">{item.budgetSalary}</td>
              <td className="cell">{item.extraBudgetaryCategory}</td>
              <td className="cell">{item.corporateSalary}</td>
              <td className="cell">{item.corporateWages}</td>
              <td className="cell">{item.extraBudgetaryAllowance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export {
  TarifficationTable,
};
