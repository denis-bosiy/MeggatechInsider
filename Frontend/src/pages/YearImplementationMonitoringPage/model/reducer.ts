import { guidGenerator } from "../../../utils/guidGenerator";
import { Action, YEAR_IMPLEMENTATION_MONITORING_PAGE_ACTIONS } from "./actions";
import { YearImplementationMonitoringPageData, AdditionalLoad, Teacher } from "./types";

const getInitAdditionalLoadData = (doneHoursLength: number): AdditionalLoad => {
  const additionalLoad: AdditionalLoad = {
    id: guidGenerator(),
    name: "",
    doneHours: [],
    isEditing: true
  };
  for (let i = 0; i < doneHoursLength; i++) {
    additionalLoad.doneHours.push(0);
  }

  return additionalLoad;
};

const initData: YearImplementationMonitoringPageData = {
  months: ["9/23", "10/23", "11/23", "12/23", "1/24", "2/24", "3/24", "4/24", "5/24", "6/24"],
  teachers: [
    {
      id: guidGenerator(),
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
      combinedHours: 0,
      additionalLoads: []
    },
    {
      id: guidGenerator(),
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
      combinedHours: 0,
      additionalLoads: []
    }
  ]
};

const yearImplementationMonitoringPageReducer = (state = initData, action: Action) => {
  switch (action.type) {
    case YEAR_IMPLEMENTATION_MONITORING_PAGE_ACTIONS.SET_DATES:
      return {
        ...state,
        dates: action.payload
      };
    case YEAR_IMPLEMENTATION_MONITORING_PAGE_ACTIONS.SET_TEACHERS:
      return {
        ...state,
        teachers: action.payload
      };
    case YEAR_IMPLEMENTATION_MONITORING_PAGE_ACTIONS.SAVE_ADDITIONAL_LOAD:
      return {
        ...state,
        teachers: state.teachers.map((teacher: Teacher) => {
          if (teacher.id === action.payload.teacherId) {
            const isExists: boolean =
              teacher.additionalLoads.findIndex(
                (additionalLoad: AdditionalLoad) => additionalLoad.id === action.payload.additionalLoad.id
              ) !== -1;

            if (isExists) {
              return {
                ...teacher,
                additionalLoads: teacher.additionalLoads.map((additionalLoad: AdditionalLoad) => {
                  if (additionalLoad.id === action.payload.additionalLoad.id) {
                    return {
                      ...additionalLoad,
                      name: action.payload.additionalLoad.name,
                      doneHours: action.payload.additionalLoad.doneHours
                    };
                  }

                  return additionalLoad;
                })
              };
            }

            return {
              ...teacher,
              additionalLoads: [...teacher.additionalLoads, action.payload.additionalLoad]
            };
          }

          return teacher;
        })
      };
    case YEAR_IMPLEMENTATION_MONITORING_PAGE_ACTIONS.DELETE_ADDITIONAL_LOAD:
      return {
        ...state,
        teachers: state.teachers.map((teacher: Teacher) => {
          if (teacher.id === action.payload.teacherId) {
            return {
              ...teacher,
              additionalLoads: teacher.additionalLoads.filter(
                (additionalLoad: AdditionalLoad) => additionalLoad.id !== action.payload.additionalLoadId
              )
            };
          }

          return teacher;
        })
      };
    default:
      return state;
  }
};

export { yearImplementationMonitoringPageReducer, getInitAdditionalLoadData };
