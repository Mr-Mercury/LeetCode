var lastStoneWeight = function(stones) {
    const stonesCopy = [...stones]; 

    while (stonesCopy.length > 1) {
        stonesCopy.sort((a, b) => a-b);
        console.log(stonesCopy);
        const rightStone = stonesCopy.pop();
        const leftStone = stonesCopy.pop();
        const newStone = rightStone - leftStone; 

        if (newStone > 0) {
            stonesCopy.push(newStone);
        }
    }
    if (stonesCopy.length === 0) {return 0} 

    return stonesCopy[0];
};
