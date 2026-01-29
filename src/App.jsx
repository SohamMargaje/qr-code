import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Profile from "./pages/Profie";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
