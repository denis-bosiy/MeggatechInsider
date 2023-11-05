import { Action, SUBJECTS_SYLLABUS_PAGE_ACTIONS } from "./actions";
import { SubjectsSyllabusPageData } from "./types";

const initData: SubjectsSyllabusPageData = [
  {
    id: 0,
    subjectName: "Физика",
    financing: "Бюджет",
    type: "Обязательный проф.",
    category: "Физ.",
    surchargeForNotebooks: 15,
    numberOf10: 15,
    numberOfGroupsIn10: 2,
    numberOf11: 20,
    numberOfGroupsIn11: 3,
    isFinalExam: false
  },
  {
    id: 1,
    subjectName: "История",
    financing: "Бюджет",
    type: "Обязательный проф.",
    category: "Ист.",
    surchargeForNotebooks: 18,
    numberOf10: 11,
    numberOfGroupsIn10: 1,
    numberOf11: 20,
    numberOfGroupsIn11: 3,
    isFinalExam: true
  },
];

const subjectsSyllabusPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
    case SUBJECTS_SYLLABUS_PAGE_ACTIONS.SUBJECTS_SYLLABUS_PAGE_SET_IS_FINAL_EXAM:
      return state.map((item) =>
        item.id === action.payload.subjectId ? { ...item, isFinalExam: action.payload.isFinalExam } : item
      );
    case SUBJECTS_SYLLABUS_PAGE_ACTIONS.SUBJECTS_SYLLABUS_PAGE_DELETE_SUBJECT:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export { subjectsSyllabusPageReducer };
