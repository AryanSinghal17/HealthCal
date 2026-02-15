export const bodyFat = (gender, bmi, age) => {
  if (gender === "male")
    return 1.2 * bmi + 0.23 * age - 16.2;
  else
    return 1.2 * bmi + 0.23 * age - 5.4;
};
