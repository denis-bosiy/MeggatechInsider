import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SignInPage";
import ComponentsPage from "./pages/ComponentsPage/ComponentsPage";
import Root from "./pages/Root";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="login" element={<SignInPage />} />
          <Route path="components" element={<ComponentsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
