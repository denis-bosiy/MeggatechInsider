import { Action, TIMETABLE_SETTINGS_PAGE_ACTIONS} from "./actions";
import { TimetableSettingsPageData, TimetableSettingsPageParadeData, TimetableSettingsPageTimeData} from "./types";

const initPairData: TimetableSettingsPageTimeData = [
  {
    "id": 0,
    "start_time": "12.00", 
    "end_time": "13.30"
  },
 
  {
    "id": 1,
    "start_time": "10.30", 
    "end_time": "12.00"
  },
];

const initLessonData: TimetableSettingsPageTimeData = [
  {
    "id": 0,
    "start_time": "8.00", 
    "end_time": "8.45"
  },

  {"id": 1,
    "start_time": "9.00", 
    "end_time": "9.45"
  },
];

const initParadeData: TimetableSettingsPageParadeData = {
  "week_day": "Понедельник",
  "start_time": "8.00", 
  "end_time": "8.45"
};

const initData: TimetableSettingsPageData = {
  "pairs": initPairData,
  "lessons": initLessonData,
  "parade": initParadeData,
};

const timetableSettingsPageReducer = (state = initData, action: Action) => {
  console.log("reducerPair", action.payload);
  console.log("statePair", state);
  switch (action.type) {
    case TIMETABLE_SETTINGS_PAGE_ACTIONS.TIMETABLE_SETTINGS_PAGE_DELETE_PAIR:
      return {
        ...state,
        pairs: state.pairs.filter((item) => item.id !== action.payload),
      }; 
    case TIMETABLE_SETTINGS_PAGE_ACTIONS.TIMETABLE_SETTINGS_PAGE_DELETE_LESSON:
      return {
        ...state,
        lessons: state.lessons.filter((item) => item.id !== action.payload),
      }; 
    default:
      return state;
  }
};


export {timetableSettingsPageReducer};