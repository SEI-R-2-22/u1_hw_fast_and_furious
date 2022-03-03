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
  document.getElementById('main-title').innerText = "Yo, I'm DOM... .com";
  
  // Part 2
  document.body.style.backgroundColor = '#EEE553';
  
  // Part 3
  // Solution inspired by stack overflow post:
  // https://stackoverflow.com/questions/44937553/remove-last-item-of-a-list-using-javascript:

  let faveThings = document.getElementById('favorite-things');
  let listItems = faveThings.getElementsByTagName('li');

  let lastItem = listItems[listItems.length-1];
  
  
  faveThings.removeChild(lastItem);
  
  // Part 4
  document.querySelector('.special-title').style.fontSize = "2rem";

  // Part 5
  // Inspiration for solution from https://stackoverflow.com/questions/5465953/how-can-i-delete-the-n-th-element-in-a-list-with-javascsript
  // Of note, I'm not sure why childNodes[7] works fro removing Chicago.
  let pastRaces = document.getElementById('past-races');
  
  pastRaces.removeChild(pastRaces.childNodes[7]);


  // Part 6
  let newRace = document.createElement('li');
  newRace.innerText = 'Minneapolis';
  pastRaces.appendChild(newRace);

  // Part 7

  
  let newBlog = document.createElement('div');
  document.body.querySelector('.main').appendChild(newBlog);

  let blogH1 = document.createElement('h1');
  blogH1.innerText = "Minneapolis";
  newBlog.appendChild(blogH1);

  let blogP = document.createElement('p');
  blogP.innerText = "I jumped the Mississippi and shook off the bad guys with a 360 McTwist!"
  newBlog.appendChild(blogP);

  newBlog.className = ".blog-post purple";


}
