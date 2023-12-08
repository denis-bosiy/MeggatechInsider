import {
  AvailableTime,
  TeacherGuidebookCoursesTimetableData,
} from "../model/types";
import {classNames} from "../../../../utils/classNames";
import React from "react";
import Multiselect from "../../../../components/Multiselect/Multiselect";
import {shortenWorkday} from "../../../../utils/workdayShortener";
import {getWorkdayByCode} from "../../../../utils/getWorkdayByCode";

function getSelectLabel(time: AvailableTime) {
  return `${shortenWorkday(getWorkdayByCode(time.weekDayCode))} ${time.startTime} - ${time.endTime}`;
}

function getSelectItem(time: AvailableTime) {
  return {
    value: time.id,
    label: getSelectLabel(time),
  };
}

interface TeacherGuidebookTimetableTableProps {
  availableTimes: AvailableTime[],
  data: TeacherGuidebookCoursesTimetableData[],
  isEdited: boolean,
  handleSort: (columnName: string) => void,
  setAvailableTimes: (courseId: string, availableTimes: string[]) => void,
}

const TeacherGuidebookCoursesTimetableTable = ({
  availableTimes,
  data,
  isEdited,
  handleSort,
  setAvailableTimes,
}: TeacherGuidebookTimetableTableProps) => {
  const rows = data.map((item) => (
    <tr className="row" key={item.id}>
      <td className="cell">
        {item.course}
      </td>
      <td className="cell">{item.type}</td>
      <td className="cell">{item.teacherName}</td>
      <td className="cell">
        {isEdited
          ? <Multiselect
            defaultValue={availableTimes
              .filter(time => item.availableTimes.includes(time.id))
              .map(getSelectItem)
            }
            options={availableTimes.map(getSelectItem)}
            onValueChange={(ids) => setAvailableTimes(item.id, ids.map(id => id.value))}
          />
          : <>
            {availableTimes
              .filter(time => item.availableTimes.includes(time.id))
              .map((time) => (
                <p key={time.id}>{getSelectLabel(time)}</p>
              ))}
          </>}
      </td>
      <td className={classNames(
        "cell" +
        (item.distributedHoursToPlan < item.hoursToPlan ? " -error" : "") +
        (item.distributedHoursToPlan > item.hoursToPlan ? " -warning" : "")
      )}>
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

export default TeacherGuidebookCoursesTimetableTable;
