import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ActionBuilder} from "./model/actions";
import {TimetableSettingsPageData} from "./model/types";
import "./TimetableSettingsPage.scss";
import Input, {InputSize} from "../../components/Input/Input";
import ActionButton, {ActionButtonType} from "../../components/ActionButton/ActionButton";
import {CheckMarkIcon, GarbageIcon, PenIcon, PlusIcon} from "../../icons";
import IconButton, { IconButtonType } from "../../components/IconButton/IconButton";
import Select, { ISelectOption, SelectSize } from "../../components/Select/Select";

const TimetableSettingsPage = () => {

  const data = useSelector((state: {timetableSettingsPageStore: TimetableSettingsPageData}) => state.timetableSettingsPageStore);
  const dispatch = useDispatch();

  const pairs = data.pairs;
  const lessons = data.lessons;
  const parade = data.parade;

  const isAddition = true;
  const isAdditionParade = false;

  const [defaultInputValue, setDefaultInputValue] = useState<string>("");

  const selectOptions: ISelectOption[] = [
    { id: "1", content: "Понедельник" },
    { id: "2", content: "Вторник" },
    { id: "3", content: "Среда" },
  ];
  const setSelectValue = (val: string) => {
    console.log(val);
  };

  return (
    <>
      <div className="timetable-settings-page__container">
        <div className="timetable-settings-page__box timetable-settings-page__box-table">
          <h2 className="h2">Время проведения пар</h2>
          <ActionButton
            label="Добавить"
            type={ActionButtonType.Warning}
            icon={<PlusIcon />}
            onClick={() => alert("Добавить")}
          />
          <table className="table">
            <thead className="header">
              <tr className="row">
                <th className="cell">Начало</th>
                <th className="cell">Окончание</th>
                <th className="cell"></th>
              </tr>
            </thead>
            <tbody>
              {pairs.map((pair) => (
                <tr className="row" key={pair.id}>
                  <td className="cell">{pair.start_time}</td>
                  <td className="cell">{pair.end_time}</td>
                  <td className="cell">
                    <IconButton icon={<GarbageIcon />} onClick={() => dispatch(ActionBuilder.deletePair(pair.id))} />
                  </td>
                </tr>
              ))}

              {isAddition &&
              <tr className="row">
                <td className="cell">
                  <Input
                    value={defaultInputValue}
                    size={InputSize.Micro}
                    placeholder="Время"
                    onValueChange={setDefaultInputValue}
                  />
                </td>
                <td className="cell">
                  <Input
                    value={defaultInputValue}
                    size={InputSize.Micro}
                    placeholder="Время"
                    onValueChange={setDefaultInputValue}
                  />
                </td>
                <td className="cell">
                  <IconButton
                    icon={<CheckMarkIcon />}
                    type={IconButtonType.Secondary}
                    onClick={() => alert("Добавить")}
                  />
                </td>

              </tr>}

            </tbody>
          </table>
        </div>

        <div className="timetable-settings-page__box timetable-settings-page__box-table">
          <h2 className="h2">Время проведения пар</h2>
          <ActionButton
            label="Добавить"
            type={ActionButtonType.Warning}
            icon={<PlusIcon />}
            onClick={() => alert("Добавить")}
          />
          <table className="table">
            <thead className="header">
              <tr className="row">
                <th className="cell">Начало</th>
                <th className="cell">Окончание</th>
                <th className="cell"></th>
              </tr>
            </thead>
            <tbody>
              {lessons.map((lesson) => (
                <tr className="row" key={lesson.id}>
                  <td className="cell">{lesson.start_time}</td>
                  <td className="cell">{lesson.end_time}</td>
                  <td className="cell">
                    <IconButton icon={<GarbageIcon />} onClick={() => dispatch(ActionBuilder.deleteLesson(lesson.id))} />
                  </td>
                </tr>
              ))}

              {isAddition &&

              <tr className="row">
                <td className="cell">
                  <Input
                    value={defaultInputValue}
                    size={InputSize.Micro}
                    placeholder="Время"
                    onValueChange={setDefaultInputValue}
                  />
                </td>
                <td className="cell">
                  <Input
                    value={defaultInputValue}
                    size={InputSize.Micro}
                    placeholder="Время"
                    onValueChange={setDefaultInputValue}
                  />
                </td>
                <td className="cell">
                  <IconButton
                    icon={<CheckMarkIcon />}
                    type={IconButtonType.Secondary}
                    onClick={() => alert("Добавить")}
                  />
                </td>

              </tr>}

            </tbody>
          </table>
        </div>
        {!isAdditionParade &&
        <div className="timetable-settings-page__box">
          <h2 className="h2">Проведение линейки</h2>
          <ActionButton
            className="toolbar__button"
            label="Редактировать"
            icon={<PenIcon />}
            onClick={() => alert("Редактировать")}
          />
          <div className="timetable-settings-page__box timetable-settings-page__box-p">
            <p className="p">{parade.week_day}</p>
            <p className="p">{parade.start_time} - {parade.end_time}</p>
          </div>
        </div>}
        {isAdditionParade &&
        <div className="timetable-settings-page__box">
          <h2 className="h2">Проведение линейки</h2>
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
        </div>}
      </div>
    </>

  );

};

export default TimetableSettingsPage;
