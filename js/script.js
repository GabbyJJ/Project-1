/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
var quotes = [
  {
    quote:
      "Children really brighten up a household. They never turn the lights off.",
    source: "Ralph Bus",
    tag: "Inspiring",
    color: "red",
  },
  {
    quote: "Appreciate those early influences and what  they've done for you.",
    source: "Davis",
    tag: "Motivational",
    color: "blue",
  },
  {
    quote: "Make the decision, make another. Remake one past, you cannot.",
    source: "Yoda",
    citation: "Star Wars",
    tag: "Empowering",
    color: "pink",
  },
  {
    quote:
      "Be honest in your feelings, for they are the surest conduit to knowledge.",
    source: "Anoon Bondara",
    year: 1997,
    tag: "Insightful",
    color: "purple",
  },
  {
    quote: "Reading without reflecting is like eating without digesting.",
    source: "Edmund Burke",
    color: "green",
  },
];
/***
 * `getRandomQuote` function
 * Gets a random number. Returns a random quote using the random number.
 ***/
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * `printQuote` function
 * Getting random quote. Structing the HTML string. Also performs conditional checks.
 * Places the HTML string on the screen and changes background color.
 ***/
function printQuote() {
  var randomQuote = getRandomQuote();
  var HTML = `<p class="quote"> ${randomQuote.quote} </p>
<p class="source"> ${randomQuote.source} `;
  if (randomQuote.citation) {
    HTML += `<span class="citation"> ${randomQuote.citation} </span>`;
  }
  if (randomQuote.year) {
    HTML += `<span class="year"> ${randomQuote.year} </span>`;
  }
  if (randomQuote.tag) {
    HTML += `<span class="year"> ${randomQuote.tag} </span>`;
  }

  HTML += "</p>";
  document.getElementById("quote-box").innerHTML = HTML;
  // Got information from https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
  document.body.style.backgroundColor = randomQuote.color;
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
/**
 * Refreshes quote every ten seconds.
 */

setInterval(printQuote, 10000);
