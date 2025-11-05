import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Hero } from "./pages/Hero";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import HireMe from "./pages/HireMe";

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all pages inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <Hero />
                <Projects />
                <About />
                <Contact />
              </>
            }
          />
          <Route path="hire" element={<HireMe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
