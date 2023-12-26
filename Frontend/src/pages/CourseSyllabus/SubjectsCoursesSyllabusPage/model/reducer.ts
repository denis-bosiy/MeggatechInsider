import { Action, SUBJECTS_COURSES_SYLLABUS_PAGE_ACTIONS } from "./actions";
import { SubjectsCoursesSyllabusPageData } from "./types";

const initData: SubjectsCoursesSyllabusPageData = [];

const subjectsCoursesSyllabusPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
    case SUBJECTS_COURSES_SYLLABUS_PAGE_ACTIONS.SAVE_SUBJECTS:
      return action.payload.values;
    default:
      return state;
  }
};

export { subjectsCoursesSyllabusPageReducer };
