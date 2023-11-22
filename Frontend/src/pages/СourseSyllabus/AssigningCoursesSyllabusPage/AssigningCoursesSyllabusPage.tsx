import React, {useContext, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AssigningCoursesSyllabusPageData, AssigningsCoursesSyllabusData, AssigningCoursesSyllabusData} from "./model/types";
import {ActionBuilder} from "./model/actions";
import { classNames } from "../../../utils/classNames";
import Input, {InputSize, InputType} from "../../../components/Input/Input";
import ActionButton, {ActionButtonType} from "../../../components/ActionButton/ActionButton";
import {CheckMarkIcon, GarbageIcon, PenIcon, PlusIcon} from "../../../icons";
import Select, {ISelectOption, SelectSize} from "../../../components/Select/Select";
import IconButton, {IconButtonType} from "../../../components/IconButton/IconButton";
import ModalSettingsContext from "../../../utils/ModalSettingsContext";
import {CTableBuilder} from "../../../core/Table/CTableBuilder";
import {CTable} from "../../../core/Table/CTable";
import {CTableManager} from "../../../core/Table/CTableManager";
import {TableType} from "../../../core/Table/TableType";
import {guidGenerator} from "../../../utils/guidGenerator";
import {SortingOrder} from "../../../core/Table/SortingOrder";
import {AssigningSyllabusData} from "../../Syllabus/AssigningSyllabusPage/model/types";

const DiscrepanciesCoursesSyllabus = () => {
  const data = useSelector((state: {assigningCoursesSyllabusPageStore: AssigningCoursesSyllabusPageData}) => state.assigningCoursesSyllabusPageStore);
  const discrepancies = data.discrepancies;

  return (
    <>
      {discrepancies.map((discrepancy) => (
        <tr className="row" key={discrepancy.id}>
          <td className="cell">{discrepancy.name}</td>
          <td className={classNames("cell" + (discrepancy.groupCount < discrepancy.groupCountByPlan ? " -error" : "")
            + (discrepancy.groupCount > discrepancy.groupCountByPlan ? " -warning" : ""))}>{discrepancy.groupCount}</td>
        </tr>
      ))}
    </>
  );
};

const AssigningCoursesSyllabusPage = () => {
  const subjectOptions: ISelectOption[] = [
    { id: "1", content: "JavaScript" },
    { id: "2", content: "История" },
    { id: "3", content: "Физика" },
  ];
  const teacherOptions: ISelectOption[] = [
    { id: "1", content: "Иванов Иван Иванович" },
    { id: "2", content: "Петров Иван Иванович" },
    { id: "3", content: "Васечкин Николай Иванович" },
  ];

  const { openModal } = useContext(ModalSettingsContext);
  const dispatch = useDispatch();
  const data = useSelector((state: {assigningCoursesSyllabusPageStore: AssigningCoursesSyllabusPageData}) => state.assigningCoursesSyllabusPageStore);
  const assignings = data.assignings;
  const [isAssigningsEditing, setIsAssigningsEditing] = useState<{ value: boolean }>({ value: false });
  const [isAssigningsAdding, setIsAssigningsAdding] = useState<{ value: boolean }>({ value: false });
  const [assigningsTableData, setAssigningsTableData] = useState<AssigningsCoursesSyllabusData>(structuredClone(assignings));
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
        hoursOnWeek: 0,
        hoursOnYear: 0,
        costPerHour: 0,
      }
    ]);
  };
  const handleApplyingNewAssigning = (): void => {
    assigningsTableManager.invokeFunction("applyAdding", TableType.Managable, [
      (data: any[]) => dispatch(ActionBuilder.saveAssigning(data))
    ]);
  };
  const handleAssigningSearch = (): void => {
    assigningsTableManager.invokeFunction("search", TableType.Searchable, [
      assigningSearchQuery,
      assignings
    ]);
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
                <th className="cell -filter" onClick={() => handleSort("name")}>Курс</th>
                <th className="cell -filter" onClick={() => handleSort("teacher")}>Преподаватель</th>
                <th className="cell -filter" onClick={() => handleSort("groupCount")}>Число групп</th>
                <th className="cell -filter" onClick={() => handleSort("hoursOnWeek")}>Часов в неделю</th>
                <th className="cell -filter" onClick={() => handleSort("hoursOnYear")}>Часов всего</th>
                <th className="cell -filter" onClick={() => handleSort("costPerHour")}>Стоимость часа</th>
              </tr>
            </thead>
            <tbody>
              {assigningsTableData.filter((data: AssigningCoursesSyllabusData, index: number) =>
                !isAssigningsAdding.value || index !== assigningsTableData.length - 1
              ).map((value: AssigningCoursesSyllabusData) => {
                return (
                  <tr className="row" key={value.id}>
                    <td className="cell">
                      {isAssigningsEditing.value ? (
                        <Select
                          currentValue={subjectOptions.find(e => e.content === value.name)}
                          options={subjectOptions}
                          onValueChange={(newValue: string) => {
                            const selectedOption = subjectOptions.find(e => e.id === newValue);
                            if (selectedOption) {
                              setAssigningsTableData(
                                assigningsTableData.map((data: AssigningCoursesSyllabusData) =>
                                  data.id === value.id ? {...data, name: selectedOption.content} : data
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
                          currentValue={teacherOptions.find(e => e.content === value.teacher)}
                          options={teacherOptions}
                          onValueChange={(newValue: string) => {
                            const selectedOption = teacherOptions.find(e => e.id === newValue);
                            if (selectedOption) {
                              setAssigningsTableData(
                                assigningsTableData.map((data: AssigningCoursesSyllabusData) =>
                                  data.id === value.id ? {...data, teacher: selectedOption.content} : data
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
                              assigningsTableData.map((data: AssigningCoursesSyllabusData) =>
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
                    <td className="cell">{value.hoursOnWeek}</td>
                    <td className="cell">{value.hoursOnYear}</td>
                    <td className="cell">
                      {isAssigningsEditing.value ? (
                        <Input
                          placeholder=""
                          value={value.costPerHour.toString()}
                          onValueChange={(newValue: string) =>
                            setAssigningsTableData(
                              assigningsTableData.map((data: AssigningCoursesSyllabusData) =>
                                data.id === value.id ? { ...data, costPerHour: Number(newValue) } : data
                              )
                            )
                          }
                          size={InputSize.Micro}
                        />
                      ) : (
                        value.costPerHour
                      )}
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
                          assigningsTableData.map((data: AssigningCoursesSyllabusData) =>
                            data.id === assigningsTableData[assigningsTableData.length - 1].id ? {...data, name: selectedOption.content} : data
                          )
                        );
                      }
                    }}
                    size={SelectSize.Micro}
                  />
                </td>
                <td className="cell">
                  <Select
                    options={teacherOptions}
                    onValueChange={(newValue: string) => {
                      const selectedOption = teacherOptions.find(e => e.id === newValue);
                      if (selectedOption) {
                        setAssigningsTableData(
                          assigningsTableData.map((data: AssigningCoursesSyllabusData) =>
                            data.id === assigningsTableData[assigningsTableData.length - 1].id ? {...data, teacher: selectedOption.content} : data
                          )
                        );
                      }
                    }}
                    size={SelectSize.Micro}
                  />
                </td>
                <td className="cell">
                  <Input
                    placeholder="0"
                    value={assigningsTableData[assigningsTableData.length - 1].groupCount.toString()}
                    onValueChange={(newLabel: string) => {
                      setAssigningsTableData(
                        assigningsTableData.map((data: AssigningCoursesSyllabusData) =>
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
                <td className="cell">
                  <Input
                    placeholder="0"
                    value={assigningsTableData[assigningsTableData.length - 1].costPerHour.toString()}
                    onValueChange={(newLabel: string) => {
                      setAssigningsTableData(
                        assigningsTableData.map((data: AssigningCoursesSyllabusData) =>
                          data.id === assigningsTableData[assigningsTableData.length - 1].id
                            ? { ...data, costPerHour: Number(newLabel) }
                            : data
                        )
                      );
                    }}
                    size={InputSize.Micro}
                  />
                </td>
                <td className="cell">
                  <IconButton
                    icon={<CheckMarkIcon />}
                    type={IconButtonType.Secondary}
                    onClick={handleApplyingNewAssigning}
                  />
                </td>
              </tr>}
            </tbody>
          </table>
        </div>

        <div className="table-wrapper">
          <h2 className="h2 table-wrapper__title">Расхождения</h2>
          <table className="table -fill -list">
            <thead className="header">
              <tr className="row">
                <th className="cell">Курс</th>
                <th className="cell">Число групп</th>
              </tr>
            </thead>
            <tbody>
              <DiscrepanciesCoursesSyllabus />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AssigningCoursesSyllabusPage;
