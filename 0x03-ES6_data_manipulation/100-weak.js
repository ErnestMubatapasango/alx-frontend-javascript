// Define a WeakMap to track the number of queries for each endpoint
const weakMap = new WeakMap();

// Define the queryAPI function
function queryAPI(endpoint) {
    // Get the count of queries for the current endpoint from the WeakMap
    let count = weakMap.get(endpoint) || 0;

    // Increment the count
    count++;

    // Update the count in the WeakMap
    weakMap.set(endpoint, count);

    // Check if the count is greater than or equal to 5
    if (count >= 5) {
        throw new Error("Endpoint load is high");
    }

    // Perform the API query
    // For demonstration purposes, let's just log the endpoint name
    console.log(`Querying API for endpoint: ${endpoint.name}`);
}

// Export the weakMap and queryAPI function
export { weakMap, queryAPI };
