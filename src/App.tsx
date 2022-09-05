import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./layouts";
import GuidesPage from "./pages/Guides";
import FirstLandingPage from "./pages/landing/FirstLanding";
import SecondLandingPage from "./pages/landing/SecondLanding";
import MainPage from "./pages/Main";

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/landing-1" element={<FirstLandingPage />} />
          <Route path="/landing-2" element={<SecondLandingPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/guides" element={<GuidesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
