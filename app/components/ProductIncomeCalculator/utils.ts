export const calculateInflation = (
  initialCost: number,
  inflationRate: number,
  years: number,
) => initialCost * Math.pow(1 + inflationRate, years);
