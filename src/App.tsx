import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./layouts";
import GuidesPage from "./pages/Guides";
import LandingPage from "./pages/landing/Landing";
import ResultPage from "./pages/landing/Result";
import MainPage from "./pages/Main";

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Layout>
      <ToastContainer />
    </Router>
  );
};

export default App;
