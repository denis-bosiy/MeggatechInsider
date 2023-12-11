import {
  AvailableTime,
  TeacherGuidebookCoursesTimetableData,
  TeacherGuidebookCoursesTimetablePageData
} from "./types.js";
import { TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS, TeacherGuidebookCoursesTimetableAction } from "./actions";

const initData: TeacherGuidebookCoursesTimetableData[] = [
  {
    id: "1",
    course: "Курс 1",
    type: "ШЮП",
    teacherName: "Леонид Хорошавин",
    teacherId: "1.1",
    availableTimes: ["1"],
    distributedHoursToPlan: 8,
    hoursToPlan: 8,
    creditHours: 0
  },
  {
    id: "2",
    course: "Курс 1",
    type: "Подготовительные",
    teacherName: "Александр Мушкин",
    teacherId: "2.2",
    availableTimes: ["1"],
    distributedHoursToPlan: 10,
    hoursToPlan: 12,
    creditHours: 0
  },
  {
    id: "3",
    course: "Курс 1",
    type: "Экспресс",
    teacherName: "Валентина Смирнова",
    teacherId: "3.1",
    availableTimes: ["1"],
    distributedHoursToPlan: 8,
    hoursToPlan: 6,
    creditHours: 2
  }
];

const initAvailableTimes: AvailableTime[] = [
  {
    id: "1",
    weekDayCode: 0,
    startTime: "08.20",
    endTime: "09.50"
  },
  {
    id: "2",
    weekDayCode: 1,
    startTime: "13.00",
    endTime: "13.45"
  }
];

const initState: TeacherGuidebookCoursesTimetablePageData = {
  availableTimes: initAvailableTimes,
  data: initData
};

const teacherGuidebookCoursesTimetablePageReducer = (
  state = initState,
  action: TeacherGuidebookCoursesTimetableAction
) => {
  switch (action.type) {
    case TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS.SET_DATA:
      return {
        ...state,
        data: [...action.payload]
      };
    default:
      return state;
  }
};

export { teacherGuidebookCoursesTimetablePageReducer };
