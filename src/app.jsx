import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import Sample from "./pages/Sample";
import JsonData from "./data/data.json";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Nav />
      <Landing data={landingPageData.Header} />
      <Sample />
    </div>
  );
};

export default App;
