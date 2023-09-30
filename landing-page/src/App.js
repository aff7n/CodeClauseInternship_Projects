import "./sass/App.scss";
import Nav from "./components/nav";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Work from "./components/work";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Work />
    </div>
  );
}

export default App;
