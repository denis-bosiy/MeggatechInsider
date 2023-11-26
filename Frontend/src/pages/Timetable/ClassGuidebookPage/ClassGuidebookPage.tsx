import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Input, { InputType, InputSize } from "../../../components/Input/Input";
import { useSelector } from "react-redux";
import { Guidebook, ClassGuidebookData, ClassGuidebookSubjectData, ClassGuidebookGroupData } from "./model/types";
import { CTableBuilder } from "../../../core/Table/CTableBuilder";
import { CTable } from "../../../core/Table/CTable";
import { CTableManager } from "../../../core/Table/CTableManager";
import { TableType } from "../../../core/Table/TableType";
import { SortingOrder } from "../../../core/Table/SortingOrder";
import "./ClassGuidebookPage.scss";
import { classNames } from "../../../utils/classNames";

const ClassGuidebookPage = () => {
  const guidebook = useSelector(
    (state: { classGuidebookTimetableStore: Guidebook }) => state.classGuidebookTimetableStore
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [tabParams] = useSearchParams();

  const [guidebookTableData, setGuidebookTableData] = useState<ClassGuidebookSubjectData[]>(
    structuredClone(
      guidebook.find((classData: ClassGuidebookData) => classData.classId === tabParams.get("tab"))?.subjectsData
    )
  );
  const guidebookTableBuilder: CTableBuilder = new CTableBuilder(guidebookTableData, setGuidebookTableData);
  guidebookTableBuilder.addSearchFeature();
  const guidebookTable: CTable = guidebookTableBuilder.getTable();
  const guidebookTableManager: CTableManager = new CTableManager(guidebookTable);

  const handleClassGuidebookSearch = (): void => {
    guidebookTableManager.invokeFunction("search", TableType.Searchable, [
      searchQuery,
      guidebook.find((classData: ClassGuidebookData) => classData.classId === tabParams.get("tab"))?.subjectsData
    ]);
  };
  const handleSort = (columnName: string): void => {
    guidebookTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };

  // Вытигявает айди групп класса из данных по первому предмету
  const groupsIds: string[] = guidebook
    .filter((classGuidebookData: ClassGuidebookData) => classGuidebookData.classId === tabParams.get("tab"))
    .map((classGuidebookData: ClassGuidebookData) => classGuidebookData.subjectsData[0])
    .map((subjectData: ClassGuidebookSubjectData) => subjectData.groupsData)
    .flat()
    .map((groupData: ClassGuidebookGroupData) => groupData.groupId);

  return (
    <>
      <div className="toolbar class-guidebook-page__toolbar">
        <Input
          className="toolbar__search"
          placeholder="Поиск"
          value={searchQuery}
          onValueChange={setSearchQuery}
          size={InputSize.Default}
          type={InputType.Search}
          onSearch={handleClassGuidebookSearch}
        />
      </div>

      <table className="table -fill -list">
        <thead className="header">
          <tr className="row">
            <th className="cell -filter" rowSpan={2} onClick={() => handleSort("subjectName")}>
              Предмет
            </th>
            {groupsIds.map((groupId: string) => (
              <th className="cell" key={groupId} colSpan={4}>
                {groupId}
              </th>
            ))}
          </tr>
          <tr className="row">
            {groupsIds.map((groupId: string) => (
              <React.Fragment key={groupId}>
                <th className="cell">Часов в нед. распр-но</th>
                <th className="cell">Часов в нед. по плану</th>
                <th className="cell">Долг</th>
                <th className="cell">Часов сверх плана</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {guidebookTableData.map((subjectData: ClassGuidebookSubjectData) => {
            return (
              <tr className="row" key={subjectData.subjectName}>
                <td className="cell">{subjectData.subjectName}</td>
                {subjectData.groupsData.map((groupData: ClassGuidebookGroupData) => {
                  return (
                    <React.Fragment key={groupData.groupId}>
                      <td
                        className={classNames(
                          "cell",
                          groupData.hoursPerWeekDistributed < groupData.hoursPerWeekPlanned ? "-error" : "",
                          groupData.hoursPerWeekDistributed > groupData.hoursPerWeekPlanned ? "-warning" : ""
                        )}
                      >
                        {groupData.hoursPerWeekDistributed}
                      </td>
                      <td className="cell">{groupData.hoursPerWeekPlanned}</td>
                      <td className={classNames("cell", groupData.hoursDebt !== 0 ? "-error" : "")}>
                        {groupData.hoursDebt}
                      </td>
                      <td className={classNames("cell", groupData.overWorkedHours !== 0 ? "-success" : "")}>
                        {groupData.overWorkedHours}
                      </td>
                    </React.Fragment>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ClassGuidebookPage;
