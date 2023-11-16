import {SubjectsSyllabusPageData} from "./types";

enum SUBJECTS_SYLLABUS_PAGE_ACTIONS {
  SAVE_SUBJECTS = "SAVE_SUBJECTS",
}

type ActionSaveSubjects = {
  type: SUBJECTS_SYLLABUS_PAGE_ACTIONS.SAVE_SUBJECTS,
  payload: SubjectsSyllabusPageData,
}

type Action = ActionSaveSubjects

const ActionBuilder = {
  saveSubjects: (values: SubjectsSyllabusPageData) => ({
    type: SUBJECTS_SYLLABUS_PAGE_ACTIONS.SAVE_SUBJECTS,
    payload: { values }
  }),
};

export {
  SUBJECTS_SYLLABUS_PAGE_ACTIONS,
  type Action,
  ActionBuilder,
};
