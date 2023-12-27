import React, { useState } from "react";
import { useSelector } from "react-redux";
import {TeachersStatisticsPageData, TeacherStatisticsData} from "./model/types";
import Input, { InputSize, InputType } from "../../../components/Input/Input";
import { CTableBuilder } from "../../../core/Table/CTableBuilder";
import { CTable } from "../../../core/Table/CTable";
import { CTableManager } from "../../../core/Table/CTableManager";
import { TableType } from "../../../core/Table/TableType";
import { SortingOrder } from "../../../core/Table/SortingOrder";

const getGroupedData = (data: TeachersStatisticsPageData) => {
  let workExperience = data[0].workExperience;
  let hoursFor1HalfOfTheYear = data[0].hoursFor1HalfOfTheYear;
  let hoursFor2HalfOfTheYear = data[0].hoursFor2HalfOfTheYear;
  let hoursTotal = data[0].hoursTotal;
  let hoursBudget = data[0].hoursBudget;
  let hoursOffbudget = data[0].hoursOffbudget;
  let hoursBsk = data[0].hoursBsk;
  let rateTotal = data[0].rateTotal;
  let rateBudget = data[0].rateBudget;
  let rateOffbudget = data[0].rateOffbudget;
  let rateBsk = data[0].rateBsk;
  let hoursPerWeekTotal = data[0].hoursPerWeekTotal;
  let hoursPerWeekBudget = data[0].hoursPerWeekBudget;
  let hoursPerWeekOffbudget = data[0].hoursPerWeekOffbudget;
  let hoursPerWeekBsk = data[0].hoursPerWeekBsk;

  for (let i = 1; i < data.length; ++i) {
    workExperience += data[i].workExperience;
    hoursFor1HalfOfTheYear += data[i].hoursFor1HalfOfTheYear;
    hoursFor2HalfOfTheYear += data[i].hoursFor2HalfOfTheYear;
    hoursTotal += data[i].hoursTotal;
    hoursBudget += data[i].hoursBudget;
    hoursOffbudget += data[i].hoursOffbudget;
    hoursBsk += data[i].hoursBsk;
    rateTotal += data[i].rateTotal;
    rateBudget += data[i].rateBudget;
    rateOffbudget += data[i].rateOffbudget;
    rateBsk += data[i].rateBsk;
    hoursPerWeekTotal += data[i].hoursPerWeekTotal;
    hoursPerWeekBudget += data[i].hoursPerWeekBudget;
    hoursPerWeekOffbudget += data[i].hoursPerWeekOffbudget;
    hoursPerWeekBsk += data[i].hoursPerWeekBsk;
  }
  return {
    workExperience,
    hoursFor1HalfOfTheYear,
    hoursFor2HalfOfTheYear,
    hoursTotal,
    hoursBudget,
    hoursOffbudget,
    hoursBsk,
    rateTotal,
    rateBudget,
    rateOffbudget,
    rateBsk,
    hoursPerWeekTotal,
    hoursPerWeekBudget,
    hoursPerWeekOffbudget,
    hoursPerWeekBsk,
  };
};

type GroupedDataProps = {
  title?: string;
  data: TeachersStatisticsPageData;
}
const GroupedData = ({title = "Итого", data}: GroupedDataProps) => {
  const groupedData = getGroupedData(data);

  return (
    <tr className="row">
      <td className="cell">{title}</td>
      <td className="cell">{groupedData.workExperience}</td>
      <td className="cell">{groupedData.hoursFor1HalfOfTheYear}</td>
      <td className="cell">{groupedData.hoursFor2HalfOfTheYear}</td>
      <td className="cell">{groupedData.hoursTotal}</td>
      <td className="cell">{groupedData.hoursBudget}</td>
      <td className="cell">{groupedData.hoursOffbudget}</td>
      <td className="cell">{groupedData.hoursBsk}</td>
      <td className="cell">{groupedData.rateTotal}</td>
      <td className="cell">{groupedData.rateBudget}</td>
      <td className="cell">{groupedData.rateOffbudget}</td>
      <td className="cell">{groupedData.rateBsk}</td>
      <td className="cell">{groupedData.hoursPerWeekTotal}</td>
      <td className="cell">{groupedData.hoursPerWeekBudget}</td>
      <td className="cell">{groupedData.hoursPerWeekOffbudget}</td>
      <td className="cell">{groupedData.hoursPerWeekBsk}</td>
    </tr>
  );
};

const TeachersStatisticsPage = () => {
  const teachers = useSelector((state: {teachersStatisticsPageStore: TeachersStatisticsPageData}) => state.teachersStatisticsPageStore);
  const [teachersTableData, setTeachersTableData] = useState<TeachersStatisticsPageData>(structuredClone(teachers));
  const [teacherSearchQuery, setTeacherSearchQuery] = useState<string>("");
  const teachersTableBuilder: CTableBuilder = new CTableBuilder(teachersTableData, setTeachersTableData);
  teachersTableBuilder.addSearchFeature();
  const teachersTable: CTable = teachersTableBuilder.getTable();
  const teachersTableManager: CTableManager = new CTableManager(teachersTable);

  const handleTeacherSearch = (): void => {
    teachersTableManager.invokeFunction("search", TableType.Searchable, [
      teacherSearchQuery,
      teachers
    ]);
  };
  const handleSort = (columnName: string): void => {
    teachersTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };

  return (
    <>
      <div className="toolbar -search">
        <Input
          className="toolbar__search"
          placeholder="Поиск"
          value={teacherSearchQuery}
          onValueChange={setTeacherSearchQuery}
          size={InputSize.Default}
          type={InputType.Search}
          onSearch={handleTeacherSearch}
        />
      </div>
      <table className="table -fill -list">
        <thead className="header">
          <tr className="row">
            <th className="cell -filter" onClick={() => handleSort("name")}>
              Преподаватель
            </th>
            <th className="cell -filter" onClick={() => handleSort("workExperience")}>
              Стаж
            </th>
            <th className="cell -filter" onClick={() => handleSort("hoursFor1HalfOfTheYear")}>
              ч 1пг
            </th>
            <th className="cell -filter" onClick={() => handleSort("hoursFor2HalfOfTheYear")}>
              ч 2пг
            </th>
            <th className="cell -filter" onClick={() => handleSort("hoursTotal")}>
              ч всего
            </th>
            <th className="cell -filter" onClick={() => handleSort("hoursBudget")}>
              ч бюдж
            </th>
            <th className="cell -filter" onClick={() => handleSort("hoursOffbudget")}>
              ч внеб
            </th>
            <th className="cell -filter" onClick={() => handleSort("hoursBsk")}>
              ч бск
            </th>
            <th className="cell -filter" onClick={() => handleSort("rateTotal")}>
              ставок всего
            </th>
            <th className="cell -filter" onClick={() => handleSort("rateBudget")}>
              ставок бюдж
            </th>
            <th className="cell -filter" onClick={() => handleSort("rateOffbudget")}>
              ставок внеб
            </th>
            <th className="cell -filter" onClick={() => handleSort("rateBsk")}>
              ставок бск
            </th>
            <th className="cell -filter" onClick={() => handleSort("hoursPerWeekTotal")}>
              ч в нед всего
            </th>
            <th className="cell -filter" onClick={() => handleSort("hoursPerWeekBudget")}>
              ч в нед бюдж
            </th>
            <th className="cell -filter" onClick={() => handleSort("hoursPerWeekOffbudget")}>
              ч в нед внеб
            </th>
            <th className="cell -filter" onClick={() => handleSort("hoursPerWeekBsk")}>
              ч в нед бск
            </th>
          </tr>
        </thead>
        <tbody>
          {teachersTableData.map((value: TeacherStatisticsData) => {
            return (
              <tr className="row" key={value.id}>
                <td className="cell">{value.name}</td>
                <td className="cell">{value.workExperience}</td>
                <td className="cell">{value.hoursFor1HalfOfTheYear}</td>
                <td className="cell">{value.hoursFor2HalfOfTheYear}</td>
                <td className="cell">{value.hoursTotal}</td>
                <td className="cell">{value.hoursBudget}</td>
                <td className="cell">{value.hoursOffbudget}</td>
                <td className="cell">{value.hoursBsk}</td>
                <td className="cell">{value.rateTotal}</td>
                <td className="cell">{value.rateBudget}</td>
                <td className="cell">{value.rateOffbudget}</td>
                <td className="cell">{value.rateBsk}</td>
                <td className="cell">{value.hoursPerWeekTotal}</td>
                <td className="cell">{value.hoursPerWeekBudget}</td>
                <td className="cell">{value.hoursPerWeekOffbudget}</td>
                <td className="cell">{value.hoursPerWeekBsk}</td>
              </tr>
            );
          })}

          {teachersTableData.length > 0 && <GroupedData data={teachersTableData} />}
        </tbody>
      </table>
    </>
  );
};

export default TeachersStatisticsPage;
