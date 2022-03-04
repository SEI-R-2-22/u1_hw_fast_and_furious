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
  const mainTitle = document.querySelector('#main-title')
    mainTitle.innerText = `I'm Dom Toretto, Welcome to My Family`

  // Part 2
  document.body.style.backgroundColor = "red"

  // Part 3
  let fav_list = document.querySelectorAll("#favorite-things li")
  fav_list[fav_list.length-1].remove();

  // Part 4
  document.querySelector('.special-title').style.fontSize = '2rem'

  // Part 5
  document.querySelector('#past-races').querySelectorAll('li')[3].remove()

  // Part 6
  document.querySelector('#past-races').append('New York City')

  // Part 7
  let newBlog = document.createElement('div')
  newBlog.setAttribute('class', 'blog-post purple')
  let newh1 = document.createElement('h1')
  newh1.innerText = 'New York City'
  let newP = document.createElement('p')
  newP.innerText = 'THE CITY THAT NEVER SLEEPS!'
  
  newBlog.appendChild(newh1)
  newBlog.append(newP)
  document.querySelector('.main').append(newBlog)

}
