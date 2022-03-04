let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
]

window.onload = function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`
  }
  randomQuote()

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  const newTitle = (document.getElementById('main-title').innerText =
    "Hey, I'm Dom Toretto!")

  // Part 2
  const bodyColor = (document.querySelector('body').style.backgroundColor =
    'whitesmoke')

  // Part 3
  document.querySelector('#favorite-things').childNodes[11].remove()

  // Part 4
  let titleFont = document.querySelectorAll('.special-title')
  for (let i = 0; i < titleFont.length; i++) {
    titleFont[i].style.fontSize = '2rem'
  }
  // Part 5
  document.getElementById('past-races').childNodes[7].remove()
  // Part 6
  let newCity = document.createElement('li')
  newCity.innerHTML = 'Oaxaca'
  document.getElementById('past-races').appendChild(newCity)

  // Part 7

  // new div
  // with a class of .blog-post
  // const blogPost = document.getElementById('hottubtimemachine')
  // blogPost.insertAdjacentHTML(
  //   'afterend',
  //   '<div><h1>Oaxaca</h1><p>DROVE THAT CAR RIGHT THROUGH THAT CITY</p></div.'
  // )

  let newDiv = document.createElement('div')
  newDiv.className = 'blog-post'
  document.getElementById('dom-adventures').appendChild(newDiv)

  let newHeader = document.createElement('h1')
  headText = document.innerHTML('Oaxaca')
  newHeader.appendChild(headText)

  newDiv.appendChild(newHeader)

  let newParagraph = document.createElement('p')
  parText = document.innerHTML('DROVE THAT CAR RIGHT THROUGH THAT CITY!')
  newParagraph.appendChild(parText)

  newHeader.appendChild(newParagraph)
}
