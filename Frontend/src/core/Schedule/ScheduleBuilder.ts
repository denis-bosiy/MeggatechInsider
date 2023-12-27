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

export class ScheduleBuilder extends AbstractScheduleBuilder {
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
    schedule.groups = ["10-1", "10-2", "11-1", "11-2", "11-3"];

    return schedule;
  }

  private static BuildSubgroups(schedule: Schedule): Schedule {
    schedule.subgroups.set("10-1", ["10-1-1", "10-1-2"]);
    schedule.subgroups.set("10-2", ["10-2-1", "10-2-2"]);
    schedule.subgroups.set("11-1", ["11-1-1", "11-1-2"]);
    schedule.subgroups.set("11-2", ["11-2-1", "11-2-2"]);
    schedule.subgroups.set("11-3", ["11-3-1", "11-3-2"]);

    return schedule;
  }

  private static BuildWorkdays(schedule: Schedule): Schedule {
    schedule.workdays = [
      Workday.Monday,
      Workday.Tuesday,
      Workday.Wednesday,
      Workday.Thursday,
      Workday.Friday,
      Workday.Saturday
    ];

    return schedule;
  }

  private static BuildLessonTimes(schedule: Schedule): Schedule {
    const lessonTimesForMonday: LessonTime[] = [];
    lessonTimesForMonday.push(new LessonTime(new Time(8, 0), new Time(8, 20)));
    lessonTimesForMonday.push(new LessonTime(new Time(8, 20), new Time(9, 0)));
    lessonTimesForMonday.push(new LessonTime(new Time(9, 10), new Time(9, 50)));
    lessonTimesForMonday.push(new LessonTime(new Time(10, 10), new Time(10, 50)));
    lessonTimesForMonday.push(new LessonTime(new Time(11, 0), new Time(11, 40)));
    lessonTimesForMonday.push(new LessonTime(new Time(12, 0), new Time(12, 40)));
    lessonTimesForMonday.push(new LessonTime(new Time(12, 50), new Time(13, 30)));
    lessonTimesForMonday.push(new LessonTime(new Time(13, 40), new Time(14, 20)));
    lessonTimesForMonday.push(new LessonTime(new Time(14, 30), new Time(15, 10)));
    // TODO: Тут надо как-то вытягивать данные по дням недели + время линейки
    // Эта логика должна храниться в билдере
    schedule.lessonTimes.set(schedule.getWorkdays()[0], lessonTimesForMonday);

    const lessonTimesForTheOthersDays: LessonTime[] = [];
    lessonTimesForTheOthersDays.push(new LessonTime(new Time(8, 0), new Time(8, 40)));
    lessonTimesForTheOthersDays.push(new LessonTime(new Time(8, 50), new Time(9, 30)));
    lessonTimesForTheOthersDays.push(new LessonTime(new Time(9, 50), new Time(10, 30)));
    lessonTimesForTheOthersDays.push(new LessonTime(new Time(10, 40), new Time(11, 20)));
    lessonTimesForTheOthersDays.push(new LessonTime(new Time(11, 40), new Time(12, 20)));
    lessonTimesForTheOthersDays.push(new LessonTime(new Time(12, 30), new Time(13, 10)));
    lessonTimesForTheOthersDays.push(new LessonTime(new Time(13, 20), new Time(14, 0)));
    lessonTimesForTheOthersDays.push(new LessonTime(new Time(14, 10), new Time(14, 50)));

    schedule.getWorkdays().forEach((workday: Workday) => {
      if (workday === Workday.Monday) {
        schedule.lessonTimes.set(workday, lessonTimesForMonday);
      } else {
        schedule.lessonTimes.set(workday, lessonTimesForTheOthersDays);
      }
    });

    return schedule;
  }

  private static BuildLessons(schedule: Schedule): Schedule {
    const bigLesson1: ScheduleLesson = new ScheduleLesson(
      new SchedulePosition(EnglishAlphabet.A, 0, EnglishAlphabet.A, 0),
      new SchedulePosition(EnglishAlphabet.A, 1, EnglishAlphabet.A, 0),
      "Общелицейская линейка",
      "",
      "",
      LessonType.Important
    );
    const bigLesson2: ScheduleLesson = new ScheduleLesson(
      new SchedulePosition(EnglishAlphabet.B, 0, EnglishAlphabet.A, 0),
      new SchedulePosition(EnglishAlphabet.B, 1, EnglishAlphabet.A, 0),
      "Общелицейская линейка",
      "",
      "",
      LessonType.Important
    );
    const bigLesson3: ScheduleLesson = new ScheduleLesson(
      new SchedulePosition(EnglishAlphabet.C, 0, EnglishAlphabet.A, 0),
      new SchedulePosition(EnglishAlphabet.C, 1, EnglishAlphabet.A, 0),
      "Общелицейская линейка",
      "",
      "",
      LessonType.Important
    );
    const bigLesson4: ScheduleLesson = new ScheduleLesson(
      new SchedulePosition(EnglishAlphabet.D, 0, EnglishAlphabet.A, 0),
      new SchedulePosition(EnglishAlphabet.D, 1, EnglishAlphabet.A, 0),
      "Общелицейская линейка",
      "",
      "",
      LessonType.Important
    );
    const bigLesson5: ScheduleLesson = new ScheduleLesson(
      new SchedulePosition(EnglishAlphabet.E, 0, EnglishAlphabet.A, 0),
      new SchedulePosition(EnglishAlphabet.E, 1, EnglishAlphabet.A, 0),
      "Общелицейская линейка",
      "",
      "",
      LessonType.Important
    );
    const standardLesson1: ScheduleLesson = new ScheduleLesson(
      new SchedulePosition(EnglishAlphabet.A, 0, EnglishAlphabet.A, 1),
      new SchedulePosition(EnglishAlphabet.A, 0, EnglishAlphabet.A, 2),
      "АиП",
      "520",
      "Охотников С.А.",
      LessonType.Default
    );
    const standardLesson2: ScheduleLesson = new ScheduleLesson(
      new SchedulePosition(EnglishAlphabet.A, 0, EnglishAlphabet.A, 3),
      new SchedulePosition(EnglishAlphabet.A, 1, EnglishAlphabet.A, 3),
      "Геометрия",
      "520",
      "Гусарова Л.Г.",
      LessonType.Default
    );
    const standardLesson3: ScheduleLesson = new ScheduleLesson(
      new SchedulePosition(EnglishAlphabet.A, 0, EnglishAlphabet.B, 0),
      new SchedulePosition(EnglishAlphabet.A, 1, EnglishAlphabet.B, 1),
      "ОБЖ",
      "523",
      "Логинова М.Ю.",
      LessonType.Default
    );
    const miniLesson: ScheduleLesson = new ScheduleLesson(
      new SchedulePosition(EnglishAlphabet.B, 1, EnglishAlphabet.B, 1),
      new SchedulePosition(EnglishAlphabet.B, 1, EnglishAlphabet.B, 1),
      "Английский язык",
      "532",
      "Руденко Е.В.",
      LessonType.Default
    );

    schedule.lessons.push(bigLesson1);
    schedule.lessons.push(bigLesson2);
    schedule.lessons.push(bigLesson3);
    schedule.lessons.push(bigLesson4);
    schedule.lessons.push(bigLesson5);
    schedule.lessons.push(standardLesson1);
    schedule.lessons.push(standardLesson2);
    schedule.lessons.push(standardLesson3);
    schedule.lessons.push(miniLesson);

    return schedule;
  }
}
