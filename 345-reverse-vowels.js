/**
 * @param {string} s
 * @return {string}
 */

/* Logic: First, we build an array comprised of all of the vowels - next,
we create a new string where we replace the vowels with the collected 
vowels from the vowel array in REVERSE order.  
*/
var reverseVowels = function(s) {
    const vowels = s.match(/[aeiouAEIOU]/g) || [];
    return s.replace(/[aeiouAEIOU]/g, () => vowels.pop());
};

console.log(reverseVowels('Alright Mofo'));