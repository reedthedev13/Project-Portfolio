import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import { Hero } from "./pages/Hero";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Footer } from "./pages/Footer";
import HireMe from "./pages/HireMe";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects />
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/hire" element={<HireMe />} /> {/* new Hire Me page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
