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
let mainTitle = document.querySelector('#main-title')
mainTitle.innerText='Welcome, Family'
  // Part 2

//way 1
let body = document.querySelector('body')
body.style.backgroundColor= "red";

//way 2
document.body.style.backgroundColor = "cyan";

  // Part 3
  let fav_list = document.querySelectorAll("#favorite-things li")
  fav_list[fav_list.length-1].remove();
  // Part 4
document.querySelectorAll('.special-title').forEach(value => value.style.fontSize='2em')
// let specTitle = document.querySelectorAll(".special-title")
// specTitle[0].style.fontSize='2em'
// specTitle[1].style.fontSize='2em'
  // Part 5
// document.querySelector('#past-races').querySelectorall('li').remove([3])
let race_list = document.querySelectorAll("#past-races li")
race_list[race_list.length-3].remove();
  // Part 6
document.querySelector('#past-races').append('Las Vegas')
  // Part 7
let newBlog = document.createElement('div')
newBlog.setAttribute('class', 'blog-post purple')
let newH1 = document.createElement('h1')
newH1.innerText='LAS VEGAS'
let newP = document.createElement('p')
newP.innerText='GOT IN TROUBLE IN LAS VEGAS'

newBlog.appendChild(newH1)
newBlog.append(newP)
document.querySelector('.main').append(newBlog)
}
