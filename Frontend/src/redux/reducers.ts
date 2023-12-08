import {combineReducers} from "redux";
import {testPageReducer} from "../pages/TestPage/model/reducer";
import {subjectsSyllabusPageReducer} from "../pages/Syllabus/SubjectsSyllabusPage/model/reducer";
import {teachersSyllabusPageReducer} from "../pages/Syllabus/TeachersSyllabusPage/model/reducer";
import {assigningSyllabusPageReducer} from "../pages/Syllabus/AssigningSyllabusPage/model/reducer";
import {syllabusPageReducer} from "../pages/Syllabus/SyllabusPage/model/reducer";
import {subjectsCoursesSyllabusPageReducer} from "../pages/CourseSyllabus/SubjectsCoursesSyllabusPage/model/reducer";
import {teachersCoursesSyllabusPageReducer} from "../pages/CourseSyllabus/TeachersCoursesSyllabusPage/model/reducer";
import {assigningCoursesSyllabusPageReducer} from "../pages/CourseSyllabus/AssigningCoursesSyllabusPage/model/reducer";
import {teacherGuidebookTimetablePageReducer} from "../pages/Timetable/TeacherGuidebookTimetablePage/model/reducer";
import {timetableSettingsPageReducer} from "../pages/Settings/TimetableSettingsPage/model/reducer";
import {basicSettingsReducer} from "../pages/Settings/BasicSettingsPage/model/reducer";
import {typesContractsReducer} from "../pages/Settings/TeacherSettingsPage/view/typesContracts/model/reducer";
import {categoriesTeachersReducer} from "../pages/Settings/TeacherSettingsPage/view/categoriesTeachers/model/reducer";
import {teacherEducationReducer} from "../pages/Settings/TeacherSettingsPage/view/teacherEducation/model/reducer";
import {
  teacherGuidebookCoursesTimetablePageReducer
} from "../pages/CoursesTimetable/TeacherGuidebookCoursesTimetablePage/model/reducer";
import {
  groupGuidebookCoursesTimetablePageReducer
} from "../pages/CoursesTimetable/GroupGuidebookCoursesTimetablePage/model/reducer";
import {lessonsSchedulePageReducer} from "../pages/LessonsSchedulePage/model/reducer";
import {headerReducer} from "../layouts/Header/model/reducer";
import {classGuidebookTimetablePageReducer} from "../pages/Timetable/ClassGuidebookPage/model/reducer";
import {budgetStatisticsPageReducer} from "../pages/Statistics/BudgetStatisticsPage/model/reducer";
import {teachersStatisticsPageReducer} from "../pages/Statistics/TeachersStatisticsPage/model/reducer";
import {categoriesStatisticsPageReducer} from "../pages/Statistics/CategoriesStatisticsPage/model/reducer";
import {teachersOffBudgetReportPageReducer} from "../pages/FinancialReports/OffBudgerReportPage/model/reducer";
import {finalReportPageReducer} from "../pages/FinancialReports/FinalReportPage/model/reducer";
import {tarifficationReportPageReducer} from "../pages/FinancialReports/TarifficationReportPage/model/reducer";
import {coursesSyllabusPageReducer} from "../pages/СourseSyllabus/CoursesSyllabusPage/model/reducer";

export default combineReducers({
  testPageStore: testPageReducer,
  basicSettingsStore: basicSettingsReducer,
  subjectsSyllabusPageStore: subjectsSyllabusPageReducer,
  teachersSyllabusPageStore: teachersSyllabusPageReducer,
  assigningSyllabusPageStore: assigningSyllabusPageReducer,
  syllabusPageStore: syllabusPageReducer,
  subjectsCoursesSyllabusPageStore: subjectsCoursesSyllabusPageReducer,
  teachersCoursesSyllabusPageStore: teachersCoursesSyllabusPageReducer,
  assigningCoursesSyllabusPageStore: assigningCoursesSyllabusPageReducer,
  teacherGuidebookTimetablePageStore: teacherGuidebookTimetablePageReducer,
  timetableSettingsPageStore: timetableSettingsPageReducer,
  typesContractsStore: typesContractsReducer,
  categoriesTeachersStore: categoriesTeachersReducer,
  teacherEducationStore: teacherEducationReducer,
  lessonsScheduleStore: lessonsSchedulePageReducer,
  teacherGuidebookCoursesTimetablePageStore: teacherGuidebookCoursesTimetablePageReducer,
  groupGuidebookCoursesTimetablePageStore: groupGuidebookCoursesTimetablePageReducer,
  headerStore: headerReducer,
  classGuidebookTimetableStore: classGuidebookTimetablePageReducer,
  budgetStatisticsPageStore: budgetStatisticsPageReducer,
  teachersStatisticsPageStore: teachersStatisticsPageReducer,
  categoriesStatisticsPageStore: categoriesStatisticsPageReducer,
  teachersOffBudgetReportPageStore: teachersOffBudgetReportPageReducer,
  finalReportPageStore: finalReportPageReducer,
  tarifficationReportPageStore: tarifficationReportPageReducer,
  coursesSyllabusPageStore: coursesSyllabusPageReducer
});
