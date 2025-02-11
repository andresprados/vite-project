import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/ui/button.jsx";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


const PortfolioBBSPage = () => {
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
            alt="maria_lopez"
            className="mx-auto w-40 h-40"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
          <h1 className="text-4xl font-bold drop-shadow-lg">
            Loving and Educational Childcare by María López
          </h1>
          <p className="mt-4 text-lg">
          Early Childhood Specialist | English & Spanish Learning | Montessori & Waldorf Inspired Care
          </p>
          <div className="flex justify-center mt-6 space-x-4">
            <a href="/curriculum_vitae.pdf" target="blank" rel="noopener noreferrer">
            <Button className="bg-[#ffdd00] text-black font-bold px-6 py-3 rounded-lg shadow-md space-x-2">
            <span>Curriculum Vitae</span>
            </Button>
            </a>
            {/* /</Link> */}
            <Link to='https://babysitting24.ch/en/providers/3279159?public_view=true' className='icon-links'>
            <Button className="bg-[#be01fd] text-white font-bold px-6 py-3 rounded-lg shadow-md">
              Find me in Babbysitting24
            </Button>
            </Link>
          </div>
        </header>
        <section className="py-12 px-4 bg-white text-black text-center">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-700 max-w-6xl mx-auto">
           Hello, I'm María López, an early childhood educator with over 7 years of experience caring for and teaching young children. I specialize in bilingual learning (English & Spanish) and apply Montessori and Waldorf principles to create a nurturing and educational environment for little ones. Currently, I offer private childcare services in St. Gallen, Switzerland, for children aged 4 months to 4 years.
         </p>
       </section>
  
        <section className="py-12 bg-gradient-to-r from-[#be01fd] to-[#ffdd00] text-white">
            <h2 className="text-3xl font-bold text-center mb-8">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
            {["Bilingual Childcare", "Montessori & Waldorf Methods", "Creative Play & Storytelling", "Emotional & Cognitive Development", "Safe & Nurturing Environment", "Parental Guidance & Support"].map((service, index) => (
            <Card key={index} className="bg-[#1E1E2E] text-center rounded-xl shadow-lg border-2 border-white">
              <CardContent className="py-8">
                <h3 className="text-xl font-bold text-white">{service}</h3>
              </CardContent>
            </Card>
            ))}
         </div>
        </section>

         {/* Contact Section */}
        <section className="py-12 px-4 bg-white text-black text-center space-x-2">
         <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
         <p className="text-lg text-gray-700 mb-6">
             Looking for a loving and educational childcare experience for your little one? Let's connect!
           </p>
           <a href="mailto:marialopez@flyforkidz.com">
           <Button className="bg-[#00ffc9] text-black font-bold px-6 py-3 rounded-lg shadow-md space-x-2">
             <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
             <span>Email María</span>
           </Button>
           </a>
           <a href="tel:+41782226450">
           <Button className="bg-[#00ffc9] text-black font-bold px-6 py-3 rounded-lg shadow-md space-x-2">
             <FontAwesomeIcon icon={faPhone} className="text-xl" />
             <span>Call María</span>
           </Button>
           </a>
        </section>  
        {/* Footer */}
        <footer className="bg-[#00ffc9] py-6 text-center">
          <p className="text-black font-bold">© 2025 María López Baños. All Rights Reserved.</p>
        </footer>
      </div>
      );
    };
  

export default PortfolioBBSPage
