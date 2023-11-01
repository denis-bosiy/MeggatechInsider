import { ISchedule } from "./ISchedule";
import { LessonTime } from "./LessonTime";
import { ScheduleLesson } from "./ScheduleLesson";
import { Workday } from "./Workday";

export class Schedule implements ISchedule {
  public groups: string[] = [];
  public subgroups: Map<string, string[]> = new Map<string, string[]>();
  public workdays: Workday[] = [];
  public lessonTimes: Map<Workday, LessonTime[]> = new Map<Workday, LessonTime[]>;
  public lessons: ScheduleLesson[] = [];

  public addLesson(scheduleLesson: ScheduleLesson): void {
    this.lessons.push(scheduleLesson);
  }

  public editLesson(lessonId: string, scheduleLesson: ScheduleLesson): void {
    const foundLessonIndex: number = this.lessons.findIndex((lesson: ScheduleLesson) => lesson.id === lessonId);

    if (foundLessonIndex !== -1) {
      this.lessons[foundLessonIndex] = scheduleLesson;
    }
  }

  public removeLesson(lessonId: string): void {
    const foundLessonIndex: number = this.lessons.findIndex((lesson: ScheduleLesson) => lesson.id === lessonId);

    if (foundLessonIndex !== -1) {
      this.lessons.splice(foundLessonIndex, 1);
    }
  }

  public saveToReportCard(): void {
    console.log("save to report card");
  }

  public exportToExcel(): void {
    console.log("make an request to api");
  }

  public clone(): Schedule {
    return this;
  }

  public getGroups(): string[] {
    return this.groups;
  }

  public getSubgroups(): Map<string, string[]> {
    return this.subgroups;
  }

  public getWorkdays(): Workday[] {
    return this.workdays;
  }

  public getLessonTimes(): Map<Workday, LessonTime[]> {
    return this.lessonTimes;
  }

  public getLessons(): ScheduleLesson[] {
    return this.lessons;
  }
}
