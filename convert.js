const fs = require('fs');

// Read your Excel file
const file = fs.readFileSync('DTR TEMPLATE.xlsx');

// Convert to Base64
const base64 = file.toString('base64');

// Output the Base64 string
console.log(base64);
