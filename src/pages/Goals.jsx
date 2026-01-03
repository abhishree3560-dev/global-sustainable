 function Goals() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Future Sustainable Development Goals 🌍</h2>
      <p className="text-center mb-5">
        Our future goals focus on environmental protection, clean energy,
        social equality, and global well-being.
      </p>

      <div className="row">
        {/* Goal 1 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow goal-card">
            <div className="card-body text-center">
              <h1>🌱</h1>
              <h5 className="card-title">Climate Action</h5>
              <p className="card-text">
                Reduce carbon emissions and fight climate change globally.
              </p>
            </div>
          </div>
        </div>

        {/* Goal 2 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow goal-card">
            <div className="card-body text-center">
              <h1>⚡</h1>
              <h5 className="card-title">100% Clean Energy</h5>
              <p className="card-text">
                Transition to solar, wind, and renewable energy sources.
              </p>
            </div>
          </div>
        </div>

        {/* Goal 3 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow goal-card">
            <div className="card-body text-center">
              <h1>💧</h1>
              <h5 className="card-title">Clean Water for All</h5>
              <p className="card-text">
                Ensure safe drinking water and sanitation worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Goal 4 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow goal-card">
            <div className="card-body text-center">
              <h1>📚</h1>
              <h5 className="card-title">Quality Education</h5>
              <p className="card-text">
                Provide inclusive education and lifelong learning opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Goal 5 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow goal-card">
            <div className="card-body text-center">
              <h1>🤝</h1>
              <h5 className="card-title">Social Equality</h5>
              <p className="card-text">
                Promote gender equality, peace, and human rights.
              </p>
            </div>
          </div>
        </div>

        {/* Goal 6 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow goal-card">
            <div className="card-body text-center">
              <h1>🌍</h1>
              <h5 className="card-title">Life on Land</h5>
              <p className="card-text">
                Protect forests, wildlife, and biodiversity for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;
