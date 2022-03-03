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
  /* - DOM's personal website title is a bit wordy. 
  Write a JavaScript statement that selects the #main-title ID element. 
  Remember there are a couple of ways to query id. 
  Change the text of the title to something shorter.
  */
  const mainTitle = document.querySelector("#main-title");
  mainTitle.innerHTML = "DOM Toretto:<br />Too Fast. Too Furious.<br />All Diesel.";


  // Part 2
  // Select the body and change the background-color to a new color of your choice.
  const body = document.querySelector("body");
  body.style.background = "radial-gradient(circle at top right, rgba(233,191,0,1) 0%, rgba(233,0,71,1) 25%, rgba(2,0,36,1) 100%)";


  // Part 3
  // Select DOM's Favorite Things list and remove the last list item.
  const favThings = document.querySelector("#favorite-things");
  favThings.removeChild(favThings.lastElementChild);

  // Part 4
  //Select all .special-title class elements and change their font-size to 2rem. 
  //Remember you might have to iterate through the list of elements
  const specialTitles = document.querySelectorAll(".special-title");
  for (let i=0; i < specialTitles.length; i++) {
    specialTitles[i].style.fontSize = "2rem";
  }
    //Cleaner alternative:
  Array.from(specialTitles).map(e => e.style.fontSize = "2rem");

  // Part 5
  //Turns out DOM never raced in Chicago.
  //Access the Past Races list and remove Chicago.
  const pastRaces = document.querySelector("#past-races");
  
  // If you know that "Chicago" is the 4th child (index 3), then:
  //pastRaces.removeChild(pastRaces.children[3]);

    //Or, if you don't know the index of the node you want:
    //
    for (let i=0; i < pastRaces.children.length; i++) {
       if (pastRaces.children[i].innerText == "Chicago") {
         pastRaces.removeChild(pastRaces.children[i])
       } 
    }


  // Part 6
  //Let's add to DOM's Past Races list. 
  //Create a new <li> element, change the new <li> text 
  //to the name of a city, and append it to the Past Races list.
  const newCity = document.createElement("li");
  newCity.innerText = "Abington, PA";
  pastRaces.appendChild(newCity);


  // Part 7
  /* Create a new .blog-post corresponding to the new city 
  added in Part 6. You will have to create: 
    1. a new <div> with class of .blog-post, 
    2. a new <h1> with text, and 
    3. a new <p> with some text. 
  Make the new element consistent with the other posts. 
  Think about what order you want to create the elements, 
  and what order you want to append them in.
  */
  
  const main = document.querySelector(".main");
  const newPost = document.createElement("div");
  newPost.setAttribute("class", "blog-post purple");
    /* newPost.innerHTML = `
      <h1>Abington, PA</h1>
      <p>I DID DONUTS IN THE WAWA PARKING LOT!</p>`;
    */
  const newPostTitle = document.createElement("h1");
    newPostTitle.innerText = "Abington, PA"
  const newPostText = document.createElement("p");
    newPostText.innerText = "I DID DONUTS IN THE WAWA PARKING LOT!";
   newPost.appendChild(newPostTitle);
   newPost.appendChild(newPostText);
  
  console.log(main.children);
  main.appendChild(newPost);
}
