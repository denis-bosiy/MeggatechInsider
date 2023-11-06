import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ModalSettingsProvider } from "./utils/ModalSettingsContext";
import Modal from "./components/Modal/Modal";
import ComponentsPage from "./pages/ComponentsPage/ComponentsPage";
import Root from "./pages/Root";
import TestPage from "./pages/TestPage/TestPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SubjectsSyllabusPage from "./pages/Syllabus/SubjectsSyllabusPage/SubjectsSyllabusPage";
import TeachersSyllabusPage from "./pages/Syllabus/TeachersSyllabusPage/TeachersSyllabusPage";
import AssigningSyllabusPage from "./pages/Syllabus/AssigningSyllabusPage/AssigningSyllabusPage";
import SubjectsCoursesSyllabusPage from "./pages/СourseSyllabus/SubjectsCoursesSyllabusPage/SubjectsCoursesSyllabusPage";
import TeachersCoursesSyllabusPage from "./pages/СourseSyllabus/TeachersCoursesSyllabusPage/TeachersCoursesSyllabusPage";
import AssigningCoursesSyllabusPage from "./pages/СourseSyllabus/AssigningCoursesSyllabusPage/AssigningCoursesSyllabusPage";
import TeacherGuidebookTimetablePage from "./pages/Timetable/TeacherGuidebookTimetablePage/TeacherGuidebookTimetablePage";
import TimetableSettingsPage from "./pages/Settings/TimetableSettingsPage/TimetableSettingsPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = (): React.JSX.Element => {
  return (
    <ModalSettingsProvider>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route path="login" element={<SignInPage />} />
              <Route path="syllabus">
                <Route path="subjects" element={<SubjectsSyllabusPage />} />
                <Route path="teachers" element={<TeachersSyllabusPage />} />
                <Route path="assigning" element={<AssigningSyllabusPage />} />
              </Route>
              <Route path="courses-syllabus">
                <Route path="subjects" element={<SubjectsCoursesSyllabusPage />} />
                <Route path="teachers" element={<TeachersCoursesSyllabusPage />} />
                <Route path="assigning" element={<AssigningCoursesSyllabusPage />} />
              </Route>
              <Route path="timetable">
                <Route path="teacher-guidebook" element={<TeacherGuidebookTimetablePage />} />
              </Route>
              <Route path="components" element={<ComponentsPage />} />
              <Route path="test-redux" element={<TestPage />} />
              <Route path="settings">
                <Route path="timetable" element={<TimetableSettingsPage />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </Provider>
      <Modal />
    </ModalSettingsProvider>
  );
};

export default App;
