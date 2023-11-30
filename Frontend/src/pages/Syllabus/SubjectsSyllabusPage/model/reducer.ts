import { Action, SUBJECTS_SYLLABUS_PAGE_ACTIONS } from "./actions";
import { SubjectsSyllabusPageData } from "./types";

const initData: SubjectsSyllabusPageData = [];

const subjectsSyllabusPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
    case SUBJECTS_SYLLABUS_PAGE_ACTIONS.SAVE_SUBJECTS:
      return action.payload.values;
    default:
      return state;
  }
};

export { subjectsSyllabusPageReducer };
