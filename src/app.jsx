import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JsonData from "./data/data.json";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing data={landingPageData.Header} />} />
          <Route path="/Work" element={<Work />} />
          <Route
            path="/About"
            element={<About data={landingPageData.About} />}
          />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        {/* <Sample /> */}
      </BrowserRouter>

      {/* <Nav /> */}
      {/* <Landing data={landingPageData.Header} /> */}
    </div>
  );
};

export default App;
