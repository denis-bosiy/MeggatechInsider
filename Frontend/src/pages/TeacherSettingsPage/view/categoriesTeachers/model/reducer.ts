import {Action, CATEGORIES_TEACHERS_ACTIONS} from "./actions";
import {CategoriesTeachersItem} from "./types";

const defaultData: CategoriesTeachersItem[] = [{
  id: "Высшая категория",
  category: "Высшая категория",
  coefficient: 0.3,
}];

const categoriesTeachersReducer = (state: CategoriesTeachersItem[] = defaultData, action: Action) => {
  switch (action.type) {
    case CATEGORIES_TEACHERS_ACTIONS.CATEGORIES_TEACHERS_ACTIONS_ADD_ITEM:
      return [...state, {
        id: action.payload.name,
        category: action.payload.name,
        coefficient: action.payload.coefficient,
      }];
    case CATEGORIES_TEACHERS_ACTIONS.CATEGORIES_TEACHERS_ACTIONS_SET_ITEMS:
      return [...action.payload];
    case CATEGORIES_TEACHERS_ACTIONS.CATEGORIES_TEACHERS_ACTIONS_DELETE_ITEM:
      return [...state].filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export { categoriesTeachersReducer };
