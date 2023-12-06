const findSum = function(array) {
let total = 0;
for( let num of array){
    total += num;
}
return total;
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

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

const largestPair = function(array) {
    array.sort((a, b) => b - a);

    return array[0] + array[1];

};

const removeParenth = function(str) {
 let count = 0;
  let output = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      count++;
    } else if (str[i] === ")") {
      count--;
     
    }
    if (count === 0) {
      output += str[i];
    }
  }
  return output;

};

const scoreScrabble = function(str) {
  const letterValues = {
    'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'l': 1, 'n': 1, 'r': 1, 's': 1, 't': 1,
    'd': 2, 'g': 2,
    'b': 3, 'c': 3, 'm': 3, 'p': 3,
    'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4,
    'k': 5,
    'j': 8, 'x': 8,
    'q': 10, 'z': 10
  };

  let score = 0;
  for (const letter of str) {
    score += letterValues[letter] || 0;
  }

  return score;

};
