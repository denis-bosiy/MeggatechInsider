import {
  AvailableHours,
  Guidebook,
  TeacherGuidebookTimetableData,
  AvailableHour,
  TeacherGuidebookTimetablePageData
} from "./types";
import { TEACHER_GUIDEBOOK_TIMETABLE_PAGE_ACTIONS, Action } from "./actions";

const initHoursData: AvailableHours = [
  {
    id: "1",
    weekDayCode: 0,
    startTime: "8.00",
    endTime: "9.00"
  },
  {
    id: "2",
    weekDayCode: 0,
    startTime: "9.00",
    endTime: "10.00"
  },
  {
    id: "3",
    weekDayCode: 1,
    startTime: "8.00",
    endTime: "9.00"
  },
  {
    id: "4",
    weekDayCode: 1,
    startTime: "9.00",
    endTime: "10.00"
  }
];

const initGuidebookData: Guidebook = [
  {
    id: "1",
    subjectName: "Физика",
    subjectId: "1",
    teacherName: "Константин Борисович Щуков",
    teacherId: "1",
    availableHours: [],
    distributedHoursToPlan: 16,
    hoursToPlan: 15,
    creditHours: 2,
    workedOverPlan: 20
  },
  {
    id: "2",
    subjectName: "Java",
    subjectId: "2",
    teacherName: "Елена Борисовна Щук",
    teacherId: "2",
    availableHours: [],
    distributedHoursToPlan: 10,
    hoursToPlan: 15,
    creditHours: 2,
    workedOverPlan: 20
  },
  {
    id: "3",
    subjectName: "Java",
    subjectId: "2",
    teacherName: "Алена Борисовна Щук",
    teacherId: "2",
    availableHours: [],
    distributedHoursToPlan: 17,
    hoursToPlan: 15,
    creditHours: 0,
    workedOverPlan: 20
  }
];

const initData: TeacherGuidebookTimetablePageData = {
  availableHours: initHoursData,
  guidebook: initGuidebookData
};

const teacherGuidebookTimetablePageReducer = (state: TeacherGuidebookTimetablePageData = initData, action: Action) => {
  switch (action.type) {
    case TEACHER_GUIDEBOOK_TIMETABLE_PAGE_ACTIONS.SET_TEACHERS:
      return { ...state, guidebook: action.payload.values };
    case TEACHER_GUIDEBOOK_TIMETABLE_PAGE_ACTIONS.SET_AVAILABLE_HOURS:
      return { ...state, availableHours: action.payload };
    default:
      return state;
  }
};

export { teacherGuidebookTimetablePageReducer };
