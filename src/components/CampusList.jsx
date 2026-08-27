function CampusList({ campuses }) {
  return (
    <div>
      <h2 className="section-title">Campuses</h2>
      <div className="card-grid">
        {campuses.map((campus) => (
          <div key={campus.id} className="card">
            <h3>{campus.name}</h3>
            <p>Courses offered:</p>
            <ul>
              {campus.courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CampusList;