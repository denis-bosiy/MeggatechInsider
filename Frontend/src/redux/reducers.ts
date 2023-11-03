import {combineReducers} from "redux";
import {testPageReducer} from "../pages/TestPage/model/reducer";
import {typesContractsReducer} from "../pages/TeacherSettingsPage/view/typesContracts/model/reducer";
import {categoriesTeachersReducer} from "../pages/TeacherSettingsPage/view/categoriesTeachers/model/reducer";
import {teacherEducationReducer} from "../pages/TeacherSettingsPage/view/teacherEducation/model/reducer";

export default combineReducers({
  testPageStore: testPageReducer,
  typesContractsStore: typesContractsReducer,
  categoriesTeachersStore: categoriesTeachersReducer,
  teacherEducationStore: teacherEducationReducer,
});
