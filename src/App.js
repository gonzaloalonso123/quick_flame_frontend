import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { DataProvider } from "./context/data/DataProvider";
import { ToastProvider } from "./context/ToastProvider";
import { AuthProvider, useAuth } from "./context/AuthProvider";
import { Login } from "./pages/Login";
import AppAuthenticatedRoutes from "./Routes";

const AppUnauthenticatedRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Navigate to="/login" />} />
  </Routes>
);

const AppRoutes = () => {
  const { user } = useAuth();
  return (
    <Router>
      {user ? <AppAuthenticatedRoutes /> : <AppUnauthenticatedRoutes />}
      {/* <AppAuthenticatedRoutes /> */}
    </Router>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <ToastProvider>
        <DataProvider>
          <AppRoutes />
        </DataProvider>
      </ToastProvider>
    </AuthProvider>
  );
};

export default App;
