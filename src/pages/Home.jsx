import nature from "../assets/images/nature.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section text-white d-flex align-items-center"
        style={{
          backgroundImage: `url(${nature})`,
        }}
      >


        <div className="container text-center">
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  // transition={{ duration: 1 }}
  transition={{ repeat: Infinity, duration: 3 }}
   >
          <h1 className="display-4 fw-bold">
            Building a Sustainable Future 🌍
          </h1>
          <p className="lead mt-3">
            Protecting nature, empowering communities, and ensuring a better
            world for future generations.
          </p>
          
</motion.div>
           { <a href="/activities" className="btn btn-success btn-lg mt-4">
            Explore Our Activities
          </a> } 
          <br />
          { <a href="/Contact" className="btn btn-success btn-lg mt-4">
            Get in Touch  ➡️
          </a> } 

        </div>
      </div>

      {/* Info Section */}
      <div className="container my-5">

        <div className="row text-center">
         <div className="col-md-4"> 
                                    
            <Link to="/environment" className="text-decoration-none text-dark">
            <h3 className="feature-title">🌱 Environment</h3>
            </Link>
               <p>Protecting forests, wildlife, and natural resources.</p>
          </div>


          <div className="col-md-4">            
            <Link to="/clean-energy" className="text-decoration-none text-dark">
               <h3 className="feature-title">⚡ Clean Energy</h3>
                     </Link>
                      <p>Promoting renewable and eco-friendly energy solutions.</p>
          </div>
                   
          <div className="col-md-4">
            <Link to="/community" className="text-decoration-none text-dark">
                   <h3 className="feature-title">🤝 Community</h3>
                        </Link>
                 <p>Improving lives through education and awareness.</p>
            
          </div>
        </div>
      </div>
{/* Second row */}
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-4">
            <h3>🏠 No Poverty</h3>
            <p>Aims to end poverty in all its forms everywhere by 2030.</p>            
          </div>
          <div className="col-md-4">
            <h3>📈 Economic Growth</h3>
            <p>Full and productive employment, and decent work for all.</p>            
          </div>
          <div className="col-md-4">
            <h3>⚖️ Reduce Inequalities</h3>
            <p>Promoting social, economic, and political inclusion for all individuals.</p>            
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;

