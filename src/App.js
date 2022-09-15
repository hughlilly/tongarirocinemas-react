import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import NowPlaying from "./Components/NowPlaying";
import Rewards from "./Components/Rewards";
import Tickets from "./Components/Tickets";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <React.StrictMode>
      <React.Fragment>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/now-playing" element={<NowPlaying />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/tickets" element={<Tickets />} />
          </Routes>
          <Footer />
        </Router>
      </React.Fragment>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
