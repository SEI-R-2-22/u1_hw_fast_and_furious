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
let title = document.querySelector('h1')
title.innerText = "DOM Toretto"

// console.log(title.innerText)


  // Part 2
let body = document.querySelector('body')
body.style.backgroundColor = 'pink'

//console.log(body)


  // Part 3
let favThings = document.querySelectorAll('li');
favThings[5].remove()

// console.log(favThings[5])


  // Part 4
  let special0 = document.querySelectorAll('div')[2];
  let special1 = document.querySelectorAll('div')[3];
  // let special1 = document.querySelectorAll('.special-title')[1].innerText;
  special0.style.fontSize = '2rem';
  special1.style.fontSize = '2rem';
  
// console.log(special1)


  // Part 5
  let list = document.querySelector('#past-races')
  let races = list.children
  races[3].remove();

  // console.log(races[3])


  // Part 6
  const newLoc = document.createElement('li')
  newLoc.innerText = "San Diego"
  let newRace = document.querySelector('#past-races').appendChild(newLoc)

  // console.log(newLoc)

  // Part 7
  const sanDiegoDiv = document.createElement('div')
  let sanDiegoH = document.createElement('h1')
  const sanDiegoP = document.createElement('p')

  sanDiegoDiv.setAttribute('class', 'blog-post purple')
  sanDiegoH.innerText = "San Diego"
  sanDiegoP.innerText = "I CRASHED MY CAR."

  let newSanDiegoDiv = document.querySelector('.main').appendChild(sanDiegoDiv)
  let newSanDiegoH = newSanDiegoDiv.appendChild(sanDiegoH)
  let newSanDiegoP = newSanDiegoH.appendChild(sanDiegoP)

  newSanDiegoP.style.fontSize = '1.5rem'
  newSanDiegoP.style.color = "black"

  // console.log(newSanDiego)

}
