import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Community = () => {
  return (
    
    <div className="container py-5">
      <div className="back-home">
  <Link to="/" className="home-btn">
    ⬅ Back to Home
  </Link>
  </div>






      {/* Title */}
      <h2 className="text-center mb-4">🤝Community – SDG 2030</h2>

      {/* Intro Section */}
      <div className="mb-5">
        <p className="lead text-center">
          The United Nations Sustainable Development Goal focuses on 
               Promote equality, education, health, clean energy, and environmental protection at the local level.       
       </p>
      </div>

      

      <div className="mb-5">
        <h4 className="mb-3">👥 Current Problems Society</h4>

        <p>
          SDG 2030, current problems in society highlight the challenges that sustainable development aims to address:
        </p>

        <ul>
          <li>Poverty and Inequality</li>
          <li>Lack of Education and Skills</li>
          <li>Environmental Degradation</li>
          <li>Energy and Infrastructure Gaps</li>
          <li>Health Challenges</li>
        </ul>
      </div>


      <div className="mb-5">
        <h4 className="mb-4">🎯 UN SDG Community Goals by 2030</h4>
        <p>SDG goals aim to empower local people, promote equality, improve living standards, and protect the environment by 2030.</p>

  <div className="row g-4">

  <div className="col-md-6">
    <Card className="blog-card">
      <Card.Img variant="top" src="/src/assets/images/community.jpg" />
      <Card.Body>
        <Card.Title> No Poverty & Reduced Inequalities</Card.Title>
        <Card.Text>
            Ensuring all community members have access to basic needs and opportunities is a key goal of the UN Sustainable Development Goals (SDGs) 2030. It focuses on providing essential resources like food, clean water, healthcare, and education to everyone, regardless of their background. This goal aims to reduce poverty and inequality by creating equal opportunities for work, learning, and personal growth. Access to these basic needs empowers communities to thrive socially and economically. Ultimately, it promotes inclusive development, leaving no one behind in the journey toward a sustainable future.        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className="col-md-6">
    <Card className="blog-card">
      <Card.Img variant="top" src="/src/assets/images/community.jpg" />
      <Card.Body>
        <Card.Title> Quality Education & Lifelong Learning</Card.Title>
        <Card.Text>
          Quality Education & Lifelong Learning (SDG 4) is a key United Nations Sustainable Development Goal aimed at ensuring inclusive, equitable, and quality education for all by 2030. It focuses on providing free primary and secondary education, equal access to affordable technical and higher education, and eliminating gender and social disparities in learning. Lifelong learning encourages people of all ages to continuously develop knowledge and skills for better employment and personal growth. This goal also emphasizes improving teacher training, learning environments, and digital education access. 
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className="col-md-6">
    <Card className="blog-card">
      <Card.Img variant="top" src="/src/assets/images/community.jpg" />
      <Card.Body>
        <Card.Title> Good Health & Well-being</Card.Title>
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
      <Card.Img variant="top" src="/src/assets/images/community.jpg" />
      <Card.Body>
        <Card.Title> Sustainable Cities & Communities</Card.Title>
        <Card.Text>
          By 2030, the United Nations aims to protect natural ecosystems and reduce pollution worldwide.
This includes clean air, safe water, and proper waste management for all communities.Countries work to combat climate change and reduce environmental degradation.
These actions ensure a healthier, safer planet for present and future generations.Healthy forests support wildlife, provide clean air and water, and sustain millions of livelihoods.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

<div className="col-md-6">
    <Card className="blog-card">
      <Card.Img variant="top" src="/src/assets/images/community.jpg" />
      <Card.Body>
        <Card.Title> Clean Water, Sanitation & Energy Access</Card.Title>
        <Card.Text>
          By 2030, the United Nations aims to protect natural ecosystems and reduce pollution worldwide.
This includes clean air, safe water, and proper waste management for all communities.Countries work to combat climate change and reduce environmental degradation.
These actions ensure a healthier, safer planet for present and future generations.Healthy forests support wildlife, provide clean air and water, and sustain millions of livelihoods.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>




  <div className="col-md-6">
    <Card className="blog-card">
      <Card.Img variant="top" src="/src/assets/images/community.jpg" />
      <Card.Body>
        <Card.Title> Peace, Justice & Strong Institutions</Card.Title>
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

export default Community;

