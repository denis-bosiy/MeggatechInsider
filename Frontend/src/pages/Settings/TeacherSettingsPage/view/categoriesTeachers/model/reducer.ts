import { guidGenerator } from "../../../../../../utils/guidGenerator";
import { Action, CATEGORIES_TEACHERS_ACTIONS } from "./actions";
import { CategoriesTeachersItem } from "./types";

const defaultData: CategoriesTeachersItem[] = [
  {
    id: guidGenerator(),
    category: "Высшая категория",
    coefficient: "0.3"
  }
];

const categoriesTeachersReducer = (state: CategoriesTeachersItem[] = defaultData, action: Action) => {
  switch (action.type) {
    case CATEGORIES_TEACHERS_ACTIONS.CATEGORIES_TEACHERS_ACTIONS_SET_ITEMS:
      return [...action.payload];
    default:
      return state;
  }
};

export { categoriesTeachersReducer };
