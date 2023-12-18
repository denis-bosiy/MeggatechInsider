import {TarifficationReportData, TarifficationReportItem} from "../types";

const teacher1: TarifficationReportItem = {
  id: "Александр Пушкин ID",
  teacherName: "Александр Пушкин",
  subject: "Backend",
  salary: 6800,
  categoryRatio: 1.2,
  educationRatio: 2,
  subjectType: 1.5,
  bookExpenses: 300,
  salaryRate: 14988,
  hoursPerWeek: 2.64,
  rateCoefficient: 0.15,
  notebooksPercentage: 10,
  notebooksPrice: 224.82,
  salaryWithNotebooksPrice: 2250.45,
  budgetSalary: 6708,
  extraBudgetaryCategory: "мат егэ",
  corporateSalary: 26250,
  corporateWages: 3937.5,
  extraBudgetaryAllowance: 1687.05,
};

const teacher2: TarifficationReportItem = {
  id: "Леонид Спартанский ID",
  teacherName: "Леонид Спартанский",
  subject: "Химия",
  salary: 6800,
  categoryRatio: 1.5,
  educationRatio: 2,
  subjectType: 1,
  bookExpenses: 300,
  salaryRate: 15600,
  hoursPerWeek: 7.68,
  rateCoefficient: 0.43,
  notebooksPercentage: 20,
  notebooksPrice: 1341.6,
  salaryWithNotebooksPrice: 6721.42,
  budgetSalary: 3588,
  extraBudgetaryCategory: "мат егэ",
  corporateSalary: 26250,
  corporateWages: 11287.5,
  extraBudgetaryAllowance: 4566.08,
};

const courseTariffication: TarifficationReportData = [
  teacher1,
  teacher2,
];

export {
  courseTariffication,
};
