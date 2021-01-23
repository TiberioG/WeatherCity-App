export const getTempSymbol = (units) => {
  switch (units) {
    case 'metric':
      return '°';
    case 'imperial':
      return 'F';
    default:
      return 'K';
  }
};
