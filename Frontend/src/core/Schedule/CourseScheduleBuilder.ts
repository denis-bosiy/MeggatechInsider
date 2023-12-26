import { EnglishAlphabet } from "./EnglishAlphabet";
import { ISchedule } from "./ISchedule";
import { LessonTime } from "./LessonTime";
import { LessonType } from "./LessonType";
import { Schedule } from "./Schedule";
import { ScheduleLesson } from "./ScheduleLesson";
import { SchedulePosition } from "./SchedulePosition";
import { Time } from "./Time";
import { Workday } from "./Workday";
import {AbstractScheduleBuilder} from "./AbstractScheduleBuilder";

// TODO: Сделать стратегию для расписания (Абстрактный Builder с релизацией BuildLessonTimes, BuildLessons)
// TODO: В ScheduleComponent прокинуть showHeader

export class CourseScheduleBuilder extends AbstractScheduleBuilder {
  // TODO: Убрать тестовые данные, после подключение редакса в BuildSchedule пропихивать данные, необходимые для конструированя расписания
  public static BuildSchedule(): ISchedule {
    const schedule: Schedule = new Schedule();

    this.BuildGroups(schedule);
    this.BuildSubgroups(schedule);
    this.BuildWorkdays(schedule);
    this.BuildLessonTimes(schedule);
    this.BuildLessons(schedule);

    return schedule;
  }

  private static BuildGroups(schedule: Schedule): Schedule {
    schedule.groups = ["0", "1", "2"];

    return schedule;
  }

  private static BuildSubgroups(schedule: Schedule): Schedule {
    schedule.subgroups.set("0", [""]);
    schedule.subgroups.set("1", [""]);
    schedule.subgroups.set("2", [""]);

    return schedule;
  }

  private static BuildLessonTimes(schedule: Schedule): Schedule {
    const lessonTimesForMonday: LessonTime[] = [];
    lessonTimesForMonday.push(new LessonTime(new Time(15, 0), new Time(16, 0)));
    lessonTimesForMonday.push(new LessonTime(new Time(16, 30), new Time(17, 30)));
    lessonTimesForMonday.push(new LessonTime(new Time(18, 0), new Time(19, 0)));

    const lessonTimesForSaturday: LessonTime[] = [];
    lessonTimesForSaturday.push(new LessonTime(new Time(15, 0), new Time(16, 0)));
    lessonTimesForSaturday.push(new LessonTime(new Time(16, 30), new Time(17, 30)));

    const lessonTimesForTheOthersDays: LessonTime[] = [];
    lessonTimesForTheOthersDays.push(new LessonTime(new Time(15, 30), new Time(16, 30)));
    lessonTimesForTheOthersDays.push(new LessonTime(new Time(17, 0), new Time(18, 0)));
    lessonTimesForTheOthersDays.push(new LessonTime(new Time(18, 30), new Time(19, 30)));

    schedule.getWorkdays().forEach((workday: Workday) => {
      if (workday === Workday.Monday) {
        schedule.lessonTimes.set(workday, lessonTimesForMonday);
      } else if (workday === Workday.Saturday) {
        schedule.lessonTimes.set(workday, lessonTimesForSaturday);
      } else {
        schedule.lessonTimes.set(workday, lessonTimesForTheOthersDays);
      }
    });

    return schedule;
  }

  private static BuildLessons(schedule: Schedule): Schedule {
    const courseMonday1: ScheduleLesson = new ScheduleLesson(
      "random-string-0",
      new SchedulePosition(EnglishAlphabet.A, 0, EnglishAlphabet.A, 0),
      new SchedulePosition(EnglishAlphabet.A, 0, EnglishAlphabet.A, 0),
      "Математика",
      "523",
      "",
      LessonType.Default
    );
    const courseMonday2: ScheduleLesson = new ScheduleLesson(
      "random-string-1",
      new SchedulePosition(EnglishAlphabet.A, 0, EnglishAlphabet.A, 1),
      new SchedulePosition(EnglishAlphabet.A, 0, EnglishAlphabet.A, 1),
      "Русский язык",
      "423",
      "",
      LessonType.Default
    );
    const courseMonday3: ScheduleLesson = new ScheduleLesson(
      "random-string-2",
      new SchedulePosition(EnglishAlphabet.A, 0, EnglishAlphabet.A, 2),
      new SchedulePosition(EnglishAlphabet.A, 0, EnglishAlphabet.A, 2),
      "Английский язык",
      "123",
      "",
      LessonType.Default
    );
    const courseMonday4: ScheduleLesson = new ScheduleLesson(
      "random-string-3",
      new SchedulePosition(EnglishAlphabet.B, 0, EnglishAlphabet.A, 2),
      new SchedulePosition(EnglishAlphabet.B, 0, EnglishAlphabet.A, 2),
      "Физика",
      "124",
      "",
      LessonType.Default
    );
    const courseMonday5: ScheduleLesson = new ScheduleLesson(
      "random-string-4",
      new SchedulePosition(EnglishAlphabet.C, 0, EnglishAlphabet.A, 2),
      new SchedulePosition(EnglishAlphabet.C, 0, EnglishAlphabet.A, 2),
      "Русский язык",
      "423",
      "",
      LessonType.Default
    );

    const courseWednesday1: ScheduleLesson = new ScheduleLesson(
      "random-string-5",
      new SchedulePosition(EnglishAlphabet.A, 0, EnglishAlphabet.C, 0),
      new SchedulePosition(EnglishAlphabet.A, 0, EnglishAlphabet.C, 0),
      "Русский язык",
      "423",
      "",
      LessonType.Default
    );

    const courseThursday1: ScheduleLesson = new ScheduleLesson(
      "random-string-6",
      new SchedulePosition(EnglishAlphabet.A, 0, EnglishAlphabet.D, 1),
      new SchedulePosition(EnglishAlphabet.A, 0, EnglishAlphabet.D, 1),
      "Русский язык",
      "423",
      "",
      LessonType.Default
    );
    const courseThursday2: ScheduleLesson = new ScheduleLesson(
      "random-string-7",
      new SchedulePosition(EnglishAlphabet.A, 0, EnglishAlphabet.D, 2),
      new SchedulePosition(EnglishAlphabet.A, 0, EnglishAlphabet.D, 2),
      "Английский язык",
      "123",
      "",
      LessonType.Default
    );

    const courseSaturday1: ScheduleLesson = new ScheduleLesson(
      "random-string-8",
      new SchedulePosition(EnglishAlphabet.A, 0, EnglishAlphabet.E, 0),
      new SchedulePosition(EnglishAlphabet.A, 0, EnglishAlphabet.E, 0),
      "Русский язык",
      "423",
      "",
      LessonType.Default
    );

    schedule.lessons.push(courseMonday1);
    schedule.lessons.push(courseMonday2);
    schedule.lessons.push(courseMonday3);
    schedule.lessons.push(courseMonday4);
    schedule.lessons.push(courseMonday5);
    schedule.lessons.push(courseWednesday1);
    schedule.lessons.push(courseThursday1);
    schedule.lessons.push(courseThursday2);
    schedule.lessons.push(courseSaturday1);

    return schedule;
  }
}
