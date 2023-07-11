import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Work from "./components/Work";
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
      <Work />
    </div>
  );
};

export default App;
