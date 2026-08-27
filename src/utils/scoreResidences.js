function normalize(value, min, max) {
  if (max === min) return 1;
  return (value - min) / (max - min);
}

export function scoreResidences(residences, weights) {
  const prices = residences.map((r) => (r.priceRangeMonthly.min + r.priceRangeMonthly.max) / 2);
  const distances = residences.map((r) => r.distanceToCampusKm);
  const safeties = residences.map((r) => r.safetyScore);

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const minDist = Math.min(...distances);
  const maxDist = Math.max(...distances);
  const minSafety = Math.min(...safeties);
  const maxSafety = Math.max(...safeties);

  const scored = residences.map((r) => {
    const avgPrice = (r.priceRangeMonthly.min + r.priceRangeMonthly.max) / 2;

    const priceScore = 1 - normalize(avgPrice, minPrice, maxPrice);
    const distanceScore = 1 - normalize(r.distanceToCampusKm, minDist, maxDist);
    const safetyScore = normalize(r.safetyScore, minSafety, maxSafety);

    const totalScore =
      priceScore * weights.price +
      distanceScore * weights.distance +
      safetyScore * weights.safety;

    return { ...r, matchScore: totalScore };
  });

  return scored.sort((a, b) => b.matchScore - a.matchScore);
}