import { Time } from "./Time";

export class LessonTime {
  public startTime: Time;
  public endTime: Time;

  constructor(_startTime: Time, _endTime: Time) {
    this.startTime = _startTime;
    this.endTime = _endTime;
  }

  public equalsTo(lessonTime: LessonTime): boolean {
    return this.startTime.equalsTo(lessonTime.startTime) && this.endTime.equalsTo(lessonTime.endTime);
  }

  public toString(): string {
    return this.startTime.toString() + "-" + this.endTime.toString();
  }
}
