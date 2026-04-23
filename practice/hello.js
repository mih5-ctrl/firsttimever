const name = "Mihir";
const now = new Date();

const quotes = [
  "Keep going. Small steps count.",
  "Consistency beats intensity.",
  "Done is better than perfect.",
  "Clarity comes from action.",
  "Start before you feel ready."
];

const randomIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIndex];

console.log("Hello " + name);
console.log("Current time is: " + now.toLocaleTimeString());
console.log("Quote: " + randomQuote);