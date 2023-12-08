import {Action, SYLLABUS_PAGE_ACTIONS} from "./actions";
import {SyllabusData, SyllabusPageData} from "./types";

const initSyllabusData: SyllabusData = [
  {
    id: "0",
    name: "Физика Суворова",
    financing: "Бюджет",
    type: "Обязательный профильный",
    numberOfGroups: 3,
    averagePerYear: 12,
    averageForPeriod: 14,
    hoursTotal: 105,
    hoursExpected: 105,
    hoursOf1Quarter: [10, 11, 12, 10, 11, 12],
    hoursOf2Quarter: [8, 7, 7, 6, 10, 7],
    hoursOf3Quarter: [10, 7, 9, 9, 9, 9],
    hoursOf4Quarter: [6, 6, 6, 6, 6, 6]
  },
  {
    id: "1",
    name: "Математика Федорова",
    financing: "Бюджет",
    type: "Обязательный профильный",
    numberOfGroups: 5,
    averagePerYear: 10,
    averageForPeriod: 11,
    hoursTotal: 99,
    hoursExpected: 99,
    hoursOf1Quarter: [10, 8, 12, 10, 4, 8],
    hoursOf2Quarter: [8, 7, 8, 6, 10, 7],
    hoursOf3Quarter: [10, 7, 9, 9, 10, 9],
    hoursOf4Quarter: [7, 6, 11, 6, 6, 8]
  },
  {
    id: "2",
    name: "Литература Сидоркина",
    financing: "Внебюджет",
    type: "Необязательный профильный",
    numberOfGroups: 2,
    averagePerYear: 5,
    averageForPeriod: 4,
    hoursTotal: 55,
    hoursExpected: 55,
    hoursOf1Quarter: [2, 3, 3, 3, 1, 4],
    hoursOf2Quarter: [1, 2, 1, 6, 3, 5],
    hoursOf3Quarter: [6, 7, 3, 2, 4, 9],
    hoursOf4Quarter: [3, 3, 2, 6, 6, 4]
  },
];

const initData: SyllabusPageData = {
  types: ["Обязательный профильный", "Необязательный профильный"],
  numberOfWeeksIn1Quarter: 6,
  startOf1Quarter: "01.09.2023",
  numberOfWeeksIn2Quarter: 6,
  startOf2Quarter: "10.11.2023",
  numberOfWeeksIn3Quarter: 6,
  startOf3Quarter: "10.01.2024",
  numberOfWeeksIn4Quarter: 6,
  startOf4Quarter: "01.04.2024",
  plan: initSyllabusData
};

const syllabusPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
    case SYLLABUS_PAGE_ACTIONS.SAVE_SYLLABUS:
      return {
        ...state,
        plan: action.payload.values
      };
    default:
      return state;
  }
};

export { syllabusPageReducer };
