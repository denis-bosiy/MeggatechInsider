import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CurriculumReportData, ReportTeacher } from "./model/types";
import { CTableBuilder } from "../../../core/Table/CTableBuilder";
import { CTable } from "../../../core/Table/CTable";
import { CTableManager } from "../../../core/Table/CTableManager";
import { summarizeTeacherTotal } from "./model/utils";
import Select, { ISelectOption } from "../../../components/Select/Select";
import Button, { ButtonSize, ButtonType } from "../../../components/Button/Button";
import { TableType } from "../../../core/Table/TableType";
import { SortingOrder } from "../../../core/Table/SortingOrder";
import Input, { InputType } from "../../../components/Input/Input";
import ActionButton, { ActionButtonSize } from "../../../components/ActionButton/ActionButton";
import CommentsModalView from "../../../components/CommentsModalView/CommentsModalView";
import ModalSettingsContext from "../../../utils/ModalSettingsContext";
import { useSearchParams } from "react-router-dom";

const MONTH_SELECT: ISelectOption[] = [
  { content: "Январь", id: "0" },
  { content: "Февраль", id: "1" },
  { content: "Март", id: "2" },
  { content: "Апрель", id: "3" },
  { content: "Май", id: "4" },
  { content: "Июнь", id: "5" },
  { content: "Июль", id: "6" },
  { content: "Август", id: "7" },
  { content: "Сентябрь", id: "8" },
  { content: "Октябрь", id: "9" },
  { content: "Ноябрь", id: "10" },
  { content: "Декабрь", id: "11" }
];

const CONTRACT_TYPE_SELECT: ISelectOption[] = [
  { content: "ДС", id: "0" },
  { content: "ГПХ", id: "1" }
];

const MonthReportPage = () => {
  const { openModal } = useContext(ModalSettingsContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const monthFromSearchParams: ISelectOption | undefined = searchParams.get("month")
    ? MONTH_SELECT.find((monthValue: ISelectOption) => monthValue.id === searchParams.get("month"))
    : undefined;
  const [selectedMonth, setSelectedMonth] = useState<ISelectOption>(
    monthFromSearchParams ? monthFromSearchParams : MONTH_SELECT[0]
  );
  const [selectedContract, setSelectedContract] = useState<ISelectOption>(CONTRACT_TYPE_SELECT[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const { teachers, dayCount, startingDayNumber } = useSelector(
    (state: { cirruculumReportStore: CurriculumReportData }) => state.cirruculumReportStore
  );
  const [reportTableData, setReportTableData] = useState<ReportTeacher[]>(structuredClone(teachers));

  const reportTableBuilder: CTableBuilder = new CTableBuilder(reportTableData, setReportTableData);
  reportTableBuilder.addSearchFeature();

  const monitoringTable: CTable = reportTableBuilder.getTable();
  const monitoringTableManager: CTableManager = new CTableManager(monitoringTable);

  const monthDays = Array.from({ length: dayCount }, (_, i) => i + startingDayNumber);

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
    monitoringTableManager.invokeFunction("search", TableType.Searchable, [searchQuery, teachers]);
  };

  const handleComment = () => {
    openModal("Комментарии", <CommentsModalView getUrl="" putUrl="" deleteUrl="" />);
  };

  const handleSort = (columnName: string): void => {
    monitoringTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };

  useEffect(() => {
    setSearchParams({ month: selectedMonth.id });
  }, [selectedMonth.id]);

  useEffect(() => {
    // const handleMonitoringDataUpdate = async () => {
    //   // TODO: Make api request
    // };
    // or use react-query lib to get rid of making this
  }, [selectedContract.id, selectedMonth.id]);

  return (
    <>
      <div className="page-actions-panel">
        <div className="page-actions">
          <Select options={MONTH_SELECT} currentValue={selectedMonth} onValueChange={handleSelectMonth} />
          <Select options={CONTRACT_TYPE_SELECT} currentValue={selectedContract} onValueChange={handleSelectContract} />
          <Button label="Скачать в excel" type={ButtonType.Secondary} size={ButtonSize.Fixed} />
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
          <tr>
            <th className="cell -filter" onClick={() => handleSort("teacher")}>
              Преподаватель
            </th>
            <th className="cell -filter" onClick={() => handleSort("subject")}>
              Предмет
            </th>
            <th className="cell" colSpan={2}>
              Класс
            </th>
            {monthDays.map((day) => (
              <th key={day} className="cell">
                {day}
              </th>
            ))}
            <th className="cell">Из них совмещ.</th>
            <th className="cell">Из них дистанц.</th>
            <th className="cell">Сумма</th>
            <th className="cell">Итог</th>
            <th className="cell">Из итога совмещ.</th>
            <th className="cell">Из итога дистанц.</th>
          </tr>
        </thead>
        <tbody>
          {reportTableData.map((teacher, teacherIndex) => {
            const { combinedTotal, remoteTotal, total } = summarizeTeacherTotal(teacher);

            return teacher.subjects.map((subject, subjectIndex) =>
              subject.classes.map((classInfo, classIndex) => (
                <React.Fragment key={`${teacherIndex}-${subjectIndex}-${classIndex}`}>
                  {classInfo.groups.map((group, groupIndex) => (
                    <tr className="row" key={`${teacherIndex}-${subjectIndex}-${classIndex}-${groupIndex}`}>
                      {groupIndex === 0 && subjectIndex === 0 && (
                        <td className="cell" rowSpan={classInfo.groups.length * teacher.subjects.length}>
                          {teacher.teacher}

                          <div className="cell__buttons">
                            <ActionButton
                              label="Добавить комментарий"
                              size={ActionButtonSize.Small}
                              onClick={() => handleComment()}
                            />
                          </div>
                        </td>
                      )}

                      {groupIndex === 0 && (
                        <td className="cell" rowSpan={classInfo.groups.length}>
                          {subject.title}
                        </td>
                      )}
                      {groupIndex === 0 && (
                        <td
                          className="cell"
                          colSpan={classInfo.groups.length === 1 ? 2 : 1}
                          rowSpan={classInfo.groups.length}
                        >
                          {classInfo.number}
                        </td>
                      )}
                      {classInfo.groups.length !== 1 && <td className="cell">{group.number}</td>}

                      {group.hours.map((hour, dayIndex) => (
                        <td className="cell" key={dayIndex}>
                          {hour}
                        </td>
                      ))}

                      <td className="cell">{group.combined}</td>
                      <td className="cell">{group.remoted}</td>
                      <td className="cell">{group.amount}</td>

                      {groupIndex === 0 && subjectIndex === 0 && (
                        <td className="cell" rowSpan={classInfo.groups.length * teacher.subjects.length}>
                          {total}
                        </td>
                      )}
                      {groupIndex === 0 && subjectIndex === 0 && (
                        <td className="cell" rowSpan={classInfo.groups.length * teacher.subjects.length}>
                          {combinedTotal}
                        </td>
                      )}
                      {groupIndex === 0 && subjectIndex === 0 && (
                        <td className="cell" rowSpan={classInfo.groups.length * teacher.subjects.length}>
                          {remoteTotal}
                        </td>
                      )}
                    </tr>
                  ))}
                </React.Fragment>
              ))
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default MonthReportPage;
