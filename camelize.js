// Translate border-left-width to borderLeftWidth
// Write the function camelize(str) that changes dash-separated
// words like "my-short-string" into camelCased "myShortString".

const str = "the-quick-brown-fox-jumps-over-the-lazy-dog";

// More concise method
function camelize(str) {
    // Convert a dash-separated string into camelCase
    return str
        .split("-") // Split the string into an array using "-" as the delimiter
        .map((word, index) =>
            index === 0
                ? word // Keep the first word as is
                : word[0].toUpperCase() + word.slice(1) // Capitalize the first letter of each subsequent word
        )
        .join(""); // Join all words together into a single camelCase string
}

console.log(camelize(str));

