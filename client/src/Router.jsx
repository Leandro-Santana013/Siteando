
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { UserContextProvider, UserContext } from "./context/userContext";
import Landing from "./pages/Landing/Landing"
const Router = () => {

  return (
    <BrowserRouter>
    <UserContextProvider>
        <Routes>

          {/* rotas públicas */}
          <Route exact path="/" element={<Landing />} />
          
        </Routes>
        </UserContextProvider>
    </BrowserRouter>
  );
}

export default Router;
