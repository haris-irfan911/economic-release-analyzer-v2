# Economic Release Analyzer v2

## Project Overview

A JavaScript program that processes economic releases by calculating the difference between actual and forecast values. It validates input data, classifies economic surprises, and returns structured results without modifying the original dataset.

## Features

- Processes multiple economic releases.
- Calculates economic surprises.
- Classifies results as Above Forecast, Below Forecast or As Expected.
- Detects invalid and missing numerical values.
- Preserves the original dataset during processing.

## Technologies Used

- JavaScript
- Node.js
- Visual Studio Code

## How to Run

1. Ensure Node.js is installed.
2. Open the project folder in your terminal.
3. Run `node Index.js`.

## Test Results

| Test Case | Result |
|---|---|
| Valid input data | Passed |
| Invalid data type | Passed |
| Empty array | Passed |
| Missing property | Passed |
| Source data integrity | Passed |

## Known Limitations

- Floating-point precision affects decimal output.
- Economic data is manually defined.
- Validation does not detect NaN or Infinity.
- No live economic data integration.

## What I Learned

- Functions and return values.
- Arrays of objects and iteration.
- Conditional statements and variable scope.
- Data validation using logical operators.
- Debugging using terminal error messages.
- Preserving raw data during transformation.
- Testing edge cases.

## Future Improvements

- Improve numerical validation.
- Format decimal outputs.
- Integrate live economic data through an API.