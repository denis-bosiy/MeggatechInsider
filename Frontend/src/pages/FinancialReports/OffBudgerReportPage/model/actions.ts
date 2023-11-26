import {TeachersOffBudgetReportPageData} from "./types";

enum OFF_BUDGET_REPORT_PAGE_ACTIONS {
  SET_TEACHERS = "SET_TEACHERS",
}

type ActionSetTeachers = {
  type: OFF_BUDGET_REPORT_PAGE_ACTIONS.SET_TEACHERS,
  payload: TeachersOffBudgetReportPageData,
}

type Action = ActionSetTeachers

const ActionBuilder = {
  setTeachers: (values: TeachersOffBudgetReportPageData) => ({
    type: OFF_BUDGET_REPORT_PAGE_ACTIONS.SET_TEACHERS,
    payload: { values }
  }),
};

export {
  OFF_BUDGET_REPORT_PAGE_ACTIONS,
  type Action,
  ActionBuilder,
};
