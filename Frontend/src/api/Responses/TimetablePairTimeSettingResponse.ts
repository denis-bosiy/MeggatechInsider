export class TimetablePairTimeSettingResponse {
  public id: string;
  public startTime: string;
  public endTime: string;

  constructor(_id: string, _startTime: string, _endTime: string) {
    this.id = _id;
    this.startTime = _startTime;
    this.endTime = _endTime;
  }
}
