import React, { useContext, useState } from "react";
import Select, { ISelectOption } from "../../components/Select/Select";
import { guidGenerator } from "../../utils/guidGenerator";
import Button, { ButtonSize, ButtonType } from "../../components/Button/Button";
import Input, { InputSize, InputType } from "../../components/Input/Input";
import { useSelector, useDispatch } from "react-redux";
import { YearImplementationMonitoringPageData, Teacher, Subject, Group, AdditionalLoad } from "./model/types";
import { CTableBuilder } from "../../core/Table/CTableBuilder";
import { CTable } from "../../core/Table/CTable";
import { CTableManager } from "../../core/Table/CTableManager";
import { TableType } from "../../core/Table/TableType";
import { SortingOrder } from "../../core/Table/SortingOrder";
import ActionButton from "../../components/ActionButton/ActionButton";
import { ActionButtonSize } from "../../components/ActionButton/ActionButton";
import { ActionButtonType } from "../../components/ActionButton/ActionButton";
import { CheckIcon, GarbageIcon, PenIcon, PlusIcon } from "../../icons";
import { useNavigate } from "react-router";
import { classNames } from "../../utils/classNames";
import IconButton from "../../components/IconButton/IconButton";
import { ActionBuilder } from "./model/actions";
import { getInitAdditionalLoadData } from "./model/reducer";
import ModalSettingsContext from "../../utils/ModalSettingsContext";
import AgreementModalView from "../../components/AgreementModalView/AgreementModalView";
import CommentsModalView from "../../components/CommentsModalView/CommentsModalView";

const CONTRACTS_SELECT: ISelectOption[] = [{ content: "Штаб бц", id: guidGenerator() }];

// TODO: Это полный пиздос. Нужно отрефакторить всю страницу на новогодних
const YearImplementationMonitoringPage = () => {
  const { openModal } = useContext(ModalSettingsContext);
  const navigate = useNavigate();
  const [selectedContract, setSelectedContract] = useState<ISelectOption>(CONTRACTS_SELECT[0]);
  const [searchValue, setSearchValue] = useState<string>("");
  const { months, teachers } = useSelector(
    (state: { yearImplementationMonitoringPageStore: YearImplementationMonitoringPageData }) =>
      state.yearImplementationMonitoringPageStore
  );
  const [tableData, setTableData] = useState<Teacher[]>(structuredClone(teachers));
  const tableBuilder: CTableBuilder = new CTableBuilder(tableData, setTableData);
  tableBuilder.addSearchFeature();
  const table: CTable = tableBuilder.getTable();
  const tableManager: CTableManager = new CTableManager(table);

  const dispatch = useDispatch();

  const handleSelectingContract = (newContractId: string) => {
    const selectedContract: ISelectOption | undefined = CONTRACTS_SELECT.find(
      (contract: ISelectOption) => contract.id === newContractId
    );

    if (selectedContract) {
      setSelectedContract(selectedContract);
    }
  };
  const handleSearching = (): void => {
    tableManager.invokeFunction("search", TableType.Searchable, [searchValue, teachers]);
  };
  const handleSorting = (columnName: string): void => {
    tableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };
  const handleMonthClicking = (monthNumber: string): void => {
    navigate("/curriculum/report?month=" + monthNumber);
  };
  const handleAdditionalLoadAdding = (teacherId: string): void => {
    setTableData(
      tableData.map((teacher: Teacher) => {
        if (teacher.id === teacherId) {
          return {
            ...teacher,
            additionalLoads: [...teacher.additionalLoads, getInitAdditionalLoadData(months.length)]
          };
        } else {
          return teacher;
        }
      })
    );
  };
  const handleAdditionalLoadSaving = (additionalLoad: AdditionalLoad, teacherId: string): void => {
    additionalLoad.isEditing = false;
    dispatch(ActionBuilder.addAdditionalLoad({ additionalLoad, teacherId }));
  };
  const handleAdditionaLoadNameEditing = (newName: string, additionalLoadId: string): void => {
    setTableData(
      tableData.map((teacher: Teacher) => {
        return {
          ...teacher,
          additionalLoads: teacher.additionalLoads.map((additionalLoad: AdditionalLoad) => {
            if (additionalLoad.id === additionalLoadId) {
              return {
                ...additionalLoad,
                name: newName
              };
            }
            return additionalLoad;
          })
        };
      })
    );
  };
  const handleAdditionaLoadHoursEditing = (newHours: number, newHoursIndex: number, additionalLoadId: string): void => {
    setTableData(
      tableData.map((teacher: Teacher) => {
        return {
          ...teacher,
          additionalLoads: teacher.additionalLoads.map((additionalLoad: AdditionalLoad) => {
            return {
              ...additionalLoad,
              doneHours: additionalLoad.doneHours.map((hours: number, hoursIndex: number) => {
                if (additionalLoad.id === additionalLoadId && hoursIndex === newHoursIndex) {
                  return newHours;
                }

                return hours;
              })
            };
          })
        };
      })
    );
  };
  const handleAdditionalLoadEditingStarting = (teacherId: string, additionalLoadId: string): void => {
    setTableData(
      tableData.map((teacher: Teacher) => {
        if (teacher.id === teacherId) {
          return {
            ...teacher,
            additionalLoads: teacher.additionalLoads.map((additionalLoad: AdditionalLoad) => {
              if (additionalLoad.id === additionalLoadId) {
                return {
                  ...additionalLoad,
                  isEditing: true
                };
              }

              return additionalLoad;
            })
          };
        }

        return teacher;
      })
    );
  };
  const handleAdditionalLoadDeleting = (teacherId: string, additionalLoadId: string): void => {
    const deleteAction = (): void => {
      setTableData(
        tableData.map((teacher: Teacher) => {
          if (teacherId === teacher.id) {
            return {
              ...teacher,
              additionalLoads: teacher.additionalLoads.filter(
                (additionaLoad: AdditionalLoad) => additionaLoad.id !== additionalLoadId
              )
            };
          }

          return teacher;
        })
      );

      dispatch(ActionBuilder.deleteAdditionalLoad({ additionalLoadId, teacherId }));
    };

    openModal("Удалить", <AgreementModalView proceedAction={deleteAction} />);
  };
  const handleAddingCommenting = (): void => {
    openModal("Комментарии", <CommentsModalView getUrl="" putUrl="" deleteUrl="" />);
  };

  return (
    <>
      <div className="toolbar -fill">
        <div className="toolbar__buttons-wrapper">
          <div className="toolbar__select">
            <Select
              options={CONTRACTS_SELECT}
              currentValue={selectedContract}
              onValueChange={handleSelectingContract}
            />
          </div>
          <Button label="Скачать в excel" size={ButtonSize.Fixed} type={ButtonType.Secondary} />
        </div>

        <div className="toolbar__search">
          <Input
            value={searchValue}
            placeholder="Поиск"
            onValueChange={setSearchValue}
            type={InputType.Search}
            onSearch={handleSearching}
          />
        </div>
      </div>
      <table className="table -fill">
        <thead className="header">
          <tr className="row">
            <th className="cell -filter" rowSpan={2} onClick={() => handleSorting("name")}>
              Преподаватель
            </th>
            <th className="cell -filter" rowSpan={2} onClick={() => handleSorting("type")}>
              Тип преподавателя
            </th>
            <th className="cell" rowSpan={2}>
              Предмет
            </th>
            <th className="cell" rowSpan={2}>
              Класс
            </th>
            <th className="cell" colSpan={3}>
              План часов в год
            </th>
            <th className="cell" colSpan={months.length}>
              Выполнено
            </th>
            <th className="cell" rowSpan={2}>
              Выполнено нагрузки
            </th>
            <th className="cell" rowSpan={2}>
              Из них дистанц.
            </th>
            <th className="cell" rowSpan={2}>
              Из них совмещ.
            </th>
            <th className="cell" rowSpan={2}>
              Сумма
            </th>
            <th className="cell" rowSpan={2}>
              Из суммы дистанц.
            </th>
            <th className="cell" rowSpan={2}>
              Из суммы совмещ.
            </th>
            <th className="cell" rowSpan={2}>
              Остаток
            </th>
            <th className="cell" rowSpan={2}>
              % невыполнения
            </th>
          </tr>
          <tr className="row">
            <th className="cell">по классам/группам</th>
            <th className="cell">план сумма</th>
            <th className="cell">часов в неделю</th>
            {months.map((month: string) => {
              return (
                <th className="cell -link" key={month} onClick={() => handleMonthClicking(month.split("/")[0])}>
                  {month}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((teacher: Teacher) => {
            const teacherRowSubjectsHeightInPoints: number = teacher.subjects.reduce(
              (acc: number, subject: Subject) => acc + subject.classes.length,
              0
            );
            const teacherRowHeightInPoints: number = teacherRowSubjectsHeightInPoints + teacher.additionalLoads.length;
            const hoursPlannedForTeacher: number = teacher.subjects.reduce(
              (hoursPlannedForTeacher: number, subject: Subject) => {
                return (
                  hoursPlannedForTeacher +
                  subject.classes.reduce((hoursPlannedForSubject: number, group: Group) => {
                    return hoursPlannedForSubject + group.hoursPlanned;
                  }, 0)
                );
              },
              0
            );
            const doneHoursForTeacher: number = teacher.subjects.reduce(
              (doneHoursForTeacher: number, subject: Subject) => {
                return (
                  doneHoursForTeacher +
                  subject.classes.reduce((doneHoursForSubject: number, group: Group) => {
                    return doneHoursForSubject + group.totalDoneHours;
                  }, 0)
                );
              },
              0
            );
            const doneDistanceHoursForTeacher: number = teacher.subjects.reduce(
              (doneDistanceHoursForTeacher: number, subject: Subject) => {
                return (
                  doneDistanceHoursForTeacher +
                  subject.classes.reduce((doneDistanceHoursForSubject: number, group: Group) => {
                    return doneDistanceHoursForSubject + group.doneDistanceHours;
                  }, 0)
                );
              },
              0
            );
            const doneCombinedHoursForTeacher: number = teacher.subjects.reduce(
              (doneCombinedHoursForTeacher: number, subject: Subject) => {
                return (
                  doneCombinedHoursForTeacher +
                  subject.classes.reduce((doneCombinedHoursForSubject: number, group: Group) => {
                    return doneCombinedHoursForSubject + group.doneCombinedHours;
                  }, 0)
                );
              },
              0
            );
            const remainsHoursForTeacher: number = hoursPlannedForTeacher - doneHoursForTeacher;
            let remainsHoursPercentageForTeacher = 0;
            if (hoursPlannedForTeacher !== 0) {
              remainsHoursPercentageForTeacher = (remainsHoursForTeacher / hoursPlannedForTeacher) * 100;
            }

            interface IRow {
              subjectName: string;
              subjectIndex: number;
              groupName: string;
              groupIndex: number;
              groupsCount: number;
              groupHoursPlanned: number;
              doneHours: number[];
              totalDoneHours: number;
              totalRemoteHours: number;
              totalCombinedHours: number;
              remainsHours: number;
            }
            const rows: IRow[] = teacher.subjects
              .map((subject: Subject, subjectIndex: number) =>
                subject.classes.map((group: Group, groupIndex: number) => {
                  return {
                    subjectName: subject.name,
                    subjectIndex: subjectIndex,
                    groupName: group.name,
                    groupIndex: groupIndex,
                    groupsCount: subject.classes.length,
                    groupHoursPlanned: group.hoursPlanned,
                    doneHours: group.doneHours,
                    totalDoneHours: group.totalDoneHours,
                    totalRemoteHours: group.doneDistanceHours,
                    totalCombinedHours: group.doneCombinedHours,
                    remainsHours: group.hoursPlanned - group.totalDoneHours
                  } as IRow;
                })
              )
              .flat()
              .filter((row: IRow) => row.subjectIndex !== 0 || row.groupIndex !== 0);

            return (
              <React.Fragment key={teacher.id}>
                <tr className="row">
                  <td className="cell" rowSpan={teacherRowHeightInPoints}>
                    {teacher.name}
                    <div className="cell__buttons">
                      <ActionButton
                        label="Добавить доп. нагрузку"
                        size={ActionButtonSize.Small}
                        type={ActionButtonType.Warning}
                        icon={<PlusIcon />}
                        onClick={() => handleAdditionalLoadAdding(teacher.id)}
                      ></ActionButton>
                      <ActionButton
                        label="Комментарий"
                        size={ActionButtonSize.Small}
                        onClick={() => handleAddingCommenting()}
                      ></ActionButton>
                    </div>
                  </td>
                  <td className="cell" rowSpan={teacherRowHeightInPoints}>
                    {teacher.type}
                  </td>
                  <td className="cell" rowSpan={teacher.subjects[0].classes.length}>
                    {teacher.subjects[0].name}
                  </td>
                  <td className="cell">{teacher.subjects[0].classes[0].name}</td>
                  <td className="cell">{teacher.subjects[0].classes[0].hoursPlanned}</td>
                  <td className="cell" rowSpan={teacherRowSubjectsHeightInPoints}>
                    {hoursPlannedForTeacher}
                  </td>
                  <td className="cell" rowSpan={teacherRowSubjectsHeightInPoints}>
                    {teacher.hoursPerWeek}
                  </td>
                  {teacher.subjects[0].classes[0].doneHours.map((doneHours: number, index: number) => {
                    return (
                      <td key={index} className="cell">
                        {doneHours}
                      </td>
                    );
                  })}
                  <td className="cell">{teacher.subjects[0].classes[0].totalDoneHours}</td>
                  <td className="cell">{teacher.subjects[0].classes[0].doneDistanceHours}</td>
                  <td className="cell">{teacher.subjects[0].classes[0].doneCombinedHours}</td>
                  <td className="cell" rowSpan={teacherRowSubjectsHeightInPoints}>
                    {doneHoursForTeacher}
                  </td>
                  <td className="cell" rowSpan={teacherRowSubjectsHeightInPoints}>
                    {doneDistanceHoursForTeacher}
                  </td>
                  <td className="cell" rowSpan={teacherRowSubjectsHeightInPoints}>
                    {doneCombinedHoursForTeacher}
                  </td>
                  <td className="cell">
                    {teacher.subjects[0].classes[0].hoursPlanned - teacher.subjects[0].classes[0].totalDoneHours}
                  </td>
                  <td className="cell" rowSpan={teacherRowSubjectsHeightInPoints}>
                    {remainsHoursPercentageForTeacher.toString() + "%"}
                  </td>
                </tr>

                {rows.map((row: IRow) => (
                  <tr className="row" key={row.subjectName + "-" + row.groupName}>
                    {row.groupIndex === 0 && (
                      <td className="cell" rowSpan={row.groupsCount}>
                        {row.subjectName}
                      </td>
                    )}
                    <td className="cell">{row.groupName}</td>
                    <td className="cell">{row.groupHoursPlanned}</td>
                    {row.doneHours.map((hours: number, hoursIndex: number) => (
                      <td className="cell" key={hoursIndex}>
                        {hours}
                      </td>
                    ))}
                    <td className="cell">{row.totalDoneHours}</td>
                    <td className="cell">{row.totalRemoteHours}</td>
                    <td className="cell">{row.totalCombinedHours}</td>
                    <td className="cell">{row.remainsHours}</td>
                  </tr>
                ))}

                {teacher.additionalLoads.map((additionalLoad: AdditionalLoad) => (
                  <tr className="row" key={additionalLoad.id}>
                    <td
                      className={classNames("cell", additionalLoad.isEditing ? "-with-button" : "-controllable")}
                      colSpan={5}
                    >
                      {additionalLoad.isEditing ? (
                        <Input
                          value={additionalLoad.name}
                          placeholder="Дополнительная нагрузка"
                          onValueChange={(newValue: string) =>
                            handleAdditionaLoadNameEditing(newValue, additionalLoad.id)
                          }
                          size={InputSize.Micro}
                        />
                      ) : (
                        additionalLoad.name
                      )}
                      {additionalLoad.isEditing ? (
                        <IconButton
                          icon={<CheckIcon />}
                          small={true}
                          onClick={() => handleAdditionalLoadSaving(additionalLoad, teacher.id)}
                        />
                      ) : (
                        <div className="cell__controls">
                          <IconButton
                            icon={<GarbageIcon />}
                            small={true}
                            onClick={() => handleAdditionalLoadDeleting(teacher.id, additionalLoad.id)}
                          />
                          <IconButton
                            icon={<PenIcon />}
                            small={true}
                            onClick={() => handleAdditionalLoadEditingStarting(teacher.id, additionalLoad.id)}
                          />
                        </div>
                      )}
                    </td>
                    {additionalLoad.doneHours.map((hours: number, index: number) => (
                      <td className="cell" key={index}>
                        {additionalLoad.isEditing ? (
                          <Input
                            value={hours ? hours.toString() : "0"}
                            placeholder="Дополнительная нагрузка"
                            onValueChange={(newHours: string) =>
                              handleAdditionaLoadHoursEditing(parseFloat(newHours), index, additionalLoad.id)
                            }
                            size={InputSize.Micro}
                          />
                        ) : (
                          hours
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default YearImplementationMonitoringPage;
