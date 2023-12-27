import {Schedule} from "./Schedule";
import {Workday} from "./Workday";

abstract class AbstractScheduleBuilder {
  protected static BuildWorkdays(schedule: Schedule): Schedule {
    schedule.workdays = [
      Workday.Monday,
      Workday.Tuesday,
      Workday.Wednesday,
      Workday.Thursday,
      Workday.Friday,
      Workday.Saturday,
    ];

    return schedule;
  }
}

export {
  AbstractScheduleBuilder
};
