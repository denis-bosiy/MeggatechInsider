import {CategoriesTeachersItem} from "./types";

enum CATEGORIES_TEACHERS_ACTIONS {
  CATEGORIES_TEACHERS_ACTIONS_ADD_ITEM = "CATEGORIES_TEACHERS_ACTIONS_ADD_ITEM",
  CATEGORIES_TEACHERS_ACTIONS_SET_ITEMS = "CATEGORIES_TEACHERS_ACTIONS_SET_ITEMS",
  CATEGORIES_TEACHERS_ACTIONS_DELETE_ITEM = "CATEGORIES_TEACHERS_ACTIONS_DELETE_ITEM",
}

type ActionAddItem = {
  type: CATEGORIES_TEACHERS_ACTIONS.CATEGORIES_TEACHERS_ACTIONS_ADD_ITEM,
  payload: {
    name: string,
    coefficient: number,
  },
}

type ActionSetItems = {
  type: CATEGORIES_TEACHERS_ACTIONS.CATEGORIES_TEACHERS_ACTIONS_SET_ITEMS,
  payload: CategoriesTeachersItem[],
}

type ActionDeleteItem = {
  type: CATEGORIES_TEACHERS_ACTIONS.CATEGORIES_TEACHERS_ACTIONS_DELETE_ITEM,
  payload: {
    id: string,
  },
}

type Action = ActionAddItem | ActionSetItems | ActionDeleteItem

const CategoriesTeachersActionBuilder = {
  addItem: (name: string, coefficient: number) => ({
    type: CATEGORIES_TEACHERS_ACTIONS.CATEGORIES_TEACHERS_ACTIONS_ADD_ITEM,
    payload: {
      name,
      coefficient,
    },
  }),
  setItems: (items: string[]) => ({
    type: CATEGORIES_TEACHERS_ACTIONS.CATEGORIES_TEACHERS_ACTIONS_SET_ITEMS,
    payload: items,
  }),
  deleteItem: (id: string) => ({
    type: CATEGORIES_TEACHERS_ACTIONS.CATEGORIES_TEACHERS_ACTIONS_DELETE_ITEM,
    payload: {
      id,
    }
  }),
};

export {
  CATEGORIES_TEACHERS_ACTIONS,
  type Action,
  CategoriesTeachersActionBuilder,
};
