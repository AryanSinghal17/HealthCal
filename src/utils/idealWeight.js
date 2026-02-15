export const idealWeight = (gender, heightCm) => {
  const hIn = heightCm / 2.54;
  if (gender === "male") return 50 + 2.3 * (hIn - 60);
  return 45.5 + 2.3 * (hIn - 60);
};
