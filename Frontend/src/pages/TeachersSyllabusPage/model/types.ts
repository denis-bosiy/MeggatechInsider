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
  workingStartDate: string,
  workExperience: number,
  workExperienceAtTheTimeOfTheEmployment: number,
  birthDay: string,
  age: number
}

export {
  type TeachersSyllabusPageData,
};
