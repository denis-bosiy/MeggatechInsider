import { TimetableSettingsPageParadeData, TimetableSettingsPageTimeData } from "./types";

enum TIMETABLE_SETTINGS_PAGE_ACTIONS {
    TIMETABLE_SETTINGS_PAGE_SAVE_LESSONS = "TIMETABLE_SETTINGS_PAGE_SAVE_LESSON",
    TIMETABLE_SETTINGS_PAGE_SAVE_PAIRS = "TIMETABLE_SETTINGS_PAGE_SAVE_PAIR",
    TIMETABLE_SETTINGS_PAGE_SAVE_PARADE = "TIMETABLE_SETTINGS_PAGE_SAVE_PARADE",
  }
  
  type ActionSavePairs= {
    type: TIMETABLE_SETTINGS_PAGE_ACTIONS.TIMETABLE_SETTINGS_PAGE_SAVE_PAIRS,
    payload: TimetableSettingsPageTimeData,
  }

  type ActionSaveLessons= {
    type: TIMETABLE_SETTINGS_PAGE_ACTIONS.TIMETABLE_SETTINGS_PAGE_SAVE_LESSONS,
    payload: TimetableSettingsPageTimeData,
}
  
  type ActionSaveParade= {
    type: TIMETABLE_SETTINGS_PAGE_ACTIONS.TIMETABLE_SETTINGS_PAGE_SAVE_PARADE,
    payload: TimetableSettingsPageParadeData,
  }
  
  type Action = ActionSavePairs | ActionSaveLessons | ActionSaveParade
  
const TimetableSettingsPageActionBuilder = {
  savePairs: (values: TimetableSettingsPageTimeData) => ({
    type: TIMETABLE_SETTINGS_PAGE_ACTIONS.TIMETABLE_SETTINGS_PAGE_SAVE_PAIRS,
    payload: values,
  }),
  saveLessons: (values: TimetableSettingsPageTimeData) => ({
    type: TIMETABLE_SETTINGS_PAGE_ACTIONS.TIMETABLE_SETTINGS_PAGE_SAVE_LESSONS,
    payload: values,
  }),
  saveParade: (values: TimetableSettingsPageParadeData) => ({
    type: TIMETABLE_SETTINGS_PAGE_ACTIONS.TIMETABLE_SETTINGS_PAGE_SAVE_PARADE,
    payload: values,
  }), 
};
  
export{
  TIMETABLE_SETTINGS_PAGE_ACTIONS,
  type Action,
  TimetableSettingsPageActionBuilder,
};