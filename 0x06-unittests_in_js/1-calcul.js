function calculateNumber(type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
    let c = 0;
    switch (type) {
    case 'SUM':
	return roundedA + roundedB;
	break;
    case 'SUBTRACT':
	return roundedA - roundedB;
	break;
    case 'DIVIDE':
      if (roundedB === 0) {
            return "Error";
      } else {
            return roundedA / roundedB;
      }
      break;
    }
}

module.exports = calculateNumber;
