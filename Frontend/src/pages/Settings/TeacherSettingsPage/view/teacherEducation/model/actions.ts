import {TeacherEducationItem} from "./types";

enum TEACHER_EDUCATION_ACTIONS {
  TEACHER_EDUCATION_ACTIONS_SET_ITEMS = "TEACHER_EDUCATION_ACTIONS_SET_ITEMS",
}

type ActionSetItems = {
  type: TEACHER_EDUCATION_ACTIONS.TEACHER_EDUCATION_ACTIONS_SET_ITEMS,
  payload: TeacherEducationItem[],
}

type Action = ActionSetItems

const TeacherEducationActionBuilder = {
  setItems: (items: string[]) => ({
    type: TEACHER_EDUCATION_ACTIONS.TEACHER_EDUCATION_ACTIONS_SET_ITEMS,
    payload: items,
  }),
};

export {
  TEACHER_EDUCATION_ACTIONS,
  type Action,
  TeacherEducationActionBuilder,
};
