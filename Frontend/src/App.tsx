import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SignInPage";
import { ModalSettingsProvider } from "./utils/ModalSettingsContext";
import ComponentsPageContainer from "./pages/ComponentsPage/ComponentsPageContainer";
import ModalContainer from "./components/Modal/ModalContainer";

const App = (): React.JSX.Element => {
  return (
    <>
      <ModalSettingsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/components" element={<ComponentsPageContainer />} />
          </Routes>
        </Router>
        <ModalContainer />
      </ModalSettingsProvider>
    </>
  );
};

export default App;
