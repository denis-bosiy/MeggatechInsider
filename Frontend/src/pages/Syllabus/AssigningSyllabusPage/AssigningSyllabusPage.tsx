import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AssigningSyllabusPageData,
  AssigningSyllabusData,
  AssigningsSyllabusData,
  DiscrepanciesSyllabusData
} from "./model/types";
import { ActionBuilder } from "./model/actions";
import { classNames } from "../../../utils/classNames";
import Input, { InputSize, InputType } from "../../../components/Input/Input";
import ActionButton, { ActionButtonType } from "../../../components/ActionButton/ActionButton";
import { CheckMarkIcon, GarbageIcon, PenIcon, PlusIcon } from "../../../icons";
import Select, { ISelectOption, SelectSize } from "../../../components/Select/Select";
import IconButton, { IconButtonType } from "../../../components/IconButton/IconButton";
import ModalSettingsContext from "../../../utils/ModalSettingsContext";
import { CTableBuilder } from "../../../core/Table/CTableBuilder";
import { CTable } from "../../../core/Table/CTable";
import { CTableManager } from "../../../core/Table/CTableManager";
import { TableType } from "../../../core/Table/TableType";
import { guidGenerator } from "../../../utils/guidGenerator";
import { SortingOrder } from "../../../core/Table/SortingOrder";
import { HeaderData } from "../../../layouts/Header/model/types";
import { HttpService } from "../../../api/http.service";
import { Endpoint } from "../../../api/endpoints";
import { DiscrepancyResponse } from "../../../api/Responses/DiscrepancyResponse";
import { ResponseBuilder } from "../../../api/Responses/ResponseBuilder";

const DiscrepanciesSyllabus = () => {
  const httpService = new HttpService();
  const { currentYear } = useSelector((state: { headerStore: HeaderData }) => state.headerStore);
  const dispatch = useDispatch();
  const data = useSelector(
    (state: { assigningSyllabusPageStore: AssigningSyllabusPageData }) => state.assigningSyllabusPageStore
  );
  const discrepancies = data.discrepancies;

  useEffect(() => {
    const params: Map<string, string> = new Map<string, string>();
    if (currentYear) {
      params.set("year", currentYear.year.toString());
    }

    httpService
      .getByArbitraryUrl(Endpoint.SyllabusDiscrepancies, params)
      .then((data: any) => {
        const discrepanciesResponse: DiscrepancyResponse[] = ResponseBuilder.BuildDiscrepanciesResponse(data);
        const discrepancies: DiscrepanciesSyllabusData = discrepanciesResponse.map(
          (discrepancy: DiscrepancyResponse) => {
            return {
              id: guidGenerator(),
              name: discrepancy.name,
              groupCount: discrepancy.groupCount,
              groupCountByPlan: discrepancy.groupCountByPlan
            };
          }
        );
        dispatch(ActionBuilder.saveDiscrepancies(discrepancies));
      })
      .catch((e: any) => {
        dispatch(ActionBuilder.saveDiscrepancies([]));
      });
  }, [currentYear?.id]);

  return (
    <>
      {discrepancies.map((discrepancy) => (
        <tr className="row" key={discrepancy.id}>
          <td className="cell">{discrepancy.name}</td>
          <td
            className={classNames(
              "cell" +
                (discrepancy.groupCount < discrepancy.groupCountByPlan ? " -error" : "") +
                (discrepancy.groupCount > discrepancy.groupCountByPlan ? " -warning" : "")
            )}
          >
            {discrepancy.groupCount}
          </td>
        </tr>
      ))}
    </>
  );
};

const AssigningSyllabusPage = () => {
  const subjectOptions: ISelectOption[] = [
    { id: "1", content: "JavaScript" },
    { id: "2", content: "История" },
    { id: "3", content: "Физика" }
  ];
  const teacherOptions: ISelectOption[] = [
    { id: "1", content: "Иванов Иван Иванович" },
    { id: "2", content: "Петров Иван Иванович" },
    { id: "3", content: "Васечкин Николай Иванович" }
  ];

  const { openModal } = useContext(ModalSettingsContext);
  const dispatch = useDispatch();
  const data = useSelector(
    (state: { assigningSyllabusPageStore: AssigningSyllabusPageData }) => state.assigningSyllabusPageStore
  );
  const assignings = data.assignings;
  const [isAssigningsEditing, setIsAssigningsEditing] = useState<{ value: boolean }>({ value: false });
  const [isAssigningsAdding, setIsAssigningsAdding] = useState<{ value: boolean }>({ value: false });
  const [assigningsTableData, setAssigningsTableData] = useState<AssigningsSyllabusData>(structuredClone(assignings));
  const [assigningSearchQuery, setAssigningSearchQuery] = useState<string>("");
  const assigningsTableBuilder: CTableBuilder = new CTableBuilder(assigningsTableData, setAssigningsTableData);
  assigningsTableBuilder.addEditFeature(isAssigningsEditing, setIsAssigningsEditing);
  assigningsTableBuilder.addManageFeature(isAssigningsAdding, setIsAssigningsAdding);
  assigningsTableBuilder.addSearchFeature();
  const assigningsTable: CTable = assigningsTableBuilder.getTable();
  const assigningsTableManager: CTableManager = new CTableManager(assigningsTable);

  const handleSaveAssignings = () => {
    assigningsTableManager.invokeFunction("apply", TableType.Editable, [
      (data: any[]) => dispatch(ActionBuilder.saveAssigning(data))
    ]);
  };
  const handleResetAssignings = () => {
    assigningsTableManager.invokeFunction("cancel", TableType.Editable, [assignings]);
  };
  const editAssignings = (): void => {
    assigningsTableManager.invokeFunction("edit", TableType.Editable, []);
  };
  const handleAddingAssignings = (): void => {
    assigningsTableManager.invokeFunction("add", TableType.Managable, [
      {
        id: guidGenerator(),
        name: subjectOptions[0].content,
        teacher: teacherOptions[0].content,
        groupCount: 0,
        hoursByPlanOnClassOfTheStudents: 0,
        hoursOnWeekForTheClassOfTheStudents: 0,
        hoursOnWeekOnYearOnTheTeacher: 0,
        hoursOnWeekOnPeriodOnTheTeacher: 0,
        hoursIn1Subgroup: 0,
        hoursIn2Subgroup: 0,
        totalInYear: 0,
        bidShare: 0
      }
    ]);
  };
  const handleApplyingNewAssigning = (): void => {
    assigningsTableManager.invokeFunction("applyAdding", TableType.Managable, [
      (data: any[]) => dispatch(ActionBuilder.saveAssigning(data))
    ]);
  };
  const handleAssigningSearch = (): void => {
    assigningsTableManager.invokeFunction("search", TableType.Searchable, [assigningSearchQuery, assignings]);
  };
  const handleSort = (columnName: string): void => {
    assigningsTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };
  const handleDeleteAssigning = (id: string): void => {
    assigningsTableManager.invokeFunction("delete", TableType.Managable, [
      id,
      (data: any[]) => dispatch(ActionBuilder.saveAssigning(data)),
      openModal
    ]);
  };

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__buttons-wrapper">
          {isAssigningsEditing.value ? (
            <>
              <ActionButton
                className="toolbar__button"
                label="Сохранить"
                type={ActionButtonType.Positive}
                onClick={handleSaveAssignings}
              />
              <ActionButton
                className="toolbar__button"
                label="Отменить"
                type={ActionButtonType.Negative}
                onClick={handleResetAssignings}
              />
            </>
          ) : (
            <ActionButton
              className="toolbar__button"
              label="Редактировать"
              icon={<PenIcon width={18} height={18} />}
              type={ActionButtonType.Default}
              onClick={editAssignings}
            />
          )}
          <ActionButton
            label="Добавить"
            type={ActionButtonType.Warning}
            icon={<PlusIcon />}
            onClick={handleAddingAssignings}
          />
        </div>
        <Input
          className="toolbar__search"
          placeholder="Поиск"
          value={assigningSearchQuery}
          onValueChange={setAssigningSearchQuery}
          size={InputSize.Default}
          type={InputType.Search}
          onSearch={handleAssigningSearch}
        />
      </div>
      <div className="tables-wrapper">
        <div className="table-wrapper">
          <h2 className="h2 table-wrapper__title">Назначение</h2>
          <table className="table -fill -list">
            <thead className="header">
              <tr className="row">
                <th className="cell -filter" onClick={() => handleSort("name")}>
                  Предмет
                </th>
                <th className="cell -filter" onClick={() => handleSort("teacher")}>
                  Преподаватель
                </th>
                <th className="cell -filter" onClick={() => handleSort("groupCount")}>
                  Число
                  <br />
                  групп
                </th>
                <th className="cell -filter" onClick={() => handleSort("hoursByPlanOnClassOfTheStudents")}>
                  Часов по плану на
                  <br />
                  класс
                </th>
                <th className="cell -filter" onClick={() => handleSort("hoursOnWeekForTheClassOfTheStudents")}>
                  Часов в неделю на класс
                </th>
                <th className="cell -filter" onClick={() => handleSort("hoursOnWeekOnYearOnTheTeacher")}>
                  Часов в неделю в<br />
                  год на
                  <br />
                  препод-я
                </th>
                <th className="cell -filter" onClick={() => handleSort("hoursOnWeekOnPeriodOnTheTeacher")}>
                  Часов в неделю в<br />
                  период на
                  <br />
                  препод-я
                </th>
                <th className="cell -filter" onClick={() => handleSort("hoursIn1Subgroup")}>
                  Часов в 1 пг.
                </th>
                <th className="cell -filter" onClick={() => handleSort("hoursIn2Subgroup")}>
                  Часов во 2 пг.
                </th>
                <th className="cell -filter" onClick={() => handleSort("totalInYear")}>
                  Всего
                  <br />в год
                </th>
                <th className="cell -filter" onClick={() => handleSort("bidShare")}>
                  Доля ставки
                </th>
              </tr>
            </thead>
            <tbody>
              {assigningsTableData
                .filter(
                  (data: AssigningSyllabusData, index: number) =>
                    !isAssigningsAdding.value || index !== assigningsTableData.length - 1
                )
                .map((value: AssigningSyllabusData) => {
                  return (
                    <tr className="row" key={value.id}>
                      <td className="cell">
                        {isAssigningsEditing.value ? (
                          <Select
                            currentValue={subjectOptions.find((e) => e.content === value.name)}
                            options={subjectOptions}
                            onValueChange={(newValue: string) => {
                              const selectedOption = subjectOptions.find((e) => e.id === newValue);
                              if (selectedOption) {
                                setAssigningsTableData(
                                  assigningsTableData.map((data: AssigningSyllabusData) =>
                                    data.id === value.id ? { ...data, name: selectedOption.content } : data
                                  )
                                );
                              }
                            }}
                            size={SelectSize.Micro}
                          />
                        ) : (
                          value.name
                        )}
                      </td>
                      <td className="cell">
                        {isAssigningsEditing.value ? (
                          <Select
                            currentValue={teacherOptions.find((e) => e.content === value.teacher)}
                            options={teacherOptions}
                            onValueChange={(newValue: string) => {
                              const selectedOption = teacherOptions.find((e) => e.id === newValue);
                              if (selectedOption) {
                                setAssigningsTableData(
                                  assigningsTableData.map((data: AssigningSyllabusData) =>
                                    data.id === value.id ? { ...data, teacher: selectedOption.content } : data
                                  )
                                );
                              }
                            }}
                            size={SelectSize.Micro}
                          />
                        ) : (
                          value.teacher
                        )}
                      </td>
                      <td className="cell">
                        {isAssigningsEditing.value ? (
                          <Input
                            placeholder=""
                            value={value.groupCount.toString()}
                            onValueChange={(newValue: string) =>
                              setAssigningsTableData(
                                assigningsTableData.map((data: AssigningSyllabusData) =>
                                  data.id === value.id ? { ...data, groupCount: Number(newValue) } : data
                                )
                              )
                            }
                            size={InputSize.Micro}
                          />
                        ) : (
                          value.groupCount
                        )}
                      </td>
                      <td className="cell">
                        {isAssigningsEditing.value ? (
                          <Input
                            placeholder=""
                            value={value.hoursByPlanOnClassOfTheStudents.toString()}
                            onValueChange={(newValue: string) =>
                              setAssigningsTableData(
                                assigningsTableData.map((data: AssigningSyllabusData) =>
                                  data.id === value.id
                                    ? { ...data, hoursByPlanOnClassOfTheStudents: Number(newValue) }
                                    : data
                                )
                              )
                            }
                            size={InputSize.Micro}
                          />
                        ) : (
                          value.hoursByPlanOnClassOfTheStudents
                        )}
                      </td>
                      <td className="cell">
                        {isAssigningsEditing.value ? (
                          <Input
                            placeholder=""
                            value={value.hoursOnWeekForTheClassOfTheStudents.toString()}
                            onValueChange={(newValue: string) =>
                              setAssigningsTableData(
                                assigningsTableData.map((data: AssigningSyllabusData) =>
                                  data.id === value.id
                                    ? { ...data, hoursOnWeekForTheClassOfTheStudents: Number(newValue) }
                                    : data
                                )
                              )
                            )
                          }
                          size={InputSize.Micro}
                        />
                      ) : (
                        value.groupCount
                      )}
                    </td>
                    <td className="cell">
                      {value.hoursByPlanOnClassOfTheStudents}
                    </td>
                    <td className="cell">
                      {value.hoursOnWeekForTheClassOfTheStudents}
                    </td>
                    <td className="cell">
                      {value.hoursOnWeekOnYearOnTheTeacher}
                    </td>
                    <td className="cell">
                      {value.hoursOnWeekOnPeriodOnTheTeacher}
                    </td>
                    <td className="cell">
                      {value.hoursIn1Subgroup}
                    </td>
                    <td className="cell">
                      {value.hoursIn2Subgroup}
                    </td>
                    <td className="cell">
                      {value.totalInYear}
                    </td>
                    <td className="cell">
                      {value.bidShare}
                    </td>
                    <td className="cell">
                      <IconButton
                        icon={<GarbageIcon />}
                        onClick={() => handleDeleteAssigning(value.id.toString())}
                      />
                    </td>
                  </tr>
                );
              })}

              {isAssigningsAdding.value &&
              <tr className="row">
                <td className="cell">
                  <Select
                    options={subjectOptions}
                    onValueChange={(newValue: string) => {
                      const selectedOption = subjectOptions.find(e => e.id === newValue);
                      if (selectedOption) {
                        setAssigningsTableData(
                          assigningsTableData.map((data: AssigningSyllabusData) =>
                            data.id === assigningsTableData[assigningsTableData.length - 1].id
                              ? { ...data, groupCount: Number(newLabel) }
                              : data
                          )
                        );
                      }}
                      size={InputSize.Micro}
                    />
                  </td>
                  <td className="cell"></td>
                  <td className="cell"></td>
                  <td className="cell"></td>
                  <td className="cell"></td>
                  <td className="cell"></td>
                  <td className="cell"></td>
                  <td className="cell"></td>
                  <td className="cell"></td>
                  <td className="cell">
                    <IconButton
                      icon={<CheckMarkIcon />}
                      type={IconButtonType.Secondary}
                      onClick={handleApplyingNewAssigning}
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="table-wrapper">
          <h2 className="h2 table-wrapper__title">Расхождения</h2>
          <table className="table -fill -list">
            <thead className="header">
              <tr className="row">
                <th className="cell">Предмет</th>
                <th className="cell">Число групп</th>
              </tr>
            </thead>
            <tbody>
              <DiscrepanciesSyllabus />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AssigningSyllabusPage;
