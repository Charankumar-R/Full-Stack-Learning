// This file covers error handling techniques, including try-catch blocks and throwing errors.

function riskyFunction() {
    throw new Error("This is a risky function!");
}

try {
    riskyFunction();
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("Execution completed.");
}

function validateInput(input) {
    if (!input) {
        throw new Error("Input cannot be empty.");
    }
    return "Valid input: " + input;
}

try {
    console.log(validateInput("Hello"));
    console.log(validateInput(""));
} catch (error) {
    console.error("Validation error:", error.message);
}