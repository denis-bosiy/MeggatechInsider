import { Action, ASSIGNING_COURSES_SYLLABUS_PAGE_ACTIONS } from "./actions";
import {AssigningsCoursesSyllabusData, DiscrepanciesCoursesSyllabusData, AssigningCoursesSyllabusPageData} from "./types";

const initAssigningData: AssigningsCoursesSyllabusData = [
  {
    id: 0,
    name: "JavaScript",
    teacher: "Иванов Иван Иванович",
    groupCount: 3,
    hoursOnWeek: 4.2,
    hoursOnYear: 10,
    costPerHour: 500,
  },
  {
    id: 1,
    name: "История",
    teacher: "Петров Иван Иванович",
    groupCount: 2,
    hoursOnWeek: 4.2,
    hoursOnYear: 10,
    costPerHour: 500,
  },
];

const initDiscrepanciesData: DiscrepanciesCoursesSyllabusData = [
  {
    id: 0,
    name: "Физика",
    groupCount: 1,
    groupCountByPlan: 2
  },
  {
    id: 1,
    name: "История",
    groupCount: 3,
    groupCountByPlan: 2
  },
];

const initData: AssigningCoursesSyllabusPageData = {
  assignings: initAssigningData,
  discrepancies: initDiscrepanciesData,
};

const assigningCoursesSyllabusPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
    case ASSIGNING_COURSES_SYLLABUS_PAGE_ACTIONS.ASSIGNING_COURSES_SYLLABUS_PAGE_DELETE_ASSIGNING:
      return {
        ...state,
        assignings: state.assignings.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export { assigningCoursesSyllabusPageReducer };
