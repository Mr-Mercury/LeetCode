var isValid = function(s) {
    
    let letter = '';
    let curly = 0;
    let paren = 0;
    let brack = 0;
    const len = s.length;
    let closing = [];

    while (s.length) {
        letter = s.slice(0,1);
        s = s.slice(1);

        switch (letter) {
            case '{': 
                curly++; 
                closing.push('}');
                break;
            case '(':
                paren++;
                closing.push(')');
                break;
            case '[': 
                brack++; 
                closing.push(']');
                break;          
            case '}':
                if (curly <= 0 || closing[closing.length-1] !== '}') return false;
                curly--; 
                closing.pop()
                break;
            case ')':
                if (paren <= 0 || closing[closing.length-1] !== ')') return false;
                paren--; 
                closing.pop();
                break;
            case ']':
                if (brack <= 0 || closing[closing.length-1] !== ']') return false;
                brack--;
                closing.pop();
                break;
        }
    }

    if (brack > 0 || curly > 0 || paren > 0) {
        return false
    } else return true; 
};
sv = "{[]}";

console.log(isValid(sv))