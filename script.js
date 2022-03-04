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
document.getElementById('main-title').innerText = 'Dom Toretto';

  // Part 2
document.body.style.backgroundColor = 'green';

  // Part 3
document.getElementById('favorite-things').lastElementChild.remove();

  // Part 4
const allSpecialTitles = document.querySelectorAll('.special-title');
for (i = 0; i < allSpecialTitles.length; i++) {
  allSpecialTitles[i].style.fontSize = '2rem';
}

  // Part 5
document.getElementById('past-races').querySelectorAll('li')[3].remove();

  // Part 6
const newPastRaceLi = document.createElement('li');
const newPastRaceContent = document.createTextNode('New York');
const newPastRaceCom = newPastRaceLi.appendChild(newPastRaceContent);
document.getElementById('past-races').appendChild(newPastRaceCom);

  // Part 7
// const newDiv = document.createElement('div');
// const setNewDivClass = document.createAttribute('class');
// setNewDivClass.value = 'blog-post';
// newDiv.setAttributeNode(setNewDivClass);
// newDiv

const newDiv = document.createElement('div');
newDiv.classList.add("blog-post")
newDiv.classList.add("purple")
console.log(newDiv)
document.getElementsByClassName('main')[0].appendChild(newDiv);

const newH1 = document.createElement('h1');
newH1.innerText = 'New York';
newDiv.appendChild(newH1);

const newP = document.createElement('p');
newP.innerText = 'I did things with a car because FAMILY.';
newDiv.appendChild(newP);






  
}
