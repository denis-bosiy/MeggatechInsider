import {TeacherGuidebookCoursesTimetableData, TeacherGuidebookCoursesTimetablePageData} from "./types";

enum TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS {
  SET_DATA = "TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS_SET_DATA",
  SET_AVAILABLE_TIMES = "TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS_SET_AVAILABLE_TIMES",
}

type ActionSetData = {
  type: TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS.SET_DATA;
  payload: TeacherGuidebookCoursesTimetablePageData[];
};

type ActionSetAvailableTimes = {
  type: TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS.SET_AVAILABLE_TIMES;
  payload: {
    courseId: string,
    availableTimes: string[],
  };
};

type TeacherGuidebookCoursesTimetableAction = ActionSetData | ActionSetAvailableTimes;

const TeacherGuidebookCoursesTimetableActionBuilder = {
  setData: (values: TeacherGuidebookCoursesTimetableData[]) => ({
    type: TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS.SET_DATA,
    payload: values,
  }),
  setAvailableTimes: (courseId: string, availableTimes: string[]) => ({
    type: TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS.SET_AVAILABLE_TIMES,
    payload: {
      courseId,
      availableTimes,
    },
  }),
};

export {
  type TeacherGuidebookCoursesTimetableAction,
  TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS,
  TeacherGuidebookCoursesTimetableActionBuilder,
};
