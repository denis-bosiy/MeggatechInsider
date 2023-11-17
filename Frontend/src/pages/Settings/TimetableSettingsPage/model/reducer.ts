import { Action, TIMETABLE_SETTINGS_PAGE_ACTIONS} from "./actions";
import { TimetableSettingsPageData, TimetableSettingsPageParadeData, TimetableSettingsPageTimeData} from "./types";

const initPairData: TimetableSettingsPageTimeData = [
  {
    id: "0",
    startTime: "12.00",
    endTime: "13.30"
  },

  {
    id: "1",
    startTime: "10.30",
    endTime: "12.00"
  },
];

const initLessonData: TimetableSettingsPageTimeData = [
  {
    id: "3",
    startTime: "8.00",
    endTime: "8.45"
  },

  {
    id: "4",
    startTime: "9.00",
    endTime: "9.45"
  },
];

const initParadeData: TimetableSettingsPageParadeData = {
  weekDay: "Понедельник",
  startTime: "8.00",
  endTime: "8.45"
};

const initData: TimetableSettingsPageData = {
  pairs: initPairData,
  lessons: initLessonData,
  parade: initParadeData,
};

const timetableSettingsPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
    case TIMETABLE_SETTINGS_PAGE_ACTIONS.TIMETABLE_SETTINGS_PAGE_SAVE_PAIRS:
      return {
        ...state,
        pairs: action.payload,
      };
    case TIMETABLE_SETTINGS_PAGE_ACTIONS.TIMETABLE_SETTINGS_PAGE_SAVE_LESSONS:
      return {
        ...state,
        lessons: action.payload,
      };
    case TIMETABLE_SETTINGS_PAGE_ACTIONS.TIMETABLE_SETTINGS_PAGE_SAVE_PARADE:
      return {
        ...state,
        parade: action.payload,
      };
    default:
      return state;
  }
};


export {timetableSettingsPageReducer};
