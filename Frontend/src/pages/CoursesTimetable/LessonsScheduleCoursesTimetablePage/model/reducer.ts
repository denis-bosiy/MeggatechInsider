import {Action, LESSONS_SCHEDULE_COURSES_TIMETABLE_PAGE_ACTIONS} from "./actions";
import {ISchedule} from "../../../../core/Schedule/ISchedule";
import {CourseScheduleBuilder} from "../../../../core/Schedule/CourseScheduleBuilder";

const initScheduleData: ISchedule = CourseScheduleBuilder.BuildSchedule();

const lessonsScheduleCoursesTimetablePageReducer = (state = initScheduleData, action: Action) => {
  switch (action.type) {
    case LESSONS_SCHEDULE_COURSES_TIMETABLE_PAGE_ACTIONS.DELETE_COURSE:
      state.removeLesson(action.payload);
      return state.clone();
    default:
      return state;
  }
};

export {
  lessonsScheduleCoursesTimetablePageReducer,
};
