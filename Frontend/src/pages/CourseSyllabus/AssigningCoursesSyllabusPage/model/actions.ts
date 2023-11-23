import {AssigningsCoursesSyllabusData} from "./types";

enum ASSIGNING_COURSES_SYLLABUS_PAGE_ACTIONS {
  SAVE_ASSIGNING = "SAVE_ASSIGNING",
}

type ActionSaveAssigning = {
  type: ASSIGNING_COURSES_SYLLABUS_PAGE_ACTIONS.SAVE_ASSIGNING,
  payload: AssigningsCoursesSyllabusData,
}

type Action = ActionSaveAssigning

const ActionBuilder = {
  saveAssigning: (values: AssigningsCoursesSyllabusData) => ({
    type: ASSIGNING_COURSES_SYLLABUS_PAGE_ACTIONS.SAVE_ASSIGNING,
    payload: { values }
  }),
};

export {
  ASSIGNING_COURSES_SYLLABUS_PAGE_ACTIONS,
  type Action,
  ActionBuilder,
};
