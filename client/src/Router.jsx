
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Landing from "./pages/Landing/Landing"
const Router = () => {

  return (
    <BrowserRouter>
        <Routes>
          {/* rotas públicas */}
          <Route exact path="/" element={<Landing />} />
          

        </Routes>
    </BrowserRouter>
  );
}

export default Router;
