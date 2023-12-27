import { LessonTime } from "../core/Schedule/LessonTime";
import { getTimeFromString } from "./getTimeFromString";

export const getLessonTimeFromString = (lessonTime: string): LessonTime => {
  const splittedLessonTime: string[] = lessonTime.split("-");

  return new LessonTime(getTimeFromString(splittedLessonTime[0]), getTimeFromString(splittedLessonTime[1]));
};
