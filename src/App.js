import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactGA from "react-ga";

import HomePage from "./pages/HomePage";

const App = () => {
  const TRACKING_ID = "UA-253165565-1";

  ReactGA.initialize(TRACKING_ID);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
