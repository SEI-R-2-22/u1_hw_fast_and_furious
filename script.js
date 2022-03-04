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
  document.getElementById('main-title').innerText = 'DOM'
  // Part 2
  document.body.style.backgroundColor = 'pink'
  // Part 3
  document.querySelectorAll('#favorite-things li')[5].remove()
  // Part 4
  const styleChange = document.querySelectorAll('.special-title')
  for (i = 0; i < styleChange.length; i++) {
    styleChange[i].style.fontSize = '2rem'
  }
  // Part 5
  document.querySelectorAll('#past-races li')[3].remove()
  // Part 6
  const myList = document.createElement('li')
  myList.innerText = 'Denver'
  document.querySelector('#past-races').appendChild(myList)
  // Part 7
  const myBlog = document.createElement('div')
  myBlog.classList.add('blog-post', 'purple', 'mine')
  document.querySelector('.main').appendChild(myBlog)
  const myIntro = document.createElement('h1')
  myIntro.innerText = 'Denver'
  document.querySelector('.mine').appendChild(myIntro)
  const myPara = document.createElement('p')
  myPara.innerText = 'Dom lost a race agaisnt meeee'
  document.querySelector('.mine').appendChild(myPara)
}
