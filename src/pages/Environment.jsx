import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import "./Environment.css";




const Environment = () => {
  return (
    
    <div className="container py-5">
      <div className="back-home">
  <Link to="/" className="home-btn">
    ⬅ Back to Home
  </Link>
  </div>






      {/* Title */}
      <h2 className="text-center mb-4">🌱 Environment – SDG 2030</h2>

      {/* Intro Section */}
      <div className="mb-5">
        <p className="lead text-center">
          The United Nations Sustainable Development Goal focuses on protecting
          the environment to ensure a healthy planet for present and future
          generations.
        </p>
      </div>

      

      <div className="mb-5">
        <h4 className="mb-3">🌍 Current Environmental Problems</h4>

        <p>
          Today, our planet faces serious environmental challenges that threaten
          life on Earth. Human activities and climate change have increased
          environmental damage rapidly.
        </p>

        <ul>
          <li>Deforestation and loss of forests</li>
          <li>Climate change and global warming</li>
          <li>Loss of biodiversity and wildlife extinction</li>
          <li>Air, water, and soil pollution</li>
        </ul>
      </div>


      <div className="mb-5">
        <h4 className="mb-4">🎯 UN SDG Environment Goals by 2030</h4>

  <div className="row g-4">

  <div className="col-md-6">
    <Card className="blog-card">
      <Card.Img variant="top" src="/src/assets/images/forest.jpg" />
      <Card.Body>
        <Card.Title> Protect Forests</Card.Title>
        <Card.Text>
          Protecting forests is essential to combat climate change and preserve biodiversity.
By 2030, the UN aims to halt deforestation and restore degraded forest lands worldwide.
Forests support millions of livelihoods and maintain ecological balance.Sustainable forest management ensures a healthier planet for future generations.
Protecting forests ensures a greener, safer, and more sustainable future for coming generations.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className="col-md-6">
    <Card className="blog-card">
      <Card.Img variant="top" src="/src/assets/images/climate1.jpg" />
      <Card.Body>
        <Card.Title> Climate Action</Card.Title>
        <Card.Text>
          Climate Action (UN SDG 13) focuses on taking urgent steps to combat climate change and its impacts.By 2030, countries aim to reduce greenhouse gas emissions and limit global warming.The goal promotes climate awareness, disaster preparedness, and sustainable environmental policies.
Protecting ecosystems today ensures a safer, healthier planet for future generations.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className="col-md-6">
    <Card className="blog-card">
      <Card.Img variant="top" src="/src/assets/images/wildlife.jpg" />
      <Card.Body>
        <Card.Title> Wildlife Protection</Card.Title>
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
      <Card.Img variant="top" src="/src/assets/images/environment1.jpg" />
      <Card.Body>
        <Card.Title> Clean Environment</Card.Title>
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

export default Environment;


