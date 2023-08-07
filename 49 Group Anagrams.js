var groupAnagrams = function(strs) {
    let map = {}

    strs.forEach(el => {
        let s = el.split('')
        s.sort();
        s = s.join('');
        
        if(!map[s]) {map[s] = []};
        map[s].push(el);
    })

    return Object.values(map)
};