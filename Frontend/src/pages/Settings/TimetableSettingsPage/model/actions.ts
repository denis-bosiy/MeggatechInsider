enum TIMETABLE_SETTINGS_PAGE_ACTIONS {
    TIMETABLE_SETTINGS_PAGE_DELETE_LESSON = "TIMETABLE_SETTINGS_PAGE_DELETE_LESSON",
    TIMETABLE_SETTINGS_PAGE_DELETE_PAIR = "TIMETABLE_SETTINGS_PAGE_DELETE_PAIR",
  }
  
  type ActionDeletePair= {
    type: TIMETABLE_SETTINGS_PAGE_ACTIONS.TIMETABLE_SETTINGS_PAGE_DELETE_PAIR,
    payload: string,
  }

  type ActionDeleteLesson= {
    type: TIMETABLE_SETTINGS_PAGE_ACTIONS.TIMETABLE_SETTINGS_PAGE_DELETE_LESSON,
    payload: string,
  }
  
  type Action = ActionDeletePair | ActionDeleteLesson
  
const ActionBuilder = {
  deletePair: (pairId: string) => ({
    type: TIMETABLE_SETTINGS_PAGE_ACTIONS.TIMETABLE_SETTINGS_PAGE_DELETE_PAIR,
    payload: pairId,
  }),
  deleteLesson: (lessonId: string) => ({
    type: TIMETABLE_SETTINGS_PAGE_ACTIONS.TIMETABLE_SETTINGS_PAGE_DELETE_LESSON,
    payload: lessonId,
  }),
};
  
export{
  TIMETABLE_SETTINGS_PAGE_ACTIONS,
  type Action,
  ActionBuilder,
};