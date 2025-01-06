function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.');
  }
  return a + b; 
}

console.log(foo(1, 2)); // Output: 3
try {
  console.log(foo(null, 1)); // Throws an error
} catch (e) {
  console.error(e); // Handles the error
}
try {
  console.log(foo(1, null)); // Throws an error
} catch (e) {
  console.error(e); // Handles the error
}
try {
  console.log(foo(null, null)); // Throws an error
} catch (e) {
  console.error(e); // Handles the error
} 