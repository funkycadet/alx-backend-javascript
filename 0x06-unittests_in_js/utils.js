class Utils {
  static calculateNumber(type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
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
    }
  }
}

module.exports = Utils;
