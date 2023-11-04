import { TeacherGuidebookTimetablePageData } from "./types";

const initData: TeacherGuidebookTimetablePageData = [
  {
    id: 1,
    subjectName: "Физика",
    subjectId: 1,
    teacherName: "Константин Борисович Щуков",
    teacherId: 1,
    availableHours: [
      {
        id: 1,
        weekDay: "пн",
        startTime: "13.00",
        endTime: "13.45"
      },
      {
        id: 2,
        weekDay: "вт",
        startTime: "13.00",
        endTime: "13.45"
      },
    ],
    distributedHoursToPlan: 16,
    hoursToPlan: 15,
    creditHours: 2,
    workedOverPlan: 20,
  },
  {
    id: 2,
    subjectName: "Java",
    subjectId: 2,
    teacherName: "Елена Борисовна Щук",
    teacherId: 2,
    availableHours: [],
    distributedHoursToPlan: 10,
    hoursToPlan: 15,
    creditHours: 2,
    workedOverPlan: 20,
  },
];

const teacherGuidebookTimetablePageReducer = (state = initData) => {
  return state;
};

export { teacherGuidebookTimetablePageReducer };
