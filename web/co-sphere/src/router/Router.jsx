import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "../pages/chat/ChatPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import LandingPage from "../pages/LandingPage";
import ProfilePage from "../pages/profile/ProfilePage";
import SigninPage from "../pages/signin/SigninPage";
import SignupPage from "../pages/signup/SignupPage";
import ProtectedRoute from "./ProtectedRoute";

function Router({ auth }) {
  return (
    <BrowserRouter>
      {console.log(auth)}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route element={<ProtectedRoute auth={auth} />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
