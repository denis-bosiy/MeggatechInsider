import { HEADER_ACTIONS, HeaderAction } from "./actions";
import { HeaderData, YearSelectOption, WeekSelectOption } from "./types";

const initData: HeaderData = {
  years: [
    {
      id: "1",
      year: 2022,
      content: "Учебный год 2022/2023"
    },
    {
      id: "2",
      year: 2023,
      content: "Учебный год 2023/2024"
    }
  ],
  weeks: [
    {
      id: "1",
      week: 5,
      content: "01.10.2023 - 07.10.2023(неделя 5)"
    },
    {
      id: "2",
      week: 6,
      content: "08.10.2023 - 15.10.2023(неделя 6)"
    }
  ],
  currentYear: {
    id: "1",
    year: 2022,
    content: "Учебный год 2022/2023"
  },
  currentWeek: {
    id: "1",
    week: 5,
    content: "01.10.2023 - 07.10.2023(неделя 5)"
  },
  isLogedIn: false
};

export const headerReducer = (state = initData, action: HeaderAction) => {
  switch (action.type) {
    case HEADER_ACTIONS.SET_AVAILABLE_YEARS:
      return {
        ...state,
        years: action.payload.values
      };
    case HEADER_ACTIONS.CHOOSE_YEAR:
      return {
        ...state,
        currentYear: state.years.find((year: YearSelectOption) => year.id === action.payload)
      };
    case HEADER_ACTIONS.CHOOSE_WEEK:
      return {
        ...state,
        currentWeek: state.weeks.find((week: WeekSelectOption) => week.id === action.payload)
      };
    case HEADER_ACTIONS.LOG_IN:
      return {
        ...state,
        isLogedIn: true
      };
    case HEADER_ACTIONS.LOG_OUT:
      return { ...state, isLogedIn: false };
    default:
      return state;
  }
};
