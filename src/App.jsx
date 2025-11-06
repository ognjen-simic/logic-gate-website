import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import NOT from "./pages/NOT"
import AND from "./pages/AND"
import NAND from "./pages/NAND"
import OR from "./pages/OR"
import NOR from "./pages/NOR"
import XOR from "./pages/XOR"
import XNOR from "./pages/XNOR"
import "./App.css"
import ScrollToTop from "./components/scroll-to-top"

function App() {
  return(
    <>
    <Router>
      <ScrollToTop/>
      <header className="header">Logical Gates</header>
     <nav className="links">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Home
        </NavLink>
         <NavLink 
          to="/not" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          NOT
        </NavLink>
        <NavLink 
          to="/and" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          AND
        </NavLink>
        <NavLink 
          to="/nand" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          NAND
        </NavLink>
        <NavLink 
          to="/or" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          OR
        </NavLink>
        <NavLink 
          to="/nor" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          NOR
        </NavLink>
        <NavLink 
          to="/xor" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          XOR
        </NavLink>
        <NavLink 
          to="/xnor" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          XNOR
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/not" element={<NOT />} />
        <Route path="/and" element={<AND />} />
        <Route path="/nand" element={<NAND />} />
        <Route path="/or" element={<OR />} />
        <Route path="/nor" element={<NOR />} />
        <Route path="/xor" element={<XOR />} />
        <Route path="/xnor" element={<XNOR />} />
      </Routes>
    </Router>
    </>
    )
}

export default App
