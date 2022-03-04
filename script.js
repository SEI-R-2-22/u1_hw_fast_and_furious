let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  const mainTitle = function() {
    document.querySelector(#main-title).textContent = "Welcome to DOM Toretto's homepage!"
  }
  mainTitle()

  // Part 2
const newBackground = function change(color) {
  document.querySelector(body).style.backgroundColor = color
} 
newBackground(blue)

  // Part 3

  const list = document.getElementById('favorite-things')
  list.removeChild(list.firstElementChild)

  // Part 4
const changeTitleSize = function() {
  document.getElementsByClassName("special-title")
  for(i = 0; i < title.length; i++)
  title.style.fontSize = "2em"
}
  // Part 5
  const cityList = document.getElementById("past-races")
  cityList.removeChild(list.firstElementChild)

  // Part 6
const pastRacesList = document.getElementById("past-races")
let newRace = document.createElement('li')
newRace.textContent = "New York"
pastRacesList.append(newRace)

  // Part 7
const addToNy = document.getElementById("past-races")
  let div = ("<div> .blog-post </div>");
  past-races.append(div)
  let h1 = ("New York")
  past-races.append(h1)
  let p = ("I RACED DOWN TIMES SQUARE")
  past-races.append(p)
}
