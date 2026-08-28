import { Link } from "react-router-dom";
import { useState } from "react";
import { searchUniversities } from "../utils/searchUniversities";

function UniversitySearchBar({ universities }) {
  const [query, setQuery] = useState("");
  const { universityMatches, residenceMatches } = searchUniversities(query, universities);
  const hasQuery = query.trim().length > 0;

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search a university or residence..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {hasQuery && (
        <div className="search-results">
          {universityMatches.length === 0 && residenceMatches.length === 0 && (
            <p className="no-results">No matches found.</p>
          )}

          {universityMatches.length > 0 && (
            <div className="result-group">
              <h4>Universities</h4>
              {universityMatches.map((uni) => (
                <Link
                  to={`/university/${uni.id}`}
                  key={uni.id}
                  className="result-item"
                  style={{ display: "block", textDecoration: "none", color: "inherit" }}
                >
                  <strong>{uni.name}</strong>
                  <p>{uni.data.campuses.length} campuses</p>
                </Link>
              ))}
            </div>
          )}

          {residenceMatches.length > 0 && (
            <div className="result-group">
              <h4>Residences</h4>
              {residenceMatches.map((match, i) => (
                <Link
                  to={`/university/${match.universityId}#${match.residence.id}`}
                  key={i}
                  className="result-item"
                  style={{ display: "block", textDecoration: "none", color: "inherit" }}
                >
                  <strong>{match.residence.name}</strong>
                  <p>
                    {match.universityName} — nearest campus: {match.campusName}
                  </p>
                  <p>
                    R{match.residence.priceRangeMonthly.min} - R{match.residence.priceRangeMonthly.max} / month
                  </p>
                  {match.residence.nearbyFacilities && (
                    <ul>
                      {match.residence.nearbyFacilities.map((f, j) => (
                        <li key={j}>
                          {f.type} — {f.name} ({f.distanceKm} km)
                        </li>
                      ))}
                    </ul>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UniversitySearchBar;