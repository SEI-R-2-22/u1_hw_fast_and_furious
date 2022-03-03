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
  const mainTitle = document.getElementById('main-title')
  mainTitle.innerText = "Dom Toretto's Page (Family)"
  // Part 2
  document.body.style.backgroundColor = 'blanchedalmond'
  // Part 3
  document.querySelectorAll('li')[5].remove()
  // Part 4
  const specialTitle = document.getElementsByClassName('special-title')
  for (let i = 0; i < specialTitle.length; i++) {
    specialTitle[i].style.fontSize = '2rem'
  }
  // wish i could get the forEach method to work...

  // specialTitle.forEach((element) => {
  //   element.style.fontSize = '2rem'
  // })

  // Part 5
  document.querySelectorAll('li')[8].remove()
  // Part 6
  const newListItem = document.createElement('li')
  newListItem.innerText = 'New York'
  document.getElementById('past-races').appendChild(newListItem)
  // Part 7
  const newBlogPost = document.createElement('div')
  newBlogPost.className = 'blog-post purple'
  document.getElementsByClassName('main')[0].appendChild(newBlogPost)
  const newHeader = document.createElement('h1')
  newHeader.innerText = 'New York'
  newBlogPost.appendChild(newHeader)
  const blogP = document.createElement('p')
  blogP.innerText = 'I RACED THE ROCK AND CUT MY ELBOW'
  newBlogPost.appendChild(blogP)
}
