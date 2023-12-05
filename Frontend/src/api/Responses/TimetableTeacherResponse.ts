import { AvailableHourResponse } from "./AvailableHourResponse";

export class TimetableTeacherResponse {
  public id: number;
  public subjectName: string;
  public subjectId: number;
  public teacherName: string;
  public teacherId: number;
  public availableHours: AvailableHourResponse[];
  public distributedHoursToPlan: number;
  public hoursToPlan: number;
  public creditHours: number;
  public workedOverPlan: number;

  constructor(
    _id: number,
    _subjectName: string,
    _subjectId: number,
    _teacherName: string,
    _teacherId: number,
    _availableHours: AvailableHourResponse[],
    _distributedHoursToPlan: number,
    _hoursToPlan: number,
    _creditHours: number,
    _workedOverPlan: number
  ) {
    this.id = _id;
    this.subjectName = _subjectName;
    this.subjectId = _subjectId;
    this.teacherName = _teacherName;
    this.teacherId = _teacherId;
    this.availableHours = _availableHours;
    this.distributedHoursToPlan = _distributedHoursToPlan;
    this.hoursToPlan = _hoursToPlan;
    this.creditHours = _creditHours;
    this.workedOverPlan = _workedOverPlan;
  }
}
