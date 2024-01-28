import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./Auth/PrivateRoute";
import AdminDashboard from "./components/AdminDashboard";
import DoctorDashboard from "./components/DoctorDashboard";
import CustomerDashboard from "./components/CustomerDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
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
