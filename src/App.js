import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import ScrollToTop from "./helpers/scrollToTop";
import Home from "./Components/Home";
import NowPlaying from "./Components/NowPlaying";
import FilmDetail from "./Components/FilmDetail";
import Tickets from "./Components/Tickets";
import Rewards from "./Components/Rewards";
import About from "./Components/About";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Paths for the home page and all other Component pages */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/now-playing" element={<NowPlaying />} />
            {/* Dynamic route for films (by title) */}
            <Route path="/now-playing/:title" element={<FilmDetail />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/about" element={<About />} />
            {/* Display the "NotFound" component if the requested path does not match any of the above specified routes */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

const appRootElement = document.getElementById("app-root");
render(<App />, appRootElement);
