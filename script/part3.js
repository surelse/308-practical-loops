let data =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let rows = data.split("\n"); // Split the data into rows
let headers = rows[0].split(","); // Extract the headers from the first row
let numberOfColumns = headers.length; // Number of columns

console.log(numberOfColumns);

// Initialize the two-dimensional array with headers as the first row
let dataArr = [
  headers,
  rows[1].split(","),
  rows[2].split(","),
  rows[3].split(","),
];

console.log(dataArr);