import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import ByArtist from "./ByArtist";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/byArtist/:artistName" element={<ByArtist />} />
      </Routes>
    </Router>
  );
}

export default App;
