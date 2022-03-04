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
document.getElementById('main-title').innerText = "DOM Toretto's Homepage"

  // Part 2
document.body.style.backgroundColor = "black"
document.body.style.color = "white" //added this for readability

  // Part 3
let updateList = document.body.children[1].children[1].children[5]
updateList.remove()

  // Part 4
const titleChange = Array.from(document.getElementsByClassName('special-title'))

titleChange.forEach((title) => {
  title.style.fontSize = "2rem"
})

  // Part 5
let updateRaces = document.body.children[3].children[1].children[3]
updateRaces.remove()

  // Part 6
let addRace = document.createElement('li')
addRace.innerText = "Rio de Janeiro"
document.body.children[3].children[1].appendChild(addRace)

  // Part 7
let raceDiv = document.createElement('div')
raceDiv.className = "blog-post"
let raceTitle = document.createElement('h1')
raceTitle.innerText = "Rio de Janeiro"
let raceText = document.createElement('p')
raceText.innerText = "I SMASHED ANOTHER CAR WITH A VAULT THAT WAS ALSO ON MY CAR!"
document.body.children[2].appendChild(raceDiv)
raceDiv.style.backgroundColor = "rebeccapurple"
raceDiv.appendChild(raceTitle)
raceDiv.appendChild(raceText)
}