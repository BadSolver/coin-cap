export const formatNumber = (value, round) => {
  const number = Number(value);
  return number ? number.toFixed(round) : "invalid input";
};
