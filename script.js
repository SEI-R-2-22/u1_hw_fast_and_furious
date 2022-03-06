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
  document.getElementById('main-title').innerHTML = "With DOM you're FAMILY";

  // Part 2
  // const background = document.querySelector('body');
  //   background.style.backgroundColor = 'orange'

  function changeBackgroundColor(){
    document.querySelector('body').style.backgroundColor = 'orange'
  } changeBackgroundColor() 
  
  //// ^^ Practicing writing functions ^^

  // Part 3
let newFavList = document.querySelectorAll("#favorite-things li")
newFavList[newFavList.length-1].remove();

  // Part 4
    let textSize = document.querySelectorAll('.special-title');
      for (let i=0; i < textSize.length; i++){
          textSize[i].style.fontSize = '2em'
      }


  // Part 5

      function noChicago() {
        let pastRace = document.getElementById('past-races');
        pastRace.removeChild(pastRace.childNodes[3])
      } 
      noChicago()



    // let raceList = document.getElementById("past-races").children
    //   for (let i = 0; i < raceList.lenght; i++) {
    //       if (raceList[i].innerText === 'Chicago'){
    //       document.getElementById('past-races').removeChild(raceList[i])
    //       }
    //     }          /////// FAILED FOR LOOP //////////
  
  // Part 6
  const parentList = document.getElementById('past-races')

  let addToList = document.createElement('li')
  addToList.textContent = 'Brooklyn'

  parentList.appendChild(addToList)



  // Part 7

let newDiv = document.createElement('div')
      newDiv.setAttribute('class', 'blog-post purple')
let newH1 = document.createElement('h1')
      newH1.innerText = 'Brooklyn'
let newP = document.createElement('p')
     newP.innerText = 'BROOKLYN STOOD UP!' 


newDiv.append(newH1)
newDiv.append(newP)
document.querySelector(`.main`).append(newDiv)


// div.className = 'blog-post purple'

// let h1 = document.createElement('h1')
// div.appendChild(h1)
// h1.textContent = 'Brooklyn'

// let p = document.createElement('p')
// div.appendChild(p)
// p.textContent = 'BROOKLYN STOOD UP'



}
