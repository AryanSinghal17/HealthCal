export const healthyWeight = (heightCm) => {
  const h = heightCm / 100;
  return {
    min: 18.5 * h * h,
    max: 24.9 * h * h,
  };
};
