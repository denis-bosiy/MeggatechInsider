import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select, { MultiValue } from  "react-select";
import {
  Guidebook,
  TeacherGuidebookTimetableData,
  TeacherGuidebookTimetablePageData,
  AvailableHour
} from "./model/types";
import Input, { InputSize, InputType } from "../../../components/Input/Input";
import ActionButton, { ActionButtonType } from "../../../components/ActionButton/ActionButton";
import { PenIcon } from "../../../icons";
import { classNames } from "../../../utils/classNames";
import { CTableBuilder } from "../../../core/Table/CTableBuilder";
import { CTable } from "../../../core/Table/CTable";
import { CTableManager } from "../../../core/Table/CTableManager";
import { TableType } from "../../../core/Table/TableType";
import { TeacherGuidebookTimetableActionBuilder } from "./model/actions";
import { SortingOrder } from "../../../core/Table/SortingOrder";
import { HeaderData } from "../../../layouts/Header/model/types";
import { HttpService } from "../../../api/http.service";
import { Endpoint } from "../../../api/endpoints";
import { TimetableTeacherResponse } from "../../../api/Responses/TimetableTeacherResponse";
import { ResponseBuilder } from "../../../api/Responses/ResponseBuilder";
import { getWorkdayByCode } from "../../../utils/getWorkdayByCode";
import { shortenWorkday } from "../../../utils/workdayShortener";

const TeacherGuidebookTimetablePage = () => {
  const httpService: HttpService = new HttpService();

  const { guidebook, totalAvailableHours } = useSelector(
    (state: { teacherGuidebookTimetablePageStore: TeacherGuidebookTimetablePageData }) =>
      state.teacherGuidebookTimetablePageStore
  );
  const { currentYear, currentWeek } = useSelector((state: { headerStore: HeaderData }) => state.headerStore);
  const dispatch = useDispatch();

  const [isGuidebookEditing, setIGuidebookEditing] = useState<{ value: boolean }>({ value: false });
  const [guidebookTableData, setGuidebookTableData] = useState<Guidebook>(structuredClone(guidebook));
  const [guidebookSearchQuery, setGuidebookSearchQuery] = useState<string>("");
  const guidebookTableBuilder: CTableBuilder = new CTableBuilder(guidebookTableData, setGuidebookTableData);
  guidebookTableBuilder.addEditFeature(isGuidebookEditing, setIGuidebookEditing);
  guidebookTableBuilder.addSearchFeature();
  const guidebookTable: CTable = guidebookTableBuilder.getTable();
  const guidebookTableManager: CTableManager = new CTableManager(guidebookTable);

  useEffect(() => {
    const params: Map<string, string> = new Map<string, string>();
    if (currentYear && currentWeek) {
      params.set("year", currentYear.year.toString());
      params.set("week", currentWeek.week.toString());
    }

    // httpService.getByArbitraryUrl(Endpoint.TimetableAvailableHours, params).then((data: any) => {

    // });
    httpService
      .getByArbitraryUrl(Endpoint.TimetableTeachers, params)
      .then((data: any) => {
        const teachersResponse: TimetableTeacherResponse[] = ResponseBuilder.BuildTimetableTeacherResponses(data);
        const teachers: Guidebook = teachersResponse.map((teacher: TimetableTeacherResponse) => {
          return {
            id: teacher.id.toString(),
            subjectName: teacher.subjectName,
            subjectId: teacher.subjectId.toString(),
            teacherName: teacher.teacherName,
            teacherId: teacher.teacherId.toString(),
            availableHours: teacher.availableHours.map((availableHour) => {
              return {
                id: availableHour.id.toString(),
                startTime: availableHour.startTime,
                endTime: availableHour.endTime,
                weekDayCode: availableHour.weekDay
              };
            }),
            distributedHoursToPlan: teacher.distributedHoursToPlan,
            hoursToPlan: teacher.hoursToPlan,
            creditHours: teacher.creditHours,
            workedOverPlan: teacher.workedOverPlan
          };
        });
        dispatch(TeacherGuidebookTimetableActionBuilder.setTeachers(teachers));
        setGuidebookTableData(structuredClone(teachers));
      })
      .catch((e: any) => {
        dispatch(TeacherGuidebookTimetableActionBuilder.setTeachers([]));
        setGuidebookTableData(structuredClone([]));
      });
  }, []);

  const handleSaveGuidebookTable = () => {
    guidebookTableManager.invokeFunction("apply", TableType.Editable, [
      (data: any[]) => dispatch(TeacherGuidebookTimetableActionBuilder.setTeachers(data))
    ]);
  };
  const handleResetGuidebookTable = () => {
    guidebookTableManager.invokeFunction("cancel", TableType.Editable, [guidebook]);
  };
  const editGuidebookTable = (): void => {
    guidebookTableManager.invokeFunction("edit", TableType.Editable, []);
  };
  const handleGuidebookSearch = (): void => {
    guidebookTableManager.invokeFunction("search", TableType.Searchable, [guidebookSearchQuery, guidebook]);
  };
  const handleSort = (columnName: string): void => {
    guidebookTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };
  const handlePickingAvailableHour = (teacherId: string, availableHourId: string): void => {
    setGuidebookTableData(
      guidebookTableData.map((teacher: TeacherGuidebookTimetableData) => {
        if (teacher.id === teacherId) {
          // const foundAvailablePickedHour: AvailableHour | undefined = teacher.availableHours.find(
          //   (availableHour: AvailableHour) => availableHour.id === availableHourId
          // );

          // if (foundAvailablePickedHour) {
          //   return {
          //     ...teacher,
          //     availableHours: [...teacher.pickedHours, foundAvailablePickedHour]
          //   };
          // }
        }
        return teacher;
      })
    );
  };

  const getHoursOptions = (availableHours: AvailableHour[]): MultiValue<any> => {
    return availableHours.map((availableHour: AvailableHour) => {
      return {
        value: availableHour.id,
        label:
          shortenWorkday(getWorkdayByCode(availableHour.weekDayCode)) +
          " " +
          availableHour.startTime +
          "-" +
          availableHour.endTime
      };
    });
  };

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__buttons-wrapper">
          {isGuidebookEditing.value ? (
            <div className="toolbar__buttons-box">
              <ActionButton
                className="toolbar__button"
                type={ActionButtonType.Positive}
                label="Сохранить"
                onClick={handleSaveGuidebookTable}
              />
              <ActionButton
                className="toolbar__button"
                type={ActionButtonType.Negative}
                label="Отменить"
                onClick={handleResetGuidebookTable}
              />
            </div>
          ) : (
            <ActionButton
              className="toolbar__button"
              label="Редактировать"
              icon={<PenIcon />}
              onClick={editGuidebookTable}
            />
          )}

          <Input
            className="toolbar__search"
            value={guidebookSearchQuery}
            type={InputType.Search}
            placeholder="Поиск"
            onValueChange={setGuidebookSearchQuery}
            size={InputSize.Default}
            onSearch={handleGuidebookSearch}
          />
        </div>
      </div>
      <table className="table -fill -list">
        <thead className="header">
          <tr className="row">
            <th className="cell -filter" onClick={() => handleSort("subjectName")}>
              Предмет
            </th>
            <th className="cell -filter" onClick={() => handleSort("teacherName")}>
              Преподаватель
            </th>
            <th className="cell">
              Доступные
              <br />
              часы
            </th>
            <th className="cell -filter" onClick={() => handleSort("distributedHoursToPlan")}>
              Кол-во распределенных
              <br />
              часов в неделю по плану
            </th>
            <th className="cell -filter" onClick={() => handleSort("hoursToPlan")}>
              Кол-во часов
              <br />в неделю по плану
            </th>
            <th className="cell -filter" onClick={() => handleSort("creditHours")}>
              Кол-во часов
              <br />
              долга
            </th>
            <th className="cell -filter" onClick={() => handleSort("workedOverPlan")}>
              Кол-во часов
              <br />
              переработка
            </th>
          </tr>
        </thead>
        <tbody>
          {guidebookTableData.filter((data: TeacherGuidebookTimetableData, index: number) =>
            index !== guidebookTableData.length).map((teacher: TeacherGuidebookTimetableData) => {
            return (
              <tr className="row" key={teacher.id}>
                <td className="cell">{teacher.subjectName}</td>
                <td className="cell">{teacher.teacherName}</td>
                <td className="cell">
                  {isGuidebookEditing.value ? (
                    <Select
                      defaultValue={teacher.availableHours.map((time) => (hoursOptions.find(e => e.value === time.id)))}
                      options={hoursOptions}
                      isMulti
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={(newValue: MultiValue<any>) => { 
                        if (newValue) {
                          setGuidebookTableData(
                            guidebookTableData.map((data: TeacherGuidebookTimetableData) =>
                              (data.id === teacher.id
                                ? { ...data,
                                  availableHours: newValue.map((time) => ({
                                    id: time.value,
                                    weekDay: time.label.substring(0, 2),
                                    startTime: time.label.substring(3, 7),
                                    endTime: time.label.substring(8),
                                  }))
                                }
                                : data))
                          );
                        }
                      }}
                    />
                  ) : (
                    teacher.availableHours.map((time) => (<p key={time.id}>{time.weekDay}  {time.startTime} - {time.endTime}</p>))
                  )}
                </td>
                <td className={classNames("cell" + (teacher.distributedHoursToPlan < teacher.hoursToPlan ? " -error" : "")
                    + (teacher.distributedHoursToPlan > teacher.hoursToPlan ? " -warning" : ""))}>
                  {teacher.distributedHoursToPlan}
                </td>
                <td className="cell">{teacher.hoursToPlan}</td>
                <td className="cell">{teacher.creditHours}</td>
                <td className="cell">{teacher.workedOverPlan}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TeacherGuidebookTimetablePage;
