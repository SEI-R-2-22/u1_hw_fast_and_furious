let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload = function(event) {

    // Random quote of the day generator
    const randomQuote = function() {
        document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
    };
    randomQuote();

    // Do all of your work inside the window.onload function (in other words, here!)

    // Part 1
    const partOne = function() {
        document.getElementById("#main-title").innerHTML = "Hey I'm Dom. Welcome!";
    }

    partOne();
    // Part 2
    const partTwo = function() {
        document.body.setAttribute("style", "background-color: green");
    }

    partTwo();
    // Part 3
    const partThree = function() {
        let favoriteThings = document.querySelector('#favorite-things').lastElementChild

        document.getElementById('favorite-things').removeChild(favoriteThings)
    }

    partThree();



    // Part 4

    document.getElementById("quote-title").style.fontSize = "2em";

    document.getElementById("dom-adventures").style.fontSize = "2em";

    // Part 5

    function rmChicago() {
        let oldRaces = document.querySelector(".sided-bar").children[1];
        oldRaces.children[3].remove("li");

    }

    rmChicago();


    // Part 6

    function partSix() {
        const races = document.getElementById('past-races');
        const addR = document.createElement('li');

        addR.appendChild(document.createTextNode("Sayreville"));
        races.appendChild(addR);
    }

    partSix();

    // Part 7

    function partSeven() {
        let newPost = document.createElement("div")

    }
}