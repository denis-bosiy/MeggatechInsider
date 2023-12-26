import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SyllabusPageData, SyllabusData, PlanData } from "./model/types";
import { ActionBuilder } from "./model/actions";
import Input, { InputSize, InputType } from "../../../components/Input/Input";
import ActionButton, { ActionButtonType } from "../../../components/ActionButton/ActionButton";
import { GarbageIcon, PenIcon } from "../../../icons";
import IconButton from "../../../components/IconButton/IconButton";
import { CTableBuilder } from "../../../core/Table/CTableBuilder";
import { CTable } from "../../../core/Table/CTable";
import { CTableManager } from "../../../core/Table/CTableManager";
import { TableType } from "../../../core/Table/TableType";
import { SortingOrder } from "../../../core/Table/SortingOrder";

const getGroupedData = (data: SyllabusData) => {
  let hoursOf1Quarter = data[0].hoursOf1Quarter;
  let hoursOf2Quarter = data[0].hoursOf2Quarter;
  let hoursOf3Quarter = data[0].hoursOf3Quarter;
  let hoursOf4Quarter = data[0].hoursOf4Quarter;
  for (let i = 1; i < data.length; ++i) {
    hoursOf1Quarter = hoursOf1Quarter.map((j, k) => j + data[i].hoursOf1Quarter[k]);
    hoursOf2Quarter = hoursOf2Quarter.map((j, k) => j + data[i].hoursOf2Quarter[k]);
    hoursOf3Quarter = hoursOf3Quarter.map((j, k) => j + data[i].hoursOf3Quarter[k]);
    hoursOf4Quarter = hoursOf4Quarter.map((j, k) => j + data[i].hoursOf4Quarter[k]);
  }
  return {
    hoursOf1Quarter,
    hoursOf2Quarter,
    hoursOf3Quarter,
    hoursOf4Quarter
  };
};

const getDataForHalfYear = (firstQuarter: number[], secondQuarter: number[]) => {
  const sumOfFirstQuarter = firstQuarter.reduce((x, y) => {
    return x + y;
  }, 0);
  const sumOfSecondQuarter = secondQuarter.reduce((x, y) => {
    return x + y;
  }, 0);
  return sumOfFirstQuarter + sumOfSecondQuarter;
};

type GroupedDataProps = {
  title?: string;
  data: SyllabusData;
};

const GroupedData = ({ title = "Итого", data }: GroupedDataProps) => {
  const groupedData = getGroupedData(data);

  return (
    <tr className="row">
      <td className="cell" colSpan={9}>
        {title}
      </td>
      {groupedData.hoursOf1Quarter.map((item, index) => (
        <td key={index} className="cell">
          {item}
        </td>
      ))}
      {groupedData.hoursOf2Quarter.map((item, index) => (
        <td key={index} className="cell">
          {item}
        </td>
      ))}
      {groupedData.hoursOf3Quarter.map((item, index) => (
        <td key={index} className="cell">
          {item}
        </td>
      ))}
      {groupedData.hoursOf4Quarter.map((item, index) => (
        <td key={index} className="cell">
          {item}
        </td>
      ))}
      <td className="cell">{getDataForHalfYear(groupedData.hoursOf1Quarter, groupedData.hoursOf2Quarter)}</td>
      <td className="cell">{getDataForHalfYear(groupedData.hoursOf3Quarter, groupedData.hoursOf4Quarter)}</td>
    </tr>
  );
};

const SyllabusPage = () => {
  const dispatch = useDispatch();
  const syllabus = useSelector((state: { syllabusPageStore: SyllabusPageData }) => state.syllabusPageStore);
  const plan = syllabus.plan;
  const [isSyllabusEditing, setIsSyllabusEditing] = useState<{ value: boolean }>({ value: false });
  const [syllabusTableData, setSyllabusTableData] = useState<SyllabusData>(structuredClone(plan));
  const [syllabusSearchQuery, setSyllabusSearchQuery] = useState<string>("");
  const syllabusTableBuilder: CTableBuilder = new CTableBuilder(syllabusTableData, setSyllabusTableData);
  syllabusTableBuilder.addEditFeature(isSyllabusEditing, setIsSyllabusEditing);
  syllabusTableBuilder.addSearchFeature();
  const syllabusTable: CTable = syllabusTableBuilder.getTable();
  const syllabusTableManager: CTableManager = new CTableManager(syllabusTable);

  const handleSaveSyllabus = () => {
    syllabusTableManager.invokeFunction("apply", TableType.Editable, [
      (data: any[]) => dispatch(ActionBuilder.saveSyllabus(data))
    ]);
  };
  const handleResetSyllabus = () => {
    syllabusTableManager.invokeFunction("cancel", TableType.Editable, [plan]);
  };
  const editSyllabus = (): void => {
    syllabusTableManager.invokeFunction("edit", TableType.Editable, []);
  };
  const handleSubjectSearch = (): void => {
    syllabusTableManager.invokeFunction("search", TableType.Searchable, [syllabusSearchQuery, plan]);
  };
  const handleSort = (columnName: string): void => {
    syllabusTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__buttons-wrapper">
          {isSyllabusEditing.value ? (
            <div className="toolbar__buttons-box">
              <ActionButton
                className="toolbar__button"
                label="Сохранить"
                type={ActionButtonType.Positive}
                onClick={handleSaveSyllabus}
              />
              <ActionButton
                className="toolbar__button"
                label="Отменить"
                type={ActionButtonType.Negative}
                onClick={handleResetSyllabus}
              />
            </div>
          ) : (
            <ActionButton
              className="toolbar__button"
              label="Редактировать"
              icon={<PenIcon width={18} height={18} />}
              type={ActionButtonType.Default}
              onClick={editSyllabus}
            />
          )}
        </div>
        <Input
          className="toolbar__search"
          placeholder="Поиск"
          value={syllabusSearchQuery}
          onValueChange={setSyllabusSearchQuery}
          size={InputSize.Default}
          type={InputType.Search}
          onSearch={handleSubjectSearch}
        />
      </div>
      <table className="table">
        <thead className="header">
          <tr className="row">
            <th className="cell" colSpan={9}></th>
            <th
              className="cell"
              colSpan={
                isSyllabusEditing.value ? syllabus.numberOfWeeksIn1Quarter + 1 : syllabus.numberOfWeeksIn1Quarter
              }
            >
              1 четверть
            </th>
            <th
              className="cell"
              colSpan={
                isSyllabusEditing.value ? syllabus.numberOfWeeksIn2Quarter + 1 : syllabus.numberOfWeeksIn2Quarter
              }
            >
              2 четверть
            </th>
            <th
              className="cell"
              colSpan={
                isSyllabusEditing.value ? syllabus.numberOfWeeksIn3Quarter + 1 : syllabus.numberOfWeeksIn3Quarter
              }
            >
              3 четверть
            </th>
            <th
              className="cell"
              colSpan={
                isSyllabusEditing.value ? syllabus.numberOfWeeksIn4Quarter + 1 : syllabus.numberOfWeeksIn4Quarter
              }
            >
              4 четверть
            </th>
            <th className="cell" colSpan={isSyllabusEditing.value ? 3 : 2}></th>
          </tr>
          <tr className="row">
            <th className="cell -filter" onClick={() => handleSort("name")}>
              Предмет
            </th>
            <th className="cell -filter" onClick={() => handleSort("financing")}>
              Б/Бв
            </th>
            <th className="cell -filter" onClick={() => handleSort("type")}>
              Тип
            </th>
            <th className="cell -filter -vertical" onClick={() => handleSort("numberOfGroups")}>
              Ч. групп
            </th>
            <th className="cell -filter -vertical" onClick={() => handleSort("averagePerYear")}>
              Ср. в год
            </th>
            <th className="cell -filter -vertical" onClick={() => handleSort("averageForPeriod")}>
              Ср. в период
            </th>
            <th className="cell -filter -vertical" onClick={() => handleSort("hoursTotal")}>
              Ч. всего
            </th>
            <th className="cell -filter -vertical" onClick={() => handleSort("hoursExpected")}>
              Ч. ожидается
            </th>
            <th className="cell -filter -vertical" onClick={() => handleSort("hoursToPlan")}>
              Ч. по плану
            </th>
            {[...new Array(syllabus.numberOfWeeksIn1Quarter)].map((_, index) => (
              <th key={index} className="cell -vertical">
                №{index + 1} {syllabus.startOf1Quarter}
              </th>
            ))}
            {isSyllabusEditing.value && <th className="cell"></th>}
            {[...new Array(syllabus.numberOfWeeksIn2Quarter)].map((_, index) => (
              <th key={index} className="cell -vertical">
                №{syllabus.numberOfWeeksIn1Quarter + index + 1} {syllabus.startOf2Quarter}
              </th>
            ))}
            {isSyllabusEditing.value && <th className="cell"></th>}
            {[...new Array(syllabus.numberOfWeeksIn3Quarter)].map((_, index) => (
              <th key={index} className="cell -vertical">
                №{syllabus.numberOfWeeksIn1Quarter + syllabus.numberOfWeeksIn2Quarter + index + 1}{" "}
                {syllabus.startOf3Quarter}
              </th>
            ))}
            {isSyllabusEditing.value && <th className="cell"></th>}
            {[...new Array(syllabus.numberOfWeeksIn4Quarter)].map((_, index) => (
              <th key={index} className="cell -vertical">
                №
                {syllabus.numberOfWeeksIn1Quarter +
                  syllabus.numberOfWeeksIn2Quarter +
                  syllabus.numberOfWeeksIn3Quarter +
                  index +
                  1}{" "}
                {syllabus.startOf4Quarter}
              </th>
            ))}
            {isSyllabusEditing.value && <th className="cell"></th>}
            <th className="cell -filter">Ч. 1 пг.</th>
            <th className="cell -filter">Ч. 2 пг.</th>
            {isSyllabusEditing.value && (
              <th className="cell -vertical">
                Продолжить
                <br />
                по первым
                <br />2 неделям
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {syllabusTableData.map((value: PlanData) => {
            return (
              <tr className="row" key={value.id}>
                <td className="cell">{value.name}</td>
                <td className="cell">{value.financing}</td>
                <td className="cell">{value.type}</td>
                <td className="cell">{value.numberOfGroups}</td>
                <td className="cell">{value.averagePerYear}</td>
                <td className="cell">{value.averageForPeriod}</td>
                <td className="cell">{value.hoursTotal}</td>
                <td className="cell">{value.hoursExpected}</td>
                <td className="cell">0</td>
                {value.hoursOf1Quarter.map((item, index) => (
                  <td key={index} className="cell">
                    {isSyllabusEditing.value ? (
                      <Input
                        placeholder=""
                        value={item.toString()}
                        onValueChange={(newValue: string) => {
                          const hoursOf1Quarter = value.hoursOf1Quarter;
                          hoursOf1Quarter[index] = Number(newValue);
                          setSyllabusTableData(
                            syllabusTableData.map((data: PlanData) =>
                              data.id === value.id ? { ...data, hoursOf1Quarter } : data
                            )
                          );
                        }}
                        size={InputSize.Micro}
                      />
                    ) : (
                      item
                    )}
                  </td>
                ))}
                {isSyllabusEditing.value && (
                  <td className="cell" title="Очистить четверть">
                    <IconButton
                      icon={<GarbageIcon />}
                      small={true}
                      onClick={() => {
                        const hoursOf1Quarter = new Array(value.hoursOf1Quarter.length).fill(0);
                        setSyllabusTableData(
                          syllabusTableData.map((data: PlanData) =>
                            data.id === value.id ? { ...data, hoursOf1Quarter } : data
                          )
                        );
                      }}
                    />
                  </td>
                )}
                {value.hoursOf2Quarter.map((item, index) => (
                  <td key={index} className="cell">
                    {isSyllabusEditing.value ? (
                      <Input
                        placeholder=""
                        value={item.toString()}
                        onValueChange={(newValue: string) => {
                          const hoursOf2Quarter = value.hoursOf2Quarter;
                          hoursOf2Quarter[index] = Number(newValue);
                          setSyllabusTableData(
                            syllabusTableData.map((data: PlanData) =>
                              data.id === value.id ? { ...data, hoursOf2Quarter } : data
                            )
                          );
                        }}
                        size={InputSize.Micro}
                      />
                    ) : (
                      item
                    )}
                  </td>
                ))}
                {isSyllabusEditing.value && (
                  <td className="cell" title="Очистить четверть">
                    <IconButton
                      icon={<GarbageIcon />}
                      small={true}
                      onClick={() => {
                        const hoursOf2Quarter = new Array(value.hoursOf2Quarter.length).fill(0);
                        setSyllabusTableData(
                          syllabusTableData.map((data: PlanData) =>
                            data.id === value.id ? { ...data, hoursOf2Quarter } : data
                          )
                        );
                      }}
                    />
                  </td>
                )}
                {value.hoursOf3Quarter.map((item, index) => (
                  <td key={index} className="cell">
                    {isSyllabusEditing.value ? (
                      <Input
                        placeholder=""
                        value={item.toString()}
                        onValueChange={(newValue: string) => {
                          const hoursOf3Quarter = value.hoursOf3Quarter;
                          hoursOf3Quarter[index] = Number(newValue);
                          setSyllabusTableData(
                            syllabusTableData.map((data: PlanData) =>
                              data.id === value.id ? { ...data, hoursOf3Quarter } : data
                            )
                          );
                        }}
                        size={InputSize.Micro}
                      />
                    ) : (
                      item
                    )}
                  </td>
                ))}
                {isSyllabusEditing.value && (
                  <td className="cell" title="Очистить четверть">
                    <IconButton
                      icon={<GarbageIcon />}
                      small={true}
                      onClick={() => {
                        const hoursOf3Quarter = new Array(value.hoursOf3Quarter.length).fill(0);
                        setSyllabusTableData(
                          syllabusTableData.map((data: PlanData) =>
                            data.id === value.id ? { ...data, hoursOf3Quarter } : data
                          )
                        );
                      }}
                    />
                  </td>
                )}
                {value.hoursOf4Quarter.map((item, index) => (
                  <td key={index} className="cell">
                    {isSyllabusEditing.value ? (
                      <Input
                        placeholder=""
                        value={item.toString()}
                        onValueChange={(newValue: string) => {
                          const hoursOf4Quarter = value.hoursOf4Quarter;
                          hoursOf4Quarter[index] = Number(newValue);
                          setSyllabusTableData(
                            syllabusTableData.map((data: PlanData) =>
                              data.id === value.id ? { ...data, hoursOf4Quarter } : data
                            )
                          );
                        }}
                        size={InputSize.Micro}
                      />
                    ) : (
                      item
                    )}
                  </td>
                ))}
                {isSyllabusEditing.value && (
                  <td className="cell" title="Очистить четверть">
                    <IconButton
                      icon={<GarbageIcon />}
                      small={true}
                      onClick={() => {
                        const hoursOf4Quarter = new Array(value.hoursOf4Quarter.length).fill(0);
                        setSyllabusTableData(
                          syllabusTableData.map((data: PlanData) =>
                            data.id === value.id ? { ...data, hoursOf4Quarter } : data
                          )
                        );
                      }}
                    />
                  </td>
                )}
                <td className="cell">{getDataForHalfYear(value.hoursOf1Quarter, value.hoursOf2Quarter)}</td>
                <td className="cell">{getDataForHalfYear(value.hoursOf3Quarter, value.hoursOf4Quarter)}</td>
                {isSyllabusEditing.value && (
                  <td className="cell">
                    <button
                      onClick={() => {
                        const hoursOf1Quarter = [...Array(value.hoursOf1Quarter.length)].map((_, index) => {
                          if (index % 2 === 0) return value.hoursOf1Quarter[0];
                          return value.hoursOf1Quarter[1];
                        });
                        const hoursOf2Quarter = [...Array(value.hoursOf2Quarter.length)].map((_, index) => {
                          if (index % 2 === 0) return value.hoursOf2Quarter[0];
                          return value.hoursOf2Quarter[1];
                        });
                        const hoursOf3Quarter = [...Array(value.hoursOf3Quarter.length)].map((_, index) => {
                          if (index % 2 === 0) return value.hoursOf3Quarter[0];
                          return value.hoursOf3Quarter[1];
                        });
                        const hoursOf4Quarter = [...Array(value.hoursOf4Quarter.length)].map((_, index) => {
                          if (index % 2 === 0) return value.hoursOf4Quarter[0];
                          return value.hoursOf4Quarter[1];
                        });
                        setSyllabusTableData(
                          syllabusTableData.map((data: PlanData) =>
                            data.id === value.id
                              ? { ...data, hoursOf1Quarter, hoursOf2Quarter, hoursOf3Quarter, hoursOf4Quarter }
                              : data
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

          {!isSyllabusEditing.value &&
            syllabus.types.map((type: string, index: number) => {
              const data = syllabusTableData.filter((data: PlanData) => data.type === type);
              return <>{data.length > 0 && <GroupedData key={index} title={type} data={data} />}</>;
            })}

          {!isSyllabusEditing.value && syllabusTableData.length > 0 && <GroupedData data={syllabusTableData} />}
        </tbody>
      </table>
    </>
  );
};

export default SyllabusPage;
