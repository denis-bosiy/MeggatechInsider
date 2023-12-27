import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CTableBuilder } from "../../../core/Table/CTableBuilder";
import { CoursesSyllabusPageData, CoursesSyllabusSubject } from "./model/types";
import { CTable } from "../../../core/Table/CTable";
import { CTableManager } from "../../../core/Table/CTableManager";
import { ActionBuilder } from "./model/actions";
import { TableType } from "../../../core/Table/TableType";
import { SortingOrder } from "../../../core/Table/SortingOrder";
import { useSearchParams } from "react-router-dom";
import Input, { InputSize, InputType } from "../../../components/Input/Input";
import ActionButton, { ActionButtonType } from "../../../components/ActionButton/ActionButton";
import { PenIcon } from "../../../icons";

const CoursesSyllabusPage = () => {
  const dispatch = useDispatch();
  const [tabParams] = useSearchParams();
  const storeData = useSelector(
    (state: { coursesSyllabusPageStore: CoursesSyllabusPageData }) => state.coursesSyllabusPageStore
  );
  const [tableData, setTableData] = useState<CoursesSyllabusSubject[]>(structuredClone(storeData.subjects));
  const [isEditing, setIsEditing] = useState<{ value: boolean }>({ value: false });
  const [searchQuery, setSearchQuery] = useState<string>("");
  const tableBuilder: CTableBuilder = new CTableBuilder(tableData, setTableData);
  tableBuilder.addEditFeature(isEditing, setIsEditing);
  tableBuilder.addSearchFeature();
  const table: CTable = tableBuilder.getTable();
  const tableManager: CTableManager = new CTableManager(table);

  useLayoutEffect(() => {
    // 
  }, [tabParams.get("tab")]);

  const handleSaving = () => {
    tableManager.invokeFunction("apply", TableType.Editable, [
      (data: any[]) => dispatch(ActionBuilder.saveSubjects(data))
    ]);
  };
  const handleReseting = () => {
    tableManager.invokeFunction("cancel", TableType.Editable, [storeData.subjects]);
  };
  const handleEditing = (): void => {
    tableManager.invokeFunction("edit", TableType.Editable, []);
  };
  const handleSearching = (): void => {
    tableManager.invokeFunction("search", TableType.Searchable, [searchQuery, storeData.subjects]);
  };
  const handleSorting = (columnName: string): void => {
    tableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__buttons-wrapper">
          {isEditing.value ? (
            <>
              <ActionButton
                className="toolbar__button"
                label="Сохранить"
                type={ActionButtonType.Positive}
                onClick={handleSaving}
              />
              <ActionButton
                className="toolbar__button"
                label="Отменить"
                type={ActionButtonType.Negative}
                onClick={handleReseting}
              />
            </>
          ) : (
            <ActionButton
              className="toolbar__button"
              label="Редактировать"
              icon={<PenIcon width={18} height={18} />}
              type={ActionButtonType.Default}
              onClick={handleEditing}
            />
          )}
        </div>
        <Input
          className="toolbar__search"
          placeholder="Поиск"
          value={searchQuery}
          onValueChange={setSearchQuery}
          size={InputSize.Default}
          type={InputType.Search}
          onSearch={handleSearching}
        />
      </div>
      <table className="table -fill -list">
        <thead className="header">
          <tr className="row">
            <td className="cell -filter" onClick={() => handleSorting("name")}>
              Предмет
            </td>
            <td className="cell -filter" onClick={() => handleSorting("type")}>
              Тип
            </td>
            <td className="cell -filter -vertical" onClick={() => handleSorting("groupsCount")}>
              Ч. групп
            </td>
            <td className="cell -filter -vertical" onClick={() => handleSorting("hoursTotal")}>
              Ч. всего
            </td>
            <td className="cell -filter -vertical" onClick={() => handleSorting("hoursAwaited")}>
              Ч. ожидается
            </td>
            <td className="cell -filter -vertical" onClick={() => handleSorting("hoursPlanned")}>
              Ч. по плану
            </td>
            {storeData.weekStartDates.map((startDate: string) => {
              return (
                <td className="cell -filter -vertical" key={startDate}>
                  {startDate}
                </td>
              );
            })}
            {isEditing.value && <td className="cell -vertical">Продолжить по первым 2 неделям</td>}
          </tr>
        </thead>
        <tbody>
          {tableData.map((subject: CoursesSyllabusSubject) => {
            return (
              <tr className="row" key={subject.id}>
                <td className="cell">{subject.name}</td>
                <td className="cell">{subject.type}</td>
                <td className="cell">{subject.groupsCount}</td>
                <td className="cell">{subject.hoursTotal}</td>
                <td className="cell">{subject.hoursAwaited}</td>
                <td className="cell">{subject.hoursPlanned}</td>
                {subject.weeksPlan.map((plan: number, index: number) => {
                  return (
                    <td className="cell" key={index}>
                      {isEditing.value ? (
                        <Input
                          placeholder=""
                          value={plan.toString()}
                          onValueChange={(newValue: string) => {
                            const newWeeksPlan = subject.weeksPlan;
                            newWeeksPlan[index] = Number(newValue);
                            setTableData(
                              tableData.map((data: CoursesSyllabusSubject) =>
                                data.id === subject.id ? { ...data, weeksPlan: newWeeksPlan } : data
                              )
                            );
                          }}
                          size={InputSize.Micro}
                        />
                      ) : (
                        plan
                      )}
                    </td>
                  );
                })}
                {isEditing.value && (
                  <td className="cell">
                    <button
                      onClick={() => {
                        const newWeeksPlan = [...Array(subject.weeksPlan.length)].map((_, index) => {
                          if (index % 2 === 0) return subject.weeksPlan[0];
                          return subject.weeksPlan[1];
                        });
                        setTableData(
                          tableData.map((data: CoursesSyllabusSubject) =>
                            data.id === subject.id ? { ...data, weeksPlan: newWeeksPlan } : data
                          )
                        );
                      }}
                    >
                      Авто
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CoursesSyllabusPage;
