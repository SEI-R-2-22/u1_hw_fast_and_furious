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
  const mainTitle = document.querySelector('#main-title')
  mainTitle.innerText = "Welcome to DOM's Homepage"

  // Part 2
  const body = document.querySelector('body')
  body.style.backgroundColor = 'gray'

  // Part 3
  const favList = document.querySelector('#favorite-things')
  favList.removeChild(favList.lastElementChild)
  // Part 4
  const specialTitle = document.querySelectorAll('.special-title')
  specialTitle.forEach((title) => {
    title.style.fontSize = '2rem'
  })
  // Part 5
  const pastRacesChicago = document.querySelectorAll('#past-races li')
  pastRacesChicago[3].remove()
  // Part 6
  const pastRacesList = document.querySelector('#past-races')
  const li = document.createElement('li')
  li.innerText = 'New York'
  pastRacesList.appendChild(li)
  // Part 7

  const domAdv = document.querySelector('.main')
  console.log(domAdv)
  const divNY = document.createElement('div')
  divNY.classList.add('blog-post', 'purple')
  const h1 = document.createElement('h1')
  h1.innerText = 'Race in NEW YORK!'
  const pNY = document.createElement('p')
  pNY.innerText = 'New york is the best city to be racing turtles.'
  domAdv.appendChild(divNY)
  divNY.appendChild(h1)
  divNY.appendChild(pNY)
}
