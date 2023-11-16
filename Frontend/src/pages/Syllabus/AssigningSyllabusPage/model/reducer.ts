import { Action, ASSIGNING_SYLLABUS_PAGE_ACTIONS } from "./actions";
import {AssigningsSyllabusData, DiscrepanciesSyllabusData, AssigningSyllabusPageData} from "./types";

const initAssigningData: AssigningsSyllabusData = [
  {
    id: "0",
    name: "JavaScript",
    teacher: "Иванов Иван Иванович",
    groupCount: 3,
    hoursByPlanOnClassOfTheStudents: 5,
    hoursOnWeekForTheClassOfTheStudents: 4.2,
    hoursOnWeekOnYearOnTheTeacher: 4.2,
    hoursOnWeekOnPeriodOnTheTeacher: 0.23,
    hoursIn1Subgroup: 105,
    hoursIn2Subgroup: 91,
    totalInYear: 134,
    bidShare: 0.5
  },
  {
    id: "1",
    name: "История",
    teacher: "Петров Иван Иванович",
    groupCount: 2,
    hoursByPlanOnClassOfTheStudents: 4,
    hoursOnWeekForTheClassOfTheStudents: 6.2,
    hoursOnWeekOnYearOnTheTeacher: 4.2,
    hoursOnWeekOnPeriodOnTheTeacher: 0.23,
    hoursIn1Subgroup: 105,
    hoursIn2Subgroup: 91,
    totalInYear: 128,
    bidShare: 0.5
  },
];

const initDiscrepanciesData: DiscrepanciesSyllabusData = [
  {
    id: "0",
    name: "Физика",
    groupCount: 1,
    groupCountByPlan: 2
  },
  {
    id: "1",
    name: "История",
    groupCount: 3,
    groupCountByPlan: 2
  },
];

const initData: AssigningSyllabusPageData = {
  assignings: initAssigningData,
  discrepancies: initDiscrepanciesData,
};

const assigningSyllabusPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
    case ASSIGNING_SYLLABUS_PAGE_ACTIONS.SAVE_ASSIGNING:
      return {
        ...state,
        assignings: action.payload.values
      };
    default:
      return state;
  }
};

export { assigningSyllabusPageReducer };
