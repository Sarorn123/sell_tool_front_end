import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
// import ProtectedRoute from "./components/ProtectedRoute";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Services } from "./pages/Services";

function App() {
  
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            // <ProtectedRoute>
            <HomePage />
            // </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
