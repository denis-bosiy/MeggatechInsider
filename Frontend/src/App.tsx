import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SignInPage";
import { ModalSettingsProvider } from "./utils/ModalSettingsContext";
import Modal from "./components/Modal/Modal";
import ComponentsPage from "./pages/ComponentsPage/ComponentsPage";
import Root from "./pages/Root";
import TestPage from "./pages/TestPage/TestPage";
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
              <Route path="components" element={<ComponentsPage />} />
              <Route path="test-redux" element={<TestPage />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
      <Modal />
    </ModalSettingsProvider>
  );
};

export default App;
