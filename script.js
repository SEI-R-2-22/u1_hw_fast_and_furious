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
  document.querySelector('#main-title').innerText = "Dom's Homepage"
  // Part 2
  document.querySelector('body').style.background = '#add8e6'
  // Part 3
  document.querySelectorAll('#favorite-things li')[5].remove()
  // Part 4
  const newFontSize = document.querySelectorAll('.special-title')
  for (i = 0; i < newFontSize.length; i++) {
    newFontSize[i].style.fontSize = '2rem'
  }
  // Part 5
  document.querySelectorAll('#past-races li')[3].remove()
  // Part 6
  const newCity = document.createElement('li')
  newCity.innerText = 'Atlanta'
  const newLocation = document.querySelector('#past-races')
  newLocation.appendChild(newCity)
  // Part 7
  const newBlog = document.createElement('div')
  newBlog.classList.add('blog-post', 'purple', 'atlanta')
  document.querySelector('.main').appendChild(newBlog)

  const newHeader = document.createElement('h1')
  newHeader.innerText = 'Atlanta'
  document.querySelector('.atlanta').appendChild(newHeader)

  const newPara = document.createElement('p')
  newPara.innerText = 'I SWERVED THROUGH THE BUSIEST AIRPORT IN THE WORLD'
  document.querySelector('.atlanta').appendChild(newPara)
}
