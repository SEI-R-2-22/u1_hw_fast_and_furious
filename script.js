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
document.querySelector("#main-title").innerText = "Hi, I'm Dom" 
  // Part 2
document.querySelector("body").style.backgroundColor = "#357C3C"
  // Part 3
const faveList = document.querySelector("#favorite-things")
faveList.removeChild(faveList.lastElementChild)
  // Part 4
const specialTitle = document.querySelectorAll(".special-title")
specialTitle.forEach((title) => title.style.fontSize = "2rem")
  // Part 5
const pastRaces = document.querySelector("#past-races")
const raceList = document.querySelectorAll("#past-races li")
for (let i = 0; i < raceList.length; i++) {
  if (raceList[i].innerText === "Chicago") {
    pastRaces.removeChild(raceList[i])
  }
}
  // Part 6
const newRace = document.createElement("li")
newRace.innerText = "Orgrimmar"
pastRaces.appendChild(newRace)
  // Part 7
const newDiv = document.createElement("div")
const newh1 = document.createElement("h1")
const newP = document.createElement("p")
const lastPost = document.querySelector(".blog-post")

newh1.innerText = "Origimmar"
newP.innerText = "FOR THE HORDE!"
newDiv.classList.add("blog-post", "purple")
newDiv.appendChild(newh1)
newDiv.appendChild(newP)

lastPost.insertAdjacentElement("beforebegin", newDiv)
console.log(newDiv)
}



