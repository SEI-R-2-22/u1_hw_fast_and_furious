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
  document.querySelector('#main-title').innerText = "This is Groot's homepage now."
  // Part 2
  document.body.style.backgroundColor = "green";
  // Part 3
  let fav_list = document.querySelectorAll("#favorite-things li")
  fav_list[fav_list.length-1].remove();
  // Part 4
  // document.querySelectorAll('.special-title').style.font-size = '2rem';
  document.querySelectorAll('.special-title').forEach(ele => ele.style.fontSize = '2rem')
  // Part 5
  document.querySelector('#past-races').childNodes.forEach(ele => {
    ele.innerText == "Chicago" ? ele.remove() : false;})
  // Part 6
    let nCity = document.createElement('li');
    nCity.innerText = "New York";
    document.querySelector('#past-races').appendChild(nCity);
  // Part 7
  let nBlogPost = document.createElement('div');
    nBlogPost.classList.add("blog-post");
    nBlogPost.classList.add("purple");

    nBlogH1 = document.createElement('h1');
    nBlogH1.innerText = "New York";
    nBlogP = document.createElement('p');
    nBlogP.innerText = "I RACED A PIZZA AND LOST";
    nBlogPost.appendChild(nBlogH1)
    nBlogPost.appendChild(nBlogP)
   
  document.querySelector('.main').appendChild(nBlogPost);
}
