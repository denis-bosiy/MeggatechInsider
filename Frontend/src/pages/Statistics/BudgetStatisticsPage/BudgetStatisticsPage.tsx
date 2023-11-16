import React, {useState} from "react";
import {useSelector} from "react-redux";
import {BudgetStatisticsPageData, BudgetStatisticsData} from "./model/types";
import "./BudgetStatisticsPage.scss";
import Input, {InputType} from "../../../components/Input/Input";
//import { classNames } from "../../../utils/classNames";

const BudgetTable = (bugetTable: BudgetStatisticsData) => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <>
      <Input
        className="toolbar__search"
        value={searchValue}
        type={InputType.Search}
        placeholder="Поиск"
        onValueChange={setSearchValue}
      />
      <table className="table">
        <thead className="header">
          <tr className="row">
            <th className="cell">Бюджет</th>
            <th className="cell">Часы</th>
            <th className="cell">Ставки</th>
          </tr>
        </thead>
        <tbody>
          {bugetTable.map((row) => (
            <tr className="row" key={row.id}>
              <td className="cell">{row.budget}</td>
              <td className="cell">{row.hours}</td>
              <td className="cell">{row.rates}</td>
            </tr>  
          ))}
        </tbody>
      </table>
    </>
  );
};


const BudgetStatisticsPage = () => {
  const data = useSelector((state: {budgetStatisticsPageStore: BudgetStatisticsPageData}) => state.budgetStatisticsPageStore);
  const class10 = data.class10;
  //const class11 = data.class11;
  //const total = data.total;
  
  return (
    <>
      <div className="budget-statistics-page__container">
        <div className="timetable-settings-page__box">
          <h2 className="h2">Стастика бюджетов 10 класс</h2>
          {BudgetTable(class10)} 
        </div>    
      </div>
    </>
  );
};

export default BudgetStatisticsPage;
