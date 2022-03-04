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
document.querySelector('#main-title').innerHTML = 'DOM Toretto'
  // Part 2
document.body.style.backgroundColor = 'teal'
  // Part 3
 let favoriteThings = document.querySelector('#favorite-things').lastElementChild
    document.getElementById('favorite-things').removeChild(favoriteThings)
  // Part 4
  document.getElementById("quote-title").style.fontSize = "2em";

  document.getElementById("dom-adventures").style.fontSize = "2em";

  // Part 5
function noChicago() {
  let pastRaces = document.querySelector('#past-races').children
   for (let index = 0; index < pastRaces.length; index++) {
     let Races = pastRaces[index].innerHTML;
     
    
   }
   
 }
 noChicago()

  // Part 6
// let races = document.querySelector('#past-races').appendChild(li)
// console.log(noChicago)
function addRace() {
  var  races = document.getElementById('past-races');
  var addR = document.createElement('li');
  addR.appendChild(document.createTextNode("pikes Peak"));
  races.appendChild(addR);
}
addRace()
  // Part 7
function newBlog() {
let post = document.querySelector('.main');
let newPost = Object.assign(document.createElement('div'), { className: 'blog-post'});
let header = document.createElement('h1');
let para = document.createElement('p');
  post.appendChild(newPost); 
  newPost.style.backgroundColor = 'purple'
  header.innerHTML = 'Pikes peak';
  newPost.appendChild(header);
  para.innerHTML = " Most dangerouse race, along a cliff side ";
  header.appendChild(para);
  para.style.color = 'black'
}
newBlog()
}