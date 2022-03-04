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
const mainTitle = document.querySelector('#main-title');
  mainTitle.innerHTML = '<h1>DOM TORETTO</h1>';
  // Part 2
document.body.style.backgroundColor = 'orange';
  // Part 3
const list = document.getElementById('favorite-things');
  list.removeChild(list.lastElementChild);
  // Part 4
specialTitle.innerHTML = '.special-title';
  specialTitle.style.fontSize = '25px';
  // Part 5

  // Part 6

  // Part 7

}
