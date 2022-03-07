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
  let mainTitle = document.querySelector('#main-title')
  mainTitle.innerHTML = 'Dom FnF'
  // Part 2
  document.querySelector('body').style.color ="green"
  // Part 3
  document.querySelectorAll('#favorite-things li')[5].remove()
  // Part 4
  document.querySelectorAll('.special-title').forEach((value) => value.style.fontSize ="2rem")
  // Part 5
  document.querySelectorAll('#past-races li')[3].remove()
  // Part 6
  let newLocation = document.createElement('li')
  newLocation.innerHTML = 'Vietnam'
  chicago.appendChild(newLocation)
  
}
