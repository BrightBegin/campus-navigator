import { useState, useEffect } from "react";
import ResidenceCard from "../components/ResidenceCard";
import FilterPanel from "../components/FilterPanel";
import CampusList from "../components/CampusList";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import witsData from "../data/wits.json";
import { scoreResidences } from "../utils/scoreResidences";

function WitsPage() {
  const [weights, setWeights] = useState({
    price: 0.5,
    safety: 0.5,
    distance: 0.5,
  });

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.style.outline = "2px solid #6ea8fe";
        setTimeout(() => (el.style.outline = "none"), 2000);
      }
    }
  }, []);

  const sortedResidences = scoreResidences(witsData.residences, weights);

  return (
    <div>
      <HeroSection university={witsData.university} address={witsData.address} />

      <div className="app-container">
        <SearchBar data={witsData} />

        <CampusList campuses={witsData.campuses} />

        <h2 className="section-title">Residences</h2>
        <FilterPanel weights={weights} onChange={setWeights} />

        <div className="card-grid">
          {sortedResidences.map((residence) => (
            <ResidenceCard key={residence.id} residence={residence} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WitsPage;