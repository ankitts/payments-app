import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Signin />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
