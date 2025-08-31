import { useEffect, useState } from "react"
import { Routes, Route } from "react-router"
import Navbar from "./Navbar"
import Home from "./Home"
import "./App.css"

function App() {
  const [ theme, setTheme ] = useState(localStorage.getItem("theme") || "dark")

  const handleTheme = (t) => {
    document.body.setAttribute("data-theme", t)
    setTheme(t)
    localStorage.setItem("theme", t)
  }

  return (
    <div className="h-screen" data-theme={theme}>
      <Navbar handleTheme={handleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
