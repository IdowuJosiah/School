import React from 'react';
import IndexPage from './pages/IndexPage';
import AboutPage from "./pages/AboutPage";
import DirectorsMessagePage from "./pages/DirectorsMessagePage";
import NurseryPrimary from "./pages/NurseryPrimary";
import CurriculumPage from "./pages/CurriculumPage";
import {Routes, Route} from "react-router";

function App() {

  return (
      <Routes>
          <Route path="/" element={<IndexPage/>}/>
          <Route path="about" element={<AboutPage/>}/>
          <Route path="directors-message" element={<DirectorsMessagePage/>}/>
          <Route path="nursery-primary" element={<NurseryPrimary/>}/>
          <Route path="curriculum" element={<CurriculumPage/>}/>
      </Routes>

  );
}

export default App;
