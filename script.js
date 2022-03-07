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
const partOne = function() {
  document.querySelector('#main-title').innerHTML = "Welcome to DOM's Playground"
};
partOne();
  // Part 2
const partTwo = function() {
  document.querySelector('body').style.backgroundColor = 'blue'
};
partTwo();
  // Part 3
const partThree = function() {
  let stare = document.querySelector(".side-bar").children[1];
  stare.children[5].remove('li')
};
partThree();
  // Part 4
const partFour = function() {
  let textChange = document.querySelector('.special-title');
  let titleChange = document.getElementById('dom-adventures');
  let edit =  textChange.style.fontSize = '32px'; // 2rem should be equivilant to 32 px
  return titleChange.style.fontSize = '32px';
};
partFour();
  // Part 5
const partFive = function() {
  let chic = document.querySelector(".sided-bar").children[1];
  chic.children[3].remove("li")
};
partFive();
  // Part 6
const partSix = function() {
  let newElement = document.createElement('li');
  newElement.innerHTML = 'Paris';
  document.querySelector(".sided-bar").children[1].appendChild(newElement)
};
partSix();
  // Part 7
const partSeven = function() {
  let newPost = document.createElement("div")
  newPost.className = "blog-post purple last"
  document.querySelector(".main").appendChild(newPost)

  let para = document.createElement("p")
  let head = document.createElement("h1")
  head.innerHTML = "Paris"
  para.innerHTML = "Something special happened in Paris!"
  document.querySelector(".last").appendChild(head)
  document.querySelector(".last").appendChild(para)
};
partSeven();
}
