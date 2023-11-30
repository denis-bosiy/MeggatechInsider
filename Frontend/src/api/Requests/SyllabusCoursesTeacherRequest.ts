export class SyllabusCoursesTeacherRequest {
  public id: number;
  public name: string;
  public workingContract: string;
  public workingStartDate: string;
  public workExperience: number;
  public workExperienceAtTheTimeOfTheEmployment: number;
  public birthDay: string;
  public age: number;
  public year: number;

  constructor(
    _id: number,
    _name: string,
    _workingContract: string,
    _workingStartDate: string,
    _workExperience: number,
    _workExperienceAtTheTimeOfTheEmployment: number,
    _birthDay: string,
    _age: number,
    _year: number
  ) {
    this.id = _id;
    this.name = _name;
    this.workingContract = _workingContract;
    this.workingStartDate = _workingStartDate;
    this.workExperience = _workExperience;
    this.workExperienceAtTheTimeOfTheEmployment = _workExperienceAtTheTimeOfTheEmployment;
    this.birthDay = _birthDay;
    this.age = _age;
    this.year = _year;
  }
}
