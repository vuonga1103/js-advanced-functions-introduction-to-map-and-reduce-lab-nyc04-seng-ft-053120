const mapToNegativize = (sourceArray) => {
  const result = [];
  sourceArray.forEach((el) => result.push(-el));
  return result;
};

const mapToNoChange = (sourceArray) => [...sourceArray];

const mapToDouble = (sourceArray) => {
  const result = [];
  sourceArray.forEach((el) => result.push(el * 2));
  return result;
};

const mapToSquare = (sourceArray) => {
  const result = [];
  sourceArray.forEach((el) => result.push(el ** 2));
  return result;
};

const reduceToTotal = (sourceArray, startingPoint = 0) => {
  let total = startingPoint;
  sourceArray.forEach((el) => (total += el));
  return total;
};

const reduceToAllTrue = (sourceArray) => {
  let result = true;
  sourceArray.forEach((el) => {
    if (!el) {
      result = false;
    }
  });
  return result;
};

const reduceToAnyTrue = (sourceArray) => {
  let result = false;
  sourceArray.forEach((el) => {
    if (el) {
      result = true;
    }
  });
  return result;
};
