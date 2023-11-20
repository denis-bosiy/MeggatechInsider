export class TimetableParadeTimeSettingRequest {
  public year: number;
  public startTime: string;
  public endTime: string;
  public weekDay: number;

  constructor(_year: number, _startTime: string, _endTime: string, _weekDay: number) {
    this.year = _year;
    this.startTime = _startTime;
    this.endTime = _endTime;
    this.weekDay = _weekDay;
  }
}
