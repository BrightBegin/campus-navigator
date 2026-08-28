export function searchWits(query, data) {
  const q = query.trim().toLowerCase();
  if (!q) return { campuses: [], residences: [], facilities: [] };

  const campuses = data.campuses.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.courses.some((course) => course.toLowerCase().includes(q))
  );

  const residences = data.residences.filter((r) =>
    r.name.toLowerCase().includes(q)
  );

  const facilities = [];
  data.residences.forEach((r) => {
    (r.nearbyFacilities || []).forEach((f) => {
      if (
        f.name.toLowerCase().includes(q) ||
        f.type.toLowerCase().includes(q)
      ) {
        facilities.push({ ...f, residenceName: r.name });
      }
    });
  });

  return { campuses, residences, facilities };
}