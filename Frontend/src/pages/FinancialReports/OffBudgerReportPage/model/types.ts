type TeachersOffBudgetReportPageData = Array<TeacherData>

type TeacherData = {
  id: string,
  teacherName: string,
  subjectName: string,
  hoursPerWeek: number,
  rate: number,
  offBudgetCategory: string,
  corporateSalary: number,
  salary: number
}

export {
  type TeachersOffBudgetReportPageData,
  type TeacherData
};
