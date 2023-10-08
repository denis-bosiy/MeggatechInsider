import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SignInPage";
import ComponentsPage from "./pages/ComponentsPage/ComponentsPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/components" element={<ComponentsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
