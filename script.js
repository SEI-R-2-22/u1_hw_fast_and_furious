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
  let mainTitle = document.querySelector('#main-title')
  mainTitle.innerHTML = 'Dom Toretto'
  // Part 2
  let body = document.querySelector('body')
  body.style.backgroundColor = 'skyblue'
  // Part 3
  let list = document.querySelector('#favorite-things')
  list.removeChild(list.lastElementChild)
  // Part 4
  let specialTitle = document.querySelectorAll('.special-title')
  specialTitle.forEach((el) => (el.style.fontSize = '2rem'))
  // Part 5
  let chicago = document.querySelector('#past-races')
  console.log(chicago)
  chicago.removeChild(chicago.children[3])
  // Part 6
  let newLocation = document.createElement('li')
  newLocation.innerHTML = 'Vietnam'
  chicago.appendChild(newLocation)
  // Part 7
  let blogPosts = document.querySelector('.main')
  let div = document.createElement('div')
  div.classList.add('blog-post', 'purple')
  let h1 = document.createElement('h1')
  let p = document.createElement('p')
  h1.innerHTML = 'Vietnam'
  p.innerHTML = "I TOOK CANH'S MOTORCYCLE TO EAT PHO!"
  div.appendChild(h1)
  div.appendChild(p)
  blogPosts.appendChild(div)
}
