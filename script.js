let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  document.querySelector(`#main-title`).innerText = `DOM Toretto's Homepage`
  // Part 2
  document.querySelector(`body`).style.backgroundColor = `#F2C9E1`
  // Part 3
  const last = document.querySelector(`#favorite-things`).lastElementChild
  document.querySelector(`#favorite-things`).removeChild(last)

  // Part 4
  let special = document.querySelectorAll(`.special-title`) 
  special.forEach((elem) => {
    elem.style.fontSize = `2rem`
  })
  // Part 5
  const chi = document.querySelectorAll(`#past-races li`)[3]
  document.querySelector(`#past-races`).removeChild(chi)
  // Part 6
  const location = document.createElement(`li`)
  location.innerText = `Hawaii`
  document.querySelector(`#past-races`).appendChild(location)
  // Part 7
  const blogdiv = document.createElement(`div`)
  const blogh1 = document.createElement(`h1`)
  blogh1.innerText = `Hawaii`
  const blogp = document.createElement(`p`)
  blogp.innerText = `I blew up a helicopter!`
  document.querySelector(`.main`).appendChild(blogdiv)
  blogdiv.setAttribute(`class`, `blog-post purple`)
  blogdiv.appendChild(blogh1)
  blogdiv.appendChild(blogp)

}
