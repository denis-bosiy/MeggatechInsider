import {combineReducers} from "redux";
import {testPageReducer} from "../pages/TestPage/model/reducer";
import {basicSettingsReducer} from "../pages/SettingsPage/model/reducer";
import {subjectsSyllabusPageReducer} from "../pages/SubjectsSyllabusPage/model/reducer";
import {teachersSyllabusPageReducer} from "../pages/TeachersSyllabusPage/model/reducer";
import {assigningSyllabusPageReducer} from "../pages/AssigningSyllabusPage/model/reducer";
import {teacherGuidebookTimetablePageReducer} from "../pages/TeacherGuidebookTimetablePage/model/reducer";
import {timetableSettingsPageReducer} from "../pages/TimetableSettingsPage/model/reducer";

export default combineReducers({
  testPageStore: testPageReducer,
  basicSettingsStore: basicSettingsReducer,
  subjectsSyllabusPageStore: subjectsSyllabusPageReducer,
  teachersSyllabusPageStore: teachersSyllabusPageReducer,
  assigningSyllabusPageStore: assigningSyllabusPageReducer,
  teacherGuidebookTimetablePageStore: teacherGuidebookTimetablePageReducer,
  timetableSettingsPageStore: timetableSettingsPageReducer,
});
