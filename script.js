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
  const title = document.getElementById('main-title')
  // Part 2
  const body = document.querySelector('body')
  body.style.backgroundColor = 'Gray'
  // Part 3
  const favorite = document.getElementById('favorite-things')
  favorite.removeChild(favorite.lastElementChild)
  // Part 4
  const spec_title = document.querySelectorAll('.special-title')
  spec_title.forEach((element) => {
    element.style.fontSize = '2rem'
  })
  // Part 5
  const past_race_list = document.querySelector('#past-races')
  past_race_list.removeChild(past_race_list.childNodes[7])
  // Part 6
  const city_element = document.createElement('li')
  city_element.innerText = 'Boston'
  past_race_list.append(city_element)
  // Part 7
  const main = document.querySelector('.main')
  const blog_post = document.createElement('div')
  const blog_h1 = document.createElement('h1')
  const blog_p = document.createElement('p')

  blog_post.setAttribute('class', 'blog-post purple')
  blog_h1.innerText = 'Boston'
  blog_p.innerText = "Please don't race in Boston"

  blog_post.append(blog_h1)
  blog_post.append(blog_p)
  main.append(blog_post)
}
