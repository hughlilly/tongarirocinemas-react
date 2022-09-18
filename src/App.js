import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import NowPlaying from "./Components/NowPlaying";
import Tickets from "./Components/Tickets";
import Rewards from "./Components/Rewards";
import About from "./Components/About";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/now-playing" element={<NowPlaying />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
};

const appRootElement = document.getElementById("app-root");
render(<App />, appRootElement);
