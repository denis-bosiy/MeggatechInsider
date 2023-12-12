import { Action, FINAL_REPORT_PAGE_ACTIONS } from "./actions";
import { FinalReportPageData } from "./types";
import { guidGenerator } from "../../../../utils/guidGenerator";

function createItem(id: string, teacherName: string) {
  return {
    id,
    teacherName,
    budgetHours: 0,
    budgetSalary: 0,
    budgetHoursWithSp: 0,
    budgetSalaryWithSp: 0,
    extraBudgetaryHours: 0,
    extraBudgetarySalary: 0,
    additionalPaymentNotebooks: 0,
    extraChargeForClassroom: 0,
    extraChargeForIntensity: 0,
    finalSalary: 0,
  };
}

const initData: FinalReportPageData = [
  createItem(guidGenerator(), "Иванов Иван Иванович"),
  createItem(guidGenerator(), "Петрушкин Иван Иванович"),
  createItem(guidGenerator(), "Васильев Николай Иванович"),
];

const finalReportPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
    case FINAL_REPORT_PAGE_ACTIONS.SET_DATA:
      return action.payload.values;
    default:
      return state;
  }
};

export {
  finalReportPageReducer,
};
