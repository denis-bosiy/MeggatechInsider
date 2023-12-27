import React, { useLayoutEffect } from "react";
import "./Schedule.scss";
import { ISchedule } from "../../core/Schedule/ISchedule";
import { Workday } from "../../core/Schedule/Workday";
import { LessonTime } from "../../core/Schedule/LessonTime";
import { shortenWorkday } from "../../utils/workdayShortener";
import { ScheduleLesson } from "../../core/Schedule/ScheduleLesson";
import { CoordinateManager } from "../../utils/CoordinateManager";
import { classNames } from "../../utils/classNames";
import { LessonType } from "../../core/Schedule/LessonType";
import { ScheduleManager } from "../../core/Schedule/ScheduleManager";
import { SchedulePosition } from "../../core/Schedule/SchedulePosition";
import IconButton from "../IconButton/IconButton";
import { GarbageIcon, PenIcon } from "../../icons";
import { ScheduleNotifier } from "../../core/Schedule/ScheduleNotifier";
import { ScheduleEvent } from "../../core/Schedule/ScheduleEvent";

interface IScheduleProps {
  schedule: ISchedule;
  handleDeleteLesson: (lessonId: string) => void;
  showHeader?: boolean,
}

export const ScheduleComponent = (props: IScheduleProps) => {
  const groupsElements: JSX.Element[] = props.schedule.getGroups().map((groupName: string) => {
    return (
      <td
        className="cell schedule__heading"
        key={groupName}
        colSpan={props.schedule.getSubgroups().get(groupName)?.length}
      >
        {groupName}
      </td>
    );
  });
  const subgroupsElements: JSX.Element[] = [];
  props.schedule.getSubgroups().forEach((subgroups: string[]) => {
    subgroups.forEach((subgroupName: string) =>
      subgroupsElements.push(
        <td className="cell" key={subgroupName}>
          {subgroupName}
        </td>
      )
    );
  });

  const dataElements: (JSX.Element[] | undefined)[] = props.schedule.getWorkdays().map((workday: Workday) => {
    const workdayElement: JSX.Element = (
      <td
        className="cell -vertical -from-top schedule__heading"
        rowSpan={props.schedule.getLessonTimes().get(workday)?.length}
      >
        {shortenWorkday(workday)}
      </td>
    );

    const handleEditingLesson = (lesson?: ScheduleLesson) => {
      ScheduleNotifier.getInstance().notify(ScheduleEvent.StartedLessonEditing, {
        lesson: lesson,
        schedule: props.schedule
      });
    };

    return props.schedule
      .getLessonTimes()
      .get(workday)
      ?.map((lessonTime: LessonTime, lessonTimeIndex: number) => {
        return (
          <tr
            className="row"
            key={
              workday +
              " " +
              lessonTime.startTime.hours +
              "." +
              lessonTime.startTime.minutes +
              "-" +
              lessonTime.endTime.hours +
              "." +
              lessonTime.endTime.minutes
            }
          >
            {lessonTimeIndex === 0 && workdayElement}
            <td className="cell">
              {lessonTime.startTime.hours < 10 ? "0" + lessonTime.startTime.hours : lessonTime.startTime.hours}.
              {lessonTime.startTime.minutes < 10 ? "0" + lessonTime.startTime.minutes : lessonTime.startTime.minutes}-
              <br />
              {lessonTime.endTime.hours < 10 ? "0" + lessonTime.endTime.hours : lessonTime.endTime.hours}.
              {lessonTime.endTime.minutes < 10 ? "0" + lessonTime.endTime.minutes : lessonTime.endTime.minutes}
            </td>
            {props.schedule.getGroups().map((group: string, groupIndex: number) => {
              return props.schedule
                .getSubgroups()
                .get(group)
                ?.map((subgroup: string, subgroupIndex: number) => {
                  const cellCoordinate: string =
                    CoordinateManager.GetEnglishLetterFromIndex(groupIndex) +
                    " " +
                    subgroupIndex +
                    " " +
                    CoordinateManager.GetEnglishLetterFromWorkday(workday) +
                    " " +
                    lessonTimeIndex;
                  const lessonIndex: number = props.schedule
                    .getLessons()
                    .findIndex(
                      (lesson: ScheduleLesson) =>
                        lesson.startPosition.horizontalGeneralPosition ===
                          CoordinateManager.GetEnglishLetterFromIndex(groupIndex) &&
                        lesson.startPosition.horizontalSpecificPosition === subgroupIndex &&
                        lesson.startPosition.verticalGeneralPosition ===
                          CoordinateManager.GetEnglishLetterFromWorkday(workday) &&
                        lesson.startPosition.verticalSpecificPosition === lessonTimeIndex
                    );
                  const isPartOfTheLesson =
                    props.schedule
                      .getLessons()
                      .findIndex((lesson: ScheduleLesson) =>
                        ScheduleManager.IsPartOfTheLesson(
                          lesson,
                          new SchedulePosition(
                            CoordinateManager.GetEnglishLetterFromIndex(groupIndex),
                            subgroupIndex,
                            CoordinateManager.GetEnglishLetterFromWorkday(workday),
                            lessonTimeIndex
                          )
                        )
                      ) !== -1;
                  if (lessonIndex !== -1) {
                    const lesson: ScheduleLesson = props.schedule.getLessons()[lessonIndex];
                    const data: string =
                      lesson.lessonName + (lesson.lessonTeacher ? "( " + lesson.lessonTeacher + " )" : "");
                    const colspan: number =
                      lesson.endPosition.horizontalSpecificPosition -
                      lesson.startPosition.horizontalSpecificPosition +
                      1;
                    const rowspan: number =
                      lesson.endPosition.verticalSpecificPosition - lesson.startPosition.verticalSpecificPosition + 1;

                    return (
                      <td
                        className={classNames(
                          "cell -controllable schedule__cell",
                          lesson.lessonType === LessonType.Important ? "-warning" : "",
                          cellCoordinate
                        )}
                        key={subgroupIndex}
                        colSpan={colspan}
                        rowSpan={rowspan}
                      >
                        {data}
                        {lesson.lessonClassroom ? (
                          <>
                            <br />
                            <b>{lesson.lessonClassroom}</b>
                          </>
                        ) : (
                          <></>
                        )}
                        <div className="cell__controls">
                          <IconButton
                            icon={<GarbageIcon />}
                            small={true}
                            onClick={() => props.handleDeleteLesson(lesson.id)}
                          />
                          <IconButton icon={<PenIcon />} small={true} onClick={() => handleEditingLesson(lesson)} />
                        </div>
                      </td>
                    );
                  }
                  if (isPartOfTheLesson) {
                    return <React.Fragment key={subgroupIndex}></React.Fragment>;
                  }
                  return (
                    <td className="cell -controllable schedule__cell" key={cellCoordinate}>
                      <div className="cell__controls">
                        <IconButton icon={<PenIcon />} small={true} onClick={() => handleEditingLesson()} />
                      </div>
                    </td>
                  );
                });
            })}
          </tr>
        );
      });
  });

  return (
    <table className="table -schedule schedule">
      <thead className={`header ${props.showHeader ? "" : "schedule-header_hidden"}`}>
        <tr className="row">
          <th className="cell" rowSpan={2}></th>
          <th className="cell" rowSpan={2}></th>
          {groupsElements}
        </tr>
        <tr className="row">{subgroupsElements}</tr>
      </thead>
      <tbody>{dataElements}</tbody>
    </table>
  );
};
