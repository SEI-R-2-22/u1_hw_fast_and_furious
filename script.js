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
  const title = document.getElementById('main-title')
  title.innerText = "DOM Toretto's Homepage"

  // Part 2
  const bodycolor = document.querySelector('body')
  bodycolor.style.backgroundColor = 'green';

  // Part 3
  const lastitem = document.getElementById('favorite-things').children[5]
  lastitem.remove()

  // Part 4
  const fontChange = document.querySelectorAll('.special-title')
  fontChange.forEach((node) => {
    node.style.fontSize = '2rem';
});

  // Part 5
  const chicago = document.getElementById('past-races').children[3]
  chicago.remove()

  // Part 6
  const tallahassee = document.getElementById('past-races')
  tallahassee.append('Tallahassee')
  

  // Part 7
let lastbox = document.getElementById("dom-adventures")
console.log(lastbox)
lastbox.insertAdjacentHTML('afterend', '<div class="blog-post purple"><h1>Tallahassee</h1><p>I MET TREVOR!</p></div>')
}
