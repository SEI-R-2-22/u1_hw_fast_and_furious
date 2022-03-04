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
  
  document.querySelector(`#main-title`).innerHTML = `Welcome to DOM's family` 
  
  // Part 2

  document.body.style.backgroundColor = `#606863`

  // Part 3

  const list = document.querySelector("#favorite-things")
  list.removeChild(list.lastElementChild)

  // Part 4

  const specialTitle = document.querySelectorAll('.special-title')
  specialTitle.forEach((item) => {
    item.style.fontSize = '2rem'
  })

  // Part 5

  const pastRaces = document.querySelector(`#past-races`)
  pastRaces.removeChild(pastRaces.children[3])
    
  // Part 6

  const newLocation = document.createElement(`li`)
  newLocation.innerHTML = 'New York City'
  document.querySelector(`#past-races`).appendChild(newLocation)

  // Part 7

  const section = document.querySelector(`.main`)
  const blogPost = document.createElement(`div`)
  blogPost.setAttribute(`class`,`blog-post purple`)
  
  const blogTitle = document.createElement(`h1`)
  blogTitle.innerText = `New York City`
  
  const blogContent = document.createElement(`p`)
  blogContent.innerText.toUpperCase(`I got access to all the fancy cars in a pier garage`)

  
  blogPost.append(blogTitle)
  blogPost.append(blogContent)
  section.append(blogPost)
 
}
