import { Action, OFF_BUDGET_REPORT_PAGE_ACTIONS } from "./actions";
import { TeachersOffBudgetReportPageData } from "./types";
import { guidGenerator } from "../../../../utils/guidGenerator";

const initData: TeachersOffBudgetReportPageData = [
  {
    id: guidGenerator(),
    teacherName: "Иванов Иван Иванович",
    subjectName: "История",
    hoursPerWeek: 5,
    rate: 0.5,
    offBudgetCategory: "Физика ЕГЭ",
    corporateSalary: 25000,
    salary: 7000
  },
  {
    id: guidGenerator(),
    teacherName: "Петров Иван Иванович",
    subjectName: "История",
    hoursPerWeek: 5,
    rate: 0.5,
    offBudgetCategory: "Физика ЕГЭ",
    corporateSalary: 25000,
    salary: 7000
  },
  {
    id: guidGenerator(),
    teacherName: "Ванечкин Иван Иванович",
    subjectName: "История",
    hoursPerWeek: 5,
    rate: 0.5,
    offBudgetCategory: "Физика ЕГЭ",
    corporateSalary: 25000,
    salary: 7000
  },
  {
    id: guidGenerator(),
    teacherName: "Ванечкин Иван Иванович",
    subjectName: "Физика",
    hoursPerWeek: 5,
    rate: 0.5,
    offBudgetCategory: "Физика ЕГЭ",
    corporateSalary: 25000,
    salary: 7000
  }
];

const teachersOffBudgetReportPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
    case OFF_BUDGET_REPORT_PAGE_ACTIONS.SET_TEACHERS:
      return action.payload.values;
    default:
      return state;
  }
};

export { teachersOffBudgetReportPageReducer };
