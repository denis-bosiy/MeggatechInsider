import { TeacherGuidebookCoursesTimetablePageData } from "./types.js";
import {TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS, TeacherGuidebookCoursesTimetableAction} from "./actions";

const initData: TeacherGuidebookCoursesTimetablePageData = [
  {
    id: 1,
    course: "Курс 1",
    type: "ШЮП",
    teacherName: "Леонид Хорошавин",
    teacherId: 1,
    availableTime: [
      {
        id: 1,
        weekDay: "пн",
        startTime: "08.20",
        endTime: "09.50"
      },
      {
        id: 2,
        weekDay: "вт",
        startTime: "13.00",
        endTime: "13.45"
      },
    ],
    selectedTime: [1],
    distributedHoursToPlan: 8,
    hoursToPlan: 8,
    creditHours: 0,
  },
  {
    id: 2,
    course: "Курс 1",
    type: "Подготовительные",
    teacherName: "Александр Мушкин",
    teacherId: 2,
    availableTime: [
      {
        id: 1,
        weekDay: "пн",
        startTime: "08.20",
        endTime: "09.50"
      },
      {
        id: 2,
        weekDay: "вт",
        startTime: "13.00",
        endTime: "13.45"
      },
    ],
    selectedTime: [1],
    distributedHoursToPlan: 10,
    hoursToPlan: 12,
    creditHours: 0,
  },
  {
    id: 3,
    course: "Курс 1",
    type: "Экспресс",
    teacherName: "Валентина Смирнова",
    teacherId: 2,
    availableTime: [
      {
        id: 1,
        weekDay: "пн",
        startTime: "08.20",
        endTime: "09.50"
      },
      {
        id: 2,
        weekDay: "вт",
        startTime: "13.00",
        endTime: "13.45"
      },
    ],
    selectedTime: [1],
    distributedHoursToPlan: 8,
    hoursToPlan: 6,
    creditHours: 2,
  }
];

const teacherGuidebookCoursesTimetablePageReducer = (
  state = initData,
  action: TeacherGuidebookCoursesTimetableAction,
) => {
  switch (action.type) {
    case TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS.SAVE_DATA:
      return [...action.payload];
    default:
      return state;
  }
};

export {
  teacherGuidebookCoursesTimetablePageReducer,
};
