import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Input, { InputType, InputSize } from "../../../components/Input/Input";
import { useSelector, useDispatch } from "react-redux";
import { Guidebook } from "./model/types";
import { HeaderData } from "../../../layouts/Header/model/types";
import { CTableBuilder } from "../../../core/Table/CTableBuilder";
import { CTable } from "../../../core/Table/CTable";
import { CTableManager } from "../../../core/Table/CTableManager";
import { TableType } from "../../../core/Table/TableType";
import { SortingOrder } from "../../../core/Table/SortingOrder";
import "./ClassGuidebookPage.scss";

const ClassGuidebookPage = () => {
  const guidebook = useSelector(
    (state: { classGuidebookTimetableStore: Guidebook }) => state.classGuidebookTimetableStore
  );
  const { currentYear, currentWeek } = useSelector((state: { headerStore: HeaderData }) => state.headerStore);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [tabParams] = useSearchParams();

  const [guidebookTableData, setGuidebookTableData] = useState<Guidebook>(structuredClone(guidebook));
  const guidebookTableBuilder: CTableBuilder = new CTableBuilder(guidebookTableData, setGuidebookTableData);
  guidebookTableBuilder.addSearchFeature();
  const guidebookTable: CTable = guidebookTableBuilder.getTable();
  const guidebookTableManager: CTableManager = new CTableManager(guidebookTable);

  const handleClassGuidebookSearch = (): void => {
    //
  };
  const handleSort = (columnName: string): void => {
    guidebookTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };

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
            <th className="cell -filter" onClick={() => handleSort("subjectName")}>
              Предмет
            </th>
            {/* <th className="cell -filter" onClick={() => handleSort("teacherName")}>
                Преподаватель
              </th>
              <th className="cell">
                Доступные
                <br />
                часы
              </th>
              <th className="cell -filter" onClick={() => handleSort("distributedHoursToPlan")}>
                Кол-во распределенных
                <br />
                часов в неделю по плану
              </th>
              <th className="cell -filter" onClick={() => handleSort("hoursToPlan")}>
                Кол-во часов
                <br />в неделю по плану
              </th>
              <th className="cell -filter" onClick={() => handleSort("creditHours")}>
                Кол-во часов
                <br />
                долга
              </th>
              <th className="cell -filter" onClick={() => handleSort("workedOverPlan")}>
                Кол-во часов
                <br />
                переработка
              </th> */}
          </tr>
        </thead>
        <tbody>
          {/* {guidebookTableData
              .filter((data: TeacherGuidebookTimetableData, index: number) => index !== guidebookTableData.length)
              .map((teacher: TeacherGuidebookTimetableData) => {
                return (
                  <tr className="row" key={teacher.id}>
                    <td className="cell">{teacher.subjectName}</td>
                    <td className="cell">{teacher.teacherName}</td>
                    <td className="cell">
                      {isGuidebookEditing.value ? (
                        <Select
                          currentValue={getHoursOptions(teacher.availableHours).find((e) =>
                            teacher.availableHours.find((pickedHour: AvailableHour) => pickedHour.id === e.id)
                          )}
                          options={getHoursOptions(teacher.availableHours)}
                          onValueChange={(newValue: string) => {
                            const selectedOption = getHoursOptions(teacher.availableHours).find(
                              (e) => e.id === newValue
                            );
                            if (selectedOption) {
                              handlePickingAvailableHour(teacher.id, selectedOption.id);
                            }
                          }}
                          size={SelectSize.Micro}
                        />
                      ) : (
                        <p>
                          {shortenWorkday(getWorkdayByCode(teacher.availableHours[0]?.weekDayCode))}{" "}
                          {teacher.availableHours[0]?.startTime}-{teacher.availableHours[0]?.endTime}
                        </p>
                      )}
                    </td>
                    <td
                      className={classNames(
                        "cell" +
                          (teacher.distributedHoursToPlan < teacher.hoursToPlan ? " -error" : "") +
                          (teacher.distributedHoursToPlan > teacher.hoursToPlan ? " -warning" : "")
                      )}
                    >
                      {teacher.distributedHoursToPlan}
                    </td>
                    <td className="cell">{teacher.hoursToPlan}</td>
                    <td className="cell">{teacher.creditHours}</td>
                    <td className="cell">{teacher.workedOverPlan}</td>
                  </tr>
                );
              })} */}
        </tbody>
      </table>
    </>
  );
};

export default ClassGuidebookPage;
