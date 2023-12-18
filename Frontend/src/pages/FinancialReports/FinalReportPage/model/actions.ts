import {FinalReportPageData} from "./types";

enum FINAL_REPORT_PAGE_ACTIONS {
  SET_DATA = "FINAL_REPORT_PAGE_ACTIONS_SET_DATA",
}

type ActionSetTeachers = {
  type: FINAL_REPORT_PAGE_ACTIONS.SET_DATA,
  payload: FinalReportPageData,
}

type Action = ActionSetTeachers

const ActionBuilder = {
  setData: (data: FinalReportPageData) => ({
    type: FINAL_REPORT_PAGE_ACTIONS.SET_DATA,
    payload: {
      data,
    }
  }),
};

export {
  FINAL_REPORT_PAGE_ACTIONS,
  type Action,
  ActionBuilder,
};
