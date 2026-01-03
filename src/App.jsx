import { useState } from 'react';




import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/chatbot";


import Home from "./pages/Home";
import About from "./pages/About";
import Goals from "./pages/Goals";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import Admin from "./components/Admin";




import Environment from "./pages/Environment";
import CleanEnergy from "./pages/CleanEnergy";
import Community from "./pages/Community";

function App() {
const [darkMode, setDarkMode] = useState(false);

  return (
     
    <BrowserRouter>
    
      <div className="app-wrapper">
        <div className={darkMode ? "dark-mode" : ""}>
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />  
           

            <Route path="/environment" element={<Environment />} />
            <Route path="/clean-energy" element={<CleanEnergy />} />
            <Route path="/community" element={<Community />} />
    
          </Routes>

                
     

          
 
 


        </main>

        
      

        <Footer />
        <Chatbot />
        </div>
        </div>
      
    </BrowserRouter>
  );
}

export default App;

