import {TeachersStatisticsPageData} from "./types";

enum TEACHERS_STATISTICS_PAGE_ACTIONS {
  SAVE_STATISTICS = "SAVE_STATISTICS",
}

type ActionSaveStatistics = {
  type: TEACHERS_STATISTICS_PAGE_ACTIONS.SAVE_STATISTICS,
  payload: TeachersStatisticsPageData,
}

type Action = ActionSaveStatistics

const ActionBuilder = {
  saveStatistics: (values: TeachersStatisticsPageData) => ({
    type: TEACHERS_STATISTICS_PAGE_ACTIONS.SAVE_STATISTICS,
    payload: { values }
  }),
};

export {
  TEACHERS_STATISTICS_PAGE_ACTIONS,
  type Action,
  ActionBuilder,
};
