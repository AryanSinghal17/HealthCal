export const leanMass = (gender, weight, heightCm) => {
  if (gender === "male")
    return 0.407 * weight + 0.267 * heightCm - 19.2;
  return 0.252 * weight + 0.473 * heightCm - 48.3;
};
