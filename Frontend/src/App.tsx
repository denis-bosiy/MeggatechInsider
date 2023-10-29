import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SignInPage";
import { ModalSettingsProvider } from "./utils/ModalSettingsContext";
import Modal from "./components/Modal/Modal";
import ComponentsPage from "./pages/ComponentsPage/ComponentsPage";

const App = (): React.JSX.Element => {
  return (
    <>
      <ModalSettingsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/components" element={<ComponentsPage />} />
          </Routes>
        </Router>
        <Modal />
      </ModalSettingsProvider>
    </>
  );
};

export default App;
