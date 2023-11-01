import { LessonType } from "./LessonType";
import { SchedulePosition } from "./SchedulePosition";

export class ScheduleLesson {
  public id: string;
  public startPosition: SchedulePosition;
  public endPosition: SchedulePosition;
  public lessonName: string;
  public lessonClassroom: string;
  public lessonTeacher: string;
  public lessonType: LessonType;

  constructor(
    _id: string,
    _startPosition: SchedulePosition,
    _endPosition: SchedulePosition,
    _lessonName: string,
    _lessonClassroom: string,
    _lessonTeacher: string,
    _lessonType: LessonType
  ) {
    this.id = _id;
    this.startPosition = _startPosition;
    this.endPosition = _endPosition;
    this.lessonName = _lessonName;
    this.lessonClassroom = _lessonClassroom;
    this.lessonTeacher = _lessonTeacher;
    this.lessonType = _lessonType;
  }
}
