import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import NotFound from "./NotFound";

function MainPage() {
  const userInfo = useSelector((state) => state.userInfo.user);

  return (
    <div>
      {userInfo.name !== "" ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/homePage" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default MainPage;
