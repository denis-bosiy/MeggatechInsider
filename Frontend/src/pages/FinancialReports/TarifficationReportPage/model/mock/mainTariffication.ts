import {TarifficationReportData, TarifficationReportItem} from "../types";

const teacher1: TarifficationReportItem = {
  id: "Александр Македонский ID",
  teacherName: "Александр Македонский",
  subject: "Физика",
  salary: 6800,
  categoryRatio: 1.5,
  educationRatio: 2,
  subjectType: 1,
  bookExpenses: 300,
  salaryRate: 15600,
  hoursPerWeek: 4.2,
  rateCoefficient: 0.23,
  notebooksPercentage: 20,
  notebooksPrice: 717.6,
  salaryWithNotebooksPrice: 3595.18,
  budgetSalary: 3588,
  extraBudgetaryCategory: "мат егэ",
  corporateSalary: 26250,
  corporateWages: 6037.5,
  extraBudgetaryAllowance: 2442.32,
};

const teacher2: TarifficationReportItem = {
  id: "Николло Маккиавелли ID",
  teacherName: "Николло Маккиавелли",
  subject: "Русский язык",
  salary: 6800,
  categoryRatio: 1.5,
  educationRatio: 2,
  subjectType: 1.5,
  bookExpenses: 300,
  salaryRate: 23250,
  hoursPerWeek: 6.16,
  rateCoefficient: 0.34,
  notebooksPercentage: 10,
  notebooksPrice: 790.5,
  salaryWithNotebooksPrice: 7912.91,
  budgetSalary: 7905,
  extraBudgetaryCategory: "мат егэ",
  corporateSalary: 26250,
  corporateWages: 8925,
  extraBudgetaryAllowance: 1012.09,
};

const mainTariffication: TarifficationReportData = [
  teacher1,
  teacher2,
];

export {
  mainTariffication,
};
