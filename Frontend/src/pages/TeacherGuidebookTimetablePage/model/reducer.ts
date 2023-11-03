import { TeacherGuidebookTimetablePageData } from "./types";

const initData: TeacherGuidebookTimetablePageData = [
  {
    subjectName: "Физика",
    subjectId: 1,
    teacherName: "Константин Борисович Щуков",
    teacherId: 1,
    availableHours: [
      {
        weekDay: "пн",
        dayTime: "13.00-13.45",
      },
      {
        weekDay: "вт",
        dayTime: "13.00-13.45",
      },
    ],
    distributedHoursToPlan: 15,
    hoursToPlan: 15,
    creditHours: 2,
    workedOverPlan: 20,
  },
  {
    subjectName: "Java",
    subjectId: 2,
    teacherName: "Елена Борисовна Щук",
    teacherId: 2,
    availableHours: [],
    distributedHoursToPlan: 15,
    hoursToPlan: 15,
    creditHours: 2,
    workedOverPlan: 20,
  },
];

const teacherGuidebookTimetablePageReducer = (state = initData) => {
  return state;
};

export { teacherGuidebookTimetablePageReducer };
