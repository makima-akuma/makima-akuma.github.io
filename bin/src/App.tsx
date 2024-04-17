import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import MainPage from "./pages/main-page";
import LendasSuperEminem from "./pages/lendas-super-eminem";
import './App.css';
import ExamesSD from "./pages/exames-sd";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<GodComponent />}>
                <Route index element={<MainPage />} />
                <Route path="/lendas-super-eminem" element={<LendasSuperEminem />} />
                <Route path="/exames-sd" element={<ExamesSD />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

const GodComponent: React.FC = () => {
    return (
        <div className='god-component'>
            <Outlet/>
        </div>
    );
};

export default App;
