import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import ImageCard from "./components/Cards";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <NavbarComponent />

      {/* Main Content */}
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <ImageCard />
                <h1 className="text-3xl font-bold underline mt-4">Ayesha is practicing react with the help of deepseek and chatgpt and applying tailwind and bootstrap !!!</h1>
                <button
                  className="bg-sky-950 text-slate-50 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-slate-50 hover:text-sky-950 transition-all duration-300 ease-in-out border-2 border-sky-950 hover:border-slate-400 transform hover:scale-105 mt-4"
                  aria-label="Press me"
                >
                  PRESS ME
                </button>
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;