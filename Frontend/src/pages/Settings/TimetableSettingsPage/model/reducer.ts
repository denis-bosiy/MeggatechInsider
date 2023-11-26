import { Action, TIMETABLE_SETTINGS_PAGE_ACTIONS } from "./actions";
import { TimetableSettingsPageData, TimetableSettingsPageParadeData, TimetableSettingsPageTimeData } from "./types";

const initPairData: TimetableSettingsPageTimeData = [];

const initLessonData: TimetableSettingsPageTimeData = [];

const initParadeData: TimetableSettingsPageParadeData = {
  weekDayCode: 0,
  startTime: "08:00",
  endTime: "08:45"
};

const initData: TimetableSettingsPageData = {
  pairs: initPairData,
  lessons: initLessonData,
  parade: initParadeData
};

const timetableSettingsPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
    case TIMETABLE_SETTINGS_PAGE_ACTIONS.TIMETABLE_SETTINGS_PAGE_SAVE_PAIRS:
      return {
        ...state,
        pairs: action.payload
      };
    case TIMETABLE_SETTINGS_PAGE_ACTIONS.TIMETABLE_SETTINGS_PAGE_SAVE_LESSONS:
      return {
        ...state,
        lessons: action.payload
      };
    case TIMETABLE_SETTINGS_PAGE_ACTIONS.TIMETABLE_SETTINGS_PAGE_SAVE_PARADE:
      return {
        ...state,
        parade: action.payload
      };
    default:
      return state;
  }
};

export { timetableSettingsPageReducer };
