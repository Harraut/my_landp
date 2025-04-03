import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Members from "./Components/Members";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import MisionAndVision from "./Components/MisionAndVision";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <MisionAndVision />
      <Members />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
