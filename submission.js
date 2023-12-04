const findSum = function(array) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

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
    const length = str.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (str[i] !== str[length - 1 - i]) {
      return false;
    }
  }

  return true;
}
};

const largestPair = function(array) {
    let maxProduct = arr[0] * arr[1];

  for (let i = 1; i < arr.length - 1; i++) {
    const currentProduct = arr[i] * arr[i + 1];
    maxProduct = Math.max(maxProduct, currentProduct);
  }

  return maxProduct;
}
};

const removeParenth = function(str) {
  function removeParenth(str) {
  let stringWithoutParenth = '';
  let insideParenth = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      insideParenth = true;
    } else if (str[i] === ')') {
      insideParenth = false;
    } else if (!insideParenth) {
      stringWithoutParenth += str[i];
    }
  }

  return stringWithoutParenth;
}
};

const scoreScrabble = function(str) {
  function scoreScrabble(word) {
  const letterScore = {
    'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'l': 1, 'n': 1, 'r': 1, 's': 1, 't': 1,
    'd': 2, 'g': 2,
    'b': 3, 'c': 3, 'm': 3, 'p': 3,
    'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4,
    'k': 5,
    'j': 8, 'x': 8,
    'q': 10, 'z': 10
  };

  let score = 0;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    score += letterScore[letter] || 0;
  }

  return score;
}
};
