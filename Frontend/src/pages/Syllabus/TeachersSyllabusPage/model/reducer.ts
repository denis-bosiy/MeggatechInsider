import { Action, TEACHERS_SYLLABUS_PAGE_ACTIONS } from "./actions";
import { TeachersSyllabusPageData } from "./types";

const initData: TeachersSyllabusPageData = [];

const teachersSyllabusPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
    case TEACHERS_SYLLABUS_PAGE_ACTIONS.SAVE_SUBJECTS:
      return action.payload.values;
    default:
      return state;
  }
};

export { teachersSyllabusPageReducer };
