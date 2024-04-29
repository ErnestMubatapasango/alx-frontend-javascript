function groceriesList() {
    // Create a new Map with the groceries items
    const groceries = new Map([
        ['apple', 5],
        ['banana', 3],
        ['orange', 2],
        ['milk', 1],
        ['bread', 2],
        ['eggs', 6],
        ['cheese', 1]
    ]);

    return groceries;
}

console.log(groceriesList());