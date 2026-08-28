import { Link } from "react-router-dom";
import witsData from "../data/wits.json";
import UniversitySearchBar from "../components/UniversitySearchBar";

const universities = [
  {
    id: "wits",
    name: witsData.university,
    campusCount: witsData.campuses.length,
    data: witsData,
  },
];

function Universities() {
  return (
    <div className="page-container">
      <h1 className="section-title">Explore Universities</h1>
      <p>{universities.length} university available</p>

      <UniversitySearchBar universities={universities} />

      <div className="card-grid">
        {universities.map((uni) => (
          <Link to={`/university/${uni.id}`} key={uni.id} className="uni-card-link">
            <div className="card">
              <h3>{uni.name}</h3>
              <p>{uni.campusCount} campuses</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Universities;