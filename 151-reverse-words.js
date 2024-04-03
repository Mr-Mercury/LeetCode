/**
 * @param {string} s
 * @return {string}
 */

// Logic - first, trim the string, then use regex to split the string, ignoring
// internal spaces. Afterwards, just join by popping the strings off the array 
// created by the string split. 

// This is less efficient than this other solution I found, which is iteratively building a new
// array.  I don't know why that is faster, I should figure it out. 
var reverseWords = function(s) {
    const strArray = s.trim().split(/\s+/);
    return strArray.reverse().join(' ');
};

console.log(reverseWords(' Wibble   Wobble Wubble    '));


// This iteratively checks to see if it hs encountered a space - if it does, 
// then the tempstr is set to blank.  If it's not, tempstr is assembled
// Because the final string won't be added unless there's a space, you have to 
// perform the tempstr unshift one more time to add the final string. 
// Held together with spit and gum lol 


var reverseWords2 = function (s) {
    const space = [];
    let tempStr = ''

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            if (tempStr !== '') space.unshift(tempStr)
            tempStr = ''
        } else {
            tempStr += s[i]
        }
    }

     if (tempStr !== '') space.unshift(tempStr)

    return space.join(' ')
};

console.log(reverseWords2('Wumble Bumble  BUMBLE  crumble   '))