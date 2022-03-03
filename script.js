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
  document.getElementById('main-title').innerText = "DOM Toretto's Homepage"

  // Part 2
  document.body.style.backgroundColor = 'lavender'

  // Part 3
  document.querySelectorAll('#favorite-things li')[5].remove()
  // Part 4
  document
    .querySelectorAll('.special-title')
    .forEach((specialTitle) => (specialTitle.style.fontSize = '2rem'))
  // Part 5
  document.getElementById('past-races').children[3].remove()
  // Part 6
  const pastRacesUl = document.getElementById('past-races')
  const nycLi = document.createElement('li')
  nycLi.innerText = 'New York City'
  pastRacesUl.appendChild(nycLi)

  // Part 7
  const mainContent = document.querySelector('.main')
  const blogPost = document.createElement('div')
  blogPost.classList.add('blog-post', 'purple')
  const h1 = document.createElement('h1')
  h1.innerText = 'New York City'
  blogPost.appendChild(h1)
  const paragraph = document.createElement('p')
  paragraph.innerText = 'THE BEST CITY IN THE WORLD!'
  blogPost.appendChild(paragraph)
  mainContent.appendChild(blogPost)
}
