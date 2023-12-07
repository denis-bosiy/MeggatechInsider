import { guidGenerator } from "../../../../utils/guidGenerator";
import { Action, COURSES_SYLLABUS_PAGE_ACTIONS } from "./actions";
import { CoursesSyllabusPageData } from "./types";

const initData: CoursesSyllabusPageData = {
  subjects: [
    {
      id: guidGenerator(),
      name: "Физика",
      type: "Обязательный профильный",
      groupsCount: 2,
      hoursTotal: 56,
      hoursAwaited: 56,
      hoursPlanned: 56,
      weeksPlan: [3, 3, 3, 3, 3]
    },
    {
      id: guidGenerator(),
      name: "Математика",
      type: "Обязательный профильный",
      groupsCount: 2,
      hoursTotal: 56,
      hoursAwaited: 56,
      hoursPlanned: 56,
      weeksPlan: [3, 3, 3, 3, 3]
    },
    {
      id: guidGenerator(),
      name: "Русский язык",
      type: "Обязательный профильный",
      groupsCount: 2,
      hoursTotal: 56,
      hoursAwaited: 56,
      hoursPlanned: 56,
      weeksPlan: [3, 3, 3, 3, 3]
    }
  ],
  weekStartDates: ["2 окт. №1", "9 окт. №2", "16 окт. №3", "23 окт. №4", "30 окт. №5"]
};

const coursesSyllabusPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
    case COURSES_SYLLABUS_PAGE_ACTIONS.SAVE_SYLLABUS:
      return {
        ...state,
        subjects: action.payload.subjects,
        weekStartDats: action.payload.weekStartDates
      };
    case COURSES_SYLLABUS_PAGE_ACTIONS.SAVE_SUBJECTS:
      return {
        ...state,
        subjects: action.payload.values
      };
    default:
      return state;
  }
};

export { coursesSyllabusPageReducer };
