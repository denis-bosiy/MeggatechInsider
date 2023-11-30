import React from "react";
import {useTableData} from "./useTableData";
import Button, {ButtonSize, ButtonType} from "../../../components/Button/Button";
import Input, {InputSize, InputType} from "../../../components/Input/Input";
import {FinalReportItem} from "./model/types";

const FinalReportPage = () => {
  const {
    state,
    actions,
  } = useTableData();

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__buttons-wrapper">
          <Button
            type={ButtonType.Secondary}
            size={ButtonSize.Default}
            label="Скачать в excel"
            onClick={actions.handleExport}
          />
        </div>

        <Input
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
              ФИО
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("budgetHours")}>
              б. ч. в нед.
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("budgetSalary")}>
              б. зарплата
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("budgetHoursWithSp")}>
              б-сп. ч. в нед.
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("budgetSalaryWithSp")}>
              б-сп. зарплата
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("extraBudgetaryHours")}>
              внеб. ч. в нед.
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("extraBudgetarySalary")}>
              внеб. зарплата
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("additionalPaymentNotebooks")}>
              доплата за тетради
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("extraChargeForClassroom")}>
              доплата за классное руководство
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("extraChargeForIntensity")}>
              доплата за интенсивность
            </th>
            <th className="cell -filter" onClick={() => actions.handleSort("finalSalary")}>
              Итоговая з.п.
            </th>
          </tr>
        </thead>
        <tbody>
          {state.tableData.map((item: FinalReportItem) => (
            <tr className="row" key={item.id}>
              <td className="cell">{item.teacherName}</td>
              <td className="cell">{item.budgetHours}</td>
              <td className="cell">{item.budgetSalary}</td>
              <td className="cell">{item.budgetHoursWithSp}</td>
              <td className="cell">{item.budgetSalaryWithSp}</td>
              <td className="cell">{item.extraBudgetaryHours}</td>
              <td className="cell">{item.extraBudgetarySalary}</td>
              <td className="cell">{item.additionalPaymentNotebooks}</td>
              <td className="cell">{item.extraChargeForClassroom}</td>
              <td className="cell">{item.extraChargeForIntensity}</td>
              <td className="cell">{item.finalSalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FinalReportPage;
