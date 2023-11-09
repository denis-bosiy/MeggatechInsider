import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import SignInPage from "./pages/SignInPage/SignInPage";
import { ModalSettingsProvider } from "./utils/ModalSettingsContext";
import Modal from "./components/Modal/Modal";
import ComponentsPage from "./pages/ComponentsPage/ComponentsPage";
import BasicSettingsPage from "./pages/SettingsPage/BasicSettingsPage";
import Root from "./pages/Root";
import TestPage from "./pages/TestPage/TestPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import SubjectsSyllabusPage from "./pages/SubjectsSyllabusPage/SubjectsSyllabusPage";
import TeachersSyllabusPage from "./pages/TeachersSyllabusPage/TeachersSyllabusPage";
import AssigningSyllabusPage from "./pages/AssigningSyllabusPage/AssigningSyllabusPage";
import TeacherGuidebookTimetablePage from "./pages/TeacherGuidebookTimetablePage/TeacherGuidebookTimetablePage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import TimetableSettingsPage from "./pages/TimetableSettingsPage/TimetableSettingsPage";
import {AppRouter} from "./router";

const App = (): React.JSX.Element => {
  return (
    <ModalSettingsProvider>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route element={<Root />}>
              <Route path={AppRouter.Main} element={<MenuPage />} />
              <Route path={AppRouter.Login} element={<SignInPage />} />
              <Route path={AppRouter.Syllabus}>
                <Route index element={<Navigate to={AppRouter.Subjects} />} />
                <Route path={AppRouter.Subjects} element={<SubjectsSyllabusPage />} />
                <Route path={AppRouter.Teachers} element={<TeachersSyllabusPage />} />
                <Route path={AppRouter.Assigning} element={<AssigningSyllabusPage />} />
              </Route>
              <Route path={AppRouter.Timetable}>
                <Route path={AppRouter.TeacherGuidebook} element={<TeacherGuidebookTimetablePage />} />
              </Route>
              <Route path="components" element={<ComponentsPage />} />
              <Route path="test-redux" element={<TestPage />} />
              <Route path={AppRouter.Settings}>
                <Route path={AppRouter.Basic} element={<BasicSettingsPage />} />
                <Route path={AppRouter.Timetable} element={<TimetableSettingsPage />} />
              </Route>
              <Route path={AppRouter.NotFound} element={<Navigate to={AppRouter.Main} />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
      <Modal />
    </ModalSettingsProvider>
  );
};

export default App;
