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

  document.getElementById('main-title').innerHTML = 'DOM Toretto';

  // Part 2

  document.body.style.backgroundColor = '#80d107';

  // Part 3

  let favThings = document.getElementById('favorite-things');
  favThings.removeChild(favThings.lastElementChild);

  // Part 4

  document.getElementById('quote-title').style.fontSize = '2rem';
  document.getElementById('dom-adventures').style.fontSize = '2rem';

  // Part 5

  let pastRaces = document.getElementById('past-races').childNodes;
  pastRaces.forEach((race, idx) => {
    if(race.innerText === 'Chicago'){
      document.getElementById('past-races').removeChild(race)
    }
})

  // Part 6

  const li = document.createElement('li');
  const cleveland = document.createTextNode('Cleveland');
  li.appendChild(cleveland);
  document.getElementById('past-races').appendChild(li);


  // Part 7

  const div = document.createElement('div');
  document.querySelector('.main').appendChild(div);
  div.classList.add('blog-post');
  let h1 = document.createElement('H1');
  h1.appendChild(cleveland);
  div.appendChild(h1)
  let p = document.createElement('p');
  const clevelandBlog = document.createTextNode('I DROVE A CAR IN CLEVELAND!');
  p.appendChild(clevelandBlog);
  h1.appendChild(p);
  div.style.backgroundColor = "rebeccapurple";
  p.style.fontSize = 'x-large';
  p.style.color = 'black'

}
