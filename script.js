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
  document.querySelector('#main-title').innerText = "Welcome to Dom Toretto Homepage!";
  // Part 2
  document.querySelector("body").style.backgroundColor = "#359";
  // Part 3
  document.querySelector("#favorite-things").children[5].remove();
  // Part 4
  const nodeList = document.querySelectorAll(".special-title");
  nodeList[0].style = "font-size: 2rem;";
  nodeList[1].style = "font-size: 2rem;";
  // Part 5
  document.querySelector("#past-races").children[3].remove();
  // Part 6

  const newCity = document.createElement("li");
  newCity.innerText = "Denver";
  document.querySelector("#past-races").appendChild(newCity);
  // Part 7

  const newDiv = document.createElement("div");
  newDiv.setAttribute("class","blog-post purple");
  const newH1 = document.createElement("h1");
  newH1.innerText = "Denver";
  const newP = document.createElement("p");
  newP.innerText = "I ran past 2 red lights and drifted around an old lady. RIP."

  newDiv.appendChild(newH1);
  newDiv.appendChild(newP);
  document.querySelector(".main").appendChild(newDiv);
}
