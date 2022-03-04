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

  document.querySelector('#main-title').innerHTML = "Welcome to Dom Toretto's homepage."

  // Part 2

  document.querySelector('body').style.backgroundColor = 'red';

  // Part 3

  document.querySelector('#favorite-things li:last-child').remove();

  // Part 4

  let specialList = document.querySelectorAll('.special-title');
  let index;
  for (index = 0; index < specialList.length; index++) {
      specialList[index].style.fontSize = "2rem";
  }

  // Part 5

  document.querySelector('#past-races').querySelectorAll('li')[3].remove();

  // Part 6

  let newList = document.createElement('li');
  newList.textContent = "Havana";
  document.querySelector('#past-races').appendChild(newList);

  // Part 7
  // Line 60 and 63 was inspired by the code in https://stackoverflow.com/questions/48789918/append-an-element-inside-a-specific-divs-element-using-javascript
  let firstDiv = document.createElement('div');
  firstDiv.className = "blog-post purple";
  let currentMain = document.querySelector(".main");
  currentMain.insertBefore(firstDiv, currentMain.children[4]);
  let firstH1 = document.createElement('h1');
  firstH1.textContent = "Havana";
  document.querySelector('.main').getElementsByClassName("blog-post")[0].appendChild(firstH1);
  let firstP = document.createElement('p');
  firstP.textContent = "I WON A RACE AGAINST A DEBT COLLECTOR!";
  document.querySelector('.main').getElementsByClassName("blog-post")[0].appendChild(firstP);
}
