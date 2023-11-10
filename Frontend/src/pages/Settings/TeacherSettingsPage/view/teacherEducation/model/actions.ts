import {TeacherEducationItem} from "./types";

enum TEACHER_EDUCATION_ACTIONS {
  TEACHER_EDUCATION_ACTIONS_ADD_ITEM = "TEACHER_EDUCATION_ACTIONS_ADD_ITEM",
  TEACHER_EDUCATION_ACTIONS_SET_ITEMS = "TEACHER_EDUCATION_ACTIONS_SET_ITEMS",
  TEACHER_EDUCATION_ACTIONS_DELETE_ITEM = "TEACHER_EDUCATION_ACTIONS_DELETE_ITEM",
}

type ActionAddItem = {
  type: TEACHER_EDUCATION_ACTIONS.TEACHER_EDUCATION_ACTIONS_ADD_ITEM,
  payload: {
    name: string,
    coefficient: number,
  },
}

type ActionSetItems = {
  type: TEACHER_EDUCATION_ACTIONS.TEACHER_EDUCATION_ACTIONS_SET_ITEMS,
  payload: TeacherEducationItem[],
}

type ActionDeleteItem = {
  type: TEACHER_EDUCATION_ACTIONS.TEACHER_EDUCATION_ACTIONS_DELETE_ITEM,
  payload: {
    id: string,
  },
}

type Action = ActionAddItem | ActionSetItems | ActionDeleteItem

const TeacherEducationActionBuilder = {
  addItem: (name: string, coefficient: number) => ({
    type: TEACHER_EDUCATION_ACTIONS.TEACHER_EDUCATION_ACTIONS_ADD_ITEM,
    payload: {
      name,
      coefficient,
    },
  }),
  setItems: (items: string[]) => ({
    type: TEACHER_EDUCATION_ACTIONS.TEACHER_EDUCATION_ACTIONS_SET_ITEMS,
    payload: items,
  }),
  deleteItem: (id: string) => ({
    type: TEACHER_EDUCATION_ACTIONS.TEACHER_EDUCATION_ACTIONS_DELETE_ITEM,
    payload: {
      id,
    }
  }),
};

export {
  TEACHER_EDUCATION_ACTIONS,
  type Action,
  TeacherEducationActionBuilder,
};
