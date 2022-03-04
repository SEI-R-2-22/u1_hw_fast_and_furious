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
  document.querySelector('#main-title').textContent = `Welcome to my Website, you READY?`
  
  // Part 2
  const body  = document.querySelector('body')
  body.style.color = 'red'
  // Part 3
  document.querySelectorAll('.side-bar li')[5].remove()
  // Part 4
  document.querySelector('.special-title').style.fontsize = '2rem'
  // Part 5s
  document.querySelector(`#past-races`).querySelectorAll('li')[3].remove()
  // Part 6
  let city = document.createElement('li')
  city.innerText = 'laredo'
  document.querySelector('#past-races').appendChild(city)
  // Part 7
 //let eloyBlog = document.createElement('div').setAttribute('.blog-post')
 //document.querySelector('.blog-post')
 
}
