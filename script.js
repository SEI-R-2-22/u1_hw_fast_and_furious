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
 document.querySelector('#main-title').innerText = "DOM Toretto's Page"
 // Part 2
document.body.style.backgroundColor = 'green';
 // Part 3
document.querySelector('#favorite-things').children[5].remove()
 // Part 4
const elem = document.querySelectorAll('.special-title')
for(let i = 0; i <= elem.length; i++){
 elem[i].style.fontSize = '2em';
}
 // Part 5
const elema = document.querySelector('#past-races').children[3]
elema.style.display = 'none';
 

 // Part 6
const elemb = document.createElement('li')
elemb.innerText = 'Miami'
document.querySelector('#past-races').appendChild(elemb)
 // Part 7
const newDiv = document.createElement('div')
const newClass = document.createElement('.blog-post')
const newH = document.createElement('h1')
newH.style.innerText = 'The Beach'
const newP = document.createElement('p')
newClass.style.innerText = 'The sun is shining'
document.body.appendChild(newDiv)
document.querySelector(newDiv).appendChild(newClass)
document.querySelector(newClass).appendChild(newH)
document.querySelector(newH).appendChild(newP)

}
