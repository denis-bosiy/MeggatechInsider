import React, { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TimetableSettingsPageActionBuilder } from "./model/actions";
import {
  TimetableSettingsPageData,
  TimetableSettingsPageParadeData,
  TimetableSettingsPageTimeData,
  TimeData
} from "./model/types";
import "./TimetableSettingsPage.scss";
import Input, { InputSize } from "../../../components/Input/Input";
import ActionButton, { ActionButtonType } from "../../../components/ActionButton/ActionButton";
import { CheckMarkIcon, GarbageIcon, PenIcon, PlusIcon } from "../../../icons";
import IconButton, { IconButtonType } from "../../../components/IconButton/IconButton";
import Select, { ISelectOption, SelectSize } from "../../../components/Select/Select";
import ModalSettingsContext from "../../../utils/ModalSettingsContext";
import { CTableBuilder } from "../../../core/Table/CTableBuilder";
import { CTable } from "../../../core/Table/CTable";
import { CTableManager } from "../../../core/Table/CTableManager";
import { TableType } from "../../../core/Table/TableType";
import { guidGenerator } from "../../../utils/guidGenerator";
import { SortingOrder } from "../../../core/Table/SortingOrder";
import { HttpService } from "../../../api/http.service";
import { Endpoint } from "../../../api/endpoints";
import { HeaderData } from "../../../layouts/Header/model/types";
import { RequestBuilder } from "../../../api/Requests/RequestBuilder";
import { TimetablePairTimeSettingResponse } from "../../../api/Responses/TimetablePairTimeSettingResponse";
import { ResponseBuilder } from "../../../api/Responses/ResponseBuilder";
import { TimetableLessonTimeSettingResponse } from "../../../api/Responses/TimetableLessonTimeSettingResponse";
import { TimetableParadeTimeSettingResponse } from "../../../api/Responses/TimetableParadeTimeSettingResponse";

const TimetableSettingsPage = () => {
  const httpService = new HttpService();
  const { pairs, lessons, parade } = useSelector(
    (state: { timetableSettingsPageStore: TimetableSettingsPageData }) => state.timetableSettingsPageStore
  );
  const { currentYear } = useSelector((state: { headerStore: HeaderData }) => state.headerStore);
  const { openModal } = useContext(ModalSettingsContext);
  const dispatch = useDispatch();

  const makeGetPairsRequest = (params: Map<string, string>): void => {
    httpService
      .getByArbitraryUrl(Endpoint.Pair, params)
      .then((data: any) => {
        const pairTimesResponse: TimetablePairTimeSettingResponse[] =
          ResponseBuilder.BuildTimetablePairTimeSettingsResponses(data);
        const pairTimes: TimetableSettingsPageTimeData = pairTimesResponse.map(
          (pairTime: TimetablePairTimeSettingResponse) => {
            return { id: pairTime.id, startTime: pairTime.startTime, endTime: pairTime.endTime };
          }
        );
        dispatch(TimetableSettingsPageActionBuilder.savePairs(pairTimes));
        setPairsTableData(structuredClone(pairTimes));
      })
      .catch((e: any) => {
        dispatch(TimetableSettingsPageActionBuilder.savePairs([]));
        setPairsTableData(structuredClone([]));
      });
  };
  const makeGetLessonsRequest = (params: Map<string, string>): void => {
    httpService
      .getByArbitraryUrl(Endpoint.Lesson, params)
      .then((data: any) => {
        const lessonTimesResponse: TimetableLessonTimeSettingResponse[] =
          ResponseBuilder.BuildTimetableLessonTimeSettingsResponses(data);
        const lessonTimes: TimetableSettingsPageTimeData = lessonTimesResponse.map(
          (lessonTime: TimetableLessonTimeSettingResponse) => {
            return { id: lessonTime.id, startTime: lessonTime.startTime, endTime: lessonTime.endTime };
          }
        );
        dispatch(TimetableSettingsPageActionBuilder.saveLessons(lessonTimes));
        setLessonsTableData(structuredClone(lessonTimes));
      })
      .catch((e: any) => {
        dispatch(TimetableSettingsPageActionBuilder.saveLessons([]));
        setLessonsTableData(structuredClone([]));
      });
  };
  const makeGetParadeRequest = (params: Map<string, string>): void => {
    httpService
      .getByArbitraryUrl(Endpoint.Parade, params)
      .then((data: any) => {
        const paradeResponse: TimetableParadeTimeSettingResponse =
          ResponseBuilder.BuildTimetableParadeTimeSettingResponse(data);
        const parade: TimetableSettingsPageParadeData = {
          weekDayCode: paradeResponse.weekDay,
          startTime: paradeResponse.startTime,
          endTime: paradeResponse.endTime
        };
        dispatch(TimetableSettingsPageActionBuilder.saveParade(parade));
        setParadeData(structuredClone(parade));
      })
      .catch((e: any) => {
        dispatch(
          TimetableSettingsPageActionBuilder.saveParade({
            weekDayCode: 0,
            startTime: "08:00",
            endTime: "08:45"
          })
        );
        setParadeData({
          weekDayCode: 0,
          startTime: "08:00",
          endTime: "08:45"
        });
      });
  };

  useEffect(() => {
    const params: Map<string, string> = new Map<string, string>();
    if (currentYear) {
      params.set("year", currentYear.year.toString());
    }

    makeGetPairsRequest(params);
    makeGetLessonsRequest(params);
    makeGetParadeRequest(params);
  }, [currentYear?.id]);

  const [isPairsAdding, setIsPairsAdding] = useState<{ value: boolean }>({ value: false });
  const [pairsTableData, setPairsTableData] = useState<TimetableSettingsPageTimeData>(structuredClone(pairs));
  const pairsTableBuilder: CTableBuilder = new CTableBuilder(pairsTableData, setPairsTableData);
  pairsTableBuilder.addManageFeature(isPairsAdding, setIsPairsAdding);
  const pairsTable: CTable = pairsTableBuilder.getTable();
  const pairsTableManager: CTableManager = new CTableManager(pairsTable);

  useEffect(() => {
    const params: Map<string, string> = new Map<string, string>();
    if (currentYear) {
      params.set("year", currentYear.year.toString());
    }

    makeGetPairsRequest(params);
  }, [pairs.length]);
  useEffect(() => {
    const params: Map<string, string> = new Map<string, string>();
    if (currentYear) {
      params.set("year", currentYear.year.toString());
    }

    makeGetLessonsRequest(params);
  }, [lessons.length]);

  const handleAddingPairs = (): void => {
    pairsTableManager.invokeFunction("add", TableType.Managable, [
      {
        id: guidGenerator(),
        startTime: "",
        endTime: ""
      }
    ]);
  };

  const handleDeleteRowInPairs = (id: string): void => {
    pairsTableManager.invokeFunction("delete", TableType.Managable, [
      id,
      (data: any[]) => dispatch(TimetableSettingsPageActionBuilder.savePairs(data)),
      openModal,
      Endpoint.Pair
    ]);
  };
  const handleApplyingNewPair = (): void => {
    pairsTableManager.invokeFunction("applyAdding", TableType.Managable, [
      (data: any[]) => dispatch(TimetableSettingsPageActionBuilder.savePairs(data)),
      Endpoint.Pair,
      RequestBuilder.BuildTimetablePairTimeSettingRequest,
      currentYear?.year
    ]);
  };
  const handleSortPairs = (columnName: string): void => {
    pairsTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };

  const [isLessonsAdding, setIsLessonsAdding] = useState<{ value: boolean }>({ value: false });
  const [lessonsTableData, setLessonsTableData] = useState<TimetableSettingsPageTimeData>(structuredClone(lessons));
  const lessonsTableBuilder: CTableBuilder = new CTableBuilder(lessonsTableData, setLessonsTableData);
  lessonsTableBuilder.addManageFeature(isLessonsAdding, setIsLessonsAdding);
  const lessonsTable: CTable = lessonsTableBuilder.getTable();
  const lessonsTableManager: CTableManager = new CTableManager(lessonsTable);

  const handleAddingLessons = (): void => {
    lessonsTableManager.invokeFunction("add", TableType.Managable, [
      {
        id: guidGenerator(),
        startTime: "",
        endTime: ""
      }
    ]);
  };
  const handleDeleteRowInLessons = (id: string): void => {
    lessonsTableManager.invokeFunction("delete", TableType.Managable, [
      id,
      (data: any[]) => dispatch(TimetableSettingsPageActionBuilder.saveLessons(data)),
      openModal,
      Endpoint.Lesson
    ]);
  };
  const handleApplyingNewLesson = (): void => {
    lessonsTableManager.invokeFunction("applyAdding", TableType.Managable, [
      (data: any[]) => dispatch(TimetableSettingsPageActionBuilder.saveLessons(data)),
      Endpoint.Lesson,
      RequestBuilder.BuildTimetableLessonTimeSettingRequest,
      currentYear?.year
    ]);
  };

  const handleSortLessons = (columnName: string): void => {
    lessonsTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };

  const [isParadeEditing, setIsParadeEditing] = useState<{ value: boolean }>({ value: false });
  const [paradeData, setParadeData] = useState<TimetableSettingsPageParadeData>(structuredClone(parade));

  const editParade = (): void => {
    setIsParadeEditing({ value: true });
  };
  const resetEditParade = (): void => {
    setParadeData(parade);
    setIsParadeEditing({ value: false });
  };
  const saveParade = (): void => {
    if (currentYear) {
      httpService.putByArbitraryUrl(
        Endpoint.Parade,
        RequestBuilder.BuildTimetableParadeTimeSettingRequest(paradeData, currentYear.year)
      );
    }
    dispatch(TimetableSettingsPageActionBuilder.saveParade(paradeData));
    setIsParadeEditing({ value: false });
  };

  const weekOptions: ISelectOption[] = [
    { id: "0", content: "Понедельник" },
    { id: "1", content: "Вторник" },
    { id: "2", content: "Среда" },
    { id: "3", content: "Четверг" },
    { id: "4", content: "Пятница" },
    { id: "5", content: "Суббота" }
  ];

  return (
    <>
      <div className="timetable-settings-page__container">
        <div className="timetable-settings-page__box timetable-settings-page__box-table">
          <h2 className="h2">Время проведения пар</h2>
          <ActionButton
            label="Добавить пару"
            icon={<PlusIcon />}
            type={ActionButtonType.Warning}
            onClick={handleAddingPairs}
          />
          <table className="table -fill -list">
            <thead className="header">
              <tr className="row">
                <th className="cell -filter" onClick={() => handleSortPairs("startTime")}>
                  Начало
                </th>
                <th className="cell -filter" onClick={() => handleSortPairs("endTime")}>
                  Окончание
                </th>
                <th className="cell"></th>
              </tr>
            </thead>
            <tbody>
              {pairsTableData
                .filter((data: TimeData, index: number) => !isPairsAdding.value || index !== pairsTableData.length - 1)
                .map((lesson: TimeData) => {
                  return (
                    <tr className="row" key={lesson.id}>
                      <td className="cell">{lesson.startTime}</td>
                      <td className="cell">{lesson.endTime}</td>
                      <td className="cell">
                        <IconButton icon={<GarbageIcon />} onClick={() => handleDeleteRowInPairs(lesson.id)} />
                      </td>
                    </tr>
                  );
                })}
              {isPairsAdding.value && (
                <tr className="row">
                  <td className="cell">
                    <Input
                      placeholder="Время"
                      value={pairsTableData[pairsTableData.length - 1].startTime}
                      onValueChange={(newLabel: string) => {
                        setPairsTableData(
                          pairsTableData.map((data: TimeData) =>
                            data.id === pairsTableData[pairsTableData.length - 1].id
                              ? { ...data, startTime: newLabel }
                              : data
                          )
                        );
                      }}
                      size={InputSize.Micro}
                    />
                  </td>
                  <td className="cell">
                    <Input
                      placeholder="Время"
                      value={pairsTableData[pairsTableData.length - 1].endTime}
                      onValueChange={(newLabel: string) => {
                        setPairsTableData(
                          pairsTableData.map((data: TimeData) =>
                            data.id === pairsTableData[pairsTableData.length - 1].id
                              ? { ...data, endTime: newLabel }
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
                      onClick={handleApplyingNewPair}
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="timetable-settings-page__box timetable-settings-page__box-table">
          <h2 className="h2">Время проведения уроков</h2>
          <ActionButton
            label="Добавить урок"
            icon={<PlusIcon />}
            type={ActionButtonType.Warning}
            onClick={handleAddingLessons}
          />
          <table className="table -fill -list">
            <thead className="header">
              <tr className="row">
                <th className="cell -filter" onClick={() => handleSortLessons("startTime")}>
                  Начало
                </th>
                <th className="cell -filter" onClick={() => handleSortLessons("endTime")}>
                  Окончание
                </th>
                <th className="cell"></th>
              </tr>
            </thead>
            <tbody>
              {lessonsTableData
                .filter(
                  (data: TimeData, index: number) => !isLessonsAdding.value || index !== lessonsTableData.length - 1
                )
                .map((lesson: TimeData) => {
                  return (
                    <tr className="row" key={lesson.id}>
                      <td className="cell">{lesson.startTime}</td>
                      <td className="cell">{lesson.endTime}</td>
                      <td className="cell">
                        <IconButton icon={<GarbageIcon />} onClick={() => handleDeleteRowInLessons(lesson.id)} />
                      </td>
                    </tr>
                  );
                })}
              {isLessonsAdding.value && (
                <tr className="row">
                  <td className="cell">
                    <Input
                      placeholder="Время"
                      value={lessonsTableData[lessonsTableData.length - 1].startTime}
                      onValueChange={(newLabel: string) => {
                        setLessonsTableData(
                          lessonsTableData.map((data: TimeData) =>
                            data.id === lessonsTableData[lessonsTableData.length - 1].id
                              ? { ...data, startTime: newLabel }
                              : data
                          )
                        );
                      }}
                      size={InputSize.Micro}
                    />
                  </td>
                  <td className="cell">
                    <Input
                      placeholder="Время"
                      value={lessonsTableData[lessonsTableData.length - 1].endTime}
                      onValueChange={(newLabel: string) => {
                        setLessonsTableData(
                          lessonsTableData.map((data: TimeData) =>
                            data.id === lessonsTableData[lessonsTableData.length - 1].id
                              ? { ...data, endTime: newLabel }
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
                      onClick={handleApplyingNewLesson}
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="timetable-settings-page__box">
          <h2 className="h2">Проведение линейки</h2>
          {isParadeEditing.value && (
            <>
              <div className="timetable-settings-page__box timetable-settings-page__box-button">
                <ActionButton label="Сохранить" type={ActionButtonType.Positive} onClick={saveParade} />
                <ActionButton label="Отменить" type={ActionButtonType.Negative} onClick={resetEditParade} />
              </div>
              <Select
                currentValue={weekOptions.find((e) => e.id === paradeData.weekDayCode.toString())}
                options={weekOptions}
                onValueChange={(newValue: string) => {
                  const selectedOption = weekOptions.find((e) => e.id === newValue);
                  if (selectedOption) {
                    setParadeData({ ...paradeData, weekDayCode: parseFloat(selectedOption.id) });
                  }
                }}
                size={SelectSize.Default}
              />

              <div className="timetable-settings-page__box timetable-settings-page__box-button">
                <Input
                  placeholder="Время"
                  value={paradeData.startTime}
                  onValueChange={(newValue: string) => setParadeData({ ...paradeData, startTime: newValue })}
                  size={InputSize.Default}
                />
                <Input
                  placeholder="Время"
                  value={paradeData.endTime}
                  onValueChange={(newValue: string) => setParadeData({ ...paradeData, endTime: newValue })}
                  size={InputSize.Default}
                />
              </div>
            </>
          )}
          {!isParadeEditing.value && (
            <>
              <ActionButton className="toolbar__button" label="Редактировать" icon={<PenIcon />} onClick={editParade} />
              <div className="timetable-settings-page__box timetable-settings-page__box-p">
                <p className="p">{weekOptions.find((e) => e.id === paradeData.weekDayCode?.toString())?.content}</p>
                <p className="p">
                  {paradeData.startTime} - {paradeData.endTime}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TimetableSettingsPage;
