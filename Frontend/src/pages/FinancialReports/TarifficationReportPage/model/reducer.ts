import { Action, TARIFFICATION_REPORT_PAGE_ACTIONS } from "./actions";
import {TarifficationReportPageData} from "./types";
import {mainTariffication} from "./mock/mainTariffication";
import {courseTariffication} from "./mock/courseTariffication";

const initData: TarifficationReportPageData = {
  main: mainTariffication,
  course: courseTariffication,
};

const tarifficationReportPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
    case TARIFFICATION_REPORT_PAGE_ACTIONS.SET_MAIN_DATA:
      return action.payload.values;
    case TARIFFICATION_REPORT_PAGE_ACTIONS.SET_COURSE_DATA:
      return action.payload.values;
    default:
      return state;
  }
};

export {
  tarifficationReportPageReducer,
};
