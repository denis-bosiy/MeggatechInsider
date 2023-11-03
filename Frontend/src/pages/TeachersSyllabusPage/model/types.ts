type TeachersSyllabusPageData = Array<TeacherSyllabusData>

type TeacherSyllabusData = {
  id: number,
  name: string,
  category: string,
  categoryPayrollAccounting: boolean,
  workingContract: string,
  workingContractPayrollAccounting: boolean,
  education: string,
  isClassroomTeacher: boolean,
  inDepthSubjectPayrollAccounting: boolean,
  finalExamPayrollAccounting: boolean,
  workingStartDate: Date,
  workExperience: number,
  workExperienceAtTheTimeOfTheEmployment: number,
  birthDay: Date,
  age: number
}

export {
  type TeachersSyllabusPageData,
};
