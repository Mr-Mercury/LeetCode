// We start with declaring a pointer for the number insertion and a second
// var that accumulates the repeating character length.  
// We loop through the array, then when we detect a new character, we 
// set the char at the pointer to the number.  
// We make some internal logic for if the number is greater than 10, 
// having it insert based on the number of duplicates. 
// We determine the number of indices required based on the number of 
// numbers (e.g. 1000 - the length is 4, so we need 4 indices)

var compress = function(chars) {
    
    let insertPointer = 0; 
    let repeatLength = 1;
    let finished = false;

    for (let i = 0; i < chars.length; i++) {
        insertPointer = i+1;

        for (let z = i+1; z < chars.length; z++) {
            if (chars[z] === chars[i]) {
                repeatLength++;
                if (z === chars.length-1) {finished = true} 
            } else {break};
        }

        if (repeatLength > 1) {
            let digitArray = String(repeatLength).split('').map(String);
            i += digitArray.length;

            for (let b = 0; b < digitArray.length; b++) {
                chars[insertPointer] = digitArray[b];
                insertPointer++;
            }

            repeatLength = 1; 
        }

        if (finished === true) {return i+1}
    }
};



// Solution using while (remember to do while when you need to alter the 
// variable used for iteration ) 

var compress = function(chars) {
    let insertPointer = 0; // Tracks where to insert compressed chars
    let i = 0; // For iterating over chars
    
    while (i < chars.length) {
        let char = chars[i];
        let repeatLength = 0;
        
        // Count the length of the current sequence of repeated chars
        while (i < chars.length && chars[i] === char) {
            i++;
            repeatLength++;
        }
        
        // Insert the char, then increase the pointer val - this will replace
        // the first char, as char = chars[i] has not yet changed. 
        chars[insertPointer++] = char; 
        if (repeatLength > 1) {
            // Convert repeatLength to string and insert each digit
            let repeatLengthStr = repeatLength.toString();
            for (let j = 0; j < repeatLengthStr.length; j++) {
                chars[insertPointer++] = repeatLengthStr[j];
            }
        }
    }

    // Return the new "length" of the compressed array, represented by insertPointer
    return insertPointer;
};


// Faster solution 
var compress = function(chars) {
    // handle edge case 
    if(!chars.length) return 0;

    // declaring an index, a count of numbers, and a current letter 
    let curr = chars[0];
    let cnt = 0;
    let idx = 0;

    // Iterate through the chars - because it tracks count and index, you 
    // don't actually need to alter the i.  My mistake initially was depending
    // On i for the index, when instead I should have created an independent
    // pointer.  
     for(let i = 0; i <= chars.length; ++i) {
         if(curr === chars[i]) {
             cnt++;
         } else {
             chars[idx] = curr;
             if(cnt > 1) {
                 const ch = cnt.toString();
                 for(let j = 0; j < ch.length; ++j) chars[++idx] = ch[j];
             }
         idx++;
         curr = chars[i];
         cnt = 1;
         }
     }
     return idx;
    };