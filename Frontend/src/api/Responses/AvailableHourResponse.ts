export class AvailableHourResponse {
  public id: number;
  public weekDay: number;
  public startTime: string;
  public endTime: string;

  constructor(_id: number, _weekDay: number, _startTime: string, _endTime: string) {
    this.id = _id;
    this.weekDay = _weekDay;
    this.startTime = _startTime;
    this.endTime = _endTime;
  }
}
