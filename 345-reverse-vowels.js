/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    
    const aggregator = [];
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    const extractor = (s) => {

        let index = 0;

        for (const char of s) {
            if (charCheck(char)) {
                aggregator.push({char: char, index: index});
            }
            index++;
        }
    }

    const charCheck = (char) => {
        for (const letter of vowels) {
            if (char === letter) {
                return true; 
            } else {
                return false; 
            }
        }
    }

    const answerGen = (s) => {
        extractor(s); 
        let answer = s.split('');
        for (let i = aggregator.length(); i > 0; i--) {
            const {char, index} = aggregator; 
            answer[index] = char;
        }

        return answer.join('')
    }

    return answerGen(s);
};
