function calculateNumber(a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  // Calculate the sum of the rounded values and return it
  return roundedA + roundedB;
}

module.exports = calculateNumber;
