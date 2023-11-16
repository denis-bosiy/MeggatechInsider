import { AvailableHours, Guidebook, TeacherGuidebookTimetablePageData } from "./types";

const initHoursData: AvailableHours = [
  {
    id: "1",
    weekDay: "пн",
    startTime: "8.00",
    endTime: "9.00",
  },
  {
    id: "2",
    weekDay: "пн",
    startTime: "9.00",
    endTime: "10.00",
  },
  {
    id: "3",
    weekDay: "вт",
    startTime: "8.00",
    endTime: "9.00",
  },
  {
    id: "4",
    weekDay: "вт",
    startTime: "9.00",
    endTime: "10.00",
  },
];

const initGuidebookData: Guidebook = [
  {
    id: "1",
    subjectName: "Физика",
    subjectId: "1",
    teacherName: "Константин Борисович Щуков",
    teacherId: "1",
    /*availableHours: [
      {
        id: "1",
        weekDay: "пн",
        startTime: "13.00",
        endTime: "13.45"
      },
      {
        id: "2",
        weekDay: "вт",
        startTime: "13.00",
        endTime: "13.45"
      },
    ],*/
    availableHours: {
      id: "1",
      weekDay: "пн",
      startTime: "8.00",
      endTime: "9.00",
    },
    distributedHoursToPlan: 16,
    hoursToPlan: 15,
    creditHours: 2,
    workedOverPlan: 20,
  },
  {
    id: "2",
    subjectName: "Java",
    subjectId: "2",
    teacherName: "Елена Борисовна Щук",
    teacherId: "2",
    availableHours: {
      id: "4",
      weekDay: "вт",
      startTime: "9.00",
      endTime: "10.00",
    },
    distributedHoursToPlan: 10,
    hoursToPlan: 15,
    creditHours: 2,
    workedOverPlan: 20,
  },
  {
    id: "3",
    subjectName: "Java",
    subjectId: "2",
    teacherName: "Алена Борисовна Щук",
    teacherId: "2",
    availableHours: {
      id: "4",
      weekDay: "вт",
      startTime: "9.00",
      endTime: "10.00",
    },
    distributedHoursToPlan: 17,
    hoursToPlan: 15,
    creditHours: 0,
    workedOverPlan: 20,
  },
];

const initData: TeacherGuidebookTimetablePageData = {
  guidebook: initGuidebookData,
  availableHours: initHoursData,
};

const teacherGuidebookTimetablePageReducer = (state = initData) => {
  return state;
};

export { teacherGuidebookTimetablePageReducer };
