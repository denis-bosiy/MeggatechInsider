import { Action, SUBJECTS_COURSES_SYLLABUS_PAGE_ACTIONS } from "./actions";
import { SubjectsCoursesSyllabusPageData } from "./types";

const initData: SubjectsCoursesSyllabusPageData = [
  {
    id: 0,
    name: "Физика",
    type: "ШЮП",
    hoursByPlan: 15,
    numberOfGroups: 2
  },
  {
    id: 1,
    name: "Биология",
    type: "Подготовительные",
    hoursByPlan: 7,
    numberOfGroups: 1
  },
  {
    id: 2,
    name: "Информатика",
    type: "Экспресс",
    hoursByPlan: 10,
    numberOfGroups: 3
  },
];

const subjectsCoursesSyllabusPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
    case SUBJECTS_COURSES_SYLLABUS_PAGE_ACTIONS.SUBJECTS_COURSES_SYLLABUS_PAGE_DELETE_SUBJECT:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export { subjectsCoursesSyllabusPageReducer };
