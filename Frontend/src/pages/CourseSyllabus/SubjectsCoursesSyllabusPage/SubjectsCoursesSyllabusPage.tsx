import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SubjectsCoursesSyllabusPageData, SubjectCoursesSyllabusData } from "./model/types";
import { ActionBuilder } from "./model/actions";
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
import { HttpService } from "../../../api/http.service";
import { HeaderData } from "../../../layouts/Header/model/types";
import { Endpoint } from "../../../api/endpoints";
import { ResponseBuilder } from "../../../api/Responses/ResponseBuilder";

const SubjectsCoursesSyllabusPage = () => {
  const typeOptions: ISelectOption[] = [
    { id: "1", content: "Подготовительные курсы" },
    { id: "2", content: "Подготовительные экспресс-курсы" },
    { id: "3", content: "ШЮП" }
  ];

  const httpService = new HttpService();
  const { openModal } = useContext(ModalSettingsContext);
  const dispatch = useDispatch();
  const subjects = useSelector(
    (state: { subjectsCoursesSyllabusPageStore: SubjectsCoursesSyllabusPageData }) =>
      state.subjectsCoursesSyllabusPageStore
  );
  const [isSubjectsEditing, setIsSubjectsEditing] = useState<{ value: boolean }>({ value: false });
  const [isSubjectsAdding, setIsSubjectsAdding] = useState<{ value: boolean }>({ value: false });
  const [subjectsTableData, setSubjectsTableData] = useState<SubjectsCoursesSyllabusPageData>(
    structuredClone(subjects)
  );
  const [subjectSearchQuery, setSubjectSearchQuery] = useState<string>("");
  const subjectsTableBuilder: CTableBuilder = new CTableBuilder(subjectsTableData, setSubjectsTableData);
  subjectsTableBuilder.addEditFeature(isSubjectsEditing, setIsSubjectsEditing);
  subjectsTableBuilder.addManageFeature(isSubjectsAdding, setIsSubjectsAdding);
  subjectsTableBuilder.addSearchFeature();
  const subjectsTable: CTable = subjectsTableBuilder.getTable();
  const subjectsTableManager: CTableManager = new CTableManager(subjectsTable);
  const { currentYear } = useSelector((state: { headerStore: HeaderData }) => state.headerStore);

  const handleSaveSubjects = () => {
    subjectsTableManager.invokeFunction("apply", TableType.Editable, [
      (data: any[]) => dispatch(ActionBuilder.saveSubjects(data))
    ]);
  };
  const handleResetSubjects = () => {
    subjectsTableManager.invokeFunction("cancel", TableType.Editable, [subjects]);
  };
  const editSubjects = (): void => {
    subjectsTableManager.invokeFunction("edit", TableType.Editable, []);
  };
  const handleAddingSubjects = (): void => {
    subjectsTableManager.invokeFunction("add", TableType.Managable, [
      {
        id: guidGenerator(),
        name: "",
        type: typeOptions[0].content,
        hoursByPlan: 0,
        numberOfGroups: 0
      }
    ]);
  };
  const handleApplyingNewSubject = (): void => {
    subjectsTableManager.invokeFunction("applyAdding", TableType.Managable, [
      (data: any[]) => {
        // const addedSubject = data.at(-1) as SubjectCoursesSyllabusData;
        // console.log(addedSubject);
        // httpService.postByArbitraryUrl(Endpoint.CoursesSyllabus, {
        //   year: currentYear?.year,
        //   ...addedSubject,
        //   id: data.length
        // });

        dispatch(ActionBuilder.saveSubjects(data));
      }
    ]);
  };
  const handleSubjectSearch = (): void => {
    subjectsTableManager.invokeFunction("search", TableType.Searchable, [subjectSearchQuery, subjects]);
  };
  const handleSort = (columnName: string): void => {
    subjectsTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };
  const handleDeleteSubject = (id: string): void => {
    subjectsTableManager.invokeFunction("delete", TableType.Managable, [
      id,
      (data: any[]) => dispatch(ActionBuilder.saveSubjects(data)),
      openModal
    ]);
  };

  useEffect(() => {
    const params: Map<string, string> = new Map<string, string>();
    if (currentYear) {
      params.set("year", currentYear.year.toString());
    }

    httpService
      .getByArbitraryUrl(Endpoint.CoursesSyllabus, params)
      .then((response) => {
        const courses = ResponseBuilder.BuildResponse<SubjectsCoursesSyllabusPageData>(response, "courses");
        if (courses) {
          dispatch(ActionBuilder.saveSubjects(courses));
          setSubjectsTableData(structuredClone(courses));
        }
      })
      .catch(() => {
        dispatch(ActionBuilder.saveSubjects([]));
        setSubjectsTableData(structuredClone([]));
      });
  }, []);

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__buttons-wrapper">
          {isSubjectsEditing.value ? (
            <>
              <ActionButton
                className="toolbar__button"
                label="Сохранить"
                type={ActionButtonType.Positive}
                onClick={handleSaveSubjects}
              />
              <ActionButton
                className="toolbar__button"
                label="Отменить"
                type={ActionButtonType.Negative}
                onClick={handleResetSubjects}
              />
            </>
          ) : (
            <ActionButton
              className="toolbar__button"
              label="Редактировать"
              icon={<PenIcon width={18} height={18} />}
              type={ActionButtonType.Default}
              onClick={editSubjects}
            />
          )}
          <ActionButton
            label="Добавить"
            type={ActionButtonType.Warning}
            icon={<PlusIcon />}
            onClick={handleAddingSubjects}
          />
        </div>
        <Input
          className="toolbar__search"
          placeholder="Поиск"
          value={subjectSearchQuery}
          onValueChange={setSubjectSearchQuery}
          size={InputSize.Default}
          type={InputType.Search}
          onSearch={handleSubjectSearch}
        />
      </div>
      <table className="table -fill -list">
        <thead className="header">
          <tr className="row">
            <th className="cell -filter" onClick={() => handleSort("name")}>
              Курс
            </th>
            <th className="cell -filter" onClick={() => handleSort("type")}>
              Тип
            </th>
            <th className="cell -filter" onClick={() => handleSort("hoursByPlan")}>
              Планируемое кол-во часов
            </th>
            <th className="cell -filter" onClick={() => handleSort("numberOfGroups")}>
              Число групп
            </th>
          </tr>
        </thead>
        <tbody>
          {subjectsTableData
            .filter(
              (data: SubjectCoursesSyllabusData, index: number) =>
                !isSubjectsAdding.value || index !== subjectsTableData.length - 1
            )
            .map((value: SubjectCoursesSyllabusData) => {
              return (
                <tr className="row" key={value.id}>
                  <td className="cell">
                    {isSubjectsEditing.value ? (
                      <Input
                        placeholder=""
                        value={value.name}
                        onValueChange={(newValue: string) =>
                          setSubjectsTableData(
                            subjectsTableData.map((data: SubjectCoursesSyllabusData) =>
                              data.id === value.id ? { ...data, name: newValue } : data
                            )
                          )
                        }
                        size={InputSize.Micro}
                      />
                    ) : (
                      value.name
                    )}
                  </td>
                  <td className="cell">
                    {isSubjectsEditing.value ? (
                      <Select
                        currentValue={typeOptions.find((e) => e.content === value.type)}
                        options={typeOptions}
                        onValueChange={(newValue: string) => {
                          const selectedOption = typeOptions.find((e) => e.id === newValue);
                          if (selectedOption) {
                            setSubjectsTableData(
                              subjectsTableData.map((data: SubjectCoursesSyllabusData) =>
                                data.id === value.id ? { ...data, type: selectedOption.content } : data
                              )
                            );
                          }
                        }}
                        size={SelectSize.Micro}
                      />
                    ) : (
                      value.type
                    )}
                  </td>
                  <td className="cell">
                    {isSubjectsEditing.value ? (
                      <Input
                        placeholder=""
                        value={value.hoursByPlan.toString()}
                        onValueChange={(newValue: string) =>
                          setSubjectsTableData(
                            subjectsTableData.map((data: SubjectCoursesSyllabusData) =>
                              data.id === value.id ? { ...data, hoursByPlan: Number(newValue) } : data
                            )
                          )
                        }
                        size={InputSize.Micro}
                      />
                    ) : (
                      value.hoursByPlan
                    )}
                  </td>
                  <td className="cell">
                    {isSubjectsEditing.value ? (
                      <Input
                        placeholder=""
                        value={value.numberOfGroups.toString()}
                        onValueChange={(newValue: string) =>
                          setSubjectsTableData(
                            subjectsTableData.map((data: SubjectCoursesSyllabusData) =>
                              data.id === value.id ? { ...data, numberOfGroups: Number(newValue) } : data
                            )
                          )
                        }
                        size={InputSize.Micro}
                      />
                    ) : (
                      value.numberOfGroups
                    )}
                  </td>
                  <td className="cell">
                    <IconButton icon={<GarbageIcon />} onClick={() => handleDeleteSubject(value.id.toString())} />
                  </td>
                </tr>
              );
            })}

          {isSubjectsAdding.value && (
            <tr className="row">
              <td className="cell">
                <Input
                  placeholder="Наименование"
                  value={subjectsTableData[subjectsTableData.length - 1].name}
                  onValueChange={(newLabel: string) => {
                    setSubjectsTableData(
                      subjectsTableData.map((data: SubjectCoursesSyllabusData) =>
                        data.id === subjectsTableData[subjectsTableData.length - 1].id
                          ? { ...data, name: newLabel }
                          : data
                      )
                    );
                  }}
                  size={InputSize.Micro}
                />
              </td>
              <td className="cell">
                <Select
                  options={typeOptions}
                  onValueChange={(newValue: string) => {
                    const selectedOption = typeOptions.find((e) => e.id === newValue);
                    if (selectedOption) {
                      setSubjectsTableData(
                        subjectsTableData.map((data: SubjectCoursesSyllabusData) =>
                          data.id === subjectsTableData[subjectsTableData.length - 1].id
                            ? { ...data, type: selectedOption.content }
                            : data
                        )
                      );
                    }
                  }}
                  size={SelectSize.Micro}
                />
              </td>
              <td className="cell">
                <Input
                  placeholder=""
                  value={subjectsTableData[subjectsTableData.length - 1].hoursByPlan.toString()}
                  onValueChange={(newLabel: string) => {
                    setSubjectsTableData(
                      subjectsTableData.map((data: SubjectCoursesSyllabusData) =>
                        data.id === subjectsTableData[subjectsTableData.length - 1].id
                          ? { ...data, hoursByPlan: Number(newLabel) }
                          : data
                      )
                    );
                  }}
                  size={InputSize.Micro}
                />
              </td>
              <td className="cell">
                <Input
                  placeholder=""
                  value={subjectsTableData[subjectsTableData.length - 1].numberOfGroups.toString()}
                  onValueChange={(newLabel: string) => {
                    setSubjectsTableData(
                      subjectsTableData.map((data: SubjectCoursesSyllabusData) =>
                        data.id === subjectsTableData[subjectsTableData.length - 1].id
                          ? { ...data, numberOfGroups: Number(newLabel) }
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
                  onClick={handleApplyingNewSubject}
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default SubjectsCoursesSyllabusPage;
