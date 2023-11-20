import {TeachersSyllabusPageData} from "./types";

enum TEACHERS_SYLLABUS_PAGE_ACTIONS {
  SAVE_SUBJECTS = "SAVE_SUBJECTS",
}

type ActionSaveTeachers = {
  type: TEACHERS_SYLLABUS_PAGE_ACTIONS.SAVE_SUBJECTS,
  payload: TeachersSyllabusPageData,
}

type Action = ActionSaveTeachers

const ActionBuilder = {
  saveTeachers: (values: TeachersSyllabusPageData) => ({
    type: TEACHERS_SYLLABUS_PAGE_ACTIONS.SAVE_SUBJECTS,
    payload: { values }
  }),
};

export {
  TEACHERS_SYLLABUS_PAGE_ACTIONS,
  type Action,
  ActionBuilder,
};
