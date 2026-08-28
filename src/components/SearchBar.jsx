import { useState } from "react";
import { searchWits } from "../utils/searchWits";

function SearchBar({ data }) {
  const [query, setQuery] = useState("");
  const results = searchWits(query, data);
  const hasQuery = query.trim().length > 0;

  const getCampusName = (id) => {
    const campus = data.campuses.find((c) => c.id === id);
    return campus ? campus.name : "Unknown campus";
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search campuses, residences, or nearby facilities..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {hasQuery && (
        <div className="search-results">
          {results.campuses.length === 0 &&
            results.residences.length === 0 &&
            results.facilities.length === 0 && (
              <p className="no-results">No matches found.</p>
            )}

          {results.campuses.length > 0 && (
            <div className="result-group">
              <h4>Campuses</h4>
              {results.campuses.map((c) => (
                <div key={c.id} className="result-item">
                  <strong>{c.name}</strong>
                  <p>{c.courses.join(", ")}</p>
                </div>
              ))}
            </div>
          )}

          {results.residences.length > 0 && (
            <div className="result-group">
              <h4>Residences</h4>
              {results.residences.map((r) => (
                <div key={r.id} className="result-item">
                  <strong>{r.name}</strong>
                  <p>Nearest campus: {getCampusName(r.nearestCampus)}</p>
                  <p>
                    R{r.priceRangeMonthly.min} - R{r.priceRangeMonthly.max} / month, {r.distanceToCampusKm} km from campus
                  </p>
                  {r.nearbyFacilities && (
                    <ul>
                      {r.nearbyFacilities.map((f, i) => (
                        <li key={i}>
                          {f.type} — {f.name} ({f.distanceKm} km)
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {results.facilities.length > 0 && (
            <div className="result-group">
              <h4>Facilities</h4>
              {results.facilities.map((f, i) => (
                <div key={i} className="result-item">
                  <strong>{f.name}</strong>
                  <p>
                    {f.type} — {f.distanceKm} km from {f.residenceName}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;