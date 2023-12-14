import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TeachersCoursesSyllabusPageData, TeacherCoursesSyllabusData } from "./model/types";
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

const TeachersCoursesSyllabusPage = () => {
  const workingContractOptions: ISelectOption[] = [
    { id: "1", content: "ГПХ" },
    { id: "2", content: "ДС" }
  ];

  const httpService = new HttpService();
  const { currentYear } = useSelector((state: { headerStore: HeaderData }) => state.headerStore);

  const { openModal } = useContext(ModalSettingsContext);
  const dispatch = useDispatch();
  const teachers = useSelector(
    (state: { teachersCoursesSyllabusPageStore: TeachersCoursesSyllabusPageData }) =>
      state.teachersCoursesSyllabusPageStore
  );
  const [isTeachersEditing, setIsTeachersEditing] = useState<{ value: boolean }>({ value: false });
  const [isTeachersAdding, setIsTeachersAdding] = useState<{ value: boolean }>({ value: false });
  const [teachersTableData, setTeachersTableData] = useState<TeachersCoursesSyllabusPageData>(
    structuredClone(teachers)
  );
  const [teacherSearchQuery, setTeacherSearchQuery] = useState<string>("");
  const teachersTableBuilder: CTableBuilder = new CTableBuilder(teachersTableData, setTeachersTableData);
  teachersTableBuilder.addEditFeature(isTeachersEditing, setIsTeachersEditing);
  teachersTableBuilder.addManageFeature(isTeachersAdding, setIsTeachersAdding);
  teachersTableBuilder.addSearchFeature();
  const teachersTable: CTable = teachersTableBuilder.getTable();
  const teachersTableManager: CTableManager = new CTableManager(teachersTable);

  const handleSaveTeachers = () => {
    teachersTableManager.invokeFunction("apply", TableType.Editable, [
      (data: any[]) => dispatch(ActionBuilder.saveTeachers(data))
    ]);
  };
  const handleResetTeachers = () => {
    teachersTableManager.invokeFunction("cancel", TableType.Editable, [teachers]);
  };
  const editTeachers = (): void => {
    teachersTableManager.invokeFunction("edit", TableType.Editable, []);
  };
  const handleAddingTeachers = (): void => {
    teachersTableManager.invokeFunction("add", TableType.Managable, [
      {
        id: guidGenerator(),
        name: "",
        workingContract: workingContractOptions[0].content,
        workingStartDate: "",
        workExperience: 0,
        workExperienceAtTheTimeOfTheEmployment: 0,
        birthDay: "",
        age: 0
      }
    ]);
  };
  const handleApplyingNewTeacher = (): void => {
    teachersTableManager.invokeFunction("applyAdding", TableType.Managable, [
      (data: any[]) => dispatch(ActionBuilder.saveTeachers(data))
    ]);
  };
  const handleTeacherSearch = (): void => {
    teachersTableManager.invokeFunction("search", TableType.Searchable, [teacherSearchQuery, teachers]);
  };
  const handleSort = (columnName: string): void => {
    teachersTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };
  const handleDeleteTeacher = (id: string): void => {
    teachersTableManager.invokeFunction("delete", TableType.Managable, [
      id,
      (data: any[]) => dispatch(ActionBuilder.saveTeachers(data)),
      openModal
    ]);
  };

  useEffect(() => {
    const params: Map<string, string> = new Map<string, string>();
    if (currentYear) {
      params.set("year", currentYear.year.toString());
    }

    httpService
      .getByArbitraryUrl(Endpoint.CoursesSyllabusTeacher, params)
      .then((response) => {
        const courses = ResponseBuilder.BuildResponse<TeachersCoursesSyllabusPageData>(response, "teachers");
        if (courses) {
          dispatch(ActionBuilder.saveTeachers(courses));
          setTeachersTableData(structuredClone(courses));
        }
      })
      .catch(() => {
        dispatch(ActionBuilder.saveTeachers([]));
        setTeachersTableData(structuredClone([]));
      });
  }, []);

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__buttons-wrapper">
          {isTeachersEditing.value ? (
            <>
              <ActionButton
                className="toolbar__button"
                label="Сохранить"
                type={ActionButtonType.Positive}
                onClick={handleSaveTeachers}
              />
              <ActionButton
                className="toolbar__button"
                label="Отменить"
                type={ActionButtonType.Negative}
                onClick={handleResetTeachers}
              />
            </>
          ) : (
            <ActionButton
              className="toolbar__button"
              label="Редактировать"
              icon={<PenIcon width={18} height={18} />}
              type={ActionButtonType.Default}
              onClick={editTeachers}
            />
          )}
          <ActionButton
            label="Добавить"
            type={ActionButtonType.Warning}
            icon={<PlusIcon />}
            onClick={handleAddingTeachers}
          />
        </div>
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
              ФИО
            </th>
            <th className="cell -filter" onClick={() => handleSort("workingContract")}>
              Договор
            </th>
            <th className="cell -filter" onClick={() => handleSort("workingStartDate")}>
              Дата начала работы
            </th>
            <th className="cell -filter" onClick={() => handleSort("workExperience")}>
              Стаж, лет
            </th>
            <th className="cell -filter" onClick={() => handleSort("workExperienceAtTheTimeOfTheEmployment")}>
              Стаж на момент устр-ва
            </th>
            <th className="cell -filter" onClick={() => handleSort("birthDay")}>
              Дата рождения
            </th>
            <th className="cell -filter" onClick={() => handleSort("age")}>
              Возраст, лет
            </th>
          </tr>
        </thead>
        <tbody>
          {teachersTableData
            .filter(
              (data: TeacherCoursesSyllabusData, index: number) =>
                !isTeachersAdding.value || index !== teachersTableData.length - 1
            )
            .map((value: TeacherCoursesSyllabusData) => {
              return (
                <tr className="row" key={value.id}>
                  <td className="cell">
                    {isTeachersEditing.value ? (
                      <Input
                        placeholder=""
                        value={value.name}
                        onValueChange={(newValue: string) =>
                          setTeachersTableData(
                            teachersTableData.map((data: TeacherCoursesSyllabusData) =>
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
                    {isTeachersEditing.value ? (
                      <Select
                        currentValue={workingContractOptions.find((e) => e.content === value.workingContract)}
                        options={workingContractOptions}
                        onValueChange={(newValue: string) => {
                          const selectedOption = workingContractOptions.find((e) => e.id === newValue);
                          if (selectedOption) {
                            setTeachersTableData(
                              teachersTableData.map((data: TeacherCoursesSyllabusData) =>
                                data.id === value.id ? { ...data, workingContract: selectedOption.content } : data
                              )
                            );
                          }
                        }}
                        size={SelectSize.Micro}
                      />
                    ) : (
                      value.workingContract
                    )}
                  </td>
                  <td className="cell">
                    {isTeachersEditing.value ? (
                      <Input
                        placeholder=""
                        value={value.workingStartDate}
                        onValueChange={(newValue: string) =>
                          setTeachersTableData(
                            teachersTableData.map((data: TeacherCoursesSyllabusData) =>
                              data.id === value.id ? { ...data, workingStartDate: newValue } : data
                            )
                          )
                        }
                        size={InputSize.Micro}
                      />
                    ) : (
                      value.workingStartDate
                    )}
                  </td>
                  <td className="cell">
                    {isTeachersEditing.value ? (
                      <Input
                        placeholder=""
                        value={value.workExperience.toString()}
                        onValueChange={(newValue: string) =>
                          setTeachersTableData(
                            teachersTableData.map((data: TeacherCoursesSyllabusData) =>
                              data.id === value.id ? { ...data, workExperience: Number(newValue) } : data
                            )
                          )
                        }
                        size={InputSize.Micro}
                      />
                    ) : (
                      value.workExperience
                    )}
                  </td>
                  <td className="cell">
                    {isTeachersEditing.value ? (
                      <Input
                        placeholder=""
                        value={value.workExperienceAtTheTimeOfTheEmployment.toString()}
                        onValueChange={(newValue: string) =>
                          setTeachersTableData(
                            teachersTableData.map((data: TeacherCoursesSyllabusData) =>
                              data.id === value.id
                                ? { ...data, workExperienceAtTheTimeOfTheEmployment: Number(newValue) }
                                : data
                            )
                          )
                        }
                        size={InputSize.Micro}
                      />
                    ) : (
                      value.workExperienceAtTheTimeOfTheEmployment
                    )}
                  </td>
                  <td className="cell">
                    {isTeachersEditing.value ? (
                      <Input
                        placeholder=""
                        value={value.birthDay}
                        onValueChange={(newValue: string) =>
                          setTeachersTableData(
                            teachersTableData.map((data: TeacherCoursesSyllabusData) =>
                              data.id === value.id ? { ...data, birthDay: newValue } : data
                            )
                          )
                        }
                        size={InputSize.Micro}
                      />
                    ) : (
                      value.birthDay
                    )}
                  </td>
                  <td className="cell">
                    {isTeachersEditing.value ? (
                      <Input
                        placeholder=""
                        value={value.age.toString()}
                        onValueChange={(newValue: string) =>
                          setTeachersTableData(
                            teachersTableData.map((data: TeacherCoursesSyllabusData) =>
                              data.id === value.id ? { ...data, age: Number(newValue) } : data
                            )
                          )
                        }
                        size={InputSize.Micro}
                      />
                    ) : (
                      value.age
                    )}
                  </td>
                  <td className="cell">
                    <IconButton icon={<GarbageIcon />} onClick={() => handleDeleteTeacher(value.id.toString())} />
                  </td>
                </tr>
              );
            })}

          {isTeachersAdding.value && (
            <tr className="row">
              <td className="cell">
                <Input
                  placeholder="ФИО"
                  value={teachersTableData[teachersTableData.length - 1].name}
                  onValueChange={(newLabel: string) => {
                    setTeachersTableData(
                      teachersTableData.map((data: TeacherCoursesSyllabusData) =>
                        data.id === teachersTableData[teachersTableData.length - 1].id
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
                  options={workingContractOptions}
                  onValueChange={(newValue: string) => {
                    const selectedOption = workingContractOptions.find((e) => e.id === newValue);
                    if (selectedOption) {
                      setTeachersTableData(
                        teachersTableData.map((data: TeacherCoursesSyllabusData) =>
                          data.id === teachersTableData[teachersTableData.length - 1].id
                            ? { ...data, workingContract: selectedOption.content }
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
                  placeholder="01.09.2023"
                  value={teachersTableData[teachersTableData.length - 1].workingStartDate}
                  onValueChange={(newLabel: string) => {
                    setTeachersTableData(
                      teachersTableData.map((data: TeacherCoursesSyllabusData) =>
                        data.id === teachersTableData[teachersTableData.length - 1].id
                          ? { ...data, workingStartDate: newLabel }
                          : data
                      )
                    );
                  }}
                  size={InputSize.Micro}
                />
              </td>
              <td className="cell"></td>
              <td className="cell">
                <Input
                  placeholder="01.09.2023"
                  value={teachersTableData[
                    teachersTableData.length - 1
                  ].workExperienceAtTheTimeOfTheEmployment.toString()}
                  onValueChange={(newLabel: string) => {
                    setTeachersTableData(
                      teachersTableData.map((data: TeacherCoursesSyllabusData) =>
                        data.id === teachersTableData[teachersTableData.length - 1].id
                          ? { ...data, workExperienceAtTheTimeOfTheEmployment: Number(newLabel) }
                          : data
                      )
                    );
                  }}
                  size={InputSize.Micro}
                />
              </td>
              <td className="cell">
                <Input
                  placeholder="01.09.2023"
                  value={teachersTableData[teachersTableData.length - 1].birthDay}
                  onValueChange={(newLabel: string) => {
                    setTeachersTableData(
                      teachersTableData.map((data: TeacherCoursesSyllabusData) =>
                        data.id === teachersTableData[teachersTableData.length - 1].id
                          ? { ...data, birthDay: newLabel }
                          : data
                      )
                    );
                  }}
                  size={InputSize.Micro}
                />
              </td>
              <td className="cell"></td>
              <td className="cell">
                <IconButton
                  icon={<CheckMarkIcon />}
                  type={IconButtonType.Secondary}
                  onClick={handleApplyingNewTeacher}
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TeachersCoursesSyllabusPage;
