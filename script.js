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
  document.querySelector('#main-title').innerText = 'Welcome, family!'
  // Part 2
  document.body.style.background = 'orange'
  // Part 3
  const favoriteThings = document
    .querySelector('#favorite-things')
    .querySelectorAll('li')
  favoriteThings[favoriteThings.length - 1].innerText = ''
  // Part 4
  const specialTitles = document.querySelectorAll('.special-title')
  for (let i = 0; i < specialTitles.length; i++) {
    specialTitles[i].style.fontSize = '2rem'
  }
  // Part 5
  const pastRaces = document.querySelector('#past-races').querySelectorAll('li')
  for (let i = 0; i < pastRaces.length; i++) {
    if (pastRaces[i].innerText === 'Chicago') {
      pastRaces[i].remove()
    }
  }
  // Part 6
  const newRace = document.createElement('li')
  newRace.innerText = 'Minneapolis'
  document.querySelector('#past-races').append(newRace)
  // Part 7
  const newBlog = document.createElement('div')
  newBlog.classList.add('blog-post')
  newBlog.classList.add('purple')
  const minnTitle = document.createElement('h1')
  minnTitle.innerText = 'Minneapolis'
  const minnDescrip = document.createElement('p')
  minnDescrip.innerText = 'I DROVE THROUGH THE MISSISSIPPI RIVER'
  newBlog.append(minnTitle)
  newBlog.append(minnDescrip)
  document.querySelector('.main').append(newBlog)
}
