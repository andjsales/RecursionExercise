// calculate the product of an array of numbers
function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

// return the length of the longest word in an array of words
function longest(words) {
  if (words.length === 0) // if no word
    return 0;
  return Math.max(words[0].length, longest(words.slice(1)));
}

// return a string with every other letter
function everyOther(str) {
  if (str === '') return '';
  return str[0] + everyOther(str.substring(2));
}


// checks whether a string is a palindrome or not
function isPalindrome(str) {
  if (str.length <= 1) return true;
  return str[0] === str[str.length - 1] && isPalindrome(str.substring(1, str.length - 1));
}


// return the index of val in arr (or -1 if val is not present)
function findIndex(array, target, index = 0) {
  if (index >= array.length) return -1;
  if (array[index] === target) return index;
  return findIndex(array, target, index + 1);
}


// return a copy of a string, but in reverse 
function revString(str) {
  if (str === '') return '';
  return revString(str.substring(1)) + str[0];
}

// given an object, return an array of all of the string values 
function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }
  return strings;
}

// given a sorted array of numbers, and a value, return the index of that value (or -1 if val is not present)
function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1; // Base case: value not found
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === val) {
    return mid; // Found the value
  } else if (arr[mid] < val) {
    return binarySearch(arr, val, mid + 1, right); // Search in the right half
  } else {
    return binarySearch(arr, val, left, mid - 1); // Search in the left half
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
