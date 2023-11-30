import React, { useEffect, useState } from "react";
import Button, { ButtonType } from "../../../components/Button/Button";
import Select, { ISelectOption } from "../../../components/Select/Select";
import Input, { InputType } from "../../../components/Input/Input";
import { CTableBuilder } from "../../../core/Table/CTableBuilder";
import { useSelector } from "react-redux";
import { CTable } from "../../../core/Table/CTable";
import { CTableManager } from "../../../core/Table/CTableManager";
import { CurriculumMonitoringData, CurriculumMonitoring } from "./model/types";
import { TableType } from "../../../core/Table/TableType";
import { SortingOrder } from "../../../core/Table/SortingOrder";

const MONTH_SELECT: ISelectOption[] = [
  { content: "Январь", id: "1" },
  { content: "Февраль", id: "2" },
  { content: "Март", id: "3" },
  { content: "Апрель", id: "4" },
  { content: "Май", id: "5" },
  { content: "Июнь", id: "6" },
  { content: "Июль", id: "7" },
  { content: "Август", id: "8" },
  { content: "Сентябрь", id: "9" },
  { content: "Октябрь", id: "10" },
  { content: "Ноябрь", id: "11" },
  { content: "Декабрь", id: "12" }
];

const CONTRACT_TYPE_SELECT: ISelectOption[] = [
  { content: "ДС", id: "1" },
  { content: "ГПХ", id: "2" },
  { content: "Что-то еще...", id: "3" }
];

const MonthMonitoringPage = () => {
  const [selectedMonth, setSelectedMonth] = useState<ISelectOption>(MONTH_SELECT[0]);
  const [selectedContract, setSelectedContract] = useState<ISelectOption>(CONTRACT_TYPE_SELECT[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const { monitoring } = useSelector(
    (state: { cirruculumMonitoringStore: CurriculumMonitoringData }) => state.cirruculumMonitoringStore
  );
  const [monitoringTableData, setMonitoringTableData] = useState<CurriculumMonitoring[]>(structuredClone(monitoring));

  const monitoringTableBuilder: CTableBuilder = new CTableBuilder(monitoringTableData, setMonitoringTableData);
  monitoringTableBuilder.addSearchFeature();

  const monitoringTable: CTable = monitoringTableBuilder.getTable();
  const monitoringTableManager: CTableManager = new CTableManager(monitoringTable);

  const handleSelectMonth = (id: string) => {
    const month = MONTH_SELECT.find((month) => month.id === id);
    if (month) {
      setSelectedMonth(month);
    }
  };

  const handleSelectContract = (id: string) => {
    const contract = CONTRACT_TYPE_SELECT.find((contract) => contract.id === id);
    if (contract) {
      setSelectedContract(contract);
    }
  };

  const handleSearch = () => {
    monitoringTableManager.invokeFunction("search", TableType.Searchable, [searchQuery, monitoring]);
  };

  const handleSort = (columnName: string): void => {
    monitoringTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };

  useEffect(() => {
    const handleMonitoringDataUpdate = async () => {
      // TODO: Make api request
    };
    // or use react-query lib to get rid of making this
  }, [selectedContract, selectedMonth]);

  return (
    <>
      <div className="page-actions-panel">
        <div className="page-actions">
          <Select options={MONTH_SELECT} currentValue={selectedMonth} onValueChange={handleSelectMonth} />
          <Select options={CONTRACT_TYPE_SELECT} currentValue={selectedContract} onValueChange={handleSelectContract} />
          <Button label="Скачать в excel" type={ButtonType.Primary} />
        </div>
        <div>
          <Input
            type={InputType.Search}
            onValueChange={setSearchQuery}
            value={searchQuery}
            onSearch={handleSearch}
            placeholder="Поиск"
          />
        </div>
      </div>

      <table className="table">
        <thead className="header">
          <tr className="row">
            <th className="cell -filter" colSpan={2} onClick={() => handleSort("teacher")}>
              ФИО
            </th>
            <th className="cell -filter" onClick={() => handleSort("subject")}>
              Предмет
            </th>
            <th className="cell -filter" onClick={() => handleSort("subject")}>
              Классы
            </th>
            <th className="cell -filter" onClick={() => handleSort("hours")}>
              Часов
            </th>
            <th className="cell">Из них совмещ.</th>
            <th className="cell">Из них дистанц.</th>
            <th className="cell -filter" onClick={() => handleSort("total")}>
              Итого
            </th>
            <th className="cell">Из итога совмещ.</th>
            <th className="cell">Из итога дистанц.</th>
          </tr>
        </thead>
        <tbody>
          {monitoringTableData.map((monitoring, i) =>
            monitoring.contracts.map((contract, j) => (
              <tr className="row" key={`${i}-${j}`}>
                {j === 0 && (
                  <td className="cell" rowSpan={monitoring.contracts.length}>
                    {monitoring.teacher}
                  </td>
                )}
                <td className="cell">{contract.type}</td>
                <td className="cell">{contract.subject}</td>
                <td className="cell">{contract.classes.join(", ")}</td>
                <td className="cell">{contract.totalHours}</td>
                <td className="cell">{contract.combinedHours}</td>
                <td className="cell">{contract.remoteHours}</td>
                {j === 0 && (
                  <td className="cell" rowSpan={monitoring.contracts.length}>
                    {monitoring.total}
                  </td>
                )}
                {j === 0 && (
                  <td className="cell" rowSpan={monitoring.contracts.length}>
                    {monitoring.totalCombined}
                  </td>
                )}
                {j === 0 && (
                  <td className="cell" rowSpan={monitoring.contracts.length}>
                    {monitoring.totalRemoted}
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default MonthMonitoringPage;
