import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import Button from "../components/ui/button.jsx";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


const PortfolioPage = () => {
    return (
      <div className="bg-gradient-to-b from-[#00ffc9] to-[#be01fd] min-h-screen text-white">
        {/* Fixed Button */}
        <div className="fixed bottom-10 right-10 z-50">
        <Link to='/' className='icon-links'>
        <Button className="bg-[#be01fd] text-black font-bold px-8 py-4 rounded-lg shadow-md">
          <span>Home</span>
        </Button>
        </Link>
        </div>
        {/* Hero Section */}
        <header className="text-center py-12 relative">
          <motion.img
            src="/fly_color-removebg-preview.png"
            alt="AI Design"
            className="mx-auto w-40 h-40"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
          <h1 className="text-4xl font-bold drop-shadow-lg">
            Elevating Brands with AI-Powered Creativity & Design
          </h1>
          <p className="mt-4 text-lg">
            UX/UI | Graphic Design | Web Development | AI Storytelling
          </p>
          <div className="flex justify-center mt-6 space-x-4">
            <Link to='https://www.linkedin.com/in/maria-lopez-banos/' className='icon-links'>
            <Button className="bg-[#ffdd00] text-black font-bold px-6 py-3 rounded-lg shadow-md space-x-2">
            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
            <span>Profile</span>
            </Button>
            </Link>
            <a href="mailto:marialopez@flyforkidz.com">
            <Button className="bg-[#be01fd] text-white font-bold px-6 py-3 rounded-lg shadow-md space-x-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-xl " />
            <span>Contact Me</span>
            </Button>
            </a>
          </div>
        </header>
        <section className="py-12 px-4 bg-white text-black text-center">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-700 max-w-6xl mx-auto">
          I have always been driven by creativity, storytelling, and design. My journey began with a deep passion for teaching and caring for children, but over time, I discovered an equally strong fascination with technology and digital creation. This led me to web design and development, where I blend my artistic vision with user-friendly digital experiences.
          <br /><br />Beyond digital design, I am also passionate about children’s books, where I combine storytelling and illustration to create immersive and meaningful experiences for young readers. My goal is to bring imagination to life through visually captivating and engaging narratives.
          </p>
        </section>
        {/* Portfolio Showcase */}
        {/* <section className="py-12 px-4 bg-white text-black">
          <h2 className="text-3xl font-bold text-center mb-8">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Web Design", "AI Storytelling", "Graphic Design"].map((category, index) => (
              <Card key={index} className="shadow-md rounded-lg hover:scale-105 transition-transform">
                <img
                  src={`/portfolio-${index + 1}.jpg`}
                  alt={category}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">{category}</h3>
                  <p className="text-gray-600 mt-2">Creative & impact-driven designs.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section> */}
  
        {/* Skills Section */}
        <section className="py-12 bg-gradient-to-r from-[#be01fd] to-[#ffdd00] text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
            {[
              { title: "Figma & UX/UI", icon: "🎨" },
              { title: "AI-Generated Art", icon: "🤖" },
              { title: "Web Development", icon: "💻" },
              { title: "Photoshop Master", icon: "🖌️" },
              { title: "Children's Books", icon: "📖" },
              { title: "AI Storytelling", icon: "🚀" },
            ].map((skill, index) => (
              <Card key={index} className="bg-[#1E1E2E] text-center rounded-xl shadow-lg border-1 border-white">
                <CardContent className="py-8">
                  <h3 className="text-xl font-bold text-white">{skill.icon} {skill.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
  
        {/* Contact Section */}
        <section className="py-12 px-4 bg-white text-black text-center space-x-2">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together!</h2>
          <p className="text-lg text-gray-700 mb-6">
            Looking for a <strong>custom design, AI-powered storytelling, or website revamp</strong>? Let's connect!
          </p>
          <a href="mailto:marialopez@flyforkidz.com">
          <Button className="bg-[#00ffc9] text-black font-bold px-6 py-3 rounded-lg shadow-md space-x-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-xl " />
            <span>Get in Touch</span>
          </Button>
          </a>
          <Link to='https://www.linkedin.com/in/maria-lopez-banos/' className='icon-links'>
          <Button className="bg-[#00ffc9] text-black font-bold px-6 py-3 rounded-lg shadow-md space-x-2">
            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
          </Button>
          </Link>
          {/* <Button className="bg-[#00ffc9] text-black font-bold px-6 py-3 rounded-lg shadow-md space-x-2">
            <FontAwesomeIcon icon={faXTwitter} className="text-xl" />
          </Button>
          <Button className="bg-[#00ffc9] text-black font-bold px-6 py-3 rounded-lg shadow-md space-x-2">
            <FontAwesomeIcon icon={faInstagram} className="text-xl" />
          </Button> */}
        </section>
  
        {/* Footer */}
        <footer className="bg-[#00ffc9] py-6 text-center">
          <p className="text-black font-bold">© 2025 María López Baños. All Rights Reserved.</p>
        </footer>
      </div>
      );
    };
  

export default PortfolioPage