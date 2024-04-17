let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let cards = [
    "https://cdn.glitch.global/3d4a0785-548d-460a-b883-a7ecac7af1ee/1.jpg?v=1712939018912",
    "https://cdn.glitch.global/e3cf4c67-5ae2-43dd-ba20-b663ec82fab7/2.jpg?v=1713196868035",
    "https://cdn.glitch.global/e3cf4c67-5ae2-43dd-ba20-b663ec82fab7/3.jpg?v=1713196875823",
    "https://cdn.glitch.global/e3cf4c67-5ae2-43dd-ba20-b663ec82fab7/4.jpg?v=1713196879536",
    "https://cdn.glitch.global/e3cf4c67-5ae2-43dd-ba20-b663ec82fab7/5.jpg?v=1713196882859",
    "https://cdn.glitch.global/e3cf4c67-5ae2-43dd-ba20-b663ec82fab7/6.jpg?v=1713196887698",
    "https://cdn.glitch.global/e3cf4c67-5ae2-43dd-ba20-b663ec82fab7/7.jpg?v=1713196892325",
    "https://cdn.glitch.global/e3cf4c67-5ae2-43dd-ba20-b663ec82fab7/8.jpg?v=1713197110973",


];

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    buttonShow.style.color = "silver";
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" +
            card +
            ")' class='card'>");
    }
};

// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("Deck has " + cards.length + " cards.");
    for (let card of cards) {
        let i = 0;
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend",
                "<div style='background-image: url(" + card + ")' class='card' id='"+ i + "'>");
i = i +1;
        }
    }
    buttonDouble.style.color = "silver";
    console.log("Now the deck has " + cards.length + " cards.");

};

// Button to Shuffle Cards
buttonShuffle.onclick = function() {
    shuffle(cards);
    game.innerHTML = "";
    console.log("I'm shuffling the cards!");
    buttonShuffle.style.color = "silver";
    let i = 0;
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" +
            card +
            ")' id='" + i + "' class='card'>");
        i = i + 1;
    }

};


/* ---------------------------------------------------
DON'T CHANGE THE Fisher-Yates SHUFFLE FUNCTION BELOW!
--------------------------------------------------- */
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
// Button to Flip All Cards
buttonFlip.onclick = function() {
    let i = 0;
    for (card of cards) {
        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;
    }
    buttonFlip.style.color = "silver";
};

// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;


});