import aboutImg from "../assets/images/about.jpg";

function About() {
  return (
    <div className="container my-5">
      {/* Title */}
      <h2 className="text-center mb-5">About Global Sustainable Development 🌍</h2>

      {/* Main Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4">
          <img
            src={aboutImg}
            alt="Sustainable Development"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h4>What is Sustainable Development?</h4>
          <p>
            Sustainable development is the practice of meeting present needs
            without compromising the ability of future generations to meet
            their own needs.
          </p>
          <p>
            It balances environmental protection, economic growth, and social
            well-being to create a healthy planet for everyone.
          </p>
        </div>
      </div>

      {/* Vision, Mission, Values */}
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100 about-card">
            <div className="card-body">
              <h3>🌱 Vision</h3>
              <p>
                A world where nature and humanity live in harmony.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100 about-card">
            <div className="card-body">
              <h3>🎯 Mission</h3>
              <p>
                To promote sustainable practices and global awareness.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100 about-card">
            <div className="card-body">
              <h3>🌱 Values</h3>
              <p>
                Responsibility, innovation, equality, and environmental care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;


