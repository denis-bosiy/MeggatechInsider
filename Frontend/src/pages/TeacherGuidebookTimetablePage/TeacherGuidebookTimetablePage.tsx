import React, {useState} from "react";
import {useSelector} from "react-redux";
import {TeacherGuidebookTimetablePageData} from "./model/types";
import "./TeacherGuidebookTimetablePage.scss";
import Input, {InputType} from "../../components/Input/Input";
import ActionButton from "../../components/ActionButton/ActionButton";
import {PenIcon} from "../../icons";

const TeacherGuidebookTimetablePage = () => {
  const guidebook = useSelector((state: {teacherGuidebookTimetablePageStore: TeacherGuidebookTimetablePageData}) => state.teacherGuidebookTimetablePageStore);

  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__buttons-wrapper">
          <ActionButton
            className="toolbar__button"
            label="Редактировать"
            icon={<PenIcon />}
            onClick={() => alert("Редактировать")}
          />
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
          {guidebook.map((teacher) => (
            <tr className="row" key={teacher.teacherId}>
              <td className="cell">{teacher.subjectName}</td>
              <td className="cell">{teacher.teacherName}</td>
              <td className="cell">{teacher.availableHours.map((time) => (<p key={0}>{time.weekDay}  {time.dayTime}</p>))}</td>
              <td className="cell">{teacher.distributedHoursToPlan}</td>
              <td className="cell">{teacher.hoursToPlan}</td>
              <td className="cell">{teacher.creditHours}</td>
              <td className="cell">{teacher.workedOverPlan}</td>              
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TeacherGuidebookTimetablePage;
