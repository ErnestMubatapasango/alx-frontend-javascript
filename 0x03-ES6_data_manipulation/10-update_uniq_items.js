function updateUniqueItems(groceries) {
    // Check if the argument is a map
    if (!(groceries instanceof Map)) {
        throw new Error("Cannot process");
    }

    // Iterate over each entry in the map
    for (const [item, quantity] of groceries.entries()) {
        // If the quantity is 1, update it to 100
        if (quantity === 1) {
            groceries.set(item, 100);
        }
    }

    return groceries;
}

// Example usage:
const groceries = new Map([
    ['apple', 1],
    ['banana', 2],
    ['orange', 1]
]);

try {
    const updatedGroceries = updateUniqueItems(groceries);
    console.log(updatedGroceries);
} catch (error) {
    console.error(error.message);
}
