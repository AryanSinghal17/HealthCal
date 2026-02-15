export const targetHR = (age) => ({
  min: (220 - age) * 0.5,
  max: (220 - age) * 0.85,
});
