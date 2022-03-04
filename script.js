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
  document.getElementById(`main-title`).innerText = 'DOM Toretto'
  // Part 2
  document.querySelector('body').style.backgroundColor = `rgb(133, 213, 242)`
  // Part 3
  let lastIndex = document.getElementById(`favorite-things`).querySelectorAll('li').length-1
  document.getElementById(`favorite-things`).querySelectorAll('li')[lastIndex].remove()
  // Part 4
  document.querySelectorAll('.special-title').forEach(value => value.style.fontSize = `2rem`)
  // Part 5
  // Hardcod remove Chicago
  // document.getElementById(`past-races`).querySelectorAll(`li`)[3].remove()

  // Dynamic Approach to remove Chicago
  let arr = document.getElementById(`past-races`).querySelectorAll(`li`)
  arr.forEach((value, index) => { 
      if(value.innerText == 'Chicago'){
          arr[index].parentNode.removeChild(arr[index])
      }
  })
  // Part 6
  document.getElementById(`past-races`).append(document.createElement('li').innerText = 'Durham')
  // Part 7
  let newBlog = document.createElement('div')
  newBlog.setAttribute('class', 'blog-post purple')
  let newh1 = document.createElement('h1')
  newh1.innerText = 'Durham'
  let newP = document.createElement('p')
  newP.innerText = 'RACING DOWN THE AMERICAN TOBACCO CAMPUS'
  
  newBlog.append(newh1)
  newBlog.append(newP)
  document.querySelector(`.main`).append(newBlog)
}
