import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import PortfolioPage from "./pages/Portfolio";
import Home from "./pages/Home";


function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<Home />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                </Route>

            </Routes>
        </BrowserRouter>
  )
}

export default App;
