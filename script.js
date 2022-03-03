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
  document.querySelector('#main-title').innerHTML = "DOM's Homepage"
  // Part 2
  document.querySelector('body').style.background = '#e3d27b'
  // Part 3
  let favesStare = document.querySelector('#favorite-things')
  favesStare.children[5].remove()
  // Part 4
  let specialTitles = document.querySelectorAll('.special-title')
  for (let i = 0; i < specialTitles.length; i++) {
    document.getElementsByClassName('special-title')[i].style.fontSize = '2rem'
  }
  // Part 5
  document.querySelector('#past-races').children[3].remove()
  // Part 6

  const newRace = document.createElement('li')
  document.querySelector('#past-races').appendChild(newRace)
  document.querySelector('#past-races').children[5].innerHTML = 'Boston'

  // Part 7

  document.querySelectorAll('.blog-post')[4].insertAdjacentHTML(
    'afterend',
    `<div class="blog-post purple">
    <h1> Boston </h1>
    <p>JASON MOMOA CAST AS VILLAIN IN FAST & FURIOUS 10!!!</p>
    </div>`
  )
}
