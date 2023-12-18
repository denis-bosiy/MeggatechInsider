enum LESSONS_SCHEDULE_PAGE_ACTIONS {
  LESSONS_SCHEDULE_PAGE_DELETE_LESSON = "LESSONS_SCHEDULE_PAGE_DELETE_LESSON"
}

type ActionDeleteLesson = {
  type: LESSONS_SCHEDULE_PAGE_ACTIONS.LESSONS_SCHEDULE_PAGE_DELETE_LESSON;
  payload: string;
};

type Action = ActionDeleteLesson;

const ActionBuilder = {
  deleteLesson: (lessonId: string) => ({
    type: LESSONS_SCHEDULE_PAGE_ACTIONS.LESSONS_SCHEDULE_PAGE_DELETE_LESSON,
    payload: lessonId
  })
};

export { LESSONS_SCHEDULE_PAGE_ACTIONS, type Action, ActionBuilder };
