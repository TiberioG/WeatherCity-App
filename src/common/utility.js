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

export const getDayPart = () => {
  const hour = new Date().getHours();

  if (hour < 12) {
    return 'morning';
  } else if (hour < 18) {
    return 'afternoon';
  } else {
    return 'evening';
  }
};
