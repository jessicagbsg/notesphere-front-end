import { Home, LandingPage, LogIn, Note, NotFound, SignUp } from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

export const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/notes/:roomId" element={<PrivateRoute element={<Note />} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
