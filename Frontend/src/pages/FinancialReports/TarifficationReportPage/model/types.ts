type TarifficationReportPageData = {
  main: TarifficationReportData,
  course: TarifficationReportData,
}

type TarifficationReportData = TarifficationReportItem[]

type TarifficationReportItem = {
  id: string,
  teacherName: string,
  subject: string,
  salary: number,
  categoryRatio: number,
  educationRatio: number,
  subjectType: number,
  bookExpenses: number,
  salaryRate: number,
  hoursPerWeek: number,
  rateCoefficient: number,
  notebooksPercentage: number,
  notebooksPrice: number,
  salaryWithNotebooksPrice: number,
  budgetSalary: number,
  extraBudgetaryCategory: string,
  corporateSalary: number,
  corporateWages: number,
  extraBudgetaryAllowance: number,
}

export {
  type TarifficationReportPageData,
  type TarifficationReportData,
  type TarifficationReportItem,
};
