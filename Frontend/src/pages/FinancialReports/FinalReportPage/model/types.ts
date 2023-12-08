type FinalReportPageData = FinalReportItem[]

type FinalReportItem = {
  id: string,
  teacherName: string,
  budgetHours: number,
  budgetSalary: number,
  budgetHoursWithSp: number,
  budgetSalaryWithSp: number,
  extraBudgetaryHours: number,
  extraBudgetarySalary: number,
  additionalPaymentNotebooks: number,
  extraChargeForClassroom: number,
  extraChargeForIntensity: number,
  finalSalary: number,
}

export {
  type FinalReportPageData,
  type FinalReportItem
};
