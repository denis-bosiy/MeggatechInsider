import React, {useState} from "react";
import {useSelector} from "react-redux";
import {BudgetStatisticsPageData, BudgetStatisticsData, BudgetStatisticsTableData} from "./model/types";
import "./BudgetStatisticsPage.scss";
import Input, {InputSize, InputType} from "../../../components/Input/Input";
import { CTableBuilder } from "../../../core/Table/CTableBuilder";
import { CTable } from "../../../core/Table/CTable";
import { CTableManager } from "../../../core/Table/CTableManager";
import { TableType } from "../../../core/Table/TableType";
import { SortingOrder } from "../../../core/Table/SortingOrder";

const BudgetStatisticsPage = () => {
  const { class10, class11, total } = useSelector((state: { budgetStatisticsPageStore: BudgetStatisticsPageData }) => state.budgetStatisticsPageStore);

  let sum10H = 0;
  let sum11H = 0;
  let sumTotalH = 0;
  let sum10R = 0;
  let sum11R = 0;
  let sumTotalR = 0;
  
  const [class10Data, setClass10Data] = useState<BudgetStatisticsData>(structuredClone(class10));
  const [class10SearchQuery, setClass10SearchQuery] = useState<string>("");
  const class10TableBuilder: CTableBuilder = new CTableBuilder(class10Data, setClass10Data);
  class10TableBuilder.addSearchFeature();
  const class10Table: CTable = class10TableBuilder.getTable();
  const class10TableManager: CTableManager = new CTableManager(class10Table);

  const handleClass10Search = (): void => {
    class10TableManager.invokeFunction("search", TableType.Searchable, [
      class10SearchQuery,
      class10
    ]);
  };
  const handleSort10 = (columnName: string): void => {
    class10TableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };

  const [class11Data, setClass11Data] = useState<BudgetStatisticsData>(structuredClone(class11));
  const [class11SearchQuery, setClass11SearchQuery] = useState<string>("");
  const class11TableBuilder: CTableBuilder = new CTableBuilder(class11Data, setClass11Data);
  class11TableBuilder.addSearchFeature();
  const class11Table: CTable = class11TableBuilder.getTable();
  const class11TableManager: CTableManager = new CTableManager(class11Table);

  const handleClass11Search = (): void => {
    class11TableManager.invokeFunction("search", TableType.Searchable, [
      class11SearchQuery,
      class11
    ]);
  };
  const handleSort11 = (columnName: string): void => {
    class11TableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };

  const [totalData, setTotalData] = useState<BudgetStatisticsData>(structuredClone(total));
  const [totalSearchQuery, setTotalSearchQuery] = useState<string>("");
  const totalTableBuilder: CTableBuilder = new CTableBuilder(totalData, setTotalData);
  totalTableBuilder.addSearchFeature();
  const totalTable: CTable = totalTableBuilder.getTable();
  const totalTableManager: CTableManager = new CTableManager(totalTable);

  const handleTotalSearch = (): void => {
    totalTableManager.invokeFunction("search", TableType.Searchable, [
      totalSearchQuery,
      total
    ]);
  };
  const handleSortTotal = (columnName: string): void => {
    totalTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };
  
  return (
    <>
      <div className="budget-statistic-page__container">
        <div className="budget-statistic-page__box">
          <h2 className="h2">Стастика бюджетов 10 класс</h2>
          <Input
            className="toolbar__search"
            value={class10SearchQuery}
            type={InputType.Search}
            placeholder="Поиск"
            onValueChange={setClass10SearchQuery}
            size={InputSize.Default}
            onSearch={handleClass10Search}
          />
          <table className="table -fill -list">
            <thead className="header">
              <tr className="row">
                <th className="cell">Бюджет</th>
                <th className="cell -filter" onClick={() => handleSort10("hours")}>Часы</th>
                <th className="cell -filter"  onClick={() => handleSort10("rates")}>Ставки</th>
              </tr>
            </thead>
            <tbody>
              {class10Data.filter((data: BudgetStatisticsTableData, index: number) =>
                index !== class10Data.length).map((row: BudgetStatisticsTableData) => {
                sum10H += row.hours;
                sum10R += row.rates;
                return (
                  <tr className="row" key={row.id}>
                    <td className="cell">{row.budget}</td>
                    <td className="cell">{row.hours}</td>
                    <td className="cell">{row.rates}</td>
                  </tr>
                );
              })} 
              <tr className="row budget-statistic-page__table-result">
                <td className="cell">Итого</td>
                <td className="cell">{sum10H}</td>
                <td className="cell">{sum10R}</td>
              </tr>
            </tbody>
          </table>
        </div>   
        
        <div className="budget-statistic-page__box">
          <h2 className="h2">Стастика бюджетов 11 класс</h2>
          <Input
            className="toolbar__search"
            value={class11SearchQuery}
            type={InputType.Search}
            placeholder="Поиск"
            onValueChange={setClass11SearchQuery}
            size={InputSize.Default}
            onSearch={handleClass11Search}
          />
          <table className="table -fill -list">
            <thead className="header">
              <tr className="row">
                <th className="cell">Бюджет</th>
                <th className="cell -filter" onClick={() => handleSort11("hours")}>Часы</th>
                <th className="cell -filter"  onClick={() => handleSort11("rates")}>Ставки</th>
              </tr>
            </thead>
            <tbody>
              {class11Data.filter((data: BudgetStatisticsTableData, index: number) =>
                index !== class11Data.length).map((row: BudgetStatisticsTableData) => {
                sum11H += row.hours;
                sum11R += row.rates;
                return (
                  <tr className="row" key={row.id}>
                    <td className="cell">{row.budget}</td>
                    <td className="cell">{row.hours}</td>
                    <td className="cell">{row.rates}</td>
                  </tr>
                );
              })} 
              <tr className="row budget-statistic-page__table-result">
                <td className="cell">Итог</td>
                <td className="cell">{sum11H}</td>
                <td className="cell">{sum11R}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="budget-statistic-page__box">
          <h2 className="h2">Стастика бюджетов общая</h2>
          <Input
            className="toolbar__search"
            value={totalSearchQuery}
            type={InputType.Search}
            placeholder="Поиск"
            onValueChange={setTotalSearchQuery}
            size={InputSize.Default}
            onSearch={handleTotalSearch}
          />
          <table className="table -fill -list">
            <thead className="header">
              <tr className="row">
                <th className="cell">Бюджет</th>
                <th className="cell -filter" onClick={() => handleSortTotal("hours")}>Часы</th>
                <th className="cell -filter"  onClick={() => handleSortTotal("rates")}>Ставки</th>
              </tr>
            </thead>
            <tbody>
              {totalData.filter((data: BudgetStatisticsTableData, index: number) =>
                index !== totalData.length).map((row: BudgetStatisticsTableData) => {
                sumTotalH += row.hours;
                sumTotalR += row.rates;
                return (
                  <tr className="row" key={row.id}>
                    <td className="cell">{row.budget}</td>
                    <td className="cell">{row.hours}</td>
                    <td className="cell">{row.rates}</td>
                  </tr>
                );
              })} 
              <tr className="row budget-statistic-page__table-result">
                <td className="cell">Итог</td>
                <td className="cell">{sumTotalH}</td>
                <td className="cell">{sumTotalR}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BudgetStatisticsPage;
