
import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import HomePage from './components/HomePage';
import Education from './components/Education';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Certificates from './components/Certificates';



function App() {
  return (
    <Router>
      
        
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/education" element={<Education />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/certificates" element={<Try />} />
          
        </Routes>
      
    </Router>
  );
}

export default App;
