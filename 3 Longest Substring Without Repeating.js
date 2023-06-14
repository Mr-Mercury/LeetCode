var lengthOfLongestSubstring = function(s) {
    // Have a start string position
    // Record position of start and add a sliding position at the next spot
    // Check each next position as you slide down
    // When you get a dupe, increment the start position by one and compare against the current max
    // Adjust max if necessary

    let startPos = 0;
    let subStr;
    let subChar; 
    let maxLength = 0;

    for (const char of s) {
        subStr = char;

        for (let i = startPos+1; i < s.length; i++) {
            subChar = s[i];

            console.log(subChar);

            if (subStr.includes(subChar)) {
                break;
            }

            subStr = subStr+subChar;

            console.log(subStr)
        }

        if (subStr.length > maxLength) maxLength = subStr.length;

        startPos++;
    }

    return maxLength;

};

const testCase = "pwwkew";

console.log(lengthOfLongestSubstring(testCase));
