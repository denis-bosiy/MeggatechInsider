import { CoursesSyllabusPageData, CoursesSyllabusSubject } from "./types";

enum COURSES_SYLLABUS_PAGE_ACTIONS {
  SAVE_SYLLABUS = "SAVE_SYLLABUS",
  SAVE_SUBJECTS = "SAVE_SUBJECTS"
}

type ActionSaveSyllabus = {
  type: COURSES_SYLLABUS_PAGE_ACTIONS.SAVE_SYLLABUS;
  payload: CoursesSyllabusPageData;
};

type ActionSaveSubjects = {
  type: COURSES_SYLLABUS_PAGE_ACTIONS.SAVE_SUBJECTS;
  payload: CoursesSyllabusSubject[];
}

type Action = ActionSaveSyllabus | ActionSaveSubjects;

const ActionBuilder = {
  saveSyllabus: (value: CoursesSyllabusPageData) => ({
    type: COURSES_SYLLABUS_PAGE_ACTIONS.SAVE_SYLLABUS,
    payload: { value }
  }),
  saveSubjects: (values: CoursesSyllabusSubject[]) => ({
    type: COURSES_SYLLABUS_PAGE_ACTIONS.SAVE_SUBJECTS,
    payload: { values }
  })
};

export { COURSES_SYLLABUS_PAGE_ACTIONS, type Action, ActionBuilder };
