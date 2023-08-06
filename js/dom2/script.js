
const content = document.querySelector(".content");

// a <p> with red text that says “Hey I’m red!”

const p = document.createElement("p");
p.style.color = "red"
const text1 = document.createTextNode("Hey I’m red!");
p.appendChild(text1);
content.appendChild(p);

// an <h3> with blue text that says “I’m a blue h3!”

const h3 = document.createElement("h3");
h3.style.color = "blue";
const text2 = document.createTextNode("I’m a blue h3!");
h3.appendChild(text2);
content.appendChild(h3);

// a <div> with a black border and pink background color with the following elements inside of it:

const div = document.createElement("div");
div.style.border = "solid black 1px"
div.style.backgroundColor = "pink"
div.classList.add("bingus")
content.appendChild(div);

//// another <h1> that says “I’m in a div”

const bingus = document.querySelector(".bingus");

const h1 = document.createElement("h1");
const text3 = document.createTextNode("I’m in a div");
h1.appendChild(text3);
bingus.appendChild(h1);

//// a <p> that says “ME TOO!”

const p2 = document.createElement("p");
const text4 = document.createTextNode("ME TOO!");
p2.appendChild(text4);
bingus.appendChild(p2);

//// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.


