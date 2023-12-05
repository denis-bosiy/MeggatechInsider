export class TimetableParadeTimeSettingResponse {
  public weekDay: number;
  public startTime: string;
  public endTime: string;

  constructor(_weekDay: number, _startTime: string, _endTime: string) {
    this.weekDay = _weekDay;
    this.startTime = _startTime;
    this.endTime = _endTime;
  }
}
