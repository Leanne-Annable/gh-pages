import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home/Home';
import Projects from './components/pages/Projects/Projects';
import Contact from './components/pages/Contact/Contact';


function App() {
  return (
    <Router>
      <div className="mainApp">
        <header>
          <NavTabs />
        </header>
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;

