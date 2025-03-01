import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "../pages/chat/ChatPage";
import CreateProjectPage from "../pages/create/CreateProjectPage";
import CreatedByMePage from "../pages/createdByMe/CreatedByMePage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import ExplorePage from "../pages/explore/ExplorePage";
import LandingPage from "../pages/LandingPage";
import MyApplicationsPage from "../pages/myApplications/MyApplicationsPage";
import ProfilePage from "../pages/profile/ProfilePage";
import ProjectPage from "../pages/project/ProjectPage";
import SearchResultsPage from "../pages/search/SearchResultsPage";
import SigninPage from "../pages/signin/SigninPage";
import SignupPage from "../pages/signup/SignupPage";
import ProtectedRoute from "./ProtectedRoute";

function Router({ auth }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={auth ? <DashboardPage /> : <LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/search/:query" element={<SearchResultsPage />} />
        <Route path="/project/:projectId" element={<ProjectPage />} />
        <Route element={<ProtectedRoute auth={auth} />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="/chat/:conversationId" element={<ChatPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/create" element={<CreateProjectPage />} />
          <Route path="/my-applications" element={<MyApplicationsPage />} />
          <Route
            path="/my-applications/:type/:project"
            element={<MyApplicationsPage />}
          />
          <Route
            path="/created-by-me/:type/:project"
            element={<CreatedByMePage />}
          />
          <Route path="/created-by-me" element={<CreatedByMePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
