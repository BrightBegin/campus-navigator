export function searchUniversities(query, universities) {
  const q = query.trim().toLowerCase();
  if (!q) return { universityMatches: [], residenceMatches: [] };

  const universityMatches = universities.filter((uni) =>
    uni.name.toLowerCase().includes(q)
  );

  const residenceMatches = [];
  universities.forEach((uni) => {
    uni.data.residences.forEach((r) => {
      if (r.name.toLowerCase().includes(q)) {
        const campus = uni.data.campuses.find((c) => c.id === r.nearestCampus);
        residenceMatches.push({
          residence: r,
          universityName: uni.name,
          universityId: uni.id,
          campusName: campus ? campus.name : "Unknown campus",
        });
      }
    });
  });

  return { universityMatches, residenceMatches };
}