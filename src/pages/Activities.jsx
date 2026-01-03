import tree from "../assets/images/tree.jpg";
import recycle from "../assets/images/recycle.jpg";
import solar from "../assets/images/solar energy.jpg";
import clean from "../assets/images/clean.jpg";
import industry from "../assets/images/industry.jpg";
import climate from "../assets/images/climate.jpg"; 


function Activities() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Activities 🌍</h2>

      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100 activities-card">
            <img src={tree} className="card-img-top" alt="Tree Plantation" />
            <div className="card-body text-center">
              <h5 className="card-title"> Tree Plantation</h5>
              <p className="card-text">
                Planting trees to protect biodiversity and reduce climate change.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100 activities-card">
            <img src={recycle} className="card-img-top" alt="Waste Management" />
            <div className="card-body text-center">
              <h5 className="card-title"> Waste Management</h5>
              <p className="card-text">
                Recycling programs to keep our planet clean and healthy.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100 activities-card">
            <img src={solar} className="card-img-top" alt="Renewable Energy" />
            <div className="card-body text-center">
              <h5 className="card-title">Renewable Energy</h5>
              <p className="card-text">
                Promoting solar and wind energy for a sustainable future.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* second row */}
      <div className="row">
         {/* Card 4 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100 activities-card">
            <img src={clean} className="card-img-top" alt="Clean Water and Sanitation" />
            <div className="card-body text-center">
              <h5 className="card-title">Clean Water and Sanitation </h5>
              <p className="card-text">
                Ensure Availability and Management of Water and Sanitation for All.
              </p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100 activities-card">
            <img src={industry} className="card-img-top" alt="Industry Infrastructure"/>
            <div className="card-body text-center">
              <h5 className="card-title"> Industry Infrastructure</h5>
              <p className="card-text">
                Build Resilient Infrastructure, Promote and Sustainable Industrialization.
              </p>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100 activities-card">
            <img src={climate} className="card-img-top" alt="Climate Action"/>
            <div className="card-body text-center">
              <h5 className="card-title"> Climate Action</h5>
              <p className="card-text">
                Take Urgent Action to Combat Climate Change and its Impacts.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Activities;





