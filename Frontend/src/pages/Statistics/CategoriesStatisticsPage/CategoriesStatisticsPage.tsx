import React, {useState} from "react";
import {useSelector} from "react-redux";
import {
  CategoriesStatisticsPageData,
  CategoriesStatisticsData
} from "./model/types";
import Input, {InputSize, InputType} from "../../../components/Input/Input";
import { CTableBuilder } from "../../../core/Table/CTableBuilder";
import { CTable } from "../../../core/Table/CTable";
import { CTableManager } from "../../../core/Table/CTableManager";
import { TableType } from "../../../core/Table/TableType";
import { SortingOrder } from "../../../core/Table/SortingOrder";

const getGroupedData = (data: CategoriesStatisticsPageData) => {
  let hoursBudget = data[0].hoursBudget;
  let hoursOffbudget = data[0].hoursOffbudget;
  let hoursBsp = data[0].hoursBsp;
  let rateBudget = data[0].rateBudget;
  let rateOffbudget = data[0].rateOffbudget;
  let rateBsp = data[0].rateBsp;

  for (let i = 1; i < data.length; ++i) {
    hoursBudget += data[i].hoursBudget;
    hoursOffbudget += data[i].hoursOffbudget;
    hoursBsp += data[i].hoursBsp;
    rateBudget += data[i].rateBudget;
    rateOffbudget += data[i].rateOffbudget;
    rateBsp += data[i].rateBsp;
  }
  return {
    hoursBudget,
    hoursOffbudget,
    hoursBsp,
    rateBudget,
    rateOffbudget,
    rateBsp,
  };
};

type GroupedDataProps = {
  title?: string;
  data: CategoriesStatisticsPageData;
}
const GroupedData = ({title = "Итого", data}: GroupedDataProps) => {
  const groupedData = getGroupedData(data);
  const hoursTotal = groupedData.hoursBudget + groupedData.hoursOffbudget + groupedData.hoursBsp;
  const rateTotal = groupedData.rateBudget + groupedData.rateOffbudget + groupedData.rateBsp;

  return (
    <tr className="row">
      <td className="cell">{title}</td>
      <td className="cell">{groupedData.hoursBudget}</td>
      <td className="cell">{groupedData.hoursOffbudget}</td>
      <td className="cell">{groupedData.hoursBsp}</td>
      <td className="cell">{hoursTotal}</td>
      <td className="cell">{groupedData.rateBudget}</td>
      <td className="cell">{groupedData.rateOffbudget}</td>
      <td className="cell">{groupedData.rateBsp}</td>
      <td className="cell">{rateTotal}</td>
    </tr>
  );
};

const CategoriesStatisticsPage = () => {
  const categories = useSelector((state: {categoriesStatisticsPageStore: CategoriesStatisticsPageData}) => state.categoriesStatisticsPageStore);
  const [categoriesTableData, setCategoriesTableData] = useState<CategoriesStatisticsPageData>(structuredClone(categories));
  const [categorySearchQuery, setCategorySearchQuery] = useState<string>("");
  const categoriesTableBuilder: CTableBuilder = new CTableBuilder(categoriesTableData, setCategoriesTableData);
  categoriesTableBuilder.addSearchFeature();
  const categoriesTable: CTable = categoriesTableBuilder.getTable();
  const categoriesTableManager: CTableManager = new CTableManager(categoriesTable);

  const handleSubjectSearch = (): void => {
    categoriesTableManager.invokeFunction("search", TableType.Searchable, [
      categorySearchQuery,
      categories
    ]);
  };
  const handleSort = (columnName: string): void => {
    categoriesTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };

  return (
    <>
      <div className="toolbar">
        <Input
          className="toolbar__search"
          placeholder="Поиск"
          value={categorySearchQuery}
          onValueChange={setCategorySearchQuery}
          size={InputSize.Default}
          type={InputType.Search}
          onSearch={handleSubjectSearch}
        />
      </div>
      <table className="table -fill -list">
        <thead className="header">
          <tr className="row">
            <th className="cell -filter" onClick={() => handleSort("name")}>Категория</th>
            <th className="cell -filter" onClick={() => handleSort("hoursBudget")}>ч бюдж</th>
            <th className="cell -filter" onClick={() => handleSort("hoursOffbudget")}>ч внеб</th>
            <th className="cell -filter" onClick={() => handleSort("hoursBsp")}>ч б-сп</th>
            <th className="cell -filter" onClick={() => handleSort("hoursTotal")}>ч всего</th>
            <th className="cell -filter" onClick={() => handleSort("rateBudget")}>ставки бюдж</th>
            <th className="cell -filter" onClick={() => handleSort("rateOffbudget")}>ставки внеб</th>
            <th className="cell -filter" onClick={() => handleSort("rateBsp")}>ставки б-сп</th>
            <th className="cell -filter" onClick={() => handleSort("rateTotal")}>ставки всего</th>
          </tr>
        </thead>
        <tbody>
          {categoriesTableData.map((value: CategoriesStatisticsData) => {
            const hoursTotal = value.hoursBudget + value.hoursOffbudget + value.hoursBsp;
            const rateTotal = value.rateBudget + value.rateOffbudget + value.rateBsp;
            return (
              <tr className="row" key={value.id}>
                <td className="cell">{value.name}</td>
                <td className="cell">{value.hoursBudget}</td>
                <td className="cell">{value.hoursOffbudget}</td>
                <td className="cell">{value.hoursBsp}</td>
                <td className="cell">{hoursTotal}</td>
                <td className="cell">{value.rateBudget}</td>
                <td className="cell">{value.rateOffbudget}</td>
                <td className="cell">{value.rateBsp}</td>
                <td className="cell">{rateTotal}</td>
              </tr>
            );
          })}

          <GroupedData data={categoriesTableData} />
        </tbody>
      </table>
    </>
  );
};

export default CategoriesStatisticsPage;
