import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Members from "./Components/Members";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import MisionAndVision from "./Components/MisionAndVision";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={<><Home /> <About /> <MisionAndVision /> <Contact /> </>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/members" element={<Members />} />
        </Routes>
        
        <Footer />
        
      </Router>
    </div>
  );
}

export default App;
