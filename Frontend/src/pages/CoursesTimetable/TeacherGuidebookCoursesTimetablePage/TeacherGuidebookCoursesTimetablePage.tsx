import {TeacherGuidebookCoursesTimetablePageData} from "./model/types";
import {classNames} from "../../../utils/classNames";
import ActionButton, {ActionButtonType} from "../../../components/ActionButton/ActionButton";
import {PenIcon} from "../../../icons/index";
import React, {useState} from "react";
import Input, {InputType} from "../../../components/Input/Input";
import {useTableData} from "./useTableData";

interface TableProps {
  data: TeacherGuidebookCoursesTimetablePageData,
  handleSort: (columnName: string) => void,
}

const Table = ({
  data,
  handleSort,
}: TableProps) => {
  const rows = data.map((item) => (
    <tr className="row" key={item.id}>
      <td className="cell">
        {item.course}
      </td>
      <td className="cell">{item.type}</td>
      <td className="cell">{item.teacherName}</td>
      <td className="cell">
        {item.availableHours.map((time) => (
          <p key={time.id}>{time.weekDay} {time.startTime} - {time.endTime}</p>))}
      </td>
      <td className={classNames("cell" + (item.distributedHoursToPlan < item.hoursToPlan ? " -error" : "")
              + (item.distributedHoursToPlan > item.hoursToPlan ? " -warning" : ""))}>
        {item.distributedHoursToPlan}
      </td>
      <td className="cell">{item.hoursToPlan}</td>
      <td className="cell">{item.creditHours}</td>
    </tr>
  ));

  return <>
    <thead className="header">
      <tr className="row">
        <th
          className="cell -filter"
          onClick={() => handleSort("course")}
        >
          Курс
        </th>
        <th
          className="cell -filter"
          onClick={() => handleSort("type")}
        >
          Тип
        </th>
        <th
          className="cell -filter"
          onClick={() => handleSort("teacherName")}
        >
          Преподаватель
        </th>
        <th
          className="cell -filter"
          onClick={() => handleSort("availableHours")}
        >
          Доступные часы
        </th>
        <th
          className="cell -filter"
          onClick={() => handleSort("distributedHoursToPlan")}
        >
          Кол-во распределенных часов в неделю по плану
        </th>
        <th
          className="cell -filter"
          onClick={() => handleSort("hoursToPlan")}
        >
          Кол-во часов в неделю по плану
        </th>
        <th
          className="cell -filter"
          onClick={() => handleSort("creditHours")}
        >
          Кол-во часов долга
        </th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </>;
};

const TeacherGuidebookTimetableButton = (isEdited: boolean, changeIsEdited: () => void) => {
  if (!isEdited) {
    return (
      <ActionButton
        className="toolbar__button"
        label="Редактировать"
        icon={<PenIcon/>}
        onClick={changeIsEdited}
      />
    );
  }
  return (
    <div className="toolbar__buttons-box">
      <ActionButton
        className="toolbar__button"
        type={ActionButtonType.Positive}
        label="Сохранить"
        onClick={() => {
          alert("Сохранить");
          changeIsEdited();
        }}
      />
      <ActionButton
        className="toolbar__button"
        type={ActionButtonType.Negative}
        label="Отменить"
        onClick={() => {
          alert("Отменить");
          changeIsEdited();
        }}
      />
    </div>
  );
};

const TeacherGuidebookCoursesTimetablePage = () => {
  const [searchValue, setSearchValue] = useState("");

  const {
    state,
    actions,
  } = useTableData();

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__buttons-wrapper">
          {TeacherGuidebookTimetableButton(state.isEdited, () => actions.setIsEdited(!state.isEdited))}
          <Input
            className="toolbar__search"
            value={searchValue}
            type={InputType.Search}
            placeholder="Поиск"
            onValueChange={setSearchValue}
            onSearch={() => actions.handleSearch(searchValue)}
          />
        </div>
      </div>
      <table className="table">
        <Table
          data={state.data}
          handleSort={actions.handleSort}
        />
      </table>
    </>
  );
};

export default TeacherGuidebookCoursesTimetablePage;
