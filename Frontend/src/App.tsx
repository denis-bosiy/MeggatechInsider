import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SignInPage";
import { ModalSettingsProvider } from "./utils/ModalSettingsContext";
import Modal from "./components/Modal/Modal";
import ComponentsPage from "./pages/ComponentsPage/ComponentsPage";
import Root from "./pages/Root";
import TestPage from "./pages/TestPage/TestPage";
import SubjectsSyllabusPage from "./pages/SubjectsSyllabusPage/SubjectsSyllabusPage";
import TeachersSyllabusPage from "./pages/TeachersSyllabusPage/TeachersSyllabusPage";
import AssigningSyllabusPage from "./pages/AssigningSyllabusPage/AssigningSyllabusPage";
import TeacherGuidebookTimetablePage from "./pages/TeacherGuidebookTimetablePage/TeacherGuidebookTimetablePage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import TimetableSettingsPage from "./pages/TimetableSettingsPage/TimetableSettingsPage";


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
