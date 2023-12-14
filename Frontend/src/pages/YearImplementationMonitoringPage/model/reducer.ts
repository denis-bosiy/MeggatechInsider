import { Action, YEAR_IMPLEMENTATION_MONITORING_PAGE_ACTIONS } from "./actions";
import { YearImplementationMonitoringPageData, Teacher } from "./types";

const initData: YearImplementationMonitoringPageData = {
  dates: ["09/23", "10/23", "11/23", "12/23", "01/24", "02/24", "03/24", "04/24", "05/24", "06/24"],
  teachers: [
    {
      name: "Иванов Иван Иванович",
      type: "ГПХ",
      subjects: [
        {
          name: "История",
          classes: [
            {
              name: "10-1",
              hoursPlanned: 0,
              doneHours: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              totalDoneHours: 8,
              doneDistanceHours: 8,
              doneCombinedHours: 8
            },
            {
              name: "10-2",
              hoursPlanned: 0,
              doneHours: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              totalDoneHours: 8,
              doneDistanceHours: 8,
              doneCombinedHours: 8
            }
          ]
        }
      ],
      hoursPerWeek: 0,
      remoteHours: 0,
      combinedHours: 0
    },
    {
      name: "Иванова Алла Викторовна",
      type: "Совместитель",
      subjects: [
        {
          name: "Математика",
          classes: [
            {
              name: "10-1",
              hoursPlanned: 0,
              doneHours: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              totalDoneHours: 8,
              doneDistanceHours: 8,
              doneCombinedHours: 8
            }
          ]
        },
        {
          name: "Физика",
          classes: [
            {
              name: "10-2",
              hoursPlanned: 0,
              doneHours: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              totalDoneHours: 8,
              doneDistanceHours: 8,
              doneCombinedHours: 8
            }
          ]
        },
        {
          name: "Проблемы в физике",
          classes: [
            {
              name: "10-1",
              hoursPlanned: 0,
              doneHours: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              totalDoneHours: 8,
              doneDistanceHours: 8,
              doneCombinedHours: 8
            }
          ]
        }
      ],
      hoursPerWeek: 0,
      remoteHours: 0,
      combinedHours: 0
    }
  ]
};

const yearImplementationMonitoringPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
    case YEAR_IMPLEMENTATION_MONITORING_PAGE_ACTIONS.YEAR_IMPLEMENTATION_MONITORING_PAGE_SET_DATES:
      return {
        ...state,
        dates: action.payload
      };
    case YEAR_IMPLEMENTATION_MONITORING_PAGE_ACTIONS.YEAR_IMPLEMENTATION_MONITORING_PAGE_SET_TEACHERS:
      return {
        ...state,
        teachers: action.payload
      };
    default:
      return state;
  }
};

export { yearImplementationMonitoringPageReducer };
