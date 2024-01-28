let books = ['English For to day','Habluder Jonno Programming','Hate Kolome JS','Are We Safe','Val lage na','Self Motivation','ICS ', ]

let hasJavaScriptBook = books.includes("JavaScript: The Good Parts");

if (hasJavaScriptBook) {
  console.log("The array contains a JavaScript book.");
} else {
  console.log("The array does not contain a JavaScript book.");
}