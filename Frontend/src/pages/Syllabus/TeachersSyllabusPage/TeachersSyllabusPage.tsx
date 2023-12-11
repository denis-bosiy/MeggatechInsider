import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TeachersSyllabusPageData, TeacherSyllabusData } from "./model/types";
import { ActionBuilder } from "./model/actions";
import Input, { InputSize, InputType } from "../../../components/Input/Input";
import ActionButton, { ActionButtonType } from "../../../components/ActionButton/ActionButton";
import { CheckMarkIcon, GarbageIcon, PenIcon, PlusIcon } from "../../../icons";
import Select, { ISelectOption, SelectSize } from "../../../components/Select/Select";
import { CheckBox } from "../../../components/CheckBox/CheckBox";
import IconButton, { IconButtonType } from "../../../components/IconButton/IconButton";
import ModalSettingsContext from "../../../utils/ModalSettingsContext";
import { CTableBuilder } from "../../../core/Table/CTableBuilder";
import { CTable } from "../../../core/Table/CTable";
import { CTableManager } from "../../../core/Table/CTableManager";
import { TableType } from "../../../core/Table/TableType";
import { guidGenerator } from "../../../utils/guidGenerator";
import { SortingOrder } from "../../../core/Table/SortingOrder";
import { HttpService } from "../../../api/http.service";
import { Endpoint } from "../../../api/endpoints";
import { SyllabusTeacherResponse } from "../../../api/Responses/SyllabusTeacherResponse";
import { ResponseBuilder } from "../../../api/Responses/ResponseBuilder";
import { HeaderData } from "../../../layouts/Header/model/types";

const TeachersSyllabusPage = () => {
  // TODO: Добавить вытягивание этих данных с бэкенда
  const categoryOptions: ISelectOption[] = [
    { id: "1", content: "Высшая категория" },
    { id: "2", content: "Высокая категория" }
  ];
  const workingContractOptions: ISelectOption[] = [
    { id: "1", content: "ГПХ" },
    { id: "2", content: "ДС" }
  ];
  const educationOptions: ISelectOption[] = [
    { id: "1", content: "Степень к.н." },
    { id: "2", content: "Докторская степень" }
  ];

  const httpService = new HttpService();
  const { openModal } = useContext(ModalSettingsContext);
  const dispatch = useDispatch();
  const teachers = useSelector(
    (state: { teachersSyllabusPageStore: TeachersSyllabusPageData }) => state.teachersSyllabusPageStore
  );
  const { currentYear } = useSelector((state: { headerStore: HeaderData }) => state.headerStore);
  const [isTeachersEditing, setIsTeachersEditing] = useState<{ value: boolean }>({ value: false });
  const [isTeachersAdding, setIsTeachersAdding] = useState<{ value: boolean }>({ value: false });
  const [teachersTableData, setTeachersTableData] = useState<TeachersSyllabusPageData>(structuredClone(teachers));
  const [teacherSearchQuery, setTeacherSearchQuery] = useState<string>("");
  const teachersTableBuilder: CTableBuilder = new CTableBuilder(teachersTableData, setTeachersTableData);
  teachersTableBuilder.addEditFeature(isTeachersEditing, setIsTeachersEditing);
  teachersTableBuilder.addManageFeature(isTeachersAdding, setIsTeachersAdding);
  teachersTableBuilder.addSearchFeature();
  const teachersTable: CTable = teachersTableBuilder.getTable();
  const teachersTableManager: CTableManager = new CTableManager(teachersTable);

  useEffect(() => {
    const params: Map<string, string> = new Map<string, string>();
    if (currentYear) {
      params.set("year", currentYear.year.toString());
    }

    httpService
      .getByArbitraryUrl(Endpoint.SyllabusTeachers, params)
      .then((data: any) => {
        const teachersResponse: SyllabusTeacherResponse[] = ResponseBuilder.BuildSyllabusTeachersResponse(data);
        const teachers: TeacherSyllabusData[] = teachersResponse.map((teacherResponse: SyllabusTeacherResponse) => {
          return {
            id: teacherResponse.id.toString(),
            name: teacherResponse.name,
            category: teacherResponse.category,
            categoryPayrollAccounting: teacherResponse.categoryPayrollAccounting,
            workingContract: teacherResponse.workingContract,
            workingContractPayrollAccounting: teacherResponse.workingContractPayrollAccounting,
            education: teacherResponse.education,
            isClassroomTeacher: teacherResponse.isClassroomTeacher,
            inDepthSubjectPayrollAccounting: teacherResponse.inDepthSubjectPayrollAccounting,
            finalExamPayrollAccounting: teacherResponse.finalExamPayrollAccounting,
            workingStartDate: teacherResponse.workingStartDate,
            workExperience: teacherResponse.workExperience,
            workExperienceAtTheTimeOfTheEmployment: teacherResponse.workExperienceAtTheTimeOfTheEmployment,
            birthDay: "",
            age: 0
          };
        });
        dispatch(ActionBuilder.saveTeachers(teachers));
        setTeachersTableData(structuredClone(teachers));
      })
      .catch(() => {
        dispatch(ActionBuilder.saveTeachers([]));
        setTeachersTableData([]);
      });
  }, [currentYear?.id]);

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
        category: categoryOptions[0].content,
        categoryPayrollAccounting: false,
        workingContract: workingContractOptions[0].content,
        workingContractPayrollAccounting: false,
        education: educationOptions[0].content,
        isClassroomTeacher: false,
        inDepthSubjectPayrollAccounting: false,
        finalExamPayrollAccounting: false,
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
            <th className="cell -filter" onClick={() => handleSort("category")}>
              Категория
            </th>
            <th className="cell -filter" onClick={() => handleSort("categoryPayrollAccounting")}>
              Учет в зп
            </th>
            <th className="cell -filter" onClick={() => handleSort("workingContract")}>
              Договор
            </th>
            <th className="cell -filter" onClick={() => handleSort("workingContractPayrollAccounting")}>
              Учет в зп
            </th>
            <th className="cell -filter" onClick={() => handleSort("education")}>
              Образование
            </th>
            <th className="cell -filter" onClick={() => handleSort("isClassroomTeacher")}>
              Класс.
              <br />
              рук-во
            </th>
            <th className="cell -filter" onClick={() => handleSort("inDepthSubjectPayrollAccounting")}>
              Учет углуб. в зп
            </th>
            <th className="cell -filter" onClick={() => handleSort("finalExamPayrollAccounting")}>
              Учет ЕГЭ в зп
            </th>
            <th className="cell -filter" onClick={() => handleSort("workingStartDate")}>
              Дата
              <br />
              начала
              <br />
              работы
            </th>
            <th className="cell -filter" onClick={() => handleSort("workExperience")}>
              Стаж, лет
            </th>
            <th className="cell -filter" onClick={() => handleSort("workExperienceAtTheTimeOfTheEmployment")}>
              Стаж на момент устр-ва
            </th>
            <th className="cell -filter" onClick={() => handleSort("birthDay")}>
              Дата
              <br />
              рождения
            </th>
            <th className="cell -filter" onClick={() => handleSort("age")}>
              Возраст, лет
            </th>
          </tr>
        </thead>
        <tbody>
          {teachersTableData
            .filter(
              (data: TeacherSyllabusData, index: number) =>
                !isTeachersAdding.value || index !== teachersTableData.length - 1
            )
            .map((value: TeacherSyllabusData) => {
              return (
                <tr className="row" key={value.id}>
                  <td className="cell">
                    {isTeachersEditing.value ? (
                      <Input
                        placeholder=""
                        value={value.name}
                        onValueChange={(newValue: string) =>
                          setTeachersTableData(
                            teachersTableData.map((data: TeacherSyllabusData) =>
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
                        currentValue={categoryOptions.find((e) => e.content === value.category)}
                        options={categoryOptions}
                        onValueChange={(newValue: string) => {
                          const selectedOption = categoryOptions.find((e) => e.id === newValue);
                          if (selectedOption) {
                            setTeachersTableData(
                              teachersTableData.map((data: TeacherSyllabusData) =>
                                data.id === value.id ? { ...data, category: selectedOption.content } : data
                              )
                            );
                          }
                        }}
                        size={SelectSize.Micro}
                      />
                    ) : (
                      value.category
                    )}
                  </td>
                  <td className="cell">
                    <CheckBox
                      isDisabled={!isTeachersEditing.value}
                      checked={value.categoryPayrollAccounting}
                      onChange={(event) => {
                        setTeachersTableData(
                          teachersTableData.map((data: TeacherSyllabusData) =>
                            data.id === value.id ? { ...data, categoryPayrollAccounting: event } : data
                          )
                        );
                      }}
                    />
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
                              teachersTableData.map((data: TeacherSyllabusData) =>
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
                    <CheckBox
                      isDisabled={!isTeachersEditing.value}
                      checked={value.workingContractPayrollAccounting}
                      onChange={(event) => {
                        setTeachersTableData(
                          teachersTableData.map((data: TeacherSyllabusData) =>
                            data.id === value.id ? { ...data, workingContractPayrollAccounting: event } : data
                          )
                        );
                      }}
                    />
                  </td>
                  <td className="cell">
                    {isTeachersEditing.value ? (
                      <Select
                        currentValue={educationOptions.find((e) => e.content === value.education)}
                        options={educationOptions}
                        onValueChange={(newValue: string) => {
                          const selectedOption = educationOptions.find((e) => e.id === newValue);
                          if (selectedOption) {
                            setTeachersTableData(
                              teachersTableData.map((data: TeacherSyllabusData) =>
                                data.id === value.id ? { ...data, education: selectedOption.content } : data
                              )
                            );
                          }
                        }}
                        size={SelectSize.Micro}
                      />
                    ) : (
                      value.education
                    )}
                  </td>
                  <td className="cell">
                    <CheckBox
                      isDisabled={!isTeachersEditing.value}
                      checked={value.isClassroomTeacher}
                      onChange={(event) => {
                        setTeachersTableData(
                          teachersTableData.map((data: TeacherSyllabusData) =>
                            data.id === value.id ? { ...data, isClassroomTeacher: event } : data
                          )
                        );
                      }}
                    />
                  </td>
                  <td className="cell">
                    <CheckBox
                      isDisabled={!isTeachersEditing.value}
                      checked={value.inDepthSubjectPayrollAccounting}
                      onChange={(event) => {
                        setTeachersTableData(
                          teachersTableData.map((data: TeacherSyllabusData) =>
                            data.id === value.id ? { ...data, inDepthSubjectPayrollAccounting: event } : data
                          )
                        );
                      }}
                    />
                  </td>
                  <td className="cell">
                    <CheckBox
                      isDisabled={!isTeachersEditing.value}
                      checked={value.finalExamPayrollAccounting}
                      onChange={(event) => {
                        setTeachersTableData(
                          teachersTableData.map((data: TeacherSyllabusData) =>
                            data.id === value.id ? { ...data, finalExamPayrollAccounting: event } : data
                          )
                        );
                      }}
                    />
                  </td>
                  <td className="cell">
                    {isTeachersEditing.value ? (
                      <Input
                        placeholder=""
                        value={value.workingStartDate}
                        onValueChange={(newValue: string) =>
                          setTeachersTableData(
                            teachersTableData.map((data: TeacherSyllabusData) =>
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
                  <td className="cell">{value.workExperience}</td>
                  <td className="cell">
                    {isTeachersEditing.value ? (
                      <Input
                        placeholder=""
                        value={value.workExperienceAtTheTimeOfTheEmployment.toString()}
                        onValueChange={(newValue: string) =>
                          setTeachersTableData(
                            teachersTableData.map((data: TeacherSyllabusData) =>
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
                            teachersTableData.map((data: TeacherSyllabusData) =>
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
                  <td className="cell">{value.age}</td>
                  <td className="cell">
                    <IconButton icon={<GarbageIcon />} onClick={() => handleDeleteTeacher(value.id.toString())} />
                  </td>
                </tr>
              );
            })}

          {isTeachersAdding.value && teachersTableData[teachersTableData.length - 1] && (
            <tr className="row">
              <td className="cell">
                <Input
                  placeholder="ФИО"
                  value={teachersTableData[teachersTableData.length - 1].name}
                  onValueChange={(newLabel: string) => {
                    setTeachersTableData(
                      teachersTableData.map((data: TeacherSyllabusData) =>
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
                  options={categoryOptions}
                  onValueChange={(newValue: string) => {
                    const selectedOption = categoryOptions.find((e) => e.id === newValue);
                    if (selectedOption) {
                      setTeachersTableData(
                        teachersTableData.map((data: TeacherSyllabusData) =>
                          data.id === teachersTableData[teachersTableData.length - 1].id
                            ? { ...data, category: selectedOption.content }
                            : data
                        )
                      );
                    }
                  }}
                  size={SelectSize.Micro}
                />
              </td>
              <td className="cell">
                <CheckBox
                  onChange={(event) => {
                    setTeachersTableData(
                      teachersTableData.map((data: TeacherSyllabusData) =>
                        data.id === teachersTableData[teachersTableData.length - 1].id
                          ? { ...data, categoryPayrollAccounting: event }
                          : data
                      )
                    );
                  }}
                />
              </td>
              <td className="cell">
                <Select
                  options={workingContractOptions}
                  onValueChange={(newValue: string) => {
                    const selectedOption = workingContractOptions.find((e) => e.id === newValue);
                    if (selectedOption) {
                      setTeachersTableData(
                        teachersTableData.map((data: TeacherSyllabusData) =>
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
                <CheckBox
                  onChange={(event) => {
                    setTeachersTableData(
                      teachersTableData.map((data: TeacherSyllabusData) =>
                        data.id === teachersTableData[teachersTableData.length - 1].id
                          ? { ...data, workingContractPayrollAccounting: event }
                          : data
                      )
                    );
                  }}
                />
              </td>
              <td className="cell">
                <Select
                  options={educationOptions}
                  onValueChange={(newValue: string) => {
                    const selectedOption = educationOptions.find((e) => e.id === newValue);
                    if (selectedOption) {
                      setTeachersTableData(
                        teachersTableData.map((data: TeacherSyllabusData) =>
                          data.id === teachersTableData[teachersTableData.length - 1].id
                            ? { ...data, education: selectedOption.content }
                            : data
                        )
                      );
                    }
                  }}
                  size={SelectSize.Micro}
                />
              </td>
              <td className="cell">
                <CheckBox
                  onChange={(event) => {
                    setTeachersTableData(
                      teachersTableData.map((data: TeacherSyllabusData) =>
                        data.id === teachersTableData[teachersTableData.length - 1].id
                          ? { ...data, isClassroomTeacher: event }
                          : data
                      )
                    );
                  }}
                />
              </td>
              <td className="cell">
                <CheckBox
                  onChange={(event) => {
                    setTeachersTableData(
                      teachersTableData.map((data: TeacherSyllabusData) =>
                        data.id === teachersTableData[teachersTableData.length - 1].id
                          ? { ...data, inDepthSubjectPayrollAccounting: event }
                          : data
                      )
                    );
                  }}
                />
              </td>
              <td className="cell">
                <CheckBox
                  onChange={(event) => {
                    setTeachersTableData(
                      teachersTableData.map((data: TeacherSyllabusData) =>
                        data.id === teachersTableData[teachersTableData.length - 1].id
                          ? { ...data, finalExamPayrollAccounting: event }
                          : data
                      )
                    );
                  }}
                />
              </td>
              <td className="cell">
                <Input
                  placeholder="01.09.2023"
                  value={teachersTableData[teachersTableData.length - 1].workingStartDate}
                  onValueChange={(newLabel: string) => {
                    setTeachersTableData(
                      teachersTableData.map((data: TeacherSyllabusData) =>
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
                      teachersTableData.map((data: TeacherSyllabusData) =>
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
                      teachersTableData.map((data: TeacherSyllabusData) =>
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

export default TeachersSyllabusPage;
