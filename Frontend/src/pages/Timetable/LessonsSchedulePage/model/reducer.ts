import { ISchedule } from "../../../../core/Schedule/ISchedule";
import { ScheduleBuilder } from "../../../../core/Schedule/ScheduleBuilder";
import { Action, LESSONS_SCHEDULE_PAGE_ACTIONS } from "./actions";

const initScheduleData: ISchedule = ScheduleBuilder.BuildSchedule();

const lessonsSchedulePageReducer = (state = initScheduleData, action: Action) => {
  switch (action.type) {
    case LESSONS_SCHEDULE_PAGE_ACTIONS.LESSONS_SCHEDULE_PAGE_DELETE_LESSON:
      state.removeLesson(action.payload);
      return state.clone();
    case LESSONS_SCHEDULE_PAGE_ACTIONS.LESSONS_SCHEDULE_PAGE_SET_SCHEDULE:
      return action.payload.clone();
    default:
      return state;
  }
};

export { lessonsSchedulePageReducer };
