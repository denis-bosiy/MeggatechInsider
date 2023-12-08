import { Action, TEACHER_EDUCATION_ACTIONS } from "./actions";
import { TeacherEducationItem } from "./types";

const defaultData: TeacherEducationItem[] = [
  {
    id: "Среднее образование",
    education: "Среднее образование",
    coefficient: 0.3
  },
  {
    id: "Высшее образование",
    education: "Высшее образование",
    coefficient: 0.3
  },
  {
    id: "Степень к.н.",
    education: "Степень к.н.",
    coefficient: 0.3
  },
  {
    id: "Степень д.н.",
    education: "Степень д.н.",
    coefficient: 0.3
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
