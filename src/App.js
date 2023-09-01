import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formularz from './components/Form/Formularz';
import StartingPage from './components/StartingPage/StartingPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartingPage />}></Route>
        <Route path="/formularz" element={<Formularz />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
