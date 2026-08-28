import { useState } from "react";
import ResidenceCard from "../components/ResidenceCard";
import FilterPanel from "../components/FilterPanel";
import CampusList from "../components/CampusList";
import witsData from "../data/wits.json";
import { scoreResidences } from "../utils/scoreResidences";

function WitsPage() {
  const [weights, setWeights] = useState({
    price: 0.5,
    safety: 0.5,
    distance: 0.5,
  });

  const sortedResidences = scoreResidences(witsData.residences, weights);

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>{witsData.university}</h1>
        <p>Find your campus, your course, and a place to stay that fits you</p>
      </div>

      <CampusList campuses={witsData.campuses} />

      <h2 className="section-title">Residences</h2>
      <FilterPanel weights={weights} onChange={setWeights} />

      <div className="card-grid">
        {sortedResidences.map((residence) => (
          <ResidenceCard key={residence.id} residence={residence} />
        ))}
      </div>
    </div>
  );
}

export default WitsPage;