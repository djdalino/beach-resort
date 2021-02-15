import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import { sliderData } from "./data/SliderData";
import Info from "./components/Info/Info";
function App() {
  return (
    <Router>
      <Navbar />
      <Hero slides={sliderData} />
      <Info />
    </Router>
  );
}

export default App;
