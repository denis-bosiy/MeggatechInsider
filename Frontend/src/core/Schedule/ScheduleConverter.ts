import { ScheduleLesson } from "./ScheduleLesson";
import {
  ScheduleNavigationLesson,
  ScheduleNavigationLessonType
} from "../../components/ScheduleNavigation/ScheduleNavigation";
import { SchedulePosition } from "./SchedulePosition";
import { CoordinateManager } from "../../utils/CoordinateManager";
import { LessonTime } from "./LessonTime";
import { getLessonTimeFromString } from "../../utils/getLessonTimeFromString";
import { Schedule } from "./Schedule";
import { EnglishAlphabet } from "./EnglishAlphabet";
import { LessonType } from "./LessonType";
import { Workday } from "./Workday";

export class ScheduleConverter {
  public static ConvertFromNavigationLessonToLessons(
    navigationLesson: ScheduleNavigationLesson,
    schedule: Schedule
  ): ScheduleLesson[] {
    const scheduleLessons: ScheduleLesson[] = [];

    navigationLesson.groups.forEach((group: string) => {
      const scheduleSubgroups: string[] | undefined = schedule.subgroups.get(group);
      if (scheduleSubgroups && navigationLesson.subgroupsCount > scheduleSubgroups.length) {
        const newScheduleSubgroups: string[] = [];

        for (let i = 0; i < navigationLesson.subgroupsCount; i++) {
          newScheduleSubgroups.push(group + "-" + (i + 1));
        }

        schedule.subgroups.set(group, newScheduleSubgroups);
      }
    });

    navigationLesson.groups.forEach((group: string) => {
      const lessonTime: LessonTime = getLessonTimeFromString(navigationLesson.timePeriod);
      const lessonTimesForWorkday: LessonTime[] | undefined = schedule.lessonTimes.get(navigationLesson.workDay);
      let lessonTimeIndex = -1;
      if (lessonTimesForWorkday) {
        lessonTimeIndex = lessonTimesForWorkday.findIndex((lessonTimeFromSchedule: LessonTime) =>
          lessonTimeFromSchedule.equalsTo(lessonTime)
        );
      }
      const verticalGeneralPosition: EnglishAlphabet = CoordinateManager.GetEnglishLetterFromIndex(
        schedule.groups.findIndex((scheduleGroup: string) => scheduleGroup === group)
      );
      const startPosition: SchedulePosition = new SchedulePosition(
        CoordinateManager.GetEnglishLetterFromWorkday(navigationLesson.workDay),
        lessonTimeIndex,
        verticalGeneralPosition,
        navigationLesson.chosenSubgroup - 1
      );
      const scheduleSubgroups: string[] = schedule.subgroups.get(group) || [""];
      const endPosition: SchedulePosition = new SchedulePosition(
        CoordinateManager.GetEnglishLetterFromWorkday(navigationLesson.workDay),
        navigationLesson.lessonType === ScheduleNavigationLessonType.Lesson ? lessonTimeIndex : lessonTimeIndex + 1,
        verticalGeneralPosition,
        Math.floor(scheduleSubgroups.length / navigationLesson.subgroupsCount)
      );
      const lessonClassroom: string = navigationLesson.isOnline ? "онлайн" : navigationLesson.classRoom || "";

      scheduleLessons.push(
        new ScheduleLesson(
          startPosition,
          endPosition,
          navigationLesson.lessonName,
          lessonClassroom,
          "Хабибрахманова А.З.",
          LessonType.Default
        )
      );
    });

    return scheduleLessons;
  }

  public static ConvertFromLessonToNavigationLesson(
    lesson: ScheduleLesson,
    schedule: Schedule
  ): ScheduleNavigationLesson {
    const workDay: Workday = CoordinateManager.GetWorkdayFromEnglishLetter(
      lesson.startPosition.horizontalGeneralPosition
    );

    const isPair: boolean =
      lesson.startPosition.horizontalSpecificPosition !== lesson.endPosition.horizontalSpecificPosition;
    const lessonType: ScheduleNavigationLessonType = isPair
      ? ScheduleNavigationLessonType.Pair
      : ScheduleNavigationLessonType.Lesson;

    const startTimePeriod: LessonTime | undefined = schedule
      .getLessonTimes()
      .get(workDay)
      ?.find((lessonTime: LessonTime, index: number) => lesson.startPosition.horizontalSpecificPosition === index);
    const endTimePeriod: LessonTime | undefined = schedule
      .getLessonTimes()
      .get(workDay)
      ?.find((lessonTime: LessonTime, index: number) => lesson.endPosition.horizontalSpecificPosition === index);
    let timePeriod = "";
    if (startTimePeriod && endTimePeriod) {
      if (isPair) {
        timePeriod = startTimePeriod.startTime.toString() + "-" + startTimePeriod.endTime.toString();
      } else {
        timePeriod = endTimePeriod.startTime.toString() + "-" + endTimePeriod.endTime.toString();
      }
    }

    const groups: string[] = [
      schedule.getGroups()[CoordinateManager.GetIndexFromEnglishLetter(lesson.startPosition.verticalGeneralPosition)]
    ];

    const subgroupsCount: number =
      schedule
        .getSubgroups()
        .get(
          schedule.getGroups()[
            CoordinateManager.GetIndexFromEnglishLetter(lesson.startPosition.verticalGeneralPosition)
          ]
        )!.length /
      (lesson.endPosition.verticalSpecificPosition - lesson.startPosition.verticalSpecificPosition + 1);

    const chosenSubgroup = 1;

    const lessonName: string = lesson.lessonName;
    const classRoom: string | undefined = lesson.lessonClassroom !== "онлайн" ? lesson.lessonClassroom : undefined;
    const isOnline = !classRoom;

    return new ScheduleNavigationLesson(
      lesson.id,
      workDay,
      lessonType,
      timePeriod,
      groups,
      subgroupsCount,
      chosenSubgroup,
      lessonName,
      isOnline,
      classRoom
    );
  }
}
