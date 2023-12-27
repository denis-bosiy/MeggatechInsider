import { Schedule } from "../../../../core/Schedule/Schedule";

enum LESSONS_SCHEDULE_PAGE_ACTIONS {
  LESSONS_SCHEDULE_PAGE_DELETE_LESSON = "LESSONS_SCHEDULE_PAGE_DELETE_LESSON",
  LESSONS_SCHEDULE_PAGE_SET_SCHEDULE = "LESSONS-SCHEDULE-PAGE-SET-SCHEDULE"
}

type ActionDeleteLesson = {
  type: LESSONS_SCHEDULE_PAGE_ACTIONS.LESSONS_SCHEDULE_PAGE_DELETE_LESSON;
  payload: string;
};

type ActionSetSchedule = {
  type: LESSONS_SCHEDULE_PAGE_ACTIONS.LESSONS_SCHEDULE_PAGE_SET_SCHEDULE;
  payload: Schedule;
}

type Action = ActionDeleteLesson | ActionSetSchedule;

const ActionBuilder = {
  deleteLesson: (lessonId: string) => ({
    type: LESSONS_SCHEDULE_PAGE_ACTIONS.LESSONS_SCHEDULE_PAGE_DELETE_LESSON,
    payload: lessonId
  }),
  setSchedule: (schedule: Schedule) => ({
    type: LESSONS_SCHEDULE_PAGE_ACTIONS.LESSONS_SCHEDULE_PAGE_SET_SCHEDULE,
    payload: schedule
  })
};

export { LESSONS_SCHEDULE_PAGE_ACTIONS, type Action, ActionBuilder };
