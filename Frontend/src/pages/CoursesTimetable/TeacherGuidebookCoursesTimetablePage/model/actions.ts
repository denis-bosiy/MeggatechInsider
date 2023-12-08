import {TeacherGuidebookCoursesTimetableData, TeacherGuidebookCoursesTimetablePageData} from "./types";

enum TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS {
  SET_DATA = "TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS_SET_DATA",
}

type ActionSetData = {
  type: TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS.SET_DATA;
  payload: TeacherGuidebookCoursesTimetablePageData[];
};

type TeacherGuidebookCoursesTimetableAction = ActionSetData;

const TeacherGuidebookCoursesTimetableActionBuilder = {
  setData: (values: TeacherGuidebookCoursesTimetableData[]) => ({
    type: TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS.SET_DATA,
    payload: values,
  }),
};

export {
  type TeacherGuidebookCoursesTimetableAction,
  TEACHER_GUIDEBOOK_COURSES_TIMETABLE_PAGE_ACTIONS,
  TeacherGuidebookCoursesTimetableActionBuilder,
};
