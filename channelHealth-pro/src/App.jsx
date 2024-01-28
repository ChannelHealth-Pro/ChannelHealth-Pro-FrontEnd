import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./Auth/PrivateRoute";
import AdminDashboard from "./components/AdminDashboard";
import DoctorDashboard from "./components/DoctorDashboard";
import CustomerDashboard from "./components/CustomerDashboard";
import { getAuth } from "./Auth/AuthService";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!getAuth() ? <Login /> : null} />
        <Route path="register" element={!getAuth() ? <Register /> : null} />
        <Route element={<PrivateRoute role={"admin"} />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
        <Route element={<PrivateRoute role={"doctor"} />}>
          <Route path="/doctor" element={<DoctorDashboard />} />
        </Route>
        <Route element={<PrivateRoute role={"customer"} />}>
          <Route path="/customer" element={<CustomerDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
