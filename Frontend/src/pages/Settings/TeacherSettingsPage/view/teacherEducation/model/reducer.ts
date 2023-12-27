import { Action, TEACHER_EDUCATION_ACTIONS } from "./actions";
import { TeacherEducationItem } from "./types";
import { guidGenerator } from "../../../../../../utils/guidGenerator";

const defaultData: TeacherEducationItem[] = [
  {
    id: guidGenerator(),
    name: "Среднее образование",
    coefficient: "0.3"
  },
  {
    id: guidGenerator(),
    name: "Высшее образование",
    coefficient: "0.6"
  },
  {
    id: guidGenerator(),
    name: "Степень к.н.",
    coefficient: "0.7"
  },
  {
    id: guidGenerator(),
    name: "Степень д.н.",
    coefficient: "1.0"
  }
];

const teacherEducationReducer = (state: TeacherEducationItem[] = defaultData, action: Action) => {
  switch (action.type) {
    case TEACHER_EDUCATION_ACTIONS.TEACHER_EDUCATION_ACTIONS_SET_ITEMS:
      return [...action.payload];
    default:
      return state;
  }
};

export { teacherEducationReducer };
