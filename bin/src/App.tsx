import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import MainPage from "./pages/main-page";
import LendasSuperEminem from "./pages/lendas-super-eminem";
import './App.css';
import ExamesSD from "./pages/exames-sd";
import Header from "./main-components/header.tsx";

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
        <main className="w-full h-full">
            <header>
                <Header/>
            </header>
            <main className='god-component'>
                <Outlet/>
            </main>
        </main>
    );
};

export default App;
