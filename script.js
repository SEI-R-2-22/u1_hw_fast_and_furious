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
  let theTitle = document.querySelector('#main-title')
  theTitle.innerText = "Dom the Bomb"
  // Part 2
  let theBody = document.querySelector('body')
  theBody.style.backgroundColor = 'rgba(188,188,188,1)'
  // Part 3
  let listFavorit = document.querySelectorAll("#favorite-things li")
  listFavorit[listFavorit.length-1].remove();
  // Part 4
  let specialTitle = document.querySelectorAll('.special-title')
  specialTitle.forEach((specialTitle) => {specialTitle.style.fontSize = '2rem'});
  // Part 5
  document.querySelector('#past-races').childNodes[7].remove()
  // Part 6
  document.querySelector('#past-races').append('Argentina')
  //Part 7

  let main = document.querySelectorAll(".main")
  let newDiv = document.createElement('div')
  let banana = document.createElement('h1')
  let p = document.createElement('p')
  


  newDiv.setAttribute('class', 'blog-post purple')
  banana.innerHTML= "Argentina"
  p.innerHTML = "I DRIFTED around a cow🐮 while drinking mates🧉"
  newDiv.appendChild(banana)
  newDiv.appendChild(p)
  main[0].appendChild(newDiv)


  
  

 
  
}
