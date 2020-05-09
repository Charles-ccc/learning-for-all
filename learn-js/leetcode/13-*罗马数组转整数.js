/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function(s) {
  let romanArr = []
  let result = 0
  romanArr['I'] = 1
  romanArr['V'] = 5
  romanArr['X'] = 10
  romanArr['L'] = 50
  romanArr['C'] = 100
  romanArr['D'] = 500
  romanArr['M'] = 1000

  for (let i=0; i<s.length; i++) {
    console.log(!romanArr[s[i]])
    if (!romanArr[s[i + 1]]) {
      result += romanArr[s[i]]
      break
    }
  }
  console.log('result', result)
};

romanToInt('CLVIII')
