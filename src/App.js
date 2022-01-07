import "./App.css";
import Home from "./pages/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
