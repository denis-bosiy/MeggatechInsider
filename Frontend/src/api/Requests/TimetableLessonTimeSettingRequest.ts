export class TimetableLessonTimeSettingRequest {
  public startTime: string;
  public endTime: string;
  public year: number;

  constructor(_startTime: string, _endTime: string, _year: number) {
    this.startTime = _startTime;
    this.endTime = _endTime;
    this.year = _year;
  }
}
