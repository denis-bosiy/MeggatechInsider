import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Guidebook, TeacherGuidebookTimetableData, TeacherGuidebookTimetablePageData} from "./model/types";
import Input, {InputSize, InputType} from "../../../components/Input/Input";
import ActionButton, { ActionButtonType } from "../../../components/ActionButton/ActionButton";
import {PenIcon} from "../../../icons";
import { classNames } from "../../../utils/classNames";
import { CTableBuilder } from "../../../core/Table/CTableBuilder";
import { CTable } from "../../../core/Table/CTable";
import { CTableManager } from "../../../core/Table/CTableManager";
import { TableType } from "../../../core/Table/TableType";
import { TeacherGuidebookTimetableActionBuilder } from "./model/actions";
import Select, { ISelectOption, SelectSize } from "../../../components/Select/Select";
import { SortingOrder } from "../../../core/Table/SortingOrder";

const TeacherGuidebookTimetablePage = () => {
  const { guidebook, availableHours } = useSelector((state: { teacherGuidebookTimetablePageStore: TeacherGuidebookTimetablePageData }) => state.teacherGuidebookTimetablePageStore);
  const dispatch = useDispatch();

  const [isGuidebookEditing, setIGuidebookEditing] = useState<{ value: boolean }>({ value: false });
  const [guidebookTableData, setGuidebookTableData] = useState<Guidebook>(structuredClone(guidebook));
  const [guidebookSearchQuery, setGuidebookSearchQuery] = useState<string>("");
  const guidebookTableBuilder: CTableBuilder = new CTableBuilder(guidebookTableData, setGuidebookTableData);
  guidebookTableBuilder.addEditFeature(isGuidebookEditing, setIGuidebookEditing);
  guidebookTableBuilder.addSearchFeature();
  const guidebookTable: CTable = guidebookTableBuilder.getTable();
  const guidebookTableManager: CTableManager = new CTableManager(guidebookTable);

  const handleSaveGuidebookTable = () => {
    guidebookTableManager.invokeFunction("apply", TableType.Editable, [
      (data: any[]) => dispatch(TeacherGuidebookTimetableActionBuilder.saveAvailableHours(data))
    ]);
  };
  const handleResetGuidebookTable = () => {
    guidebookTableManager.invokeFunction("cancel", TableType.Editable, [guidebook]);
  };
  const editGuidebookTable = (): void => {
    guidebookTableManager.invokeFunction("edit", TableType.Editable, []);
  };
  const handleGuidebookSearch = (): void => {
    guidebookTableManager.invokeFunction("search", TableType.Searchable, [
      guidebookSearchQuery,
      guidebook
    ]);
  };
  const handleSort = (columnName: string): void => {
    guidebookTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };

  const hoursOptions: ISelectOption[] = availableHours.map((hour) => ({ id: hour.id, content: hour.weekDay + " " + hour.startTime + "-" + hour.endTime }));

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__buttons-wrapper">
          {isGuidebookEditing.value ? (
            <div className="toolbar__buttons-box">
              <ActionButton
                className="toolbar__button"
                type={ActionButtonType.Positive}
                label="Сохранить"
                onClick={handleSaveGuidebookTable}
              />
              <ActionButton
                className="toolbar__button"
                type={ActionButtonType.Negative}
                label="Отменить"
                onClick={handleResetGuidebookTable}
              />
            </div>
          ) : (
            <ActionButton
              className="toolbar__button"
              label="Редактировать"
              icon={<PenIcon />}
              onClick={editGuidebookTable}
            />
          )}
          
          <Input
            className="toolbar__search"
            value={guidebookSearchQuery}
            type={InputType.Search}
            placeholder="Поиск"        
            onValueChange={setGuidebookSearchQuery}
            size={InputSize.Default}
            onSearch={handleGuidebookSearch}
          />
        </div>
      </div>
      <table className="table -fill -list">
        <thead className="header">
          <tr className="row">
            <th className="cell -filter" onClick={() => handleSort("subjectName")}>Предмет</th>
            <th className="cell -filter" onClick={() => handleSort("teacherName")}>Преподаватель</th> 
            <th className="cell">Доступные<br />часы</th>
            <th className="cell -filter" onClick={() => handleSort("distributedHoursToPlan")}>Кол-во распределенных<br />часов в неделю по плану</th>
            <th className="cell -filter" onClick={() => handleSort("hoursToPlan")}>Кол-во часов<br />в неделю по плану</th>
            <th className="cell -filter" onClick={() => handleSort("creditHours")}>Кол-во часов<br />долга</th>
            <th className="cell -filter" onClick={() => handleSort("workedOverPlan")}>Кол-во часов<br />переработка</th>
          </tr>
        </thead>
        <tbody>
          {guidebookTableData.filter((data: TeacherGuidebookTimetableData, index: number) =>
            index !== guidebookTableData.length).map((teacher: TeacherGuidebookTimetableData) => {
            return (
              <tr className="row" key={teacher.id}>
                <td className="cell">{teacher.subjectName}</td>
                <td className="cell">{teacher.teacherName}</td>
                <td className="cell">
                  {isGuidebookEditing.value ? (
                    <Select
                      currentValue={hoursOptions.find(e => e.id === teacher.availableHours.id)}
                      options={hoursOptions}
                      onValueChange={(newValue: string) => {
                        const selectedOption = hoursOptions.find(e => e.id === newValue);
                        if (selectedOption) {
                          setGuidebookTableData(
                            guidebookTableData.map((data: TeacherGuidebookTimetableData) =>
                              data.id === teacher.id ? {
                                ...data,
                                availableHours: {
                                  id: selectedOption.id,
                                  weekDay: selectedOption.content.substring(0, 2),
                                  startTime: selectedOption.content.substring(3, 8),
                                  endTime: selectedOption.content.substring(9),
                                }
                              } : data
                            )
                          );
                        }
                      }}
                      size={SelectSize.Micro}
                    />
                  ) : (
                    <p>{teacher.availableHours.weekDay} {teacher.availableHours.startTime}-{teacher.availableHours.endTime}</p>
                  )}
                </td>
                <td className={classNames("cell" + (teacher.distributedHoursToPlan < teacher.hoursToPlan ? " -error" : "")
                    + (teacher.distributedHoursToPlan > teacher.hoursToPlan ? " -warning" : ""))}>
                  {teacher.distributedHoursToPlan}
                </td>
                <td className="cell">{teacher.hoursToPlan}</td>
                <td className="cell">{teacher.creditHours}</td>
                <td className="cell">{teacher.workedOverPlan}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TeacherGuidebookTimetablePage;
