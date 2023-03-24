var isAnagram = function(s, t) {
  const sDict = {};
  let char;

  while (s.length) {
    char = s.slice(0,1);
    s = s.slice(1);
    if (char in sDict) {
        sDict[char] ++;
    } else {sDict[char] = 1};
  } 

  while (t.length) {
    char = t.slice(0,1);
    t = t.slice(1);
    if (char in sDict) {
        if (sDict[char] === 0){
            return false;
        } else {sDict[char] --}
    } else {return false}
  }
  return true;
};