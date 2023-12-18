import {SubjectsCoursesSyllabusPageData} from "./types";

enum SUBJECTS_COURSES_SYLLABUS_PAGE_ACTIONS {
  SAVE_SUBJECTS = "SAVE_SUBJECTS",
}

type ActionSaveSubject = {
  type: SUBJECTS_COURSES_SYLLABUS_PAGE_ACTIONS.SAVE_SUBJECTS,
  payload: SubjectsCoursesSyllabusPageData,
}

type Action = ActionSaveSubject

const ActionBuilder = {
  saveSubjects: (values: SubjectsCoursesSyllabusPageData) => ({
    type: SUBJECTS_COURSES_SYLLABUS_PAGE_ACTIONS.SAVE_SUBJECTS,
    payload: { values },
  }),
};

export {
  SUBJECTS_COURSES_SYLLABUS_PAGE_ACTIONS,
  type Action,
  ActionBuilder,
};
