let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload = function (event) {

  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]
      }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  document.getElementById('main-title').innerText = "Hi! My name is dom"
  'Hi! My name is dom'
  // Part 2
  document.body.style.background = 'red'
  'red'
  // Part 3
  document.getElementById('favorite-things').children[5].remove()
  // Part 4
  document.querySelectorAll('.special-title').forEach(race => race.style.fontSize = '2rem')
  // Part 5
  document.querySelector('#past-races').childNodes.forEach(race => {
    race.innerText == 'Chicago' ? ele.remove() : false;
  })

  // Part 6
  let city = document.createElement('li');
  city.innerText = 'New York";
  document.querySelector('#past-races').appendChild(city);
  // Part 7
  let addBlogPost = document.createElement('div');
  addBlogPost.classList.add('blog-post');
  addBlogPost.classList.add('purple');

  blogPH = document.createElement('h1');
  blogPH.innerText = "New York";
  blogText = document.createElement('p');
  blogText.innerText = 'Too Fast. Too Furious.';
  addBlogPost.appendChild(blogPH);
  addBlogPost.appendChild(blogText);
  document.querySelector('.main').appendChild(addBlogPost)

}

