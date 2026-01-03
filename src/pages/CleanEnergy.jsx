import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const CleanEnergy = () => {
  return (
    
    <div className="container py-5">
      <div className="back-home">
  <Link to="/" className="home-btn">
    ⬅ Back to Home
  </Link>
  </div>






      {/* Title */}
      <h2 className="text-center mb-4">Clean and Affordable Energy – SDG 2030</h2>

      {/* Intro Section */}
      <div className="mb-5">
        <p className="lead text-center">
          The United Nations Sustainable Development Goal focuses on 
               Ensure access to affordable, reliable, sustainable and modern energy for all       
       </p>
      </div>

      

      <div className="mb-5">
        <h4 className="mb-3">⚡ Current Energy Problems</h4>

        <p>
          Today, our planet faces serious Energy challenges that threaten
          life on Earth. Human activities and climate change have 
          damage rapidly.
        </p>

        <ul>
          <li>Limited Renewable Infrastructure</li>
          <li>Energy Access Inequality</li>
          <li>Rising Energy Costs</li>
          <li>Energy Wastage & Inefficiency</li>
        </ul>
      </div>


      <div className="mb-5">
        <h4 className="mb-4">🎯 UN SDG Clean Energy Goals by 2030</h4>

  <div className="row g-4">

  <div className="col-md-6">
    <Card className="blog-card">
      <Card.Img variant="top" src="/src/assets/images/cleanenergy.jpg" />
      <Card.Body>
        <Card.Title> Universal Access to Energy</Card.Title>
        <Card.Text>
          
          Universal access to energy ensures that everyone has reliable, affordable, and modern energy services.It is essential for economic growth, education, healthcare, and improved living standards.Renewable and clean energy sources are promoted to reduce carbon emissions and environmental impact.Expanding energy access in rural and underserved areas helps bridge inequality and supports sustainable development.

        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className="col-md-6">
    <Card className="blog-card">
      <Card.Img variant="top" src="/src/assets/images/cleanenergy.jpg" />
      <Card.Body>
        <Card.Title> Promote Clean Cooking Solutions</Card.Title>
        <Card.Text>
          Climate Action (UN SDG 13) focuses on taking urgent steps to combat climate change and its impacts.By 2030, countries aim to reduce greenhouse gas emissions and limit global warming.The goal promotes climate awareness, disaster preparedness, and sustainable environmental policies.
Protecting ecosystems today ensures a safer, healthier planet for future generations.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className="col-md-6">
    <Card className="blog-card">
      <Card.Img variant="top" src="/src/assets/images/cleanenergy.jpg" />
      <Card.Body>
        <Card.Title> Increase Renewable Energy Use</Card.Title>
        <Card.Text>
          By 2030, the United Nations aims to protect wildlife by conserving forests, oceans, and natural habitats across the world.
The goal focuses on stopping biodiversity loss, preventing illegal wildlife trade, and protecting endangered species.It promotes sustainable land use and stronger laws to safeguard ecosystems and animal life.
Protecting wildlife is essential for maintaining ecological balance and ensuring a healthy planet for future generations.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className="col-md-6">
    <Card className="blog-card">
      <Card.Img variant="top" src="/src/assets/images/cleanenergy.jpg" />
      <Card.Body>
        <Card.Title> Improve Energy Efficiency</Card.Title>
        <Card.Text>
          By 2030, the United Nations aims to protect natural ecosystems and reduce pollution worldwide.
This includes clean air, safe water, and proper waste management for all communities.Countries work to combat climate change and reduce environmental degradation.
These actions ensure a healthier, safer planet for present and future generations.Healthy forests support wildlife, provide clean air and water, and sustain millions of livelihoods.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

</div>

      </div>

    </div>

    
  );
};

export default CleanEnergy;


