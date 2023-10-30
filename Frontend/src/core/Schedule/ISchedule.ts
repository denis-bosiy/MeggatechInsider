import { IPrototype } from "../IPrototype";
import { LessonTime } from "./LessonTime";
import { ScheduleLesson } from "./ScheduleLesson";
import { Workday } from "./Workday";

export interface ISchedule extends IPrototype {
  addLesson(scheduleLesson: ScheduleLesson): void;
  editLesson(lessonId: string, scheduleLesson: ScheduleLesson): void;
  removeLesson(lessonId: string): void;
  saveToReportCard(): void;
  exportToExcel(): void;
  getGroups(): string[];
  getSubgroups(): Map<string, string[]>;
  getWorkdays(): Workday[];
  getLessonTimes(): Map<Workday, LessonTime[]>;
  getLessons(): ScheduleLesson[];
}
