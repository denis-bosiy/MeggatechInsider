import {CategoriesTeachersItem} from "./types";

enum CATEGORIES_TEACHERS_ACTIONS {
  CATEGORIES_TEACHERS_ACTIONS_SET_ITEMS = "CATEGORIES_TEACHERS_ACTIONS_SET_ITEMS",
}

type ActionSetItems = {
  type: CATEGORIES_TEACHERS_ACTIONS.CATEGORIES_TEACHERS_ACTIONS_SET_ITEMS,
  payload: CategoriesTeachersItem[],
}

type Action = ActionSetItems;

const CategoriesTeachersActionBuilder = {
  setItems: (items: string[]) => ({
    type: CATEGORIES_TEACHERS_ACTIONS.CATEGORIES_TEACHERS_ACTIONS_SET_ITEMS,
    payload: items,
  }),
};

export {
  CATEGORIES_TEACHERS_ACTIONS,
  type Action,
  CategoriesTeachersActionBuilder,
};
