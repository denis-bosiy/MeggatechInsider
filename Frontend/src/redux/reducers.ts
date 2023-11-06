import {combineReducers} from "redux";
import {testPageReducer} from "../pages/TestPage/model/reducer";
import {subjectsSyllabusPageReducer} from "../pages/Syllabus/SubjectsSyllabusPage/model/reducer";
import {teachersSyllabusPageReducer} from "../pages/Syllabus/TeachersSyllabusPage/model/reducer";
import {assigningSyllabusPageReducer} from "../pages/Syllabus/AssigningSyllabusPage/model/reducer";
import {subjectsCoursesSyllabusPageReducer} from "../pages/СourseSyllabus/SubjectsCoursesSyllabusPage/model/reducer";
import {teacherGuidebookTimetablePageReducer} from "../pages/Timetable/TeacherGuidebookTimetablePage/model/reducer";
import {timetableSettingsPageReducer} from "../pages/Settings/TimetableSettingsPage/model/reducer";

export default combineReducers({
  testPageStore: testPageReducer,
  subjectsSyllabusPageStore: subjectsSyllabusPageReducer,
  teachersSyllabusPageStore: teachersSyllabusPageReducer,
  assigningSyllabusPageStore: assigningSyllabusPageReducer,
  subjectsCoursesSyllabusPageStore: subjectsCoursesSyllabusPageReducer,
  teacherGuidebookTimetablePageStore: teacherGuidebookTimetablePageReducer,
  timetableSettingsPageStore: timetableSettingsPageReducer,
});
