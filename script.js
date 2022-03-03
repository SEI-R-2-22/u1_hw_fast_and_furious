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

  const titleText = document.querySelector('#main-title')
  titleText.innerText = "DOM's Homepage"

  // Part 2

  const pageBody = document.querySelector('body')
  pageBody.style.backgroundColor = '#ddddff'

  // Part 3

  const favThings = document.querySelector('#favorite-things')
  favThings.removeChild(favThings.lastElementChild)

  // Part 4

  const specialTitles = document.querySelectorAll('.special-title')
  for (let i = 0; i < specialTitles.length; i++) {
    specialTitles[i].style.fontSize = '2rem'
  }

  // Part 5

  const pastRaces = document.querySelector('#past-races')
  pastRaces.removeChild(pastRaces.children[3])
  // Part 6

  const newListItem = document.createElement('li')
  const textOfNewListItem = document.createTextNode('Paris')
  newListItem.appendChild(textOfNewListItem)
  pastRaces.appendChild(newListItem)

  // Part 7

  const newBlogPost = document.createElement('div')
  newBlogPost.setAttribute('class', 'blog-post purple')

  const newPostHeading = document.createElement('h1')
  const textOfNewPostHeading = document.createTextNode('Paris')
  newPostHeading.appendChild(textOfNewPostHeading)
  newBlogPost.appendChild(newPostHeading)

  const newPostText = document.createElement('p')
  const textOfnewPostText = document.createTextNode(
    'I JUMPED OVER THE EIFFEL TOWER WITH MY CAR!'
  )
  newPostText.appendChild(textOfnewPostText)
  newBlogPost.appendChild(newPostText)

  const mainSection = document.querySelector('.main')
  mainSection.appendChild(newBlogPost)
}
