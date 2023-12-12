import { GroupGuidebookCoursesTimetablePageData } from "./types";

const initData: GroupGuidebookCoursesTimetablePageData = [
  {
    id: "1",
    name: "Курс 1",
    type: "ШЮП",
    groups: [
      {
        id: "11",
        name: "1",
        distributedHoursToPlan: 0,
        hoursToPlan: 2,
        creditHours: 0
      },
      {
        id: "12",
        name: "2",
        distributedHoursToPlan: 2,
        hoursToPlan: 2,
        creditHours: 0
      },
      {
        id: "13",
        name: "3",
        distributedHoursToPlan: 2,
        hoursToPlan: 2,
        creditHours: 0
      }
    ]
  },
  {
    id: "2",
    name: "Курс 2",
    type: "Экспресс",
    groups: [
      {
        id: "21",
        name: "1",
        distributedHoursToPlan: 0,
        hoursToPlan: 2,
        creditHours: 0
      },
      {
        id: "22",
        name: "2",
        distributedHoursToPlan: 3,
        hoursToPlan: 2,
        creditHours: 0
      },
      {
        id: "23",
        name: "3",
        distributedHoursToPlan: 2,
        hoursToPlan: 2,
        creditHours: 1
      }
    ]
  },
  {
    id: "3",
    name: "Курс 3",
    type: "Подготовительные",
    groups: [
      {
        id: "31",
        name: "1",
        distributedHoursToPlan: 3,
        hoursToPlan: 2,
        creditHours: 0
      },
      {
        id: "32",
        name: "2",
        distributedHoursToPlan: 1,
        hoursToPlan: 2,
        creditHours: 0
      },
      {
        id: "33",
        name: "3",
        distributedHoursToPlan: 2,
        hoursToPlan: 2,
        creditHours: 0
      }
    ]
  }
];

const groupGuidebookCoursesTimetablePageReducer = (state = initData) => {
  return state;
};

export { groupGuidebookCoursesTimetablePageReducer };
