import { useState } from "react";
import ResidenceCard from "./components/ResidenceCard";
import FilterPanel from "./components/FilterPanel";
import witsData from "./data/wits.json";
import { scoreResidences } from "./utils/scoreResidences";

function App() {
  const [weights, setWeights] = useState({
    price: 0.5,
    safety: 0.5,
    distance: 0.5,
  });

  const sortedResidences = scoreResidences(witsData.residences, weights);

  return (
    <div>
      <h1>{witsData.university}</h1>

      <FilterPanel weights={weights} onChange={setWeights} />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {sortedResidences.map((residence) => (
          <ResidenceCard key={residence.id} residence={residence} />
        ))}
      </div>
    </div>
  );
}

export default App;