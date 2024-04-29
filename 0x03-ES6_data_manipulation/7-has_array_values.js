function hasValuesFromArray(set, array) {
    // Check if all elements in the array exist within the set
    return array.every(element => set.has(element));
}

// Example usage:
const set = new Set([1, 2, 3, 4, 5]);
const array = [2, 4];
console.log(hasValuesFromArray(set, array)); // Output: true
