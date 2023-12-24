import {TarifficationReportData} from "./types";

enum TARIFFICATION_REPORT_PAGE_ACTIONS {
  SET_MAIN_DATA = "TARIFFICATION_REPORT_PAGE_ACTIONS_SET_MAIN_DATA",
  SET_COURSE_DATA = "TARIFFICATION_REPORT_PAGE_ACTIONS_SET_COURSE_DATA",
}

type ActionSetMainData = {
  type: TARIFFICATION_REPORT_PAGE_ACTIONS.SET_MAIN_DATA,
  payload: TarifficationReportData,
}

type ActionSetCourseData = {
  type: TARIFFICATION_REPORT_PAGE_ACTIONS.SET_COURSE_DATA,
  payload: TarifficationReportData,
}

type Action = ActionSetMainData | ActionSetCourseData

const ActionBuilder = {
  setMainData: (data: TarifficationReportData) => ({
    type: TARIFFICATION_REPORT_PAGE_ACTIONS.SET_MAIN_DATA,
    payload: {
      data,
    }
  }),
  setCourseData: (data: TarifficationReportData) => ({
    type: TARIFFICATION_REPORT_PAGE_ACTIONS.SET_COURSE_DATA,
    payload: {
      data,
    }
  }),
};

export {
  TARIFFICATION_REPORT_PAGE_ACTIONS,
  type Action,
  ActionBuilder,
};
