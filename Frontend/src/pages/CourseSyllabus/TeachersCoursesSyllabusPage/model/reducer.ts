import { Action, TEACHERS_COURSES_SYLLABUS_PAGE_ACTIONS } from "./actions";
import { TeachersCoursesSyllabusPageData } from "./types";

const initData: TeachersCoursesSyllabusPageData = [];

const teachersCoursesSyllabusPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
    case TEACHERS_COURSES_SYLLABUS_PAGE_ACTIONS.SAVE_SUBJECTS:
      return action.payload.values;
    default:
      return state;
  }
};

export { teachersCoursesSyllabusPageReducer };
