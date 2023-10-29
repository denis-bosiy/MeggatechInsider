import { CoordinateManager } from "../../utils/CoordinateManager";
import { ISchedule } from "./ISchedule";
import { Schedule } from "./Schedule";
import { ScheduleLesson } from "./ScheduleLesson";
import { SchedulePosition } from "./SchedulePosition";

export class ScheduleManager {
  public static ApplyScheduleToAnotherSchedule(scheduleFrom: ISchedule, scheduleTo: ISchedule): void {
    // TODO: Убрать приведение к типу
    scheduleTo = scheduleFrom.clone() as Schedule;
  }

  public static IsPartOfTheLesson(lesson: ScheduleLesson, position: SchedulePosition) {
    const isHorizontalPart: boolean =
      CoordinateManager.GetIndexFromEnglishLetter(position.horizontalGeneralPosition) >=
        CoordinateManager.GetIndexFromEnglishLetter(lesson.startPosition.horizontalGeneralPosition) &&
      CoordinateManager.GetIndexFromEnglishLetter(position.horizontalGeneralPosition) <=
        CoordinateManager.GetIndexFromEnglishLetter(lesson.endPosition.horizontalGeneralPosition) &&
      position.horizontalSpecificPosition >= lesson.startPosition.horizontalSpecificPosition &&
      position.horizontalSpecificPosition <= lesson.endPosition.horizontalSpecificPosition;
    const isVerticalPart: boolean =
      CoordinateManager.GetIndexFromEnglishLetter(position.verticalGeneralPosition) >=
        CoordinateManager.GetIndexFromEnglishLetter(lesson.startPosition.verticalGeneralPosition) &&
      CoordinateManager.GetIndexFromEnglishLetter(position.verticalGeneralPosition) <=
        CoordinateManager.GetIndexFromEnglishLetter(lesson.endPosition.verticalGeneralPosition) &&
      position.verticalSpecificPosition >= lesson.startPosition.verticalSpecificPosition &&
      position.verticalSpecificPosition <= lesson.endPosition.verticalSpecificPosition;

    return isHorizontalPart && isVerticalPart;
  }
}
