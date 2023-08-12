import React from 'react';
import IndexPage from './pages/IndexPage';
import AboutPage from "./pages/AboutPage";
import {Routes, Route} from "react-router";

function App() {

  return (
      <Routes>
       <Route path="/" element={<IndexPage/>}/>
       <Route path="about" element={<AboutPage/>}/>
      </Routes>

  );
}

export default App;
