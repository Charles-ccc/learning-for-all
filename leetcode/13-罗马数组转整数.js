/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const arr = s.split('');
  let result = 0;
  for (let i = 0; i < arr.length; ) {
    if (arr[i] === 'I' && arr[i+1] === 'V') {
      result += 4;
      i = i + 2;
    } else if(arr[i] === 'I' && arr[i+1] === 'X') {
      result += 9;
      i = i + 2;
    } else if(arr[i] === 'X' && arr[i+1] === 'L') {
      result += 40;
      i = i + 2;
    } else if(arr[i] === 'X' && arr[i+1] === 'C') {
      result += 90;
      i = i + 2;
    } else if(arr[i] === 'C' && arr[i+1] === 'D') {
      result += 400
      i = i + 2;
    } else if(arr[i] === 'C' && arr[i+1] === 'M') {
      result += 900;
      i = i + 2;
    } else if (arr[i] === 'I') {
      result += 1;
      i = i + 1;
    } else if (arr[i] === 'V') {
      result += 5;
      i = i + 1;
    } else if (arr[i] === 'X') {
      result += 10;
      i = i + 1;
    } else if (arr[i] === 'L') {
      result += 50;
      i = i + 1;
    } else if (arr[i] === 'C') {
      result += 100;
      i = i + 1;
    } else if (arr[i] === 'D') {
      result += 500;
      i = i + 1;
    } else if (arr[i] === 'M') {
      result += 1000;
      i = i + 1;
    }
  }

  return result;
};

console.log(romanToInt('III'))
