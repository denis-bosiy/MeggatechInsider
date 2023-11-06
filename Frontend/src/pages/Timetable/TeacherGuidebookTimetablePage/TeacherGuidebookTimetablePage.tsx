import React, {useState} from "react";
import {useSelector} from "react-redux";
import {TeacherGuidebookTimetablePageData} from "./model/types";
import "./TeacherGuidebookTimetablePage.scss";
import Input, {InputType} from "../../../components/Input/Input";
import ActionButton, { ActionButtonType } from "../../../components/ActionButton/ActionButton";
import {PenIcon} from "../../../icons";
import { classNames } from "../../../utils/classNames";

const Guidebook = () => {
  const guidebook = useSelector((state: { teacherGuidebookTimetablePageStore: TeacherGuidebookTimetablePageData }) => state.teacherGuidebookTimetablePageStore);

  return (
    guidebook.map((teacher) => (
      <tr className="row" key={teacher.id}>
        <td className="cell">{teacher.subjectName}</td>
        <td className="cell">{teacher.teacherName}</td>
        <td className="cell">
          {teacher.availableHours.map((time) => (<p key={time.id}>{time.weekDay}  {time.startTime} - {time.endTime}</p>))}
        </td>
        <td className={classNames("cell" + (teacher.distributedHoursToPlan < teacher.hoursToPlan ? " -error" : "")
        + (teacher.distributedHoursToPlan > teacher.hoursToPlan ? " -warning" : ""))}>
          {teacher.distributedHoursToPlan}
        </td>
        <td className="cell">{teacher.hoursToPlan}</td>
        <td className="cell">{teacher.creditHours}</td>
        <td className="cell">{teacher.workedOverPlan}</td>
      </tr>
    ))
  );
};

const TeacherGuidebookTimetableButton = (isEdited: boolean) => {
  if (!isEdited) {
    return (
      <ActionButton
        className="toolbar__button"
        label="Редактировать"
        icon={<PenIcon />}
        onClick={() => alert("Редактировать")}
      />
    );
  }
  return (
    <div className="toolbar__buttons-box">
      <ActionButton
        className="toolbar__button"
        type={ActionButtonType.Positive}
        label="Сохранить"
        onClick={() => alert("Сохранить")}
      />
      <ActionButton
        className="toolbar__button"
        type={ActionButtonType.Negative}
        label="Отменить"
        onClick={() => alert("Отменить")}
      />
    </div>
  );
};

const TeacherGuidebookTimetablePage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const isEdited = false;

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__buttons-wrapper">
          {TeacherGuidebookTimetableButton(isEdited)}
          <Input
            className="toolbar__search"
            value={searchValue}
            type={InputType.Search}
            placeholder="Поиск"
            onValueChange={setSearchValue}
          />
        </div>
      </div>
      <table className="table">
        <thead className="header">
          <tr className="row">
            <th className="cell">Предмет</th>
            <th className="cell">Преподаватель</th>
            <th className="cell">Доступные<br />часы</th>
            <th className="cell">Кол-во распределенных<br />часов в неделю по плану</th>
            <th className="cell">Кол-во часов<br />в неделю по плану</th>
            <th className="cell">Кол-во часов<br />долга</th>
            <th className="cell">Кол-во часов<br />переработка</th>
          </tr>
        </thead>
        <tbody>
          {Guidebook()}
        </tbody>
      </table>
    </>
  );
};

export default TeacherGuidebookTimetablePage;
