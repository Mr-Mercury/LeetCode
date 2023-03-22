var isValid = function(s) {
    
    let letter = '';
    let left = 0;
    const len = s.length;
    let closing = [];

    while (s.length) {
        letter = s.slice(0,1);
        s = s.slice(1);

        switch (letter) {
            case '{': 
                left++; 
                closing.push('}');
                break;
            case '(':
                left++;
                closing.push(')');
                break;
            case '[': 
                left++; 
                closing.push(']');
                break;          
            case '}':
                if (left <= 0 || closing[closing.length-1] !== '}') return false;
                left--; 
                closing.pop()
                break;
            case ')':
                if (left <= 0 || closing[closing.length-1] !== ')') return false;
                left--; 
                closing.pop();
                break;
            case ']':
                if (left <= 0 || closing[closing.length-1] !== ']') return false;
                left--;
                closing.pop();
                break;
        }
    }

    if (left > 0) {
        return false
    } else return true; 
};
sv = "{[]}";

console.log(isValid(sv))