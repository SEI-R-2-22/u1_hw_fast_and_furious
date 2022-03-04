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
  document.getElementById("main-title").innerText = 'FAMILY';
  // Part 2
  document.body.style.backgroundColor = 'red' ; 
  // Part 3
  document.querySelectorAll('li')[5].remove()
  // Part 4
  let specialTitle = document.querySelectorAll('.special-title').forEach((specialTitle) => (specialTitle.style.fontsize = '2rem'))
  // Part 5
  document.querySelectorAll('li')[8].remove()
  // Part 6
  let newLocation = document.createElement('li')
  newLocation.textContent='SanAntonio'
  document.querySelector('#past-races').appendChild(newLocation);
  // Part 7
let div = document.createElement('div');
div.className = 'blog-post New City';
let main = document.querySelector('.main');
main.insertBefore(div, main.children[4]);

let title = document.createElement('h1');
title.innerHTML = 'San Antonio';
div.appendChild(title)

let text = document.createElement('p');
text.innerHTML = 'Watch me race around The Alamo';
div.appendChild(text)


//worked with Ryan, Angie
}

