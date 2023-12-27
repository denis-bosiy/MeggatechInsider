import React, { useContext, useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SubjectsSyllabusPageData, SubjectSyllabusData } from "./model/types";
import { ActionBuilder } from "./model/actions";
import Input, { InputSize, InputType } from "../../../components/Input/Input";
import ActionButton, { ActionButtonType } from "../../../components/ActionButton/ActionButton";
import { CheckMarkIcon, GarbageIcon, PenIcon, PlusIcon } from "../../../icons";
import Select, { ISelectOption, SelectSize } from "../../../components/Select/Select";
import { CheckBox } from "../../../components/CheckBox/CheckBox";
import IconButton, { IconButtonType } from "../../../components/IconButton/IconButton";
import { CTableBuilder } from "../../../core/Table/CTableBuilder";
import { CTable } from "../../../core/Table/CTable";
import { CTableManager } from "../../../core/Table/CTableManager";
import { TableType } from "../../../core/Table/TableType";
import { guidGenerator } from "../../../utils/guidGenerator";
import { SortingOrder } from "../../../core/Table/SortingOrder";
import ModalSettingsContext from "../../../utils/ModalSettingsContext";
import { HeaderData } from "../../../layouts/Header/model/types";
import { HttpService } from "../../../api/http.service";
import { Endpoint } from "../../../api/endpoints";
import { SyllabusSubjectResponse } from "../../../api/Responses/SyllabusSubjectResponse";
import { ResponseBuilder } from "../../../api/Responses/ResponseBuilder";
import Loader from "../../../components/Loader/Loader";

const SubjectsSyllabusPage = () => {
  const financingOptions: ISelectOption[] = [
    { id: "1", content: "Бюджет" },
    { id: "2", content: "Внебюджет" }
  ];
  const typeOptions: ISelectOption[] = [
    { id: "1", content: "Обязательный проф." },
    { id: "2", content: "Необязательный проф." }
  ];
  const categoryOptions: ISelectOption[] = [
    { id: "1", content: "Физ." },
    { id: "2", content: "Ист." }
  ];
  const [isDataLoading, setDataLoading] = useState<boolean>(true);

  const httpService = new HttpService();
  const { openModal } = useContext(ModalSettingsContext);
  const dispatch = useDispatch();
  const subjects = useSelector(
    (state: { subjectsSyllabusPageStore: SubjectsSyllabusPageData }) => state.subjectsSyllabusPageStore
  );
  const { currentYear } = useSelector((state: { headerStore: HeaderData }) => state.headerStore);
  const [isSubjectsEditing, setIsSubjectsEditing] = useState<{ value: boolean }>({ value: false });
  const [isSubjectsAdding, setIsSubjectsAdding] = useState<{ value: boolean }>({ value: false });
  const [subjectsTableData, setSubjectsTableData] = useState<SubjectsSyllabusPageData>(structuredClone(subjects));
  const [subjectSearchQuery, setSubjectSearchQuery] = useState<string>("");
  const subjectsTableBuilder: CTableBuilder = new CTableBuilder(subjectsTableData, setSubjectsTableData);
  subjectsTableBuilder.addEditFeature(isSubjectsEditing, setIsSubjectsEditing);
  subjectsTableBuilder.addManageFeature(isSubjectsAdding, setIsSubjectsAdding);
  subjectsTableBuilder.addSearchFeature();
  const subjectsTable: CTable = subjectsTableBuilder.getTable();
  const subjectsTableManager: CTableManager = new CTableManager(subjectsTable);

  useLayoutEffect(() => {
    const params: Map<string, string> = new Map<string, string>();
    if (currentYear) {
      params.set("year", currentYear.year.toString());
    }
    setDataLoading(true);
    httpService
      .getByArbitraryUrl(Endpoint.SyllabusSubjects, params)
      .then((data: any) => {
        setDataLoading(false);
        const subjectsResponse: SyllabusSubjectResponse[] = ResponseBuilder.BuildSyllabusSubjectsResponse(data);
        const subjects: SubjectSyllabusData[] = subjectsResponse.map((subjectResponse: SyllabusSubjectResponse) => {
          return {
            id: subjectResponse.id.toString(),
            subjectName: subjectResponse.name,
            financing: subjectResponse.financing,
            type: subjectResponse.type,
            category: subjectResponse.category,
            surchargeForNotebooks: subjectResponse.surchargeForNotebooks,
            numberOf10: subjectResponse.numberOf10,
            numberOfGroupsIn10: subjectResponse.numberOfGroupsIn10,
            numberOf11: subjectResponse.numberOf11,
            numberOfGroupsIn11: subjectResponse.numberOfGroupsIn11,
            isFinalExam: subjectResponse.isFinalExam
          };
        });
        dispatch(ActionBuilder.saveSubjects(subjects));
        setSubjectsTableData(structuredClone(subjects));
      })
      .catch(() => {
        dispatch(ActionBuilder.saveSubjects([]));
        setSubjectsTableData([]);
        setDataLoading(false);
      });
  }, [currentYear?.id]);

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
        subjectName: "",
        financing: financingOptions[0].content,
        type: typeOptions[0].content,
        category: categoryOptions[0].content,
        surchargeForNotebooks: 0,
        numberOf10: 0,
        numberOfGroupsIn10: 0,
        numberOf11: 0,
        numberOfGroupsIn11: 0,
        isFinalExam: false
      }
    ]);
  };
  const handleApplyingNewSubject = (): void => {
    subjectsTableManager.invokeFunction("applyAdding", TableType.Managable, [
      (data: any[]) => dispatch(ActionBuilder.saveSubjects(data))
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

  if (isDataLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__buttons-wrapper">
          {isSubjectsEditing.value ? (
            <div className="toolbar__buttons-box">
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
            </div>
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
            <th className="cell -filter" onClick={() => handleSort("subjectName")}>
              Предмет
            </th>
            <th className="cell -filter" onClick={() => handleSort("financing")}>
              Б/Бв
            </th>
            <th className="cell -filter" onClick={() => handleSort("type")}>
              Тип
            </th>
            <th className="cell -filter" onClick={() => handleSort("category")}>
              Категория
            </th>
            <th className="cell -filter" onClick={() => handleSort("surchargeForNotebooks")}>
              Доплата за
              <br />
              тетради, %
            </th>
            <th className="cell -filter" onClick={() => handleSort("numberOf10")}>
              Планируемое
              <br />
              кол-во
              <br />
              часов 10 кл.
            </th>
            <th className="cell -filter" onClick={() => handleSort("numberOfGroupsIn10")}>
              Число
              <br />
              групп
              <br />
              10 кл.
            </th>
            <th className="cell -filter" onClick={() => handleSort("numberOf11")}>
              Планируемое
              <br />
              кол-во
              <br />
              часов 11 кл.
            </th>
            <th className="cell -filter" onClick={() => handleSort("numberOfGroupsIn11")}>
              Число
              <br />
              групп
              <br />
              11 кл.
            </th>
            <th className="cell -filter" onClick={() => handleSort("isFinalExam")}>
              ЕГЭ
            </th>
          </tr>
        </thead>
        <tbody>
          {subjectsTableData
            .filter(
              (data: SubjectSyllabusData, index: number) =>
                !isSubjectsAdding.value || index !== subjectsTableData.length - 1
            )
            .map((value: SubjectSyllabusData) => {
              return (
                <tr className="row" key={value.id}>
                  <td className="cell">
                    {isSubjectsEditing.value ? (
                      <Input
                        placeholder=""
                        value={value.subjectName}
                        onValueChange={(newValue: string) =>
                          setSubjectsTableData(
                            subjectsTableData.map((data: SubjectSyllabusData) =>
                              data.id === value.id ? { ...data, subjectName: newValue } : data
                            )
                          )
                        }
                        size={InputSize.Micro}
                      />
                    ) : (
                      value.subjectName
                    )}
                  </td>
                  <td className="cell">
                    {isSubjectsEditing.value ? (
                      <Select
                        currentValue={financingOptions.find((e) => e.content === value.financing)}
                        options={financingOptions}
                        onValueChange={(newValue: string) => {
                          const selectedOption = financingOptions.find((e) => e.id === newValue);
                          if (selectedOption) {
                            setSubjectsTableData(
                              subjectsTableData.map((data: SubjectSyllabusData) =>
                                data.id === value.id ? { ...data, financing: selectedOption.content } : data
                              )
                            );
                          }
                        }}
                        size={SelectSize.Micro}
                      />
                    ) : (
                      value.financing
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
                              subjectsTableData.map((data: SubjectSyllabusData) =>
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
                      <Select
                        currentValue={categoryOptions.find((e) => e.content === value.category)}
                        options={categoryOptions}
                        onValueChange={(newValue: string) => {
                          const selectedOption = categoryOptions.find((e) => e.id === newValue);
                          if (selectedOption) {
                            setSubjectsTableData(
                              subjectsTableData.map((data: SubjectSyllabusData) =>
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
                    {isSubjectsEditing.value ? (
                      <Input
                        placeholder=""
                        value={value.surchargeForNotebooks.toString()}
                        onValueChange={(newValue: string) =>
                          setSubjectsTableData(
                            subjectsTableData.map((data: SubjectSyllabusData) =>
                              data.id === value.id ? { ...data, surchargeForNotebooks: Number(newValue) } : data
                            )
                          )
                        }
                        size={InputSize.Micro}
                      />
                    ) : (
                      `${value.surchargeForNotebooks}%`
                    )}
                  </td>
                  <td className="cell">
                    {isSubjectsEditing.value ? (
                      <Input
                        placeholder=""
                        value={value.numberOf10.toString()}
                        onValueChange={(newValue: string) =>
                          setSubjectsTableData(
                            subjectsTableData.map((data: SubjectSyllabusData) =>
                              data.id === value.id ? { ...data, numberOf10: Number(newValue) } : data
                            )
                          )
                        }
                        size={InputSize.Micro}
                      />
                    ) : (
                      value.numberOf10
                    )}
                  </td>
                  <td className="cell">
                    {isSubjectsEditing.value ? (
                      <Input
                        placeholder=""
                        value={value.numberOfGroupsIn10.toString()}
                        onValueChange={(newValue: string) =>
                          setSubjectsTableData(
                            subjectsTableData.map((data: SubjectSyllabusData) =>
                              data.id === value.id ? { ...data, numberOfGroupsIn10: Number(newValue) } : data
                            )
                          )
                        }
                        size={InputSize.Micro}
                      />
                    ) : (
                      value.numberOfGroupsIn10
                    )}
                  </td>
                  <td className="cell">
                    {isSubjectsEditing.value ? (
                      <Input
                        placeholder=""
                        value={value.numberOf11.toString()}
                        onValueChange={(newValue: string) =>
                          setSubjectsTableData(
                            subjectsTableData.map((data: SubjectSyllabusData) =>
                              data.id === value.id ? { ...data, numberOf11: Number(newValue) } : data
                            )
                          )
                        }
                        size={InputSize.Micro}
                      />
                    ) : (
                      value.numberOf11
                    )}
                  </td>
                  <td className="cell">
                    {isSubjectsEditing.value ? (
                      <Input
                        placeholder=""
                        value={value.numberOfGroupsIn11.toString()}
                        onValueChange={(newValue: string) =>
                          setSubjectsTableData(
                            subjectsTableData.map((data: SubjectSyllabusData) =>
                              data.id === value.id ? { ...data, numberOfGroupsIn11: Number(newValue) } : data
                            )
                          )
                        }
                        size={InputSize.Micro}
                      />
                    ) : (
                      value.numberOfGroupsIn11
                    )}
                  </td>
                  <td className="cell">
                    <CheckBox
                      isDisabled={!isSubjectsEditing.value}
                      checked={value.isFinalExam}
                      onChange={(event) => {
                        setSubjectsTableData(
                          subjectsTableData.map((data: SubjectSyllabusData) =>
                            data.id === value.id ? { ...data, isFinalExam: event } : data
                          )
                        );
                      }}
                    />
                  </td>
                  <td className="cell">
                    <IconButton icon={<GarbageIcon />} onClick={() => handleDeleteSubject(value.id.toString())} />
                  </td>
                </tr>
              );
            })}

          {isSubjectsAdding.value && subjectsTableData[subjectsTableData.length - 1] && (
            <tr className="row">
              <td className="cell">
                <Input
                  placeholder="Предмет"
                  value={subjectsTableData[subjectsTableData.length - 1].subjectName}
                  onValueChange={(newLabel: string) => {
                    setSubjectsTableData(
                      subjectsTableData.map((data: SubjectSyllabusData) =>
                        data.id === subjectsTableData[subjectsTableData.length - 1].id
                          ? { ...data, subjectName: newLabel }
                          : data
                      )
                    );
                  }}
                  size={InputSize.Micro}
                />
              </td>
              <td className="cell">
                <Select
                  options={financingOptions}
                  onValueChange={(newValue: string) => {
                    const selectedOption = financingOptions.find((e) => e.id === newValue);
                    if (selectedOption) {
                      setSubjectsTableData(
                        subjectsTableData.map((data: SubjectSyllabusData) =>
                          data.id === subjectsTableData[subjectsTableData.length - 1].id
                            ? { ...data, financing: selectedOption.content }
                            : data
                        )
                      );
                    }
                  }}
                  size={SelectSize.Micro}
                />
              </td>
              <td className="cell">
                <Select
                  options={typeOptions}
                  onValueChange={(newValue: string) => {
                    const selectedOption = typeOptions.find((e) => e.id === newValue);
                    if (selectedOption) {
                      setSubjectsTableData(
                        subjectsTableData.map((data: SubjectSyllabusData) =>
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
                <Select
                  options={categoryOptions}
                  onValueChange={(newValue: string) => {
                    const selectedOption = categoryOptions.find((e) => e.id === newValue);
                    if (selectedOption) {
                      setSubjectsTableData(
                        subjectsTableData.map((data: SubjectSyllabusData) =>
                          data.id === subjectsTableData[subjectsTableData.length - 1].id
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
                <Input
                  placeholder="0%"
                  value={subjectsTableData[subjectsTableData.length - 1].surchargeForNotebooks.toString()}
                  onValueChange={(newLabel: string) => {
                    setSubjectsTableData(
                      subjectsTableData.map((data: SubjectSyllabusData) =>
                        data.id === subjectsTableData[subjectsTableData.length - 1].id
                          ? { ...data, surchargeForNotebooks: Number(newLabel) }
                          : data
                      )
                    );
                  }}
                  size={InputSize.Micro}
                />
              </td>
              <td className="cell">
                <Input
                  placeholder="0"
                  value={subjectsTableData[subjectsTableData.length - 1].numberOf10.toString()}
                  onValueChange={(newLabel: string) => {
                    setSubjectsTableData(
                      subjectsTableData.map((data: SubjectSyllabusData) =>
                        data.id === subjectsTableData[subjectsTableData.length - 1].id
                          ? { ...data, numberOf10: Number(newLabel) }
                          : data
                      )
                    );
                  }}
                  size={InputSize.Micro}
                />
              </td>
              <td className="cell">
                <Input
                  placeholder="0"
                  value={subjectsTableData[subjectsTableData.length - 1].numberOfGroupsIn10.toString()}
                  onValueChange={(newLabel: string) => {
                    setSubjectsTableData(
                      subjectsTableData.map((data: SubjectSyllabusData) =>
                        data.id === subjectsTableData[subjectsTableData.length - 1].id
                          ? { ...data, numberOfGroupsIn10: Number(newLabel) }
                          : data
                      )
                    );
                  }}
                  size={InputSize.Micro}
                />
              </td>
              <td className="cell">
                <Input
                  placeholder="0"
                  value={subjectsTableData[subjectsTableData.length - 1].numberOf11.toString()}
                  onValueChange={(newLabel: string) => {
                    setSubjectsTableData(
                      subjectsTableData.map((data: SubjectSyllabusData) =>
                        data.id === subjectsTableData[subjectsTableData.length - 1].id
                          ? { ...data, numberOf11: Number(newLabel) }
                          : data
                      )
                    );
                  }}
                  size={InputSize.Micro}
                />
              </td>
              <td className="cell">
                <Input
                  placeholder="0"
                  value={subjectsTableData[subjectsTableData.length - 1].numberOfGroupsIn11.toString()}
                  onValueChange={(newLabel: string) => {
                    setSubjectsTableData(
                      subjectsTableData.map((data: SubjectSyllabusData) =>
                        data.id === subjectsTableData[subjectsTableData.length - 1].id
                          ? { ...data, numberOfGroupsIn11: Number(newLabel) }
                          : data
                      )
                    );
                  }}
                  size={InputSize.Micro}
                />
              </td>
              <td className="cell">
                <CheckBox
                  onChange={(event) => {
                    setSubjectsTableData(
                      subjectsTableData.map((data: SubjectSyllabusData) =>
                        data.id === subjectsTableData[subjectsTableData.length - 1].id
                          ? { ...data, isFinalExam: event }
                          : data
                      )
                    );
                  }}
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

export default SubjectsSyllabusPage;
