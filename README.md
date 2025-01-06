# Unexpected Null Handling in JavaScript Addition Function

This repository demonstrates a common, yet subtle bug in JavaScript related to how null values are handled within a simple addition function.

## The Bug

The `foo` function in `bug.js` is designed to add two numbers. However, it returns 0 if either input is null. This behavior might be unintended if null signifies a different meaning or requires specific error handling.  The current implementation silently returns 0 which might mask underlying issues.

## The Solution

The `bugSolution.js` file offers an improved version. It explicitly checks for null values and throws an error if either is null, providing clearer feedback and preventing potential unexpected results.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in a code editor.
3. Run each file using a JavaScript environment (like Node.js). Observe the differences in output.

This example highlights the importance of careful null handling in JavaScript to maintain code robustness and prevent silent failures.