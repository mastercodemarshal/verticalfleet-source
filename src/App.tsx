import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./layouts";
import LandingPage from "./pages/landing/Landing";
import ResultPage from "./pages/landing/Result";
import MainPage from "./pages/Main";
import QuickLanding from "./pages/QuickLanding";

interface IFlightState {
  current: string;
  destination: string;
  dateFrom: Date;
  dateTo: Date;
  passengers: string;
  type: string;
}

export const FlightContext = createContext({
  flightState: [] as IFlightState[],
  setFlightState: (arg: IFlightState[]) => {},
});

const App: React.FC = (): JSX.Element => {
  const [flightState, setFlightState] = useState(
    JSON.parse(localStorage.getItem("data") || "[]") as IFlightState[]
  );

  return (
    <FlightContext.Provider value={{ flightState, setFlightState }}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/landing/" element={<LandingPage />} />
            <Route path="/landing/:id" element={<QuickLanding />} />
            <Route path="/result/" element={<ResultPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/round-trip/" element={<MainPage />} />
            <Route path="/one-way/" element={<MainPage />} />
            <Route path="/multy-city/" element={<MainPage />} />
          </Routes>
        </Layout>
        <ToastContainer />
      </Router>
    </FlightContext.Provider>
  );
};

export default App;
