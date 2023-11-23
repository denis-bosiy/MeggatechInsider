import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ModalSettingsProvider } from "./utils/ModalSettingsContext";
import Modal from "./components/Modal/Modal";
import ComponentsPage from "./pages/ComponentsPage/ComponentsPage";
import BasicSettingsPage from "./pages/Settings/BasicSettingsPage/BasicSettingsPage";
import Root from "./pages/Root";
import TestPage from "./pages/TestPage/TestPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SubjectsSyllabusPage from "./pages/Syllabus/SubjectsSyllabusPage/SubjectsSyllabusPage";
import TeachersSyllabusPage from "./pages/Syllabus/TeachersSyllabusPage/TeachersSyllabusPage";
import AssigningSyllabusPage from "./pages/Syllabus/AssigningSyllabusPage/AssigningSyllabusPage";
import SubjectsCoursesSyllabusPage
  from "./pages/CourseSyllabus/SubjectsCoursesSyllabusPage/SubjectsCoursesSyllabusPage";
import TeachersCoursesSyllabusPage
  from "./pages/CourseSyllabus/TeachersCoursesSyllabusPage/TeachersCoursesSyllabusPage";
import AssigningCoursesSyllabusPage
  from "./pages/CourseSyllabus/AssigningCoursesSyllabusPage/AssigningCoursesSyllabusPage";
import TeacherGuidebookTimetablePage
  from "./pages/Timetable/TeacherGuidebookTimetablePage/TeacherGuidebookTimetablePage";
import TimetableSettingsPage from "./pages/Settings/TimetableSettingsPage/TimetableSettingsPage";
import TeacherSettingsPage from "./pages/Settings/TeacherSettingsPage/TeacherSettingsPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AppRouter } from "./router";
import LessonsSchedulePage from "./pages/LessonsSchedulePage/LessonsSchedulePage";
import TeacherGuidebookCoursesTimetablePage from "./pages/CoursesTimetable/TeacherGuidebookCoursesTimetablePage/TeacherGuidebookCoursesTimetablePage";
import GroupGuidebookCoursesTimetablePage
  from "./pages/CoursesTimetable/GroupGuidebookCoursesTimetablePage/GroupGuidebookCoursesTimetablePage";

const queryClient = new QueryClient();
const App = (): React.JSX.Element => {
  return (
    <ModalSettingsProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route element={<Root />}>
                <Route path={AppRouter.Main} element={<MenuPage />} />
                <Route path={AppRouter.Login} element={<SignInPage />} />
                <Route path={AppRouter.Settings}>
                  <Route index element={<Navigate to={AppRouter.Basic} />} />
                  <Route path={AppRouter.Basic} element={<BasicSettingsPage />} />
                  <Route path={AppRouter.Timetable} element={<TimetableSettingsPage />} />
                  <Route path={AppRouter.Teachers} element={<TeacherSettingsPage />} />
                </Route>
                <Route path={AppRouter.Syllabus}>
                  <Route index element={<Navigate to={AppRouter.Subjects} />} />
                  <Route path={AppRouter.Subjects} element={<SubjectsSyllabusPage />} />
                  <Route path={AppRouter.Teachers} element={<TeachersSyllabusPage />} />
                  <Route path={AppRouter.Assigning} element={<AssigningSyllabusPage />} />
                </Route>
                <Route path={AppRouter.CoursesSyllabus}>
                  <Route index element={<Navigate to={AppRouter.Subjects} />} />
                  <Route path={AppRouter.Subjects} element={<SubjectsCoursesSyllabusPage />} />
                  <Route path={AppRouter.Teachers} element={<TeachersCoursesSyllabusPage />} />
                  <Route path={AppRouter.Assigning} element={<AssigningCoursesSyllabusPage />} />
                </Route>
                <Route path={AppRouter.Timetable}>
                  <Route path={AppRouter.TeacherGuidebook} element={<TeacherGuidebookTimetablePage />} />
                </Route>
                <Route path={AppRouter.CoursesTimetable}>
                  <Route path={AppRouter.TeacherGuidebook} element={<TeacherGuidebookCoursesTimetablePage/>} />
                  <Route path={AppRouter.GroupGuidebook} element={<GroupGuidebookCoursesTimetablePage/>} />
                </Route>
                <Route path={AppRouter.LessonsSchedule} element={<LessonsSchedulePage />} />
                <Route path="components" element={<ComponentsPage />} />
                <Route path="test-redux" element={<TestPage />} />
                <Route path={AppRouter.NotFound} element={<Navigate to={AppRouter.Main} />} />
              </Route>
            </Routes>
          </Router>
        </Provider>
      </QueryClientProvider>
      <Modal />
    </ModalSettingsProvider>
  );
};

export default App;
