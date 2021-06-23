export const parseStringToLocaleString = (value) => {
  return Number(value).toLocaleString('ru-RU');
};

export const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.substring(1)
  };

export const isNumbersOnly = (value) => {
  return (/^[0-9 ]*$/.test(value));
};

export const getStarsCount = (reviewsCount) => {
  return Math.round((reviewsCount / 10) * 1.7);
}

export const getTotalSum = (items) => {
  const total = items.reduce((total, {price, count}) => total + (Number(price) * count), 0);
  return total;
}
