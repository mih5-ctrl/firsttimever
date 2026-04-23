const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const quotes = [
  "Keep going. Small steps count.",
  "Consistency beats intensity.",
  "Done is better than perfect.",
  "Clarity comes from action.",
  "Start before you feel ready."
];

const randomIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIndex];

rl.question("What is your name? ", function(name) {
  const now = new Date();

  console.log("\nHello " + name);
  console.log("Current time is: " + now.toLocaleTimeString());
  console.log("Quote: " + randomQuote);

  rl.close();
});