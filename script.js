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
const mainTitle = document.getElementById('#main-title')
mainTitle.innerText = 'Welcome To My Home Page'

// Part 2
document.querySelector('body').style.color = 'dodgerblue'
// Part 3
document.querySelector('.favorite-things').querySelectorAll('li')[5].remove()
// Part 4
document.querySelectorAll('.special-title').forEach((value) => value.style.fontSize = '2rem' )
// Part 5
document.querySelector('#past-races').querySelectorAll('li')[3].remove()
// Part 6
let city = document.createElement('li')
city.innerText = 'Houston'
document.querySelector('#past-races').appendChild(city)
// Part 7
let newBlog = document.createElement('div')
newBlog.setAttribute('class', 'blog-post purple')
let h1 = document.createElement('h1')
h1.innerText = 'Houston'
let newParagraph = document.createElement('p')
newParagraph.innerText = ' I said a ten second car not a ten minute car!'

newBlog.append(h1)
newBlog.append(newParagraph)
document.querySelector('.main'),append(newBlog)

}
