/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let ans = ''
    let temp = ''
    let arr = ['a','e','i','o','u','A','E','I','O','U']
    let sr = s.split('')
    let i = 0
    let j = sr.length
    while ( i < j ) {
        while(arr.indexOf(sr[i]) == -1) {
            i++
        }
        while(arr.indexOf(sr[j]) == -1) {
            j--
        }
        temp = sr[i]
        sr[i] = sr[j]
        sr[j] = temp

        i++
        j--
    }
    ans = sr.join('')
    return ans
};