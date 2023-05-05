function containsDuplicate (nums) {
    const numSet = new Set();
    for (num of nums) {
        if (numSet.has(num)){return true}
        numSet.add(num);
    }
    return false; 
}