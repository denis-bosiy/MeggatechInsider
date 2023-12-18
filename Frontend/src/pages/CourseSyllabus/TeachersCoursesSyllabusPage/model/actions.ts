import {TeachersCoursesSyllabusPageData} from "./types";

enum TEACHERS_COURSES_SYLLABUS_PAGE_ACTIONS {
  SAVE_SUBJECTS = "SAVE_SUBJECTS",
}

type ActionSaveTeachers = {
  type: TEACHERS_COURSES_SYLLABUS_PAGE_ACTIONS.SAVE_SUBJECTS,
  payload: TeachersCoursesSyllabusPageData,
}

type Action = ActionSaveTeachers

const ActionBuilder = {
  saveTeachers: (values: TeachersCoursesSyllabusPageData) => ({
    type: TEACHERS_COURSES_SYLLABUS_PAGE_ACTIONS.SAVE_SUBJECTS,
    payload: { values },
  }),
};

export {
  TEACHERS_COURSES_SYLLABUS_PAGE_ACTIONS,
  type Action,
  ActionBuilder,
};
