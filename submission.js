const findSum = function(array) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array of numbers');
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') {
      throw new Error('Array must contain only numbers');
    }
    sum += array[i];
  }
  return sum;
};

const findFrequency = function(array) {
    if (arr.length === 0) {
    return { most: "", least: "" };
  }

  const frequency = {};
  arr.forEach(item => {
    frequency[item] = (frequency[item] || 0) + 1;
  });

  let mostFrequent, leastFrequent;
  let maxFrequency = -1;
  let minFrequency = Number.MAX_SAFE_INTEGER;

  for (const item in frequency) {
    if (frequency[item] > maxFrequency) {
      mostFrequent = item;
      maxFrequency = frequency[item];
    }

    if (frequency[item] < minFrequency) {
      leastFrequent = item;
      minFrequency = frequency[item];
    }
  }

  return { most: mostFrequent, least: leastFrequent };
};

const isPalindrome = function(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

const largestPair = function(array) {
  let largestNumber = array[0] * array[1];

  for (let i = 1; i < array.length - 1; i++) {
    const currentNumber = array[i] * array[i + 1];
    if (currentNumber > largestNumber) {
      largestNumber = currentNumber;
    }
  }

  return largestNumber;

};

const removeParenth = function(str) {
  if (typeof str !== 'string') {
    throw new Error('');
  }

  let openParenth = -1;
  let closeParenth = -1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      openParenth = i;
    } else if (str[i] === ')') {
      closeParenth = i;
      break;
    }
  }

  if (openParenth === -1 || closeParenth === -1) {
    throw new Error('');
  }

  const stringWithoutParenth = str.slice(0, openParenth) + str.slice(closeParenth + 1);
  return stringWithoutParenth;

};

const scoreScrabble = function(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  const letterPoints = {
    'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'l': 1, 'n': 1, 'r': 1, 's': 1, 't': 1,
    'd': 2, 'g': 2,
    'b': 3, 'c': 3, 'm': 3, 'p': 3,
    'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4,
    'k': 5,
    'j': 8, 'x': 8,
    'q': 10, 'z': 10
  };

 
  let score = 0;
  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    if (letterPoints.hasOwnProperty(currentLetter)) {
      score += letterPoints[currentLetter];
    }
  }

  return score;

};
