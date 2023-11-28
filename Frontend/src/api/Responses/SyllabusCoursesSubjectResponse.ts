export class SyllabusCoursesSubjectResponse {
  public id: number;
  public name: string;
  public type: string;
  public hoursByPlan: number;
  public numberOfGroups: number;

  constructor(
    _id: number,
    _name: string,
    _type: string,
    _hoursByPlan: number,
    _numberOfGroups: number,
  ) {
    this.id = _id;
    this.name = _name;
    this.type = _type;
    this.hoursByPlan = _hoursByPlan;
    this.numberOfGroups = _numberOfGroups;
  }
}
