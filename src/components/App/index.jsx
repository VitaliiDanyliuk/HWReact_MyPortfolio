import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Nav from "../Nav";
import Footer from "../Footer";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Contacts from "../../pages/Contacts";
import Project from "../../pages/Project";

import './app.css'
import ScrollToTop from "../../utils/scrollToTop";


const App = () => {
  return (
<div className="App">

      <Router>
        <ScrollToTop />
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project /> } />
          <Route path="/contacts" element={<Contacts /> } />
        </Routes>

        <Footer />
      </Router>
</div>
  );
}

export default App;
