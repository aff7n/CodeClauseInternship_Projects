import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import Work from "./pages/Work";
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
        </Routes>
        {/* <Sample /> */}
      </BrowserRouter>

      {/* <Nav /> */}
      {/* <Landing data={landingPageData.Header} /> */}
    </div>
  );
};

export default App;
