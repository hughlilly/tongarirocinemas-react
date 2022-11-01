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

function App() {
  return (
    <React.StrictMode>
      <Router>
        {/* Header before all routes */}
        <Header />
        <Routes>
          {/* Paths for the home page and all other Component pages */}
          <Route path="/tongarirocinemas-react/" element={<Home />} />
          <Route
            path="/tongarirocinemas-react/now-playing"
            element={<NowPlaying />}
          />
          <Route path="/tongarirocinemas-react/tickets" element={<Tickets />} />
          <Route path="/tongarirocinemas-react/rewards" element={<Rewards />} />
          <Route path="/tongarirocinemas-react/about" element={<About />} />
          {/* Display the "NotFound" component if the requested path does not match any of the above specified routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Footer after all routes */}
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

const appRootElement = document.getElementById("app-root");
render(<App />, appRootElement);
