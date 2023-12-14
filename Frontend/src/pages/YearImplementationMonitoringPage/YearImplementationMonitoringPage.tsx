import React, { useState, useContext } from "react";
import Select, { ISelectOption } from "../../components/Select/Select";
import { guidGenerator } from "../../utils/guidGenerator";
import Button, { ButtonSize, ButtonType } from "../../components/Button/Button";
import Input, { InputType } from "../../components/Input/Input";
import { useSelector, useDispatch } from "react-redux";
import ModalSettingsContext from "../../utils/ModalSettingsContext";
import { YearImplementationMonitoringPageData, Teacher, Subject, Group } from "./model/types";
import { HeaderData } from "../../layouts/Header/model/types";
import { CTableBuilder } from "../../core/Table/CTableBuilder";
import { CTable } from "../../core/Table/CTable";
import { CTableManager } from "../../core/Table/CTableManager";
import { TableType } from "../../core/Table/TableType";
import { SortingOrder } from "../../core/Table/SortingOrder";

const CONTRACTS_SELECT: ISelectOption[] = [{ content: "Штаб бц", id: guidGenerator() }];

const YearImplementationMonitoringPage = () => {
  const [selectedContract, setSelectedContract] = useState<ISelectOption>(CONTRACTS_SELECT[0]);
  const [searchValue, setSearchValue] = useState<string>("");
  const { dates, teachers } = useSelector(
    (state: { yearImplementationMonitoringPageStore: YearImplementationMonitoringPageData }) =>
      state.yearImplementationMonitoringPageStore
  );
  const [tableData, setTableData] = useState<Teacher[]>(structuredClone(teachers));
  const teachersTableBuilder: CTableBuilder = new CTableBuilder(tableData, setTableData);
  const table: CTable = teachersTableBuilder.getTable();
  const tableManager: CTableManager = new CTableManager(table);

  const { currentYear } = useSelector((state: { headerStore: HeaderData }) => state.headerStore);
  const { openModal } = useContext(ModalSettingsContext);
  const dispatch = useDispatch();

  const handleSelectingContract = (newContractId: string) => {
    const selectedContract: ISelectOption | undefined = CONTRACTS_SELECT.find(
      (contract: ISelectOption) => contract.id === newContractId
    );

    if (selectedContract) {
      setSelectedContract(selectedContract);
    }
  };
  const handleSearching = () => {
    tableManager.invokeFunction("search", TableType.Searchable, [searchValue, teachers]);
  };
  const handleSorting = (columnName: string) => {
    tableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__buttons-wrapper">
          <div className="toolbar__buttons-box">
            <Select
              options={CONTRACTS_SELECT}
              currentValue={selectedContract}
              onValueChange={handleSelectingContract}
            />
          </div>
          <Button label="Скачать в excel" size={ButtonSize.Fixed} type={ButtonType.Secondary} />
        </div>
        <Input
          value={searchValue}
          placeholder="Поиск"
          onValueChange={setSearchValue}
          type={InputType.Search}
          onSearch={handleSearching}
        />
      </div>
      <table className="table -fill -list">
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
            <th className="cell" colSpan={dates.length}>
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
            {dates.map((date: string) => {
              return (
                <th className="cell" key={date}>
                  {date}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((teacher: Teacher) => {
            const teacherRowHeightInPoints: number = teacher.subjects.reduce(
              (acc: number, subject: Subject) => acc + subject.classes.length,
              0
            );
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

            return (
              <tr className="row" key={teacher.name}>
                <td className="cell" rowSpan={teacherRowHeightInPoints}>
                  {teacher.name}
                  <button>Добавить доп. нагрузку</button>
                  <button>Комментарий</button>
                </td>
                <td className="cell" rowSpan={teacherRowHeightInPoints}>
                  {teacher.name}
                </td>
                {teacher.subjects.map((subject: Subject) => {
                  return (
                    <>
                      <td className="cell" rowSpan={subject.classes.length}>
                        {subject.name}
                      </td>
                      {subject.classes.map((group: Group) => {
                        return (
                          <>
                            <td className="cell">{group.name}</td>
                            <td className="cell">{group.hoursPlanned}</td>
                          </>
                        );
                      })}
                    </>
                  );
                })}
                <td className="cell" rowSpan={teacherRowHeightInPoints}>
                  {hoursPlannedForTeacher}
                </td>
                <td className="cell" rowSpan={teacherRowHeightInPoints}>
                  {teacher.hoursPerWeek}
                </td>
                {teacher.subjects.map((subject: Subject) => {
                  return subject.classes.map((group: Group) => {
                    return group.doneHours.map((doneHours: number, index: number) => {
                      return <td key={index}>{doneHours}</td>;
                    });
                  });
                })}
                {teacher.subjects.map((subject: Subject) => {
                  return subject.classes.map((group: Group) => {
                    return (
                      <React.Fragment key={group.name}>
                        <td className="cell">{group.totalDoneHours}</td>
                        <td className="cell">{group.doneDistanceHours}</td>
                        <td className="cell">{group.doneCombinedHours}</td>
                      </React.Fragment>
                    );
                  });
                })}
                <td className="cell" rowSpan={teacherRowHeightInPoints}>
                  {doneHoursForTeacher}
                </td>
                <td className="cell" rowSpan={teacherRowHeightInPoints}>
                  {doneDistanceHoursForTeacher}
                </td>
                <td className="cell" rowSpan={teacherRowHeightInPoints}>
                  {doneCombinedHoursForTeacher}
                </td>
                <td className="cell" rowSpan={teacherRowHeightInPoints}>
                  {remainsHoursForTeacher}
                </td>
                <td className="cell" rowSpan={teacherRowHeightInPoints}>
                  {remainsHoursPercentageForTeacher.toString() + "%"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default YearImplementationMonitoringPage;
