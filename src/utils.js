export const parseStringToLocaleString = (value) => {
  return Number(value).toLocaleString('ru-RU');
};

export const formatString = (string) => {
  return string.replace(/\s/g, '');
};

export const normalizeData = (data) => {
  return data.reduce((result, item, index) => {
    result[index + 1] = item;
    return result;
  }, {});
}

export const parseDataToArrayOfValues = (obj, key) => {
  return Object.values(obj).reduce((acc, item) => {
    return [...acc, item[key]];
  }, []);
};

export const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.substring(1)
  };

export const isNumbersOnly = (value) => {
  return (/^[0-9 ]*$/.test(value));
};

export const isNullFirst = (value) => {
  return(/^0/.test(value)) && value.length > 1;
}

export const getStarsCount = (reviewsCount) => {
  return Math.round((reviewsCount / 10) * 1.7);
}

export const getTotalSum = (items, promocode) => {

  let total = items.reduce((total, {price, count}) => total + (Number(price) * count), 0);

  if (promocode) {

    let discount;

    switch(promocode) {
      case `GITARAHIT`:
        discount = total * 0.1;
      break;
      case `SUPERGITARA`:
        discount = 700;
      break;
      case `GITARA2020`:
        discount = total * 0.3 > 3500 ? 3500 : total * 0.3;
      break;
      default:
        return discount;
    }

    total = total - discount;
  }

  return total;
}

export const sortItems = (items, type, order) => {

    switch(order) {
      case `ascending`:
        return items.sort((a, b) => {
          return a[type] - b[type];
        });
      case `descending`:
        return items.sort((a, b) => {
          return b[type] - a[type];
        });
      default:
        return items;
    }
};

export const filterByPrice = (data, min, max) => {

  return data.filter(item => (min <= Number(item.price) && Number(item.price) <= max));
}

export const filterByType = (data, types) => {

  return data.filter(item => (types.includes(item.type)));
}

export const filterByStrings = (data, strings) => {

  return data.filter(item => (strings.includes(item.strings)));
}
