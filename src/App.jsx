import React from "react";
import Button from "./components/ui/button.jsx";
import { motion } from "framer-motion";
import PortfolioPage from "./pages/webdev";
import PortfolioBBSPage from "./pages/babysitting";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';

const Home = () => {
  return (
    <div className="bg-gradient-to-b [#00ffc9] min-h-screen text-white">
      {/* Hero Section */}
    <div className="bg-gradient-to-b from-[#00ffc9] to-[#be01fd] min-h-screen text-white">
      <header className="text-center py-50 relative">
        <motion.img
          src="/fly_color-removebg-preview.png"
          alt="AI Design"
          className="mx-auto w-40 h-40"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
        <h1 className="text-4xl font-bold drop-shadow-lg">
        María López Baños
        </h1>
        <p className="mt-4 text-lg space-x-2">
          marialopez@flyforkidz.com   |   +41 782 226 450 
        </p>
        <div className="flex justify-center mt-6 space-x-4">
          <Link to='/designer' className='icon-links'>
          <Button className="bg-[#ffdd00] text-black font-bold px-6 py-3 rounded-lg shadow-md space-x-2">
          <span>Web Development</span>
          </Button>
          </Link>
          <Link to='/babysitting/' className='icon-links'>
          <Button className="bg-[#be01fd] text-white font-bold px-6 py-3 rounded-lg shadow-md">
          <span>Babysitting</span>
          </Button>
          </Link>
        </div>
      </header>
    </div>
        <footer className="bg-[#00ffc9] py-6 text-center">
      <p className="text-black font-bold">© 2025 María López Baños. All Rights Reserved.</p>
    </footer>
    </div>
    
    );
  };


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designer/" element={<PortfolioPage />} />
        <Route path="/babysitting/" element={<PortfolioBBSPage />} />
      </Routes>
    </Router>
  );
};
  

export default App
