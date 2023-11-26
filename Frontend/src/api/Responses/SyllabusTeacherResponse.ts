export class SyllabusTeacherResponse {
  public id: number;
  public name: string;
  public category: string;
  public categoryPayrollAccounting: boolean;
  public workingContract: string;
  public workingContractPayrollAccounting: boolean;
  public education: string;
  public isClassroomTeacher: boolean;
  public inDepthSubjectPayrollAccounting: boolean;
  public finalExamPayrollAccounting: boolean;
  public workingStartDate: string;
  public workExperience: number;
  public workExperienceAtTheTimeOfTheEmployment: number;

  constructor(
    _id: number,
    _name: string,
    _category: string,
    _categoryPayrollAccounting: boolean,
    _workingContract: string,
    _workingContractPayrollAccounting: boolean,
    _education: string,
    _isClassroomTeacher: boolean,
    _inDepthSubjectPayrollAccounting: boolean,
    _finalExamPayrollAccounting: boolean,
    _workingStartDate: string,
    _workExperience: number,
    _workExperienceAtTheTimeOfTheEmployment: number
  ) {
    this.id = _id;
    this.name = _name;
    this.category = _category;
    this.categoryPayrollAccounting = _categoryPayrollAccounting;
    this.workingContract = _workingContract;
    this.workingContractPayrollAccounting = _workingContractPayrollAccounting;
    this.education = _education;
    this.isClassroomTeacher = _isClassroomTeacher;
    this.inDepthSubjectPayrollAccounting = _inDepthSubjectPayrollAccounting;
    this.finalExamPayrollAccounting = _finalExamPayrollAccounting;
    this.workingStartDate = _workingStartDate;
    this.workExperience = _workExperience;
    this.workExperienceAtTheTimeOfTheEmployment = _workExperienceAtTheTimeOfTheEmployment;
  }
}
