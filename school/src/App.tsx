import React from 'react';
import IndexPage from './pages/IndexPage';
import AboutPage from "./pages/AboutPage";
import DirectorsMessagePage from "./pages/DirectorsMessagePage";
import {Routes, Route} from "react-router";

function App() {

  return (
      <Routes>
          <Route path="/" element={<IndexPage/>}/>
          <Route path="about" element={<AboutPage/>}/>
          <Route path="directors-message" element={<DirectorsMessagePage/>}/>
      </Routes>

  );
}

export default App;
