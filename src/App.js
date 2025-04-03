import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Members";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import MisionAndVision from "./Components/MisionAndVision";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <MisionAndVision />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
