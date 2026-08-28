function ResidenceCard({ residence }) {
  return (
    
    <div className="card" id={residence.id}>
      <h3>{residence.name}</h3>
      <p>
        R{residence.priceRangeMonthly.min} - R{residence.priceRangeMonthly.max} / month
      </p>
      <p>{residence.distanceToCampusKm} km from campus</p>
      <p>Safety score: {residence.safetyScore}/10</p>
      <ul>
        {residence.keyFacts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>

      {residence.nearbyFacilities && (
        <>
          <p style={{ marginBottom: "4px", fontWeight: "bold" }}>Nearby:</p>
          <ul>
            {residence.nearbyFacilities.map((facility, index) => (
              <li key={index}>
                {facility.type} — {facility.name} ({facility.distanceKm} km)
              </li>
            ))}
          </ul>
        </>
      )}

      <a href={residence.listingUrl} target="_blank" rel="noopener noreferrer">
        View listing
      </a>
    </div>
  );
}

export default ResidenceCard;