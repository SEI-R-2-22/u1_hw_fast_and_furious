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
  document.getElementById("main-title").innerHTML = "Something Shorter"

  // Part 2
document.body.setAttribute("style", "background-color: red");
  // Part 3
document.getElementById("favorite-things").children[5].innerHTML = "";
  // Part 4
document.querySelectorAll('.special-title').forEach((specialTitle) => 
  (specialTitle.getElementsByClassName.fontsize = '2rem')
)
  // Part 5
document.getElementById("past-races").children[3].remove()
  // Part 6
let raceCity = document.createElement("li");
raceCity.innerHTML = "Atlanta"
document.getElementById("past-races").appendChild(raceCity)
  // Part 7
  let newPost = document.createElement("div");
  let main1 = document.querySelector(".main");

  newPost.setAttribute("class", "blog-post");
  

  let newHeader = document.createElement("h1")
  newHeader.innerHTML = "Atlanta";

  let newPara = document.createElement("p");
  newPara.innerHTML = "I raced in Atlanta around the Big Chicken!";

  newPost.appendChild(newHeader);
  newPost.appendChild(newPara);
  main1.appendChild(newPost);






}
