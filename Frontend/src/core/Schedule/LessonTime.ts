import { Time } from "./Time";

export class LessonTime {
  public startTime: Time;
  public endTime: Time;

  constructor(_startTime: Time, _endTime: Time) {
    this.startTime = _startTime;
    this.endTime = _endTime;
  }
}
