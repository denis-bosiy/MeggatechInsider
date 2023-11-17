import React, {useContext, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TimetableSettingsPageActionBuilder} from "./model/actions";
import {TimetableSettingsPageData, TimetableSettingsPageParadeData, TimetableSettingsPageTimeData, TimeData} from "./model/types";
import "./TimetableSettingsPage.scss";
import Input, {InputSize} from "../../../components/Input/Input";
import ActionButton, {ActionButtonType} from "../../../components/ActionButton/ActionButton";
import {CheckMarkIcon, GarbageIcon, PenIcon, PlusIcon} from "../../../icons";
import IconButton, { IconButtonType } from "../../../components/IconButton/IconButton";
import Select, { ISelectOption, SelectSize } from "../../../components/Select/Select";
import ModalSettingsContext from "../../../utils/ModalSettingsContext";
import { CTableBuilder } from "../../../core/Table/CTableBuilder";
import { CTable } from "../../../core/Table/CTable";
import { CTableManager } from "../../../core/Table/CTableManager";
import { TableType } from "../../../core/Table/TableType";
import { guidGenerator } from "../../../utils/guidGenerator";
import { SortingOrder } from "../../../core/Table/SortingOrder";

const EditedParadeBox = () => {
  const selectOptions: ISelectOption[] = [
    { id: "1", content: "Понедельник" },
    { id: "2", content: "Вторник" },
    { id: "3", content: "Среда" },
    { id: "4", content: "Четверг" },
    { id: "5", content: "Пятница" },
    { id: "6", content: "Суббота" },
  ];
  const setSelectValue = (val: string) => {
    console.log(val);
  };
  const [defaultInputValue, setDefaultInputValue] = useState<string>("");
  return (
    <>
      <div className="timetable-settings-page__box timetable-settings-page__box-button">
        <ActionButton
          label="Сохранить"
          type={ActionButtonType.Positive}
          onClick={() => alert("Cохранить")}
        />
        <ActionButton
          label="Отменить"
          type={ActionButtonType.Negative}
          onClick={() => alert("Отменить")}
        />
      </div>

      <Select
        options={selectOptions}
        onValueChange={setSelectValue}
        size={SelectSize.Default}
      />

      <div className="timetable-settings-page__box timetable-settings-page__box-button">
        <Input
          value={defaultInputValue}
          size={InputSize.Default}
          placeholder="Время"
          onValueChange={setDefaultInputValue}
        />
        <Input
          value={defaultInputValue}
          size={InputSize.Default}
          placeholder="Время"
          onValueChange={setDefaultInputValue}
        />
      </div>
    </>
  );
};

const NotEditedParadeBox = (parade: TimetableSettingsPageParadeData) => {
  return (
    <>
      <ActionButton
        className="toolbar__button"
        label="Редактировать"
        icon={<PenIcon />}
        onClick={() => alert("Редактировать")}
      />
      <div className="timetable-settings-page__box timetable-settings-page__box-p">
        <p className="p">{parade.weekDay}</p>
        <p className="p">{parade.startTime} - {parade.endTime}</p>
      </div>
    </>
  );
};

const TimetableSettingsPage = () => {
  const { pairs, lessons, parade } = useSelector((state: { timetableSettingsPageStore: TimetableSettingsPageData }) => state.timetableSettingsPageStore);
  const { openModal } = useContext(ModalSettingsContext);
  const dispatch = useDispatch();

  const [isPairsAdding, setIsPairsAdding] = useState<{ value: boolean }>({ value: false });
  const [pairsTableData, setPairsTableData] = useState<TimetableSettingsPageTimeData>(structuredClone(pairs));
  const pairsTableBuilder: CTableBuilder = new CTableBuilder(
    pairsTableData,
    setPairsTableData
  );
  pairsTableBuilder.addManageFeature(isPairsAdding, setIsPairsAdding);
  const pairsTable: CTable = pairsTableBuilder.getTable();
  const pairsTableManager: CTableManager = new CTableManager(pairsTable);

  const handleAddingPairs = (): void => {
    pairsTableManager.invokeFunction("add", TableType.Managable, [
      { id: guidGenerator(), label: "", value: "" }
    ]);
  };
  const handleDeleteRowInPairs = (id: string): void => {
    pairsTableManager.invokeFunction("delete", TableType.Managable, [
      id,
      (data: any[]) => dispatch(TimetableSettingsPageActionBuilder.savePairs(data)),
      openModal
    ]);
  };
  const handleApplyingNewPair = (): void => {
    pairsTableManager.invokeFunction("applyAdding", TableType.Managable, [
      (data: any[]) => dispatch(TimetableSettingsPageActionBuilder.savePairs(data))
    ]);
  };
  const handleSortPairs = (columnName: string): void => {
    pairsTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };

  const [isLessonsAdding, setIsLessonsAdding] = useState<{ value: boolean }>({ value: false });
  const [lessonsTableData, setLessonsTableData] = useState<TimetableSettingsPageTimeData>(structuredClone(lessons));
  const lessonsTableBuilder: CTableBuilder = new CTableBuilder(
    lessonsTableData,
    setLessonsTableData
  );
  lessonsTableBuilder.addManageFeature(isLessonsAdding, setIsLessonsAdding);
  const lessonsTable: CTable = lessonsTableBuilder.getTable();
  const lessonsTableManager: CTableManager = new CTableManager(lessonsTable);

  const handleAddingLessons = (): void => {
    lessonsTableManager.invokeFunction("add", TableType.Managable, [
      { id: guidGenerator(), label: "", value: "" }
    ]);
  };
  const handleDeleteRowInLessons = (id: string): void => {
    lessonsTableManager.invokeFunction("delete", TableType.Managable, [
      id,
      (data: any[]) => dispatch(TimetableSettingsPageActionBuilder.saveLessons(data)),
      openModal
    ]);
  };
  const handleApplyingNewLesson = (): void => {
    lessonsTableManager.invokeFunction("applyAdding", TableType.Managable, [
      (data: any[]) => dispatch(TimetableSettingsPageActionBuilder.saveLessons(data))
    ]);
  };

  const handleSortLessons = (columnName: string): void => {
    lessonsTableManager.invokeFunction("sort", TableType.Default, [columnName, SortingOrder.Ascending]);
  };

  const isEditedParade = true;
  const paradeBox: JSX.Element = isEditedParade ? EditedParadeBox() : NotEditedParadeBox(parade);

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
                <th className="cell -filter" onClick={() => handleSortPairs("startTime")}>Начало</th>
                <th className="cell -filter" onClick={() => handleSortPairs("endTime")}>Окончание</th>
                <th className="cell"></th>
              </tr>
            </thead>
            <tbody>
              {pairsTableData.filter((data: TimeData, index: number) =>
                index !== pairsTableData.length).map((lesson: TimeData) => {
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
              {isPairsAdding.value &&
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
              </tr>}
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
                <th className="cell -filter" onClick={() => handleSortLessons("startTime")}>Начало</th>
                <th className="cell -filter" onClick={() => handleSortLessons("endTime")}>Окончание</th>
                <th className="cell"></th>
              </tr>
            </thead>
            <tbody>
              {lessonsTableData.filter((data: TimeData, index: number) =>
                index !== lessonsTableData.length).map((lesson: TimeData) => {
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
              {isLessonsAdding.value &&
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
              </tr>}
            </tbody>
          </table>
        </div>

        <div className="timetable-settings-page__box">
          <h2 className="h2">Проведение линейки</h2>
          {paradeBox}
        </div>
      </div>
    </>

  );

};

export default TimetableSettingsPage;
