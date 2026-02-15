export const caloriesBurned = (met, weight, minutes) =>
  (met * 3.5 * weight / 200) * minutes;
