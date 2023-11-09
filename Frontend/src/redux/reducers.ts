import {combineReducers} from "redux";
import {testPageReducer} from "../pages/TestPage/model/reducer";
import {basicSettingsReducer} from "../pages/SettingsPage/model/reducer";
import {subjectsSyllabusPageReducer} from "../pages/SubjectsSyllabusPage/model/reducer";
import {teachersSyllabusPageReducer} from "../pages/TeachersSyllabusPage/model/reducer";
import {assigningSyllabusPageReducer} from "../pages/AssigningSyllabusPage/model/reducer";
import {teacherGuidebookTimetablePageReducer} from "../pages/TeacherGuidebookTimetablePage/model/reducer";
import {timetableSettingsPageReducer} from "../pages/TimetableSettingsPage/model/reducer";
import {typesContractsReducer} from "../pages/TeacherSettingsPage/view/typesContracts/model/reducer";
import {categoriesTeachersReducer} from "../pages/TeacherSettingsPage/view/categoriesTeachers/model/reducer";
import {teacherEducationReducer} from "../pages/TeacherSettingsPage/view/teacherEducation/model/reducer";

export default combineReducers({
  testPageStore: testPageReducer,
  basicSettingsStore: basicSettingsReducer,
  subjectsSyllabusPageStore: subjectsSyllabusPageReducer,
  teachersSyllabusPageStore: teachersSyllabusPageReducer,
  assigningSyllabusPageStore: assigningSyllabusPageReducer,
  teacherGuidebookTimetablePageStore: teacherGuidebookTimetablePageReducer,
  timetableSettingsPageStore: timetableSettingsPageReducer,
  typesContractsStore: typesContractsReducer,
  categoriesTeachersStore: categoriesTeachersReducer,
  teacherEducationStore: teacherEducationReducer,
});
