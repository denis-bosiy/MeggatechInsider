import {TeacherGuidebookCoursesTimetablePageData} from "../model/types";
import {classNames} from "../../../../utils/classNames";
import React from "react";
import Select, {SelectSize} from "../../../../components/Select/Select";

interface TeacherGuidebookTimetableTableProps {
  data: TeacherGuidebookCoursesTimetablePageData,
  isEdited: boolean,
  handleSort: (columnName: string) => void,
  setSelectedTime: (courseId: number, timeId: number) => void,
}

const TeacherGuidebookTimetableTable = ({
  data,
  isEdited,
  handleSort,
  setSelectedTime,
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
          ? <Select
            options={item.availableTime.map(time => ({
              id: `${time.id}`,
              content: `${time.weekDay} ${time.startTime} - ${time.endTime}`
            }))}
            onValueChange={(id) => setSelectedTime(item.id, parseInt(id, 10))}
            size={SelectSize.Micro}
          />
          : <>
            {item.availableTime
              .filter(time => item.selectedTime.includes(time.id))
              .map((time) => (
                <p key={time.id}>{time.weekDay} {time.startTime} - {time.endTime}</p>
              ))}
          </>}
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

export default TeacherGuidebookTimetableTable;
